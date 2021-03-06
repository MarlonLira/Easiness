import { Response } from "express";
import { HttpCode } from '../enums/httpCode';
import { HttpMessage } from "../enums/httpMessage";
import { ApiResponse } from "./apiResponse";

export class Http {

  static SendMessage(res: Response, code: HttpCode, msg: HttpMessage, entity: string, result = null) {
    return res.status(code).send(this.CreateMessage(code, entity, msg, result));
  }

  static SendErrorMessage(res, error: HttpMessage, entity) {
    switch (error) {
      case HttpMessage.Parameters_Not_Provided:
        return Http.SendMessage(res, HttpCode.Bad_Request, error, entity);
      case HttpMessage.Login_Unauthorized:
        return Http.SendMessage(res, HttpCode.Unauthorized, error, entity);
      case HttpMessage.Not_Found:
        return Http.SendMessage(res, HttpCode.Not_Found, error, entity);
      case HttpMessage.Already_Exists:
        return Http.SendMessage(res, HttpCode.Bad_Request, error, entity);
      case HttpMessage.Request_Unauthorized:
        return Http.SendMessage(res, HttpCode.Unauthorized, error, entity);
      case HttpMessage.Request_Forbidden:
        return Http.SendMessage(res, HttpCode.Forbidden, error, entity);
      default:
        return Http.SendMessage(res, HttpCode.Internal_Server_Error, HttpMessage.Unknown_Error, entity, error);
    }
  }

  static SendSimpleMessage(res: Response, code: HttpCode, json: any) {
    return res.status(code).send(json);
  }

  private static CreateMessage(value: HttpCode, entity: string, msg: HttpMessage, _result = null): ApiResponse {
    let result: ApiResponse;
    switch (value) {
      case HttpCode.Continue: {
        result = {
          code: 100,
          codeMessage: 'Continue',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Processing: {
        result = {
          code: 102,
          codeMessage: 'Processing',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Ok: {
        result = {
          code: 200,
          codeMessage: 'Ok',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Created: {
        result = {
          code: 201,
          codeMessage: 'Created',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Accepted: {
        result = {
          code: 202,
          codeMessage: 'Accepted',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Found: {
        result = {
          code: 302,
          codeMessage: 'Found',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Bad_Request: {
        result = {
          code: 400,
          codeMessage: 'Bad Request',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Unauthorized: {
        result = {
          code: 401,
          codeMessage: 'Unauthorized',
          message: `${entity} - ${msg}`,
          result: _result
        }
        break;
      }
      case HttpCode.Forbidden: {
        result = {
          code: 403,
          codeMessage: 'Forbidden',
          message: `${entity} - ${msg}`,
          result: _result
        }

        break;
      }
      case HttpCode.Not_Found: {
        result = {
          code: 404,
          codeMessage: 'Not Found',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Expectation_Failed: {
        result = {
          code: 417,
          codeMessage: 'Expectation Failed',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Internal_Server_Error: {
        result = {
          code: 500,
          codeMessage: 'Internal Server Error',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Not_Implemented: {
        result = {
          code: 501,
          codeMessage: 'Not Implemented',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Bad_Gateway: {
        result = {
          code: 502,
          codeMessage: 'Bad Gateway',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      case HttpCode.Service_Unavailable: {
        result = {
          code: 503,
          codeMessage: 'Service Unavailable',
          message: `${entity} - ${msg}`,
          result: _result
        };
        break;
      }
      default: {
        result = {
          code: 0,
          codeMessage: 'Internal Configuration Server Error',
          message: `${entity} - ${msg}`,
          result: _result
        };
      }
    }
    result.message = result.message.replace('  ', ' ').replace('--', '-').replace('- -', '-').replace('-  -', '-').replace('  ', ' ');
    return result;
  }
}