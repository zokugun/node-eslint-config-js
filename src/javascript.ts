import type { CommonsRuleOptions, Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';

import plugin from '@eslint/js';

import { javaScriptRules } from './rules/javascript.js';

export function javascript(options: DefaultOptions<CommonsRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.?([cm])js',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	const rules = options.overrides?.rules ?? {
		...javaScriptRules,
		...options.rules,
	};

	return (resolve, register) => {
		register('javascript/sources', files);

		const globals = resolve('javascript/globals/default') ?? {};

		return [
			{
				name: 'zokugun/javascript/rules',
				files,
				ignores,
				plugins: {
					js: plugin,
				},
				languageOptions: {
					globals,
				},
				rules,
			},
			{
				files: ['**/*.cjs'],
				languageOptions: {
					globals: resolve('javascript/globals/cjs'),
				},
			},
			{
				files: ['**/*.mjs'],
				languageOptions: {
					globals: resolve('javascript/globals/esm'),
				},
			},
		];
	};
}
