const mongoose = require("mongoose");
const JOBDATA = require("../JobData");

let jobList = new JOBDATA({
  listName: "Wishlist",
  cardList: [
    {
      role: "SDE 1",
      companyName: "Google",
    },
    {
      role: "SDE 2",
      companyName: "Google",
    },
    {
      role: "SDE 3",
      companyName: "Google",
    },
    {
      role: "SDE 4",
      companyName: "Google",
    },
  ],
});
// jobList.save()
exports.allJobLists = (req, res) => {
  JOBDATA.find(function (err, job) {
    if (err) {
      console.log(err);
    } else {
      console.log(job);
      res.json(job);
    }
  });
};
exports.addJobList = (req, res) => {
  let jobList = new JOBDATA({
    listName: "List Name",
    cardList: [],
  });
  jobList.save();
  res.send("Working");
};
exports.updateJobList = (req, res) => {
  console.log(req.body);
  const id = req.params.l_id;
  console.log(id);
  const updListName = req.body.listName;
  const updCardList = req.body.cardList;
  JOBDATA.findByIdAndUpdate(id, req.body, { new: true }, function (err, job) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated List : ", job);
    }
  });
  res.send("Working");
};
exports.deleteJobList = (req, res) => {
  const id = req.params.l_id;
  JOBDATA.findByIdAndDelete(id, function (err, job) {
    if (err) {
      console.log(err);
    } else {
      console.log("Delete List : ", job);
    }
  });
  res.send("Working");
};

exports.addCard = (req, res) => {
  const l_id = req.params.l_id;
  console.log(l_id);
  console.log(req.body);
  JOBDATA.findByIdAndUpdate(
    l_id,
    { $push: { cardList: req.body } },
    function (error, job) {
      if (error) {
        console.log(error);
      } else {
        console.log(job);
      }
    }
  );
  res.send("Working");
};
exports.deleteCard = (req, res) => {
  const l_id = req.params.l_id;
  const c_id = req.params.c_id;

  console.log(l_id);
  console.log(c_id);

  JOBDATA.findByIdAndUpdate(
    l_id,
    { $pull: { cardList: { _id: c_id } } },
    { new: true },
    function (error, job) {
      if (error) {
        console.log(error);
      } else {
        console.log(job);
      }
    }
  );
  res.send("Working");
};
