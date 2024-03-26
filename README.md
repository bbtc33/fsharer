# fsharer

fsharer is a simple Webapp that provides temporary file and text storage up to 512 MB in size.

fsharer is designed to be run using docker. It consists of two different components, the frontend and the backend.

The frontend is comprised of a node server. When the user interacts with your frontend, it will send api calls to the backend. The code for the frontend is in the `fsharer` folder.

The backend is comprised of 3 parts, a reverse proxy, express.js, and a postgresql server. The code for the backend is in the `fsharerbackend` folder.

## fsharer configuration

The only configuration required for the frontend is in the config.js file. Change this to your desired backend address. Since this line is used at build time, it is unfortunately not possible to move this configuration to docker-compose.yml

## fsharerbackend configuration

All configuration for the backend is done in the docker-compose.yml file.

## Deployment

Once you have configured everything properly, run `docker compose up -d` to start fsharer. You will need to provide your own reverse proxy (nginx, traefik, etc.)

## Acknowledgements

The traefik configuration for this project is taken from [sproutmaster](https://github.com/sproutmaster/deployment-scripts)
