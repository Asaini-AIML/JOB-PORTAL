const express = require('express')
const app = express()
const cors =require('cors')
const port = process.env.port|| 3000;
require('dotenv').config()
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)

//middleware
app.use(express.json())
app.use(cors())

//user: Asaini
//pasword: job-portal

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.6vdzl2y.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db =client.db("mernJobPortal")
    const jobCollections =db.collection("demoJobs")
    //post a job
    app.post("/post-job",async(req,res)=>{
        const body = req.body;
        body.createdAt = new Date();
        // console.log(body)
        const result = await jobCollections.insertOne(body);
        if(result.insertedId){
          return res.status(200).send(result);
        }else{
          return res.status(404).send({
            message: "can not inset! try again later",
            status: false
          })
        }
    })
    // get all jobs
    app.get("/all-jobs",async(req,res)=>{
      const jobs =await jobCollections.find({}).toArray()
      res.send(jobs);
    })

    //get jobs by email
    app.get("/myJobs/:email",async(req,res)=>{
      // console.log(req.params.email)
      const jobs =await jobCollections.find({postedBy:req.params.email}).toArray();
      res.send(jobs)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Dost')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})