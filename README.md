# Chuckle with Chuck.

A skeleton frame RESTful API web project for retrieving random chuck jokes.

To be updated.


## Development

This project assumes you have some docker knowledge and docker installed.

Build with docker (you can use any name you want to replace the dockerhub_username, it is just a tag for the image):
`docker build -t your_dockerhub_username/testchuck . `

Check image with:
`docker images`

Run the following command to build the container:
`docker run -dp 8080:8080 your_dockerhub_username/testchuck`

Once the container is up and running, inspect with:
`docker ps`

Verify the application works by navigating to `localhost:8080` or making a curl request `curl -i localhost:8080`

Navigate to `localhost:8080/chuck` to receive a random Chuck Norris joke.

---
And that's it for now! 


### Future plans

- Fully containerized microservice and deployment to Kubernetes.
- Integration with messaging routing to a Telegram bot.


