import { IHeroe } from "./IHeroe";

export interface IResponse {
    displayMessage?: string,
    errorMessages?: string[],
    isSuccess?: boolean,
    result: any
}