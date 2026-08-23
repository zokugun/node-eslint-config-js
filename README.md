[@zokugun/eslint-config-js](https://github.com/zokugun/node-eslint-config-js)
=============================================================================

[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/eslint-config-js?color=brightgreen)](https://www.npmjs.com/package/@zokugun/eslint-config-js)
[![NodeJS Version](https://img.shields.io/badge/node.js-%3E%3D%2020.19-green)](#requirements)
[![Modules](https://img.shields.io/badge/modules-ESM-green)](#requirements)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-f87171?logo=kofi&logoColor=white)](https://ko-fi.com/daiyam)
[![Liberapay](https://img.shields.io/badge/Liberapay-facc15?logo=liberapay&logoColor=black)](https://liberapay.com/daiyam/donate)
[![PayPal](https://img.shields.io/badge/PayPal-5277C3?logo=paypal&logoColor=white)](https://paypal.me/daiyam99)

> A collection ready-to-use ESLint configurations for JavaScript and RegExp. Customize files, ignores and rules per project. Integrates EditorConfig to match your coding style.

Features
--------

- **Efficient Setup**: Quick-start configurations that require minimal boilerplate.
- **Flexible Configuration**: Easily override default file globs, ignores, or specific rule configurations.
- **EditorConfig Integration**: Automatically adjusts the coding style based on your project's EditorConfig file.
- **Type Safety**: Fully typed configuration options via TypeScript for better developer experience.

Installation
------------

```bash
npm add @zokugun/eslint-config-js
```

Requirements
------------

- **ESLint**: `v10` or higher
- **Node.js**: `v20.19` or higher
- **Modules**: ECMAScript Modules (`ESM`)

Quick Start
-----------

```typescript
import { configure, gitignore, ignores } from '@zokugun/eslint-config';
import { javascript, regexp } from '@zokugun/eslint-config-js';

export default configure([
	ignores(),
	gitignore(),
	javascript(),
	regexp(),
]);
```

API reference
-------------

```typescript
function javascript(options?: DefaultOptions<JavaScriptRuleOptions>): Configurator;
function regexp(options?: DefaultOptions<RegExpRuleOptions>): Configurator;
```

Contributions
-------------

Contributions are most welcome. Please:
- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
