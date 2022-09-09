require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 5003,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/housemyrent",
  },
};

module.exports = dev;
