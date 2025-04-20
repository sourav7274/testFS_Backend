const mongoos = require("mongoose");

const dummySchema = new mongoos.Schema({
  name: String,
});

const Dummy = mongoos.model("Dummy", dummySchema);
module.exports = Dummy;
