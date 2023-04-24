import postgres from 'postgres'

const postgresConnection = () => {
    try {
        postgres({
            host: process.env.HOST,            // Postgres ip address[s] or domain name[s]
            port: 5432,          // Postgres server port[s]
            database: 'node_api',            // Name of database to connect to
            username: process.env.USER_NAME,            // Username of database user
            password: process.env.USER_PASSWORD,            // Password of database user
        })
        console.log("**** sql-database connected! ****");
    } catch (e) {
        console.log('There was an error', error);
    }
}

postgresConnection()