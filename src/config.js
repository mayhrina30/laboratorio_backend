import { config } from "dotenv";

config();

export default{
    host: process.env.HOST || "",
    user: process.env.USER || "",
    password: process.env.DATABASE || "",
    database: process.env.PASSWORD || "",
};