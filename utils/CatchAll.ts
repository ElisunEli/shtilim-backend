import express, { Request, Response } from "express";

function catchAll(err:any, req:Request, response:Response)
{
    console.log(err);
    response.status(400).send("err.message");
}

export default catchAll;