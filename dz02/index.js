import {env} from "node:process";

const type = Boolean(env.TYPE === "prod");

const db = {
        host: process.env.HOST,
        port: process.env.PORT,
        login: process.env.LOGIN,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA
    }
;

(function () {
    type ? console.log(db) : console.log(db);
})();