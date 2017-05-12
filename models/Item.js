
const BaseModel = require("./BaseModel");

class Item extends BaseModel {
  constructor() {
    super("Item");
  }
}

module.exports = new Item();
