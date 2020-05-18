import {Request,Response} from 'express'
import { fetchAllDog } from './dogDB'

export const getAllDog =
    async (req:Request,res: Response)=>{
        try{
            const dogs =await fetchAllDog()
            res.json(dogs)
        }catch(error){
            res.status(500).json({})
        }
    }