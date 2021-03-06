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

import ApiClient from '../ApiClient'

/**
 * The AuthVerify model module.
 * @module umschlag/model/AuthVerify
 * @version 1.0.0-alpha1
 */
class AuthVerify {
  /**
     * Constructs a new <code>AuthVerify</code>.
     * @alias module:umschlag/model/AuthVerify
     * @param username {String}
     * @param createdAt {Date}
     */
  constructor (username, createdAt) {
    AuthVerify.initialize(this, username, createdAt)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, username, createdAt) {
    obj['username'] = username
    obj['created_at'] = createdAt
  }

  /**
     * Constructs a <code>AuthVerify</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:umschlag/model/AuthVerify} obj Optional instance to populate.
     * @return {module:umschlag/model/AuthVerify} The populated <code>AuthVerify</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new AuthVerify()

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String')
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date')
      }
    }
    return obj
  }
}

/**
 * @member {String} username
 */
AuthVerify.prototype['username'] = undefined

/**
 * @member {Date} created_at
 */
AuthVerify.prototype['created_at'] = undefined

export default AuthVerify
