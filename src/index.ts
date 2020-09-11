import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Pictures } from "./entity/Pictures";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 8889,
  username: "root",
  password: "root",
  database: "technical",
  entities: [User, Pictures],
  synchronize: true,
  logging: false,
})
  .then(async (connection) => {})
  .catch((error) => console.log(error));
