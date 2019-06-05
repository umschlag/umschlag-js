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
 * The GeneralError model module.
 * @module umschlag/model/GeneralError
 * @version 1.0.0-alpha1
 */
class GeneralError {
  /**
     * Constructs a new <code>GeneralError</code>.
     * General error for regular HTTP status codes
     * @alias module:umschlag/model/GeneralError
     * @param status {Number}
     * @param message {String}
     */
  constructor (status, message) {
    GeneralError.initialize(this, status, message)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, status, message) {
    obj['status'] = status
    obj['message'] = message
  }

  /**
     * Constructs a <code>GeneralError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:umschlag/model/GeneralError} obj Optional instance to populate.
     * @return {module:umschlag/model/GeneralError} The populated <code>GeneralError</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new GeneralError()

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number')
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {Number} status
 */
GeneralError.prototype['status'] = undefined

/**
 * @member {String} message
 */
GeneralError.prototype['message'] = undefined

export default GeneralError
