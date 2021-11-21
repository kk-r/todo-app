# Vuejs ToDo App
A to-do list is a simple but effective way to manage tasks. It uses third party API to store the data and (Tailwind)[https://tailwindcss.com/] CSS for styling.



## User Stories
- As a user, I need to be able to add an Todo (item to the list).
- As a user, I need to be able to list all the todo items when the page is first loaded or
reloaded.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
VUE_APP_NODE_ENV=local VUE_APP_API_BASE_URL=http://localhost:4005 yarn serve
```

### Compiles and minifies for production
```
VUE_APP_API_BASE_URL=http://localhost:4005 yarn build
```

### Run your unit tests
```
yarn test:unit
```
### Run pact tests
```
yarn run test:pact
```
### Run your end-to-end tests
```
VUE_APP_NODE_ENV=local VUE_APP_API_BASE_URL=http://localhost:4005 yarn run test:e2e
```

### Lints and fixes files
```
yarn lint
```
### Publish client contract to pact broker.
I have used pactflow.io as a pact broker to communicate between client and provider. You can use that ervice or you can follow the instructions from this [repo](https://github.com/pact-foundation/pact_broker) to spin up broker in your local.

```shell
broker_url=https://****.pactflow.io/ broker_token= yarn run pact:publish
```

## Deployment

The application can be run as a docker container. You can use `Dockerfile` to build the application 
into a docker image. The docker container needs few environment variables to run, please check the *Dockerfile* and pass the build params as your config.

```shell
docker build  --build-arg VUE_APP_API_BASE_URL="" -t  vue-todo-app:v1 --no-cache .
```

For CI/CD we use Github actions to deploy the applications in the kubernetes cluster. Currently it's configured to deploy the cluster in DigitalOcean. If you are planning to use similar pipeline please be make sure to set secrects value based on your requirement.


## Todo

- [x] Add Cypress token to record E2E test in pipeline
- [x] Cover pact proider test.
- [x] Run E2E test in staging in the build pipeline.
- [x] Update Build pipeline to run pact publish.
- [ ] Create detailed doc about architectural decisions in the README
- [x] Building a deployment process to deploy staging enviornment.
- [ ] Revert Staging build if any test case is failed
- [ ] Add can-i-deploy script as part of CI/CD pipeline


## License

[MIT License](./LICENSE)
