const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://adi:ola@todo.you0jbe.mongodb.net/?retryWrites=true&w=majority&appName=todo" ||
    "mongodb://localhost/fitness-tracker" || "mongodb://localhost/fitness-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
