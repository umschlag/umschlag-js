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
import AuthLogin from '../model/AuthLogin'
import AuthToken from '../model/AuthToken'
import AuthVerify from '../model/AuthVerify'
import GeneralError from '../model/GeneralError'
/* eslint-enable no-unused-vars */

/**
* Auth service.
* @module umschlag/api/AuthApi
* @version 1.0.0-alpha1
*/
export default class AuthApi {
  /**
    * Constructs a new AuthApi.
    * @alias module:umschlag/api/AuthApi
    * @class
    * @param {module:umschlag/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:umschlag/ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Authenticate an user by credentials
     * @param {module:umschlag/model/AuthLogin} authLogin The credentials to authenticate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/AuthToken} and HTTP response
     */
  loginUserWithHttpInfo (authLogin) {
    let postBody = authLogin
    // verify the required parameter 'authLogin' is set
    if (authLogin === undefined || authLogin === null) {
      throw new Error("Missing the required parameter 'authLogin' when calling loginUser")
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
    let returnType = AuthToken
    return this.apiClient.callApi(
      '/auth/login', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Authenticate an user by credentials
     * @param {module:umschlag/model/AuthLogin} authLogin The credentials to authenticate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/AuthToken}
     */
  loginUser (authLogin) {
    return this.loginUserWithHttpInfo(authLogin)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Refresh an auth token before it expires
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/AuthToken} and HTTP response
     */
  refreshAuthWithHttpInfo () {
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
    let returnType = AuthToken
    return this.apiClient.callApi(
      '/auth/refresh', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Refresh an auth token before it expires
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/AuthToken}
     */
  refreshAuth () {
    return this.refreshAuthWithHttpInfo()
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Verify validity for an authentication token
     * @param {String} token A token that have to be checked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:umschlag/model/AuthVerify} and HTTP response
     */
  verifyAuthWithHttpInfo (token) {
    let postBody = null
    // verify the required parameter 'token' is set
    if (token === undefined || token === null) {
      throw new Error("Missing the required parameter 'token' when calling verifyAuth")
    }

    let pathParams = {
      'token': token
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
    let returnType = AuthVerify
    return this.apiClient.callApi(
      '/auth/verify/{token}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Verify validity for an authentication token
     * @param {String} token A token that have to be checked
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:umschlag/model/AuthVerify}
     */
  verifyAuth (token) {
    return this.verifyAuthWithHttpInfo(token)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }
}
