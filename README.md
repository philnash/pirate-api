# Pirate API

[![tests](https://github.com/philnash/pirate-api/actions/workflows/test.yml/badge.svg)](https://github.com/philnash/pirate-api/actions/workflows/test.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

This is a Deno wrapper for the
[Pirate Monkeyness API](https://pirate.monkeyness.com/api.html) that is also
available as an npm module.

## Usage

The Pirate Monkeyness API makes available two APIs; one that creates a pirate
insult and one that takes English text as an argument and returns a pirate
translation of that text.

### Deno

```typescript
import { insult, translate } from "https://deno.land/x/pirate_api/mod.ts";

console.log(await insult());

console.log(await translate("Let's take to the seas for an adventure."));
```

### Node.js

To use the module in a Node.js application, first install the module with:

```
npm install pirate-api
```

You can then use the module in your application like this:

```js
import { insult, translate } from "pirate-api";

console.log(await insult());

console.log(await translate("Let's take to the seas for an adventure."));
```

You can also use this module as a Common JS require:

```js
const { insult, translate } = require("pirate-api");

console.log(await insult());

console.log(
  await translate(
    "JavaScript truly is a very versatile language, don't you think?",
  ),
);
```

## Thanks

Thanks very much to [Tim Moses](https://tim.moses.com/) the creator of the
[Pirate Monkeyness API](https://pirate.monkeyness.com/api.html). It is a free
service and it makes me very happy that it exists.
