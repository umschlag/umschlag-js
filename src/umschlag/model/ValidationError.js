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
import ValidationErrorErrors from './ValidationErrorErrors'

/**
 * The ValidationError model module.
 * @module umschlag/model/ValidationError
 * @version 1.0.0-alpha1
 */
class ValidationError {
  /**
     * Constructs a new <code>ValidationError</code>.
     * Validation error which shows failed fields
     * @alias module:umschlag/model/ValidationError
     * @param status {Number}
     * @param message {String}
     */
  constructor (status, message) {
    ValidationError.initialize(this, status, message)
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
     * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:umschlag/model/ValidationError} obj Optional instance to populate.
     * @return {module:umschlag/model/ValidationError} The populated <code>ValidationError</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ValidationError()

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number')
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String')
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ValidationErrorErrors])
      }
    }
    return obj
  }
}

/**
 * @member {Number} status
 */
ValidationError.prototype['status'] = undefined

/**
 * @member {String} message
 */
ValidationError.prototype['message'] = undefined

/**
 * @member {Array.<module:umschlag/model/ValidationErrorErrors>} errors
 */
ValidationError.prototype['errors'] = undefined

export default ValidationError
