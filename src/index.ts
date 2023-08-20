import type { ConfigOptions } from "express-handlebars/types";

import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { join } from "path";
import { env, cwd } from "process";

const PORT = Number(env.PORT || 3000);
const HBS_CONFIG: ConfigOptions = {
  extname: ".hbs",
};

const VIEW_DIR = join(__dirname, "views");

console.log(VIEW_DIR);

const app = express();

app.use(morgan("tiny"));

app.engine(".hbs", engine(HBS_CONFIG));
app.set("view engine", ".hbs");
app.set("views", VIEW_DIR);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT);
