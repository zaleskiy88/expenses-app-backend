const { Category } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//

const getCategories = async (req, res, next) => {
  const categories = await Category.find();

  if (!categories) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(categories);
};

module.exports = controllerWrapper(getCategories);
