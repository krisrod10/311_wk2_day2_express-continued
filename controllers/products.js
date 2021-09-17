// import the intial array of comments
const product = require("../data/products");


let list = function(req,res){
    console.log("controller.products.list");
    // code to return all the comments on the response
    res.json(product);
}

let show = function(req,res){
    // code to return a single comment by id
    // the id is going to be the path param
    console.log("controller.products.show");
    let ID = req.params.id;

    let found = product.find(product => product._id == ID);

    res.json(found);
}

let nextID = 5;

let create = function(req,res){
    console.log("controller.products.create");
    // code to create a new product
    // and add it to our "data base"
    let newProduct = req.body;

    newProduct._id = nextID;

    nextID++

    product.push(newProduct);

    res,sendStatus(204);
}

module.exports = {list,show,create};