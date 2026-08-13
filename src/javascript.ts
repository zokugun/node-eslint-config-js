import type { CommonsRuleOptions, Configurator, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit'

import plugin from '@eslint/js'

import { rules } from './rules/javascript.js';

type Options = OptionRules<CommonsRuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function javascript(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.?([cm])js',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve, register) => {
		register('javascript.sources', files);

		const globals = resolve('javascript.globals.default') ?? {};

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
				rules: {
					...rules,
					...options.rules,
				},
			},
			{
				files: ['**/*.cjs'],
				languageOptions: {
					globals: resolve('javascript.globals.cjs'),
				},
			},
			{
				files: ['**/*.mjs'],
				languageOptions: {
					globals: resolve('javascript.globals.esm'),
				},
			},
		];
	};
}

