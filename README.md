# Umschlag: SDK for Javascript

[![Build Status](http://cloud.drone.io/api/badges/umschlag/umschlag-js/status.svg)](http://cloud.drone.io/umschlag/umschlag-js)
[![Stories in Ready](https://badge.waffle.io/umschlag/umschlag-api.svg?label=ready&title=Ready)](http://waffle.io/umschlag/umschlag-api)
[![Join the Matrix chat at https://matrix.to/#/#umschlag:matrix.org](https://img.shields.io/badge/matrix-%23umschlag%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#umschlag:matrix.org)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/293da19a42a449e5a1236808324cc6a2)](https://www.codacy.com/app/umschlag/umschlag-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=umschlag/umschlag-js&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/umschlag.svg)](https://badge.fury.io/js/umschlag)

**This project is under heavy development, it's not in a working state yet!**

Where does this name come from or what does it mean? It's quite simple, it's one german word for transshipment, I thought it's a good match as it is related to containers and a harbor.

This repository will provide a client SDK for Javascript. This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0-alpha1
- Package version: 1.0.0-alpha1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen


## Installation


### Installation with NPM

If you want to use one of the versions released via NPM you just need to execute the following command within your project directory, after that you can import it as other libraries:

```bash
npm install --save-dev umschlag
```


### Installation with Git

If you want to use an unreleased version hosted on our GitHub repository you can execute the folling command within your project directory, after that you can import it as other libraries:

```bash
npm install --save-dev umschlag/umschlag-js
```


### Browserify configuration

The SDK also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following command (assuming *main.js* is your entry file), then include `bundle.js` in the HTML pages:

```bash
browserify main.js > bundle.js
```


### Webpack configuration

Using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module", most certainly you should disable AMD loader. Add/merge the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```


## Getting Started

Please follow the [installation](#installation) instructions and then run the following code:

```javascript
var Umschlag = require('umschlag');


var api = new Umschlag.AuthApi()
var auth = new Umschlag.InlineObject(); // {InlineObject} 
api.loginUser(auth).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for endpoints

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Umschlag.AuthApi* | [**loginUser**](docs/AuthApi.md#loginUser) | **POST** /auth/login | Authenticate an user by credentials
*Umschlag.AuthApi* | [**refreshAuth**](docs/AuthApi.md#refreshAuth) | **GET** /auth/refresh | Refresh an auth token before it expires
*Umschlag.AuthApi* | [**verifyAuth**](docs/AuthApi.md#verifyAuth) | **GET** /auth/verify/{token} | Verify validity for an authentication token
*Umschlag.ProfileApi* | [**showProfile**](docs/ProfileApi.md#showProfile) | **GET** /profile/self | Retrieve an unlimited auth token
*Umschlag.ProfileApi* | [**tokenProfile**](docs/ProfileApi.md#tokenProfile) | **GET** /profile/token | Retrieve an unlimited auth token
*Umschlag.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **PUT** /profile/self | Retrieve an unlimited auth token
*Umschlag.TeamApi* | [**appendTeamToUser**](docs/TeamApi.md#appendTeamToUser) | **POST** /teams/{team_id}/users | Assign a user to team
*Umschlag.TeamApi* | [**createTeam**](docs/TeamApi.md#createTeam) | **POST** /teams | Create a new team
*Umschlag.TeamApi* | [**deleteTeam**](docs/TeamApi.md#deleteTeam) | **DELETE** /teams/{team_id} | Delete a specific team
*Umschlag.TeamApi* | [**delteTeamFromUser**](docs/TeamApi.md#delteTeamFromUser) | **DELETE** /teams/{team_id}/users | Remove a user from team
*Umschlag.TeamApi* | [**listTeamUsers**](docs/TeamApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all users assigned to team
*Umschlag.TeamApi* | [**listTeams**](docs/TeamApi.md#listTeams) | **GET** /teams | Fetch all available teams
*Umschlag.TeamApi* | [**permitTeamUser**](docs/TeamApi.md#permitTeamUser) | **PUT** /teams/{team_id}/users | Update user perms for team
*Umschlag.TeamApi* | [**showTeam**](docs/TeamApi.md#showTeam) | **GET** /teams/{team_id} | Fetch a specific team
*Umschlag.TeamApi* | [**updateTeam**](docs/TeamApi.md#updateTeam) | **PUT** /teams/{team_id} | Update a specific team
*Umschlag.UserApi* | [**appendUserToTeam**](docs/UserApi.md#appendUserToTeam) | **POST** /users/{user_id}/teams | Assign a team to user
*Umschlag.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /users | Create a new user
*Umschlag.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete a specific user
*Umschlag.UserApi* | [**deleteUserFromTeam**](docs/UserApi.md#deleteUserFromTeam) | **DELETE** /users/{user_id}/teams | Remove a team from user
*Umschlag.UserApi* | [**listUserTeams**](docs/UserApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all teams assigned to user
*Umschlag.UserApi* | [**listUsers**](docs/UserApi.md#listUsers) | **GET** /users | Fetch all available users
*Umschlag.UserApi* | [**permitUserTeam**](docs/UserApi.md#permitUserTeam) | **PUT** /users/{user_id}/teams | Update team perms for user
*Umschlag.UserApi* | [**showUser**](docs/UserApi.md#showUser) | **GET** /users/{user_id} | Fetch a specific user
*Umschlag.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /users/{user_id} | Update a specific user


## Documentation for models

 - [Umschlag.AuthToken](docs/AuthToken.md)
 - [Umschlag.AuthVerify](docs/AuthVerify.md)
 - [Umschlag.InlineObject](docs/InlineObject.md)
 - [Umschlag.Profile](docs/Profile.md)
 - [Umschlag.Team](docs/Team.md)
 - [Umschlag.TeamUser](docs/TeamUser.md)
 - [Umschlag.TeamUserParams](docs/TeamUserParams.md)
 - [Umschlag.User](docs/User.md)
 - [Umschlag.UserTeamParams](docs/UserTeamParams.md)


## Documentation for authorization

All endpoints do not require authorization.


## Security

If you find a security issue please contact umschlag@webhippie.de first.


## Contributing

Fork -> Patch -> Push -> Pull Request


## Authors

* [Thomas Boerger](https://github.com/tboerger)


## License

Apache-2.0


## Copyright

```
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```
