/**
 * Umschlag OpenAPI
 * API definition for Umschlag
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/* eslint-disable no-unused-vars */
import ApiClient from '../ApiClient'
import GeneralError from '../model/GeneralError'
import Team from '../model/Team'
import TeamUser from '../model/TeamUser'
import TeamUserParams from '../model/TeamUserParams'
import ValidationError from '../model/ValidationError'
/* eslint-enable no-unused-vars */

/**
* Team service.
* @module umschlag/api/TeamApi
* @version 1.0.0-alpha1
*/
export default class TeamApi {
  /**
    * Constructs a new TeamApi.
    * @alias module:umschlag/api/TeamApi
    * @class
    * @param {module:umschlag/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:umschlag/ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Assign a user to team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to assign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/GeneralError} and HTTP response
     */
  appendTeamToUserWithHttpInfo (teamId, teamUser) {
    let postBody = teamUser
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling appendTeamToUser")
    }
    // verify the required parameter 'teamUser' is set
    if (teamUser === undefined || teamUser === null) {
      throw new Error("Missing the required parameter 'teamUser' when calling appendTeamToUser")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/teams/{team_id}/users', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Assign a user to team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to assign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/GeneralError}
     */
  appendTeamToUser (teamId, teamUser) {
    return this.appendTeamToUserWithHttpInfo(teamId, teamUser)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Create a new team
     * @param {module:umschlag/model/Team} team The team data to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/Team} and HTTP response
     */
  createTeamWithHttpInfo (team) {
    let postBody = team
    // verify the required parameter 'team' is set
    if (team === undefined || team === null) {
      throw new Error("Missing the required parameter 'team' when calling createTeam")
    }

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = Team
    return this.apiClient.callApi(
      '/teams', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create a new team
     * @param {module:umschlag/model/Team} team The team data to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/Team}
     */
  createTeam (team) {
    return this.createTeamWithHttpInfo(team)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Delete a specific team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/GeneralError} and HTTP response
     */
  deleteTeamWithHttpInfo (teamId) {
    let postBody = null
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling deleteTeam")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/teams/{team_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete a specific team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/GeneralError}
     */
  deleteTeam (teamId) {
    return this.deleteTeamWithHttpInfo(teamId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Remove a user from team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/GeneralError} and HTTP response
     */
  deleteTeamFromUserWithHttpInfo (teamId, teamUser) {
    let postBody = teamUser
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling deleteTeamFromUser")
    }
    // verify the required parameter 'teamUser' is set
    if (teamUser === undefined || teamUser === null) {
      throw new Error("Missing the required parameter 'teamUser' when calling deleteTeamFromUser")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/teams/{team_id}/users', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Remove a user from team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/GeneralError}
     */
  deleteTeamFromUser (teamId, teamUser) {
    return this.deleteTeamFromUserWithHttpInfo(teamId, teamUser)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch all users assigned to team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:umschlag/model/TeamUser>} and HTTP response
     */
  listTeamUsersWithHttpInfo (teamId) {
    let postBody = null
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling listTeamUsers")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [TeamUser]
    return this.apiClient.callApi(
      '/teams/{team_id}/users', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch all users assigned to team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:umschlag/model/TeamUser>}
     */
  listTeamUsers (teamId) {
    return this.listTeamUsersWithHttpInfo(teamId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch all available teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:umschlag/model/Team>} and HTTP response
     */
  listTeamsWithHttpInfo () {
    let postBody = null

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [Team]
    return this.apiClient.callApi(
      '/teams', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch all available teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:umschlag/model/Team>}
     */
  listTeams () {
    return this.listTeamsWithHttpInfo()
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Update user perms for team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/GeneralError} and HTTP response
     */
  permitTeamUserWithHttpInfo (teamId, teamUser) {
    let postBody = teamUser
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling permitTeamUser")
    }
    // verify the required parameter 'teamUser' is set
    if (teamUser === undefined || teamUser === null) {
      throw new Error("Missing the required parameter 'teamUser' when calling permitTeamUser")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/teams/{team_id}/users', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Update user perms for team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/TeamUserParams} teamUser The team user data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/GeneralError}
     */
  permitTeamUser (teamId, teamUser) {
    return this.permitTeamUserWithHttpInfo(teamId, teamUser)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch a specific team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/Team} and HTTP response
     */
  showTeamWithHttpInfo (teamId) {
    let postBody = null
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling showTeam")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = Team
    return this.apiClient.callApi(
      '/teams/{team_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch a specific team
     * @param {String} teamId A team UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/Team}
     */
  showTeam (teamId) {
    return this.showTeamWithHttpInfo(teamId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Update a specific team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/Team} team The team data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/Team} and HTTP response
     */
  updateTeamWithHttpInfo (teamId, team) {
    let postBody = team
    // verify the required parameter 'teamId' is set
    if (teamId === undefined || teamId === null) {
      throw new Error("Missing the required parameter 'teamId' when calling updateTeam")
    }
    // verify the required parameter 'team' is set
    if (team === undefined || team === null) {
      throw new Error("Missing the required parameter 'team' when calling updateTeam")
    }

    let pathParams = {
      'team_id': teamId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = Team
    return this.apiClient.callApi(
      '/teams/{team_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Update a specific team
     * @param {String} teamId A team UUID or slug
     * @param {module:umschlag/model/Team} team The team data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/Team}
     */
  updateTeam (teamId, team) {
    return this.updateTeamWithHttpInfo(teamId, team)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }
}
