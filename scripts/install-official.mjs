import { readFileSync, existsSync, mkdirSync } from "fs";
import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HF = "npx --yes hyperframes@0.7.33";

function installedBlock(name) {
  return existsSync(join(root, "vendor/hyperframes", `${name}.html`));
}

function installedComponent(name) {
  return existsSync(join(root, "vendor/hyperframes/components", `${name}.html`));
}

function add(type, name) {
  console.log(`Adding ${type}: ${name}`);
  execSync(`${HF} add ${name} --dir . --no-clipboard`, {
    cwd: root,
    stdio: "inherit",
  });
}

function readJson(path) {
  let raw = readFileSync(path, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  return JSON.parse(raw);
}

const blocks = readJson(join(root, "catalog-blocks.json"));
const missingBlocks = blocks.filter((b) => !installedBlock(b.name));
console.log(`Blocks: ${blocks.length} total, ${missingBlocks.length} missing`);

mkdirSync(join(root, "vendor/hyperframes/components"), { recursive: true });

for (const b of missingBlocks) {
  try {
    add("block", b.name);
  } catch (e) {
    console.error(`FAILED block ${b.name}`);
  }
}

let components = [];
const compPath = join(root, "catalog-components.json");
if (existsSync(compPath)) {
  components = readJson(compPath);
  const missingComps = components.filter((c) => !installedComponent(c.name));
  console.log(`Components: ${components.length} total, ${missingComps.length} missing`);
  for (const c of missingComps) {
    try {
      add("component", c.name);
    } catch (e) {
      console.error(`FAILED component ${c.name}`);
    }
  }
}

console.log("Install complete.");
