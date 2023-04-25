import express, { Express, Response, Request } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Typescript nodejs application`);
});

app.listen(port, () => {
  console.log(`[Sever: I am running on port:] ${port}`);
});
