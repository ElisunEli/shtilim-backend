import { NextFunction, Request, Response } from "express";


async function verifyLoggedIn(request: Request, response: Response, next: NextFunction) {

    try {
        // const isValid = await cyber.verifyToken(request);
        const isValid = true;

        if(!isValid) throw new Error("Invalid token");
        next();
    }
    catch(err: any) {
        next(err);
    }
    
}

export default verifyLoggedIn;
