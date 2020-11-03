import { Response, Request } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";

import { Http } from "../../Application/Commons/core/http";
import { HttpCode } from "../../Application/Commons/enums/httpCode";
import { HttpMessage } from "../../Application/Commons/enums/httpMessage";
import { IProductService } from "../../Application/Interfaces/product-service.interface";
import { ProductModel } from "../../Application/Models/product.model";
import { TYPES } from "../../Infrastructure/Crosscutting/IOC/types";

@controller('')
export class ProductController {
  constructor(@inject(TYPES.IProductService) private service: IProductService) { }


  @httpPost('/product')
  post(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(req.body)
        .then((result: ProductModel) => resolve(Http.SendMessage(res, HttpCode.Ok, HttpMessage.Saved_Successfully, 'Product', result)))
        .catch((error: any) => resolve(Http.SendErrorMessage(res, error, 'Product')));
    });
  }

  @httpPut('/product')
  put(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.update(req.body)
        .then((result: any) => resolve(Http.SendMessage(res, HttpCode.Ok, HttpMessage.Updated_Successfully, 'Product', result)))
        .catch((error: any) => resolve(Http.SendErrorMessage(res, error, 'Product')));
    });
  }

  @httpGet('/product/:id')
  getById(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.getById(req.params.id)
        .then((result: ProductModel) => resolve(Http.SendMessage(res, HttpCode.Ok, HttpMessage.Found, 'Product', result)))
        .catch((error: any) => resolve(Http.SendErrorMessage(res, error, 'Product')));
    });
  }

  @httpGet('/products')
  getAll(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.toList()
        .then((result: ProductModel[]) => resolve(Http.SendMessage(res, HttpCode.Ok, HttpMessage.Found, 'Product', result)))
        .catch((error: any) => resolve(Http.SendErrorMessage(res, error, 'Product')));
    });
  }

  @httpDelete('/product/:id')
  delete(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.delete(req.params.id)
        .then((result: any) => resolve(Http.SendMessage(res, HttpCode.Ok, HttpMessage.Deleted_Successfully, 'Product', result)))
        .catch((error: any) => resolve(Http.SendErrorMessage(res, error, 'Product')));
    });
  }
}