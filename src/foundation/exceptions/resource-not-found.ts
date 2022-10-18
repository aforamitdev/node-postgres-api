import { StatusCodes } from 'http-status-codes';

import { ApiException } from './api.exceptions';

class ResourceNotFoundException extends ApiException {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, 'not_found', `${message}.`);
  }
}
