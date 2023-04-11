const express = require("express");
const { TravellerModal } = require("../modals/travellerData.modal");

const travellerRouter = express.Router();

travellerRouter.get("/", async (req, res) => {
    const {destination,budget_per_person}=req.query
   
  try {
    if(destination &&budget_per_person){
        const data =await TravellerModal.find({destination}).sort({budget_per_person});
        res.status(200).send(data);
    }
    else if(destination){
        const data =await TravellerModal.find({destination});
        res.status(200).send(data); 
    }
    else if(budget_per_person){
        const data =await TravellerModal.find({}).sort({budget_per_person});
        res.status(200).send(data); 
    }else{
        const data =await TravellerModal.find({});
        res.status(200).send(data); 
    }

  } catch (err) {
    res.status(400).send({ message: "err", err });
  }
});
travellerRouter.post("/", async (req, res) => {
  try {
    if (req.body) {
      const data = new TravellerModal(req.body);
      await data.save();
      res.status(200).send({ message: "successfully uploaded" });
    } else {
      res.status(404).send({ message: "please provide data" });
    }
  } catch (err) {
    res.status(400).send({ message: "err", err });
  }
});

module.exports={
    travellerRouter
}