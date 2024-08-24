import express, { Request, Response, NextFunction } from "express"
import useragent from "express-useragent"
import cors from 'cors'
import cookieParser from "cookie-parser"
import morgan from "morgan"

const App = (app: any): void => {

    app.use(useragent.express())
    app.use(express.static('public'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use(morgan('dev'))
    app.use(cors({
        origin: 'http://192.168.1.2:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
        credentials: true
    }));
};

export default App;