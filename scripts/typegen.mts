import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import regexp from 'eslint-plugin-regexp';

await buildTypeGen({
	name: 'regexp',
	typeName: 'RegExpRuleOptions',
	plugin: regexp,
	overwrite: true,
});
