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
    
}