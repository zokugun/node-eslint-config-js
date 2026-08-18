import type { CommonsRuleOptions } from '@zokugun/eslint-toolkit';

import { commonsRules } from '@zokugun/eslint-toolkit';

export const javaScriptRules: Partial<CommonsRuleOptions> = {
	...commonsRules,
};
