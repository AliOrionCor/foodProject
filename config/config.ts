import { config } from 'dotenv'
import { resolve } from 'path'

// config method of dotenv module loads environment varriable into process.env
config
    ({
        // path module resolves the correct path of a .env file
        path: resolve(__dirname, "../.env")
    })


export const MONGO_URI = process.env.DB_URL
