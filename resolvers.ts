import { connect } from './connect.ts';

const getPageViews = async () => {
	const connection = await connect();

	const result = await connection.query('SELECT 1');
	console.log('result', result); // [ { "1": 1 } ]

	return 3;
};

export const resolvers = {
	Query: {
		pageViews: () => getPageViews(),
	},
	Mutation: {
		updatePageViews: (_: any, _args: any) => 2,
	},
};
