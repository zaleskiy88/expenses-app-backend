function controllerWrapeer(controller) {
  /**
   * Creates a wrapper function for a given controller to handle asynchronous operations and error handling.
   * @param {function} controller - The controller function to be wrapped.
   * @return {function} A wrapper function that handles asynchronous operations and error handling for the given controller.
   */
  async function wrapper(req, res, next) {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  return wrapper;
}

module.exports = controllerWrapeer;
