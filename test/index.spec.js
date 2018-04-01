/* global describe, it */

import mock from 'xhr-mock'
// import sinon from 'sinon'
import assert from 'assert'

import UmschlagClient from '../src/index'

mock.setup()

describe('Umschlag Client', () => {
  describe('dummy', () => {
    it('fake works as expected', () => {
      let client = new UmschlagClient()

      assert(client !== undefined)
    })
  })
})
