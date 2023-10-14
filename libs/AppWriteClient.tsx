import { Account, Client, ID, Databases, Query, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('652a8665d495f7da72c7');

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);

    export { client, account, storage, database, Query, ID }