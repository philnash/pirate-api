import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import { version } from "../mod.ts";

async function run() {
  await emptyDir("./npm");

  await build({
    entryPoints: ["./mod.ts"],
    outDir: "./npm",
    shims: {
      undici: true,
    },
    typeCheck: true,
    test: false,
    package: {
      name: "pirate-api",
      version,
      description:
        "A simple way to translate from English to Pirate or generate random pirate insults",
      keywords: ["pirate", "api", "translation"],
      homepage: "https://github.com/philnash/pirate-api",
      bugs: {
        url: "https://github.com/philnash/pirate-api/issues",
      },
      author: {
        name: "Phil Nash",
        email: "philnash@gmail.com",
        url: "https://philna.sh",
      },
      funding: "https://github.com/philnash/pirate-api?sponsor=1",
      license: "MIT",
      repository: {
        type: "git",
        url: "https://github.com/philnash/pirate-api.git",
      },
    },
  });

  Deno.copyFileSync("LICENSE.txt", "npm/LICENSE.txt");
  Deno.copyFileSync("README.md", "npm/README.md");
}

run();
