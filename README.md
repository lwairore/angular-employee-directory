# Angular Employee Directory
This is a MEAN app built with Angular and Docker Compose. I separately built out three parts of the app:

1. Angular
2. Express/Node API
3. MongoDB

The approach that I took was to built the app in our local environment, then dockerizing the app.

**NOTE**: I only built two containers, Angular and the Express/Node API. The third container can from a MongoDB image that I pulled from the [Docker Hub](https://hub.docker.com/explore/)

This application is to allow a business/company to record their employees.

This is how the application looks:
![This image displays how the application looks like](angular-client/src/assets/demos/angular-employee-directory.png)

# Technology stack
- [Angular](https://angular.io/)
- [Docker](https://www.docker.com/)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

# Reading resources
1. [Docker Hub](https://hub.docker.com/explore/) - Docker Hub is a repository for docker images. It’s where we pull down official docker images such as MongoDB, NodeJs, Ubuntu, and we can also create custom images and push them to Docker Hub for other people to pull and use.
2. [Docker Compose](https://docs.docker.com/compose/) - Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application’s services. Then, using a single command, you create and start all the services from your configuration.
