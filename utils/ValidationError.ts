class ValidationError {
    public status:number = 400;
    public message:string;
    public constructor(msg:string) { this.message = msg; }
}

export default ValidationError;