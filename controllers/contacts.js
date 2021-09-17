let contacts = require("../data/contacts");

let list = function(req,res){
    console.log("controller.comments.list");
    res.json(contacts);
}

let show = function(req,res){
console.log("controller.comments.show", req.params);
let ID = req.params.id;

let found = contacts.find(contacts => contacts._id.name.occupation.avatar == ID);
}

let nextID = 5;

let create = function(req,res){
    console.log("contatcs.id.create", req.body);
    // code to create a new contact
    // and add it to our "data-base"
    let newContact = req.body;

    newContact._id = nextID;

    nextID++

    contacts.push(newContact);

    res.sendStatus(204);

}

module.exports = {list, show, create};