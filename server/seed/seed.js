import sequelize from "../config/connection.js";
import {
    User
} from "../models/User.js";

(async function syncSequelize(){
    await sequelize.sync({force: true});
    await User.create({
        username: "salidaM",
        password: "password",
    });
    sequelize.close();
})();