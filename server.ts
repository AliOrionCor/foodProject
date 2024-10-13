import express from "express";
import App from './services/expressApp'
import databaseConnection from "./services/databaseConnection";

const startServer = async () => {
    const app = express();
    await databaseConnection()

    await App(app)
    app.listen(4000, () => {
        console.log('App is listnening to the port 4000')
    });
}

startServer()