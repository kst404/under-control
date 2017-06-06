'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (fragment) {
  var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (callback) {
    //TODO: implement custom handlers (second argument)

    function walker(props) {
      var keypath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (props && (typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object' && !Array.isArray(props)) {
        return Object.getOwnPropertyNames(props).map(function (k) {
          return _defineProperty({}, k, walker(props[k], keypath.concat(k)));
        }).reduce(function (res, el) {
          return Object.assign(res, el);
        }, {});
      } else {
        return function (e) {
          return callback(keypath.concat().reverse().reduce(function (res, el) {
            return _defineProperty({}, el, res);
          }, e.target.value));
        };
      }
    }

    return walker(fragment);
  };
};