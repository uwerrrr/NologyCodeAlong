"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const unique_constraint_filter_1 = require("./shared/filters/unique-constraint.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        enableDebugMessages: true,
        whitelist: true,
    }));
    app.useGlobalFilters(new unique_constraint_filter_1.UniqueConstraintFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map