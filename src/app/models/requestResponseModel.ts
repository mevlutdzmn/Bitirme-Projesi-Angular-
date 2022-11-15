import { Request } from "./request";
import { ResponseModel } from "./responseModel";

export interface RequestResponseModel extends ResponseModel{
    data:Request[],

}