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
 * The TeamUserParams model module.
 * @module umschlag/model/TeamUserParams
 * @version 1.0.0-alpha1
 */
class TeamUserParams {
  /**
     * Constructs a new <code>TeamUserParams</code>.
     * @alias module:umschlag/model/TeamUserParams
     * @param user {String}
     * @param perm {module:umschlag/model/TeamUserParams.PermEnum}
     */
  constructor (user, perm) {
    TeamUserParams.initialize(this, user, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, user, perm) {
    obj['user'] = user
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>TeamUserParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:umschlag/model/TeamUserParams} obj Optional instance to populate.
     * @return {module:umschlag/model/TeamUserParams} The populated <code>TeamUserParams</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new TeamUserParams()

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String')
      }
      if (data.hasOwnProperty('perm')) {
        obj['perm'] = ApiClient.convertToType(data['perm'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} user
 */
TeamUserParams.prototype['user'] = undefined

/**
 * @member {module:umschlag/model/TeamUserParams.PermEnum} perm
 */
TeamUserParams.prototype['perm'] = undefined

/**
 * Allowed values for the <code>perm</code> property.
 * @enum {String}
 * @readonly
 */
TeamUserParams['PermEnum'] = {

  /**
     * value: "user"
     * @const
     */
  'user': 'user',

  /**
     * value: "admin"
     * @const
     */
  'admin': 'admin',

  /**
     * value: "owner"
     * @const
     */
  'owner': 'owner'
}

export default TeamUserParams
