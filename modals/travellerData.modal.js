const mongoose=require('mongoose')

const travellerSchema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    no_of_travellers:Number,
    budget_per_person:Number
})

const TravellerModal=mongoose.model('traveller',travellerSchema)

module.exports={
    TravellerModal
}