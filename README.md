
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

## MongoDB Atlas

UserName - samTest
password - f63eFIzy51WJoW2h

connection string - mongodb+srv://samTest:f63eFIzy51WJoW2h@cluster0.yjwfdoa.mongodb.net/?retryWrites=true&w=majority

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

    



