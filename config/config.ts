import { config } from 'dotenv'
import { resolve } from 'path'

// config method of dotenv module loads environment varriable into process.env
config
    ({
        // path module resolves the correct path of a .env file
        path: resolve(__dirname, "../.env")
    })


const MONGO_URL = process.env.DB_URL;
const APP_SECRET_KEY = process.env.APP_SECRET;

export { MONGO_URL, APP_SECRET_KEY };

