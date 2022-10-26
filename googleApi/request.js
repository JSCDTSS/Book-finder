
/**
 * preferences
 *      pages (upper, lower)
 *      genres
 *      authors
 *      types (fiction, non fiction)
 * 
 * when the user does a search, return books most appropriate to their search parameters
 * when the user enters the home page, return books more appropraite to their preferences
 * 
 * 
 */

const axios = require('axios')
const fs = require('fs')

const booksApi = axios.create({
    baseURL: 'https://www.googleapis.com',
    method: 'get',
    timeout: 1000
})

/* 
    a pipe is a function that is composed of other functions,
    eg. suppose we have a variable v, and functions f,g and h

    const newPipe = createPipe(f,g,h)

    if we called newPipe(v), we would essentially do the following
    return f(g(h(v)))
    so we call f on v, then g on the result, then on the next result
*/
function createPipeAsync(...functions) {
    return function (initialValue) {
        return functions.reduce(
            (input, _function) => input.then(_function),
            Promise.resolve(initialValue)
        )
    }
}

function searchVolumes(params) {
    return booksApi.request({
        url: '/books/v1/volumes',
        params,
    })
}

function logInfo(res) {
    console.log(`total items: ${res.data.totalItems}`)
    res.data.items.forEach(item => {
        console.log(item)
    })
}

function saveResponseData(res) {
    fs.writeFile(
        './exampleData.json',
        JSON.stringify(res.data),
        function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
        });
}

// const saveBasicInfo = createPipeAsync(
//     searchVolumes, saveResponseData
// )
const logBookInfo = createPipeAsync(
    searchVolumes, logInfo
)

saveBasicInfo({
    q: 'subject:nonfiction',
})

// genre: subject:<NAME>
// title: pride+prejudice
// title+author: flowers+inauthor:keyes
