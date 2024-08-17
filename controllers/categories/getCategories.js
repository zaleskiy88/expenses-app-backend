const { Category } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories;
