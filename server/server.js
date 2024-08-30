import express from "express";
import sequelize from "./config/connection.js";
import {loginRoute, signupRoute, viewAllHoursRoute} from "./api/index.js";

const PORT = 3001;

const app = express();

app.use(express.json());
app.use("/api", loginRoute, signupRoute, viewAllHoursRoute);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
});
