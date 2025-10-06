import { app } from "./app.js";
import cors from "@fastify/cors";
import "dotenv/config";

// Iniciando servidor
async function Server() {
  app.register(cors, {
    origin: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  });

  app.listen({
    host: process.env.HOST,
    port: process.env.PORT,
  });

  console.log(`Host rodando no host: ${process.env.HOST}, e porta: ${process.env.PORT}`);
}

Server();
