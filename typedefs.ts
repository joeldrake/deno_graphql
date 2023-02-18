import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

export const typeDefs = gql`
	type Query {
		pageViews: Int
	}

	type Mutation {
		updatePageViews: Int
	}
`;
