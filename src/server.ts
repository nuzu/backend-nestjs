import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as bodyParser from 'body-parser';

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.use(bodyParser.json())
    await app.listen(PORT);
}
bootstrap();