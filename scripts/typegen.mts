import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import regexp from 'eslint-plugin-regexp';

await buildTypeGen('regexp', regexp, null, { overwrite: true });
