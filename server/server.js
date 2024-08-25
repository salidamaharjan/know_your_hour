import express from "express";
import sequelize from "./config/connection";

const PORT = 3001;

const app = express();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
});
