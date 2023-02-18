import { createConnection } from 'https://deno.land/x/mysql2@v1.0.6/mod.ts';

export const connect = async () => {
	// Get the connection string from the environment variable "DATABASE_URL"
	const databaseUrl = Deno.env.get('DATABASE_URL')!;

	console.log('createConnection', createConnection);
	console.log('databaseUrl', databaseUrl);

	const connection = await createConnection(databaseUrl);

	console.log('connection', connection);

	return connection;
};
