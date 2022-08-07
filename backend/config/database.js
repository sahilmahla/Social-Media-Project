const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://sahil1:G3jyBazTBZ2yDa2w@cluster0.xq8je.mongodb.net/?retryWrites=true&w=majority')
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
