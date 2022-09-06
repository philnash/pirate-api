# 🏴‍☠️ Pirate API ☠️

[![deno](https://shield.deno.dev/x/pirate_api)](https://deno.land/x/pirate_api)
[![npm](https://img.shields.io/npm/v/pirate-api)](https://www.npmjs.com/package/pirate-api)
[![tests](https://github.com/philnash/pirate-api/actions/workflows/test.yml/badge.svg)](https://github.com/philnash/pirate-api/actions/workflows/test.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

The [Pirate Monkeyness API](https://pirate.monkeyness.com/api.html) can generate
**pirate insults** and it can **translate from English to Pirate**.

This is a Deno wrapper for the API that is available as both a
[Deno module](https://deno.land/x/pirate_api) and a
[Node.js module on npm](https://www.npmjs.com/package/pirate-api).

- [Usage](#usage)
  - [Deno](#deno)
  - [Node.js](#nodejs)
- [Thanks](#thanks)
- [What's a pirate's favourite programming language?](#whats-a-pirates-favourite-programming-language)

## Usage

The Pirate Monkeyness API makes available two APIs; one that creates a pirate
insult and one that takes English text as an argument and returns a pirate
translation of that text.

### Deno

```typescript
import { insult, translate } from "https://deno.land/x/pirate_api/mod.ts";

console.log(await insult());
// => "I'll gut ye bow to stern, ye dreadful, cowardly mongrel! ... Blow me down!"

console.log(
  await translate("Let's take to the seas for an adventure captain."),
);
// => "Let's take t' the seas fer an adventure cap'n."
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
// => "Yer face be good fer stoppin' cannonballs, ye scrappy, salty dullard! ... Blow me down!"

console.log(
  await translate("Let's take to the seas for an adventure captain."),
);
// => "Let's take t' the seas fer an adventure cap'n."
```

You can also use this module as a Common JS require:

```js
const { insult, translate } = require("pirate-api");

console.log(await insult());
// => "It's the locker for ye, ye pitiful, weak-kneed swab! ... Splice the mainbrace!"

console.log(
  await translate("JavaScript is a very versatile language, don't you think?"),
);
// => "JavaScript be a mighty versatile language, don't ye reckon?"
```

## Thanks

Thanks very much to [Tim Moses](https://tim.moses.com/) the creator of the
[Pirate Monkeyness API](https://pirate.monkeyness.com/api.html). It is a free
service and it makes me very happy that it exists.

## What's a pirate's favourite programming language?

> Ye might reckon a pirate's fav'rit programmin' language be R, but his first
> love be the C!"
