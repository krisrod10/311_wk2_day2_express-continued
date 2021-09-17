// import in the initial array of comments
let vehicle = require("../data/comments");

let list = function(req,res){
    console.log("controller.vehciles.list");
    // code to return all comments on the response
    res.json(vehicle);
}

let show = function(req,res){
    // code to return a single vehcile by its id
    // the id is going to be the path param
    console.log("controller.vehicle.show");
    let ID = req.params.id;

    let found = vehicle.find(vehcile => vehicle._id == ID);

    res.json(found);
}

let nextID = 5;

let create = function(req,res){
    console.log("controllers.vehicles.create");
    // code to create a new vehcile
    // and add it to our 'data base'
    let newVehcile = req.body;

    newVehcile._id = nextID;

    nextID++

    vehcile.psuh(newVehcile);

    res.sendStatus(204);
}

module.exports ={list, show, create};