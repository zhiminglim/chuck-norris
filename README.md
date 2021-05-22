# Chuckle with Chuck.

A skeleton frame RESTful API web project for retrieving random chuck jokes.

To be updated.


## Development

**Local**

This method requires you to have npm and node installed.
Simply run `nodemon index.js` in the root directory and open up `localhost:3000` on your browser.

<br/>

**Docker**

This method requires some docker knowledge and docker installed.

Build with docker (you can use any name you want to replace the dockerhub_username, it is just a tag for the image):
`docker build -t your_dockerhub_username/testchuck . `

Check image with:
`docker images`

Run the following command to build the container:
`docker run -dp 3000:3000 your_dockerhub_username/testchuck`

Once the container is up and running, inspect with:
`docker ps`

Navigate to `localhost:3000/chuck` to get a chuckle.

---
And that's it for now! 


### Future plans

- Fully containerized microservice and deployment to Kubernetes.
- Integration with messaging routing to a Telegram bot.


