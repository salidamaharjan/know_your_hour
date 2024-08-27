import express from "express";
import sequelize from "./config/connection.js";
import {loginRoute, signupRoute} from "./api/index.js";

const PORT = 3001;

const app = express();

app.use(express.json());
app.use("/api", loginRoute, signupRoute);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
});
