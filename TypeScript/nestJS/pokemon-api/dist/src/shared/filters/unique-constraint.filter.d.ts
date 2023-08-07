import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class UniqueConstraintFilter implements ExceptionFilter {
    catch(exception: UniqueConstraintViolationException, host: ArgumentsHost): void;
}
