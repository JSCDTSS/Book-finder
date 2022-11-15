
const userName = 'JSC_DTSS'
const password = 'dgNXIAxFm9xKDt6n'
const usernameEncoded = encodeURIComponent(userName)
const passwordEncoded = encodeURIComponent(password)


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${usernameEncoded}:${passwordEncoded}@cluster0.n2dsm1v.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  }
);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  collection.find().toArray()
    .then(res => {
      console.log(res)
      client.close();
    })
});
//name
//JSC_DTSS
//pass
//dgNXIAxFm9xKDt6n