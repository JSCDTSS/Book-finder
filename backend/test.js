

const { MongoClient } = require('mongodb')
const Database = require('./database')


const userName = 'JSC_DTSS'
const password = 'dgNXIAxFm9xKDt6n'
const usernameEncoded = encodeURIComponent(userName)
const passwordEncoded = encodeURIComponent(password)

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }
const uri = `mongodb+srv://${usernameEncoded}:${passwordEncoded}@cluster0.n2dsm1v.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(path, config, async function (err, client) {
  if (err) console.log(err)
  else {
    const database = new Database(client.db('test'))
    // const ans = await database.accounts.create({test:'item'})
    const ans = await database.accounts.list({})
    // const ans = await database.accounts.update('63680584666a0281dc35d299',{userName:'vale'})
    console.log(ans)
    
  }
})