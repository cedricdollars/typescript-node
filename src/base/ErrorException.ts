 export default class ErrorException {
    private message: string | object;
    private code: number;

    constructor(code: number, message: string | object) {
        this.code = code;
        this.message = message
    }
  
}
