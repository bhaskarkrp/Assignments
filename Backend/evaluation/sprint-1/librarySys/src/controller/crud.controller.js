//Create
const createOne = (model) => async (req, res) => {
  try {
    const allAuthors = await model.create(req.body);
    res.status(200).json(allAuthors);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

// Read Many
const getAll = (model) => async (req, res) => {
  try {
    const allAuthors = await model.find();
    res.status(200).json(allAuthors);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

//Read One
const getOne = (model) => async (req, res) => {
  try {
    const getOneItem = await model.findbyid(req.params.id);
    res.status(200).json(getOneItem);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

// Update
const updateOne = (model) => async (req, res) => {
  try {
    const updatedAuthors = await model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedAuthors);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

//Delete
const deletOne = (model) => async (req, res) => {
  try {
    const deletedAuthors = await model.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedAuthors);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

module.exports = (model) => ({
  post: createOne(model),
  getAll: getAll(model),
  getOne: getOne(model),
  patch: updateOne(model),
  delete: deletOne(model),
});
