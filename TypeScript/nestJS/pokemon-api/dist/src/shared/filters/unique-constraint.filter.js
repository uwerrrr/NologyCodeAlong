"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueConstraintFilter = void 0;
const core_1 = require("@mikro-orm/core");
const common_1 = require("@nestjs/common");
let UniqueConstraintFilter = exports.UniqueConstraintFilter = class UniqueConstraintFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        console.log('exception: ', exception);
        const { name: errorName, sqlMessage } = exception;
        response.status(400).json({
            error: errorName,
            message: sqlMessage,
            timeStamp: Date.now(),
            path: request.url,
        });
    }
};
exports.UniqueConstraintFilter = UniqueConstraintFilter = __decorate([
    (0, common_1.Catch)(core_1.UniqueConstraintViolationException)
], UniqueConstraintFilter);
//# sourceMappingURL=unique-constraint.filter.js.map