const express = require("express");

const router  = express.Router();

const {createTodo} = require("../controller/createTodo");
const{getAllTodo} =require("../controller/getAllTodo");
const{getTodo} = require("../controller/getTodo");
const{updateTodo}= require("../controller/updateTodo");
const{deleteTodo} =require("../controller/deleteTodo");



router.post("/createTodo",createTodo);
router.get("/getAllTodo",getAllTodo);
router.get("/getTodo/:id",getTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;
