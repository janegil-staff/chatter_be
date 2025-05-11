import app from "./app.js";
import logger from "./configs/logger.config.js";

const PORT = process.env.PORT || 8000;

let server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}...`);
});

const exitHandler = () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  } else {
    process.exit();
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtExeprion", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  }
});
