import People from "../models/PeopleModel.js";

// @desc  Create People
// @route POST /api/peoples/
// @access Admin 

const createPeople = async (req, res) => {

  if (req.body) {
    const people = new People(req.body)

    await people.save()
      .then(data => {
        res.status(201).send({ success: true, 'message': "people Created Successfully!" })
      })
      .catch((error) => {
        res.status(500).send({ success: false, 'message': error })
      })

  } else {
    res.status(200).send({ success: false, 'message': "No Data Found" })
  }
}

// @desc  Get All Peoples
// @route GET /api/peoples/
// @access Admin

const getAllPeoples = async (req, res) => {
  await People.find({})
    .then((data) => {
      res.status(200).send({ success: true, peoples: data, message: "Returned Successfully!" });
    })
    .catch((error) => {
      res.status(500).send({ success: false, message: error });
    });
};

// @desc  Get People by people ID
// @route GET /api/peoples/:id
// @access Admin

const getPeopleByID = async (req, res) => {
  if (req.params && req.params.id) {
    await People.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ success: true, people: data });
      })
      .catch((error) => {
        res.status(400).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "Id Not Found" });
  }
};

// @desc  Update People
// @route PUT /api/peoples/:id
// @access Admin

const updatePeopleDetails = async (req, res) => {
  if (req.body && req.params) {
    const query = { _id: req.params.id };
    const update = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    };

    await People.updateOne(query, update)
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: "People Updated Successfully!" });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "No Data Found" });
  }
};

// @desc  Delete People
// @route Delete /api/peoples/:id
// @access Admin

const deletePeopleDetails = async (req, res) => {
  if (req.params && req.params.id) {
    await People.deleteOne({ _id: req.params.id })
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: "People Deleted Successfully!" });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "No Id Found" });
  }
};

export default {
  createPeople,
  getAllPeoples,
  getPeopleByID,
  updatePeopleDetails,
  deletePeopleDetails,
}
