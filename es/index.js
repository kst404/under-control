var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export default (function (fragment) {
  var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (callback) {
    //TODO: write test for custom handlers (second argument)

    function runner(props) {
      var keypath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (props && (typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object' && !Array.isArray(props)) {
        return Object.getOwnPropertyNames(props).map(function (k) {
          return _defineProperty({}, k, runner(props[k], [].concat(_toConsumableArray(keypath), [k])));
        }).reduce(function (res, el) {
          return Object.assign(res, el);
        }, {});
      } else {
        var reversedKeypath = [].concat(_toConsumableArray(keypath)).reverse();
        return function (e) {
          return callback(reversedKeypath.reduce(function (res, el) {
            return _defineProperty({}, el, res);
          }, e.target.value));
        };
      }
    }

    return Object.assign({}, runner(fragment), handlers);
  };
});