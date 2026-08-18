import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-regexp';

import { RegExpRuleOptions } from './typegens/regexp.js';
import { regExpRules } from './rules/regexp.js';

export function regexp(options: DefaultOptions<RegExpRuleOptions> = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript/sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? options.ignores ?? [];

		const rules = options.overrides?.rules ?? {
			...regExpRules,
			...options.rules,
		};

		return {
			name: 'zokugun/regexp/rules',
			files,
			ignores,
			plugins: {
				regexp: plugin,
			},
			rules,
		};
	};
}
