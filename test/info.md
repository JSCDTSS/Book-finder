
in request.js, I've made a function that sends a get request to the api endpoint (https://www.googleapis.com/books/v1/volumes). 

## heading
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