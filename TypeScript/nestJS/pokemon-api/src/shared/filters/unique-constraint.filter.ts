import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(UniqueConstraintViolationException)
// whenever UniqueConstraintViolationException is catched -> execute this
export class UniqueConstraintFilter implements ExceptionFilter {
  catch(exception: UniqueConstraintViolationException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    console.log('exception: ', exception);
    const { name: errorName, sqlMessage } = exception; // destructure exception object

    response.status(400).json({
      error: errorName,
      message: sqlMessage,
      timeStamp: Date.now(),
      path: request.url,
    });
  }
}
