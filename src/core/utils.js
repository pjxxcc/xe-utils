'use strict'

function XEUtils () {}

XEUtils.version = '1.5.16-beta.0'
XEUtils.mixin = function (methods) {
  return Object.assign(XEUtils, methods)
}

module.exports = XEUtils
