import { movies } from "./js/module/movies.js";

/*
let obj = new connect();

console.log(obj)
/*
obj.setPass = "12348"
obj.getReconnect
console.log(obj)

/*let obj = new connect("Santiago");
let obj2 = new connect("Oscar")
console.log(obj)
obj.name = "Otro"
console.log(obj)
console.log(obj2)*/

let mongo = new movies()
console.log(await mongo.getAllMovies());
