# Browns QB API
The Cleveland Browns have had many many MANY different quarterbacks since 1999. Almost too many to remember. Now, you don't have to remember! There is an API that will return information for your favorite post-1999 Cleveland Browns quarterback.

## How it is made
The API code and information is located in server.js and built using Node and ExpressJS. 

There is an index.html file that will eventually be used as a demo page for the API but is currently not built out.

## What I learned
- Creating a basic Express server and API
- How to use Render to host it for free
- How to test the API locally using Postman Desktop Agent and in the web using Postman in the browser
- What other options exist for hosting an API (Amazon Lambda and Cloudflare Worker)
- Cloudflare Worker will not work for me because I am using Node/Express, which is does not work well with

## API URL and how to use it
URL: https://browns-qb-api.onrender.com/api/{Quarterback Name}

The URL can handle spaces and any casing. For example, you can type "https://browns-qb-api.onrender.com/api/Tim Couch" and it will return with the following information:

```json
"tim couch": {
    "name": "Tim Couch",
    "number": 2,
    "years": "1999-2003",
    "numSeasons": 5
}
```
All quarterbacks will have an object that contains this information.

If no quarterback is found, a 404 status code is returned along with the message "Quarterback not found".