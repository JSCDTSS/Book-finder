
## google books requests
in request.js, I've made a function that sends a get request to the api endpoint (https://www.googleapis.com/books/v1/volumes). 

In exampleData.json I've saved an example response when making a request with query parameters:
{
    q: 'subject:nonfiction',
    maxResults: 2
}

Here's the page I used to get started
https://developers.google.com/books/docs/v1/using

The data we get back seems fairly comprehensive:
    categories (genres)
    page count
    author(s)
    and a whole bunch else

## data structure
collections
    userAccountInfo[
        password
        username
        name
        email
        bookshelves[]
        preferences
            pages lowerbound
            pages upperbound
            types[]
            genres[]
            authors[]
        friends[]
        isModerator
    ]

    bookshelves [
        isPublic
        bookshelfName                         
        bookshelfId
        books [
            name
            genre
            isbn
        ]
    ]


## jobs for backend

MongoDb

    create account (accountInfo)
        success
        fail

    log in (userName, password)
        get users, verify password

    update preferences


GoogleApi

    getBooks
        parameters:
            categories (genres)
            page count
            author(s)

    




## mongo commands

    insertOne(JSON)
    insertMany([JSON])

    updateOne( {age: 26}, { $set: { age: 27 } } )

    find().limit(n)
    find().sort({name: 1})
        sorted alphabetically
    find().sort({name: 1, age: -1})
        sorted name alphabetically, then age in reverse order
    find().skip(n)
        skip first n entries
    find({name: "name"})
        gets people where name equals "name"
    find(JSON,{name:1,age:1})
        second parameter chooses what to show
    find( { name: {$eq: "sally" }})
    find( { name: {$neq: "sally" }})
    
## best practises

    pagination - limit size of returns

## api documentation

**Login**
    GET /login
    query parameters
        uniqueId
        password
    returns
        200: {ok, token}
        401: {error: invalid credentials}
    404: {error: could not find account}

**Create Account**
    POST /create-account
    parameters: {
        userName, email, password, ?firstName, ?surname
    }
    returns
        200: {ok, token}
        400: {errors: []}
        500: {error: internal server error}

**Search Accounts**
    GET /accounts
    headers
        Authorization: "Bearer <Token>"
    get a list of accounts by search parameters (user name?)
    returns: {
        ok, accounts[{
            
        }]
    }

**Update Own Account Info**
    POST /update-account
    parameters: (any property that belongs to an account)

**Guest Login**
    GET /login-guest
    returns 
        200: {ok, token}

**Update Status of another account**
    POST /update-account-other
    
moderators should be able to change the info of another account

## 16/11
need the frontend with the database
  login
  create account

verify if someone is logged in
  if not, direct them to landing page