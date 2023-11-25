import type { CodegenConfig } from '@graphql-codegen/cli';

// This is somewhat inspired by https://github.com/TehNut/AniMouto/blob/master/codegen.yml
export default {
	overwrite: true,
	schema: 'https://graphql.anilist.co',
	documents: ['./graphql/**/*.graphql'],
	generates: {
		'./node_modules/@anilist/graphql/index.ts': {
			plugins: ['typescript', 'typescript-document-nodes'],
		},
		'./graphql/introspection.json': {
			plugins: ['introspection'],
		},
	},
} as CodegenConfig;
