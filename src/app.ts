import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private async database(): Promise<void> {
        const prisma = new PrismaClient()
        await prisma.$connect()
    }

    private routes(): void {
        this.express.get('/', (req, res) => {
            return res.send('Hello World')
        })
    }
}

export default new App().express