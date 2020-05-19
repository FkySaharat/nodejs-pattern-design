import express from 'express'
import apiRoute from './apiRoute'
import winston from 'winston'
import bodyParser from 'body-parser'
import logger from './logger'

const app = express()

const PORT =8080

var jsonParser =bodyParser.json()


app.get('/',(req,res)=>{
	res.send('hello world')
})

app.use('/api',jsonParser,apiRoute)

app.listen(PORT,()=>{
	logger.info(`Open web on port: ${PORT}`)
})

if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
	  format: winston.format.simple()
	}));
  }