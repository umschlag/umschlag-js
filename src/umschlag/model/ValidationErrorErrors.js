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
 * The ValidationErrorErrors model module.
 * @module umschlag/model/ValidationErrorErrors
 * @version 1.0.0-alpha1
 */
class ValidationErrorErrors {
  /**
     * Constructs a new <code>ValidationErrorErrors</code>.
     * @alias module:umschlag/model/ValidationErrorErrors
     */
  constructor () {
    ValidationErrorErrors.initialize(this)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj) {
  }

  /**
     * Constructs a <code>ValidationErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:umschlag/model/ValidationErrorErrors} obj Optional instance to populate.
     * @return {module:umschlag/model/ValidationErrorErrors} The populated <code>ValidationErrorErrors</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ValidationErrorErrors()

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String')
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} field
 */
ValidationErrorErrors.prototype['field'] = undefined

/**
 * @member {String} message
 */
ValidationErrorErrors.prototype['message'] = undefined

export default ValidationErrorErrors
