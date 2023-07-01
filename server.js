const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: ".env" });

const port = 3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB 🙂"))
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
