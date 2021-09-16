//import in the intial array of comments
let db = require("../data/comments");



let list = function(req, res){
    console.log("controller.comments.list");
    // code to return all the comments on the response
res.json(db);
}


let show = function(req,res){
    // code to return a single comment by id
    // the id is going to be a path param
    console.log("Controller.comments.show", req.params);
    let ID = req.params.id;

    let found = db.find(comment => comment._id == ID);
    
    res.json(found);
}

let nextID = 5;

let create = function(req,res){
    console.log("controller.comments.create", req.body);
    // code to create a new comment
    // and add it to our "data base"
    let newComment = req.body;

    newComment._id = nextID

    nextID++

    db.push(newComment);

res.sendStatus(204);
    
}


module.exports = {list, show, create};