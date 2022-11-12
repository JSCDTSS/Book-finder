

const { MongoClient } = require('mongodb')
const Database = require('./database')

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }


MongoClient.connect(path, config, async function (err, client) {
  if (err) console.log(err)
  else {
    const database = new Database(client.db('Book-Finder'))
    // const ans = await database.accounts.create({test:'item'})
    const ans = await database.accounts.list({})
    // const ans = await database.accounts.update('63680584666a0281dc35d299',{userName:'vale'})
    console.log(ans)
    
  }
})