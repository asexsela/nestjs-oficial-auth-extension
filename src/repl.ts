import { repl } from "@nestjs/core";
import { AppModule } from "./app.module";


// yarn start --entryFile repl
// npm run start -- --entryFile repl
async function bootstrap() {
  await repl(AppModule);
}
bootstrap();
