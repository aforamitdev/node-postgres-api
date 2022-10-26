import { Request, Response } from 'express';
import {
  controller,
  httpPost,
  request,
  requestBody,
  response,
} from 'inversify-express-utils';

@controller('/company')
export class CompanyController {
  constructor() {}

  @httpPost('/create')
  async createCompany(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: any
  ) {
    console.log(body);
    return res.json(body);
  }
}
