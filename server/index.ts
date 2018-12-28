import * as Koa from "koa";
import * as koaStaticMiddleware from "koa-static";

const app = new Koa();
app.use(koaStaticMiddleware(__dirname + "/website"));

const port = 4003;
app.listen(port);

// tslint:disable-next-line
console.log(`Server running on port ${port}`);
