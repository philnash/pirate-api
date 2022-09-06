import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import { version } from "../mod.ts";

async function run() {
  await emptyDir("./npm");

  await build({
    entryPoints: ["./mod.ts"],
    outDir: "./npm",
    shims: {
      custom: [
        {
          package: {
            name: "node-fetch",
            version: "~2.6.7",
          },
          globalNames: [
            {
              // for the `fetch` global...
              name: "fetch",
              // use the default export of node-fetch
              exportName: "default",
            },
            {
              name: "RequestInit",
              typeOnly: true, // only used in type declarations
            },
            {
              name: "Response",
              exportName: "Response",
            },
          ],
        },
        {
          module: "url",
          globalNames: ["URL"],
        },
      ],
    },
    typeCheck: true,
    test: false,
    compilerOptions: {
      lib: ["es2020"],
      module: "commonjs",
      target: "ES2020",
      types: ["node"],
    },
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
      devDependencies: {
        "@types/node": "14.14.31",
        "@types/node-fetch": "~2.6.2",
      },
    },
  });

  Deno.copyFileSync("LICENSE.txt", "npm/LICENSE.txt");
  Deno.copyFileSync("README.md", "npm/README.md");
}

run();
