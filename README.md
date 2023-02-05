# React OIDC Token Retriever

A configurable Token Retriever for OpenID Connect (OIDC) that can be used to retrieve tokens from an Identity Server.

## Pre-requisites

- [Install Docker](https://docs.docker.com/get-docker/)
- You should have some sort of Identity Server running.

## How to run

- Clone the project.
- Create a `.env` file in the root folder and copy the content of `.env.example` file.
- Update the values of the environment variables in the `.env` file.
- Run `docker build -t oidc-token-retriever .` to start the project.
- Run `docker run -d -p 5003:5003 --name token-retriever oidc-token-retriever` to start the project.

That's it. You can now access the Token Retriever at `http://localhost:5003`.
