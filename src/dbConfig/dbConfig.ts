import mongoose from "mongoose";

export async function connect() {
    try {

        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("Database connected successfully")
        })

        connection.on('error', (err)=>{
            console.log("Mongodb connection Failed.", err)
            process.exit();
        })
        
    } catch (error) {
        console.log('Something went wrong')
        console.log('error', error)
        
    }
}