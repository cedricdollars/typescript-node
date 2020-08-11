 class ApiError {
    message: string;
    code: number;

    constructor(code: number, message: string) {
        this.code = code;
        this.message = message
    }

    static badRequest(msg: string) {
        return new ApiError(400, msg);
    }
    static internalError(msg: string) {
        return new ApiError(500, msg);
    }
    
}
export default  ApiError;