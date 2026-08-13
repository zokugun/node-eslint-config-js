import type {Configurator, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules} from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-regexp';

import { RuleOptions } from './typegens/regexp.js';
import { rules } from './rules/regexp.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function regexp(options: Options = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript.sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? options.ignores ?? [];

		return {
			name: 'zokugun/regexp/rules',
			files,
			ignores,
			plugins: {
				regexp: plugin,
			},
			rules: {
				...rules,
				...options.rules,
			},
		};
	};
}
