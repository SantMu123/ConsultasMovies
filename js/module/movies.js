import {connect} from "../../helpers/db/connect.js"


export class movies extends connect {
    static instance;
    constructor(){
        if(typeof movies.instance === "object"){
            return movies.instance;
        }
        super();
        this.collection = this.db.collection("movis")
        movies.instance = this;
        return this
    }
    async getAllMovies(){
        //this.db = await this.conexion.db(this.getDbName)
        //this.collection = this.db.collection("movis")
        
        let res = await this.collection.aggregate([
            {
                $project: {
                    name:1
                }
            }

        ]).toArray();
        //await this.conexion.close()
        return res
    }
    async getAllBluerray200Copies(){
        let res = await this.collection.find(
            {
                format: {
                    $elemMatch: { name: { $eq: "Bluray" }, copies: { $gte: 200 } }
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    format: 1
                }
            }
        ).toArray();
        return res;
    }
    /*
    Tambien se puede de la siguiente forma

     let res = await this.collection.aggregate([
            {
                $match: {
                    format: {
                        $elemMatch: { name: { $eq: "Bluray" }, copies: { $gte: 200 } }
                    }
                }
                
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    format: 1
                }
            }
        ]).toArray();
    */
    async getLessThan10ValueDVDFormat(){
        let res = await this.collection.find(
            {
                format: {
                    $elemMatch: { name: { $eq: "dvd" }, value: { $lte: 10 } }
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    format: 1
                }
            }
        ).toArray();
        return res;
    }
    async getCharacterNamedCobbMovie(){
        let res = await this.collection.find(
            {
                character: {
                    $elemMatch: { apodo: { $eq: "Cobb" }}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                }
            }
        ).toArray();
        return res;
    }
    async getActorsId2And3Movies(){
        let res = await this.collection.find(
            {
                character: {
                    $elemMatch: { id_actor: { $in: [2,3] }}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    character:1
                }
            }
        ).toArray();
        return res;
    }
    async getBlurayFormatMovies(){
        let res = await this.collection.find(
            {
                format: {
                    $elemMatch: { name: { $eq: "Bluray" }}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    format:1
                }
            }
        ).toArray();
        return res;
    }
    async getAllFictionsMovies(){
        let res = await this.collection.find(
            {
                genre: {
                    $elemMatch: {$eq: "Ciencia Ficción"}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    genre:1
                }
            }
        ).toArray();
        return res;
    }
    async getPrincipalActorCalledMiguelMovie(){
        let res = await this.collection.find(
            {
                character: {
                    $elemMatch: {rol:{$eq:"principal"},apodo:{$eq:"Miguel"}}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    character:1
                }
            }
        ).toArray();
        return res;
    }
    async getAtLeastMoreThan100CopiesMovies(){
        let res = await this.collection.find(
            {
                format: {
                    $elemMatch: {copies:{$gt:100}}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    format:1
                }
            }
        ).toArray();
        return res;
    }
    async getIdActor1Movie(){
        let res = await this.collection.find(
            {
                character: {
                    $elemMatch: {id_actor:{$eq:1}}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    character:1
                }
            }
        ).toArray();
        return res;
    }
    async getSecondCharacterCalledArthurMovie(){
        let res = await this.collection.find(
            {
                character: {
                    $elemMatch: {rol:{$eq:"secundario"}, apodo:{$eq:"Arthur"}}
                }
            },
            {
                projection: {
                    _id: 0,
                    name: 1,
                    character:1
                }
            }
        ).toArray();
        return res;
    }
}