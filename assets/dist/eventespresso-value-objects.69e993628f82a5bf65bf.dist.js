this["eejs"] = this["eejs"] || {}; this["eejs"]["valueObjects"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/vo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/vo/currency.js":
/*!***********************************!*\
  !*** ./assets/src/vo/currency.js ***!
  \***********************************/
/*! exports provided: Currency, SiteCurrency, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteCurrency", function() { return SiteCurrency; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_6__);





/**
 * External imports
 */



/**
 * A value object representing currency values
 */

var Currency =
/*#__PURE__*/
function () {
  /**
   * The ISO 4217 code identifying the currency (eg. 'USD')
   * @type {string}
   */

  /**
   * The singular label for the currency (eg. 'Dollar');
   * @type {string}
   */

  /**
   * The plural label for the currency (eg. 'Dollars');
   * @type {string}
   */

  /**
   * The currency symbol (eg. '$');
   * @type {string}
   */

  /**
   * Whether the currency symbol is displayed before or after the value.
   * @type {boolean}
   */

  /**
   * The precision for the value (eg. 10.02 is 2, 10.123 is 3). The number of
   * decimal places can be used to calculate the number of subunits for the
   * currency - subunits = pow( 10, decimalPlaces).
   * @type {number}
   */

  /**
   * The symbol used for the decimal mark (eg. '.')
   * @type {string}
   */

  /**
   * The symbol used to split up thousands in the value (eg. ',')
   * @type {string}
   */

  /**
   * The number of fractional divisions of a currency's main unit.  If not
   * provided, then it is automatically calculated from the decimalPlaces
   * value.
   * @type {number}
   */

  /**
   * Constructor
   * @param {{}} currencyConfig An object containing the configuration for
   * this currency value object.  On construction, the Currency object is
   * frozen so that it becomes immutable.
   */
  function Currency(currencyConfig) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Currency);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "code", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "singularLabel", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "pluralLabel", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "sign", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "signB4", true);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "decimalPlaces", 2);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "decimalMark", '.');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "thousandsSeparator", ',');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "subunits", 100);

    Currency.validateCurrencyConfig(currencyConfig);
    this.code = currencyConfig.code;
    this.singularLabel = currencyConfig.singularLabel || '';
    this.pluralLabel = currencyConfig.pluralLabel || '';
    this.sign = currencyConfig.sign;
    this.signB4 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(currencyConfig.signB4) ? this.signB4 : currencyConfig.signB4;
    this.decimalPlaces = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(currencyConfig.decimalPlaces) ? this.decimalPlaces : currencyConfig.decimalPlaces;
    this.decimalMark = currencyConfig.decimalMark || this.decimalMark;
    this.thousandsSeparator = currencyConfig.thousandsSeparator || this.thousandsSeparator;
    this.subunits = currencyConfig.subunits || Math.pow(10, this.decimalPlaces);
    Object.freeze(this);
  }
  /**
   * Returns the currency properties as an object formatted for the
   * accounting-js library configuration.
   * @return {{}}  An object shaped for what the accounting-js library expects
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Currency, [{
    key: "toAccountingSettings",
    value: function toAccountingSettings() {
      var decimalInfo = {
        decimal: this.decimalMark,
        thousand: this.thousandsSeparator,
        precision: this.decimalPlaces
      };
      return {
        currency: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
          symbol: this.sign,
          format: {
            pos: this.signB4 ? '%s%v' : '%v%s',
            neg: this.signB4 ? '- $s%v' : '- %v%s',
            zero: this.signB4 ? '%s%v' : '%v%s'
          }
        }, decimalInfo),
        number: decimalInfo
      };
    }
    /**
     * Returns JSON representation of this object.
     * @return {Object} Function returning the object to be serialized by
     * JSON.stringify
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        code: this.code,
        singularLabel: this.singularLabel,
        pluralLabel: this.pluralLabel,
        sign: this.sign,
        signB4: this.signB4,
        decimalMark: this.decimalMark,
        thousandsSeparator: this.thousandsSeparator,
        subunits: this.subunits,
        decimalPlaces: this.decimalPlaces
      };
    }
    /**
     * This validates whether the passed in config has the required properties
     * (and correct types) for constructing a Currency object.
     *
     * @param {{}} config
     * @throws {Exception}
     * @throws {TypeError}
     */

  }]);

  return Currency;
}();
/**
 * Export of a Currency Value object created from a currency config provided.
 * This catches any exception and triggers a console error.
 *
 * @param {{}} config
 * @return {Currency|{}} If there's a problem constructing the currency object
 * an empty object is returned.
 */

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Currency, "validateCurrencyConfig", function (config) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(config)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["Exception"]('The configuration object provided to Currency must not' + ' be empty');
  }

  if (!config.code || !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.code)) {
    throw new TypeError('The configuration object provided to Currency must have ' + 'a "code" property that is a string.');
  }

  if (!config.sign || !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.sign)) {
    throw new TypeError('The configuration object provided to Currency must have a ' + '"sign" property that is a string.');
  }

  if (config.singularLabel && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.singularLabel)) {
    throw new TypeError('The singularLabel property on the configuration object ' + 'must be a string primitive.');
  }

  if (config.pluralLabel && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.pluralLabel)) {
    throw new TypeError('The pluralLabel property on the configuration object ' + 'must be a string primitive.');
  }

  if (config.signB4 && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isBoolean"])(config.signB4)) {
    throw new TypeError('The signB4 property on the configuration object ' + 'must be a boolean primitive.');
  }

  if (config.decimalPlaces && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(config.decimalPlaces)) {
    throw new TypeError('The decimalPlaces property on the configuration object ' + 'must be a number primitive');
  }

  if (config.decimalMark && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.decimalMark)) {
    throw new TypeError('The decimalMark property on the configuration object ' + 'must be a string primitive.');
  }

  if (config.thousandsSeparator && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isString"])(config.thousandsSeparator)) {
    throw new TypeError('The thousandsSeparator property on the configuration object ' + 'must be a string primitive.');
  }

  if (config.subunits && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(config.subunits)) {
    throw new TypeError('The subunits property on the configuration object ' + 'must be a number primitive.');
  }
});

var SiteCurrency = function SiteCurrency() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currency;

  try {
    currency = new Currency(config);
  } catch (e) {
    currency = {};
    warning__WEBPACK_IMPORTED_MODULE_6___default()(false, 'The Site Currency object could not be created because ' + 'of this error: ' + e.message);
  }

  return currency;
};
/* harmony default export */ __webpack_exports__["default"] = (SiteCurrency(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["CURRENCY_CONFIG"]));

/***/ }),

/***/ "./assets/src/vo/date-time/assertions.js":
/*!***********************************************!*\
  !*** ./assets/src/vo/date-time/assertions.js ***!
  \***********************************************/
/*! exports provided: validateLocale, assertLocaleIsValid, validateISO8601, assertISO8601IsValid, validateTimezone, assertTimezoneIsValid, validateIsDate, assertIsDate, validateIsOffset, assertIsOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLocale", function() { return validateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertLocaleIsValid", function() { return assertLocaleIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateISO8601", function() { return validateISO8601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertISO8601IsValid", function() { return assertISO8601IsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTimezone", function() { return validateTimezone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertTimezoneIsValid", function() { return assertTimezoneIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsDate", function() { return validateIsDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsDate", function() { return assertIsDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsOffset", function() { return validateIsOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsOffset", function() { return assertIsOffset; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * Validates whether the given locale string is a valid locale.
 *
 * @param  {string} locale
 * @return {boolean} If given locale string is not valid this will return false.
 */

function validateLocale(locale) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(locale)) {
    return false;
  }

  var originalLocale = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.locale();
  var validationLocale = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.locale(locale); // reset back to original locale

  moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.locale(originalLocale);
  return !(locale !== 'en' && validationLocale === 'en');
}
/**
 * Asserts whether given locale string is valid.  If it's not an exception is
 * thrown.
 *
 * @param {string} locale
 * @throws InvalidLocale
 */

function assertLocaleIsValid(locale) {
  if (!validateLocale(locale)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidLocale"](locale);
  }
}
/**
 * Validates whether the given string is a valid ISO8601 formatted date and
 * time string.
 *
 * Note: date regex pattern from
 * http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
 * Note: isDuration regex pattern from
 * https://github.com/cylc/cylc/issues/119#issuecomment-9435533
 *
 * @param {string} dateTimeString
 * @param {boolean} isDuration  Whether to validate for a duration format or not.
 * @return {boolean}  Returns false if the given string is not valid ISO8601
 * format
 */

function validateISO8601(dateTimeString) {
  var isDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(dateTimeString)) {
    return false;
  }

  var regex = isDuration ? /^(R\d*\/)?P(?:\d+(?:\.\d+)?Y)?(?:\d+(?:\.\d+)?M)?(?:\d+(?:\.\d+)?W)?(?:\d+(?:\.\d+)?D)?(?:T(?:\d+(?:\.\d+)?H)?(?:\d+(?:\.\d+)?M)?(?:\d+(?:\.\d+)?S)?)?$/ : /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  return regex.test(dateTimeString);
}
/**
 * Asserts whether the given string is a valid ISO8601 formatted date and time
 * string.
 *
 * @param {string} dateTimeString
 * @param {boolean} isDuration  Whether to assert for a duration format or not.
 * @throws InvalidISO8601String
 */

function assertISO8601IsValid(dateTimeString) {
  var isDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!validateISO8601(dateTimeString, isDuration)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidISO8601String"](dateTimeString);
  }
}
/**
 * Validates whether the given string is a valid timezone string.
 *
 * @param {string} timezone
 * @return {boolean} Returns false if the given string is not a valid timezone
 * string
 */

function validateTimezone(timezone) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(timezone)) {
    return false;
  }

  var dt = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.zone(timezone);
  return dt !== null;
}
/**
 * Asserts whether the given string is a valid timezone string and throws an
 * exception if it isn't.
 *
 * @param {string} timezone
 * @throws InvalidTimezone
 */

function assertTimezoneIsValid(timezone) {
  if (!validateTimezone(timezone)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__["InvalidTimezone"](timezone);
  }
}
/**
 * Validates whether the given value is an instance of the javascript Date
 * object.
 *
 * @param {Date} date
 * @return {boolean} True means the value is an instance of Date
 */

function validateIsDate(date) {
  return date instanceof Date;
}
/**
 * Asserts whether the given value is an instance of Date.
 * @param {Date} date
 * @throws TypeError
 */

function assertIsDate(date) {
  if (!validateIsDate(date)) {
    throw new TypeError('The provided value is not an instance of Date');
  }
}
/**
 * Validates whether the provided value is a valid offset
 *
 * Currently this just validates the provided value is a number. Eventually it
 * might check upper and lower limits.
 *
 * @param {number} offset
 * @return {boolean}  true means its valid.
 */

function validateIsOffset(offset) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(offset);
}
/**
 * Asserts whether the provided value is a valid offset.
 *
 * @param {number} offset
 * @throws TypeError
 */

function assertIsOffset(offset) {
  if (!validateIsOffset(offset)) {
    throw new TypeError('Offset is expected to be a number');
  }
}

/***/ }),

/***/ "./assets/src/vo/date-time/datetime.js":
/*!*********************************************!*\
  !*** ./assets/src/vo/date-time/datetime.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTime; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assertions */ "./assets/src/vo/date-time/assertions.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duration */ "./assets/src/vo/date-time/duration.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaults */ "./assets/src/vo/date-time/defaults.js");




/**
 * External imports
 */



/**
 * Internal imports
 */





/**
 * A collection of symbols used for "private" properties in the DateTime object.
 *
 * @type {
 * 	{
 * 		datetime: Symbol
 * 	}
 * }
 */

var privateProperties = {
  datetime: Symbol('DateTimePropertyDateTime')
};
/**
 * A collection of symbols used for "private" methods in the DateTime object.
 *
 * @type {
 * {
 * 	getUnitNames: Symbol,
 * 	createGettersAndSetters: Symbol,
 * 	extractMomentsFromDateTimes: Symbol,
 * 	normalizeUnitName: Symbol,
 * 	normalizeUnitObject: Symbol,
 * 	normalizeUnitValue: Symbol,
 * 	}
 * }
 */

var privateMethods = {
  getUnitNames: Symbol('DateTimeMethodGetUnitNames'),
  createGettersAndSetters: Symbol('DateTimeMethodCreateGettersAndSetters'),
  extractMomentsFromDateTimes: Symbol('DateTimeMethodExtractMomentsFromDateTimes'),
  normalizeUnitName: Symbol('DateTimeMethodNormalizeUnitName'),
  normalizeUnitObject: Symbol('DateTimeMethodNormalizeUnitObject'),
  normalizeUnitValue: Symbol('DateTimeMethodNormalizeUnitValue')
};
var validDateTimeUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
/**
 * The DateTime value object represents a single point in time.
 *
 * Internally, the DateTime class here uses `moment`.  This is an abstraction
 * loosely following the adapter pattern so that there is a common api that
 * can be depended on if in the future the internal library is switched to
 * something different (such as Luxon).
 */

var DateTime =
/*#__PURE__*/
function () {
  /**
   * The constructor for the DateTime class
   *
   * @param {string} iso8601DateString
   * @param {string|null} timezone If null, then timezone is not set.
   * @param {string} locale
   */
  function DateTime() {
    var iso8601DateString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_TIMEZONE_STRING"];
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DateTime);

    if (iso8601DateString !== '') {
      DateTime.assertISO8601IsValid(iso8601DateString);
    }

    DateTime.assertLocaleIsValid(locale);

    if (timezone === null) {
      this[privateProperties.datetime] = iso8601DateString === '' ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.utc().locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(iso8601DateString).utcOffset(iso8601DateString).locale(locale);
    } else if (timezone === DateTime.TIMEZONE_LOCAL) {
      this[privateProperties.datetime] = iso8601DateString === '' ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()().locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(iso8601DateString).locale(locale);
    } else {
      DateTime.assertTimezoneIsValid(timezone);
      this[privateProperties.datetime] = iso8601DateString === '' ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()().tz(timezone).locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.tz(iso8601DateString, timezone).locale(locale);
    }

    this[privateMethods.createGettersAndSetters]();
    Object.freeze(this);
  }
  /**
   * Indicates if the given locale is a valid locale.
   * @param {string} locale
   * @return {boolean} true means it is valid
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DateTime, [{
    key: privateMethods.getUnitNames,

    /**
     * Returns the date and time unit names
     * @return {string[]} An array of unit names
     */
    value: function value() {
      return validDateTimeUnits;
    }
    /**
     * Creates the various getter and setters for the value object.
     */

  }, {
    key: privateMethods.createGettersAndSetters,
    value: function value() {
      var _this = this;

      this[privateMethods.getUnitNames]().forEach(function (unitName) {
        // creates accessor for getting the unit value via a
        // property (eg. instance.hour)
        Object.defineProperty(_this, unitName, {
          get: function get() {
            var methodName = DateTime[privateMethods.normalizeUnitName](unitName);
            var unitValue = this[privateProperties.datetime][methodName]();
            return DateTime[privateMethods.normalizeUnitValue](unitName, unitValue, false);
          }
        }); // creates a fluent setter for the value.

        Object.defineProperty(_this, 'set' + Object(lodash__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(unitName), {
          get: function get() {
            var _this2 = this;

            return function (value) {
              return _this2.set(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, unitName, value));
            };
          }
        });
      });
    }
    /**
     * Used to set various parts of the datetime string and returns a NEW
     * instance of DateTime
     *
     * Note: this will construct a DateTime even with invalid units. Make use of
     * `isValid()` to determine whether the instance is a valid DateTime or not.
     *
     * @param {{}} setObject An object where keys are the units.
     * @return {DateTime} A new instance of DateTime.
     */

  }, {
    key: "set",
    value: function set() {
      var setObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      setObject = DateTime[privateMethods.normalizeUnitObject](setObject);
      return new DateTime(this[privateProperties.datetime].clone().set(setObject).toISOString(), this.timezone, this.locale);
    }
    /**
     * Accessor for the timezone string.
     *
     * @return {string} The timezone string
     */

  }, {
    key: "setTimezone",

    /**
     * Fluent setter for the timezone property.
     *
     * @param {string} timezone
     * @return {DateTime} Returns a new instance of DateTime
     */
    value: function setTimezone(timezone) {
      DateTime.assertTimezoneIsValid(timezone);
      return new DateTime(this[privateProperties.datetime].toISOString(), timezone, this.locale);
    }
    /**
     * Returns the number of days for the month set in this instance.
     *
     * @return {number}  The number of days in the month.
     */

  }, {
    key: "setOffset",

    /**
     * A fluent setter for the UTC offset.
     *
     * The offset provided defaults to expecting in minutes.  However if the
     * input is less than 16 and greater than -16, it will interpret the input
     * as hours instead.
     *
     * @param {number} offset
     * @return {DateTime} returns a new instance of DateTime
     */
    value: function setOffset(offset) {
      DateTime.assertIsOffset(offset);
      return DateTime.fromMoment(this[privateProperties.datetime].clone().utcOffset(offset));
    }
    /**
     * Exposes the day of the year for the date and time in the object.
     *
     *
     * @return {number} A number between 1 and 366 (depending on whether the
     * internal date and time is in a leap year or not).
     */

  }, {
    key: "setLocale",

    /**
     * A fluent setter for setting the locale.
     *
     * @param {string} locale
     * @return {DateTime} a new instance of DateTime equivalent to this one but
     * with different locale.
     */
    value: function setLocale(locale) {
      DateTime.assertLocaleIsValid(locale);
      return DateTime.fromMoment(this[privateProperties.datetime].clone().locale(locale));
    }
    /**
     * Whether this DateTime instance is valid.
     *
     * Typically an invalid state is achieved when the internal moment is
     * invalid.  This can happen when the moment instance is created with
     * invalid parameters.
     *
     * Note: with moment.timezone (which is the internal library),
     * moment.isValid() could return true, false or a string for why it's
     * invalid.  This is why a strict equality check is done for whether it is
     * true or not.
     *
     * @return {boolean}  True means the instance is valid.
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return this[privateProperties.datetime].isValid() === true;
    }
    /**
     * Returns the difference between two DateTime instances as a Duration.
     *
     * @param {DateTime} otherDateTime
     * @return {Duration} An instance of Duration representing the difference
     * between the two DateTime objects.
     */

  }, {
    key: "diff",
    value: function diff(otherDateTime) {
      DateTime.assertIsDateTime(otherDateTime);
      return new _duration__WEBPACK_IMPORTED_MODULE_8__["default"](moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.duration(this[privateProperties.datetime].diff(otherDateTime[privateProperties.datetime])));
    }
    /**
     * Returns the difference between this DateTime and "now" as a Duration.
     * @return {Duration} An instance of Duration representing the difference
     * between this DateTime and "now"
     */

  }, {
    key: "diffNow",
    value: function diffNow() {
      return new _duration__WEBPACK_IMPORTED_MODULE_8__["default"](moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.duration(this[privateProperties.datetime].diff(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()())));
    }
    /**
     * Set the value of this DateTime to the end (i.e. the last millisecond) of
     * a unit of time.
     * @param {string} unit
     * @return {DateTime} Returns a new DateTime instance.
     */

  }, {
    key: "endOf",
    value: function endOf(unit) {
      return DateTime.fromMoment(this[privateProperties.datetime].clone().endOf(unit));
    }
    /**
     * Compares this DateTime with provided DateTime and returns whether they
     * are equal to each other.
     *
     * The two DateTimes are considered equal if they represent the same
     * millisecond, have the same zone and location, and are both valid.
     *
     * @param {DateTime} otherDateTime
     * @return {boolean}  True means they are equal
     */

  }, {
    key: "equals",
    value: function equals(otherDateTime) {
      DateTime.assertIsDateTime(otherDateTime);
      return this[privateProperties.datetime].isSame(otherDateTime[privateProperties.datetime]);
    }
    /**
     * Whether this DateTime is in the same unit of time as another DateTime
     *
     * eg. DateTime.fromLocal().hasSame( otherDT, 'day' ) //~> true if both the
     * same calendar day.
     *
     * Note: this will match all units equal or larger.  For example, passing in
     * `month` will check `month` and `year`.  So it's not only checking if the
     * two dates share the same month, but that they are the same month in the
     * same year.  If you passed in day, it would return whether the provided
     * DateTime is in the same day, month and year as this DateTime.
     *
     * @param {DateTime} otherDateTime
     * @param {string} unit
     * @return {boolean}  True means they are both in the same time for the
     * given unit.
     */

  }, {
    key: "hasSame",
    value: function hasSame(otherDateTime, unit) {
      DateTime.assertIsDateTime(otherDateTime);
      return this[privateProperties.datetime].isSame(otherDateTime[privateProperties.datetime], unit);
    }
    /**
     * Subtract a period of time (represented by a Duration) from this DateTime
     * and return the resulting DateTime.
     *
     * @param {Duration} duration
     * @return {DateTime} A new instance of DateTime for the new date and time.
     */

  }, {
    key: "minus",
    value: function minus(duration) {
      _duration__WEBPACK_IMPORTED_MODULE_8__["default"].assertIsValidDuration(duration);
      return DateTime.fromMoment(this[privateProperties.datetime].clone().subtract(duration.toObject()));
    }
    /**
     * Add a period of time (represented by a Duration) to this DateTime and
     * return the resulting DateTime
     * @param {Duration} duration
     * @return {DateTime} A new instance of DateTime for the new date and time.
     */

  }, {
    key: "plus",
    value: function plus(duration) {
      _duration__WEBPACK_IMPORTED_MODULE_8__["default"].assertIsValidDuration(duration);
      return DateTime.fromMoment(this[privateProperties.datetime].clone().add(duration.toObject()));
    }
    /**
     * Set the value of this DateTime to the beginning of a specified unit of
     * time and return a new DateTime representing that.
     *
     * eg.
     * startOf( DateTime.UNIT_YEAR ) //sets to January 1st, 12:00am this
     * year.
     * startOf( DateTime.UNIT_MONTH ) //sets to the first of this month, 12:00am
     *
     * @param {string} unit
     * @return {DateTime} A new instance of DateTime
     */

  }, {
    key: "startOf",
    value: function startOf(unit) {
      return DateTime.fromMoment(this[privateProperties.datetime].clone().startOf(unit));
    }
    /**
     * Returns a string representation of this DateTime formatted according to
     * the specified format string.
     *
     * @link https://momentjs.com/docs/#/displaying/format/
     * @see Moment format ^^ section for the available formats that can be used.
     *
     * An empty format value will return the string formatted in ISO 8601 with
     * any offset included.
     *
     * Without any argument passed, the format will be whatever string the
     * format is server side.
     *
     * @param {string} format
     * @return {string}  The date and time displayed according to the provided
     * format.
     */

  }, {
    key: "toFormat",
    value: function toFormat() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_FORMAT"];
      return this[privateProperties.datetime].format(format);
    }
    /**
     * Returns a string representation of this DateTime formatted according to
     * the ISO 8601 standard.
     *
     * If `inUTC` is true (default) then `toISO` will return the ISO string in
     * UTC. Otherwise it will include the offset information for the internal
     * timezone/offset on the moment in time.
     *
     * @param {boolean} inUTC
     * @return {string} An ISO8601 string
     */

  }, {
    key: "toISO",
    value: function toISO() {
      var inUTC = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return inUTC ? this[privateProperties.datetime].toISOString() : this[privateProperties.datetime].toISOString(true);
    }
    /**
     * Returns the value for this DateTime as a javascript Date object.
     *
     * @return {Date} A javascript Date instance
     */

  }, {
    key: "toJSDate",
    value: function toJSDate() {
      return this[privateProperties.datetime].toDate();
    }
    /**
     * When serializing an object to JSON, if there is a DateTime instance, it
     * will be represented as an ISO8601 string.
     *
     * @return {string} An ISO 8601 string
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this[privateProperties.datetime].toISOString();
    }
    /**
     * Converts a DateTime to whatever the "local" time is.
     *
     * @return {DateTime} a new instance of the DateTime
     */

  }, {
    key: "toLocal",
    value: function toLocal() {
      return DateTime.fromMoment(this[privateProperties.datetime].clone().local());
    }
    /**
     * Returns the milliseconds since the Unix Epoch for the current DateTime
     * instance.
     * @return {number} Number of milliseconds since Unix Epoch
     */

  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.valueOf();
    }
    /**
     * Returns a simple object containing year, month, day, hour,
     * minute, second, and millisecond.
     * @return {Object} An object with year, month, day, hour, minute, second,
     * and millisecond.
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var datetime = this[privateProperties.datetime].toObject();
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["reduce"])(datetime, function (result, value, key) {
        key = DateTime[privateMethods.normalizeUnitName](key);
        result[key] = DateTime[privateMethods.normalizeUnitValue](key, value, false);
        return result;
      }, {});
    }
    /**
     * Converts the DateTime's timezone to UTC.
     *
     * @return {DateTime} A new instance of DateTime
     */

  }, {
    key: "toUTC",
    value: function toUTC() {
      return DateTime.fromMoment(this[privateProperties.datetime].clone().utc());
    }
    /**
     * Returns an english string representation of this DateTime when the instance is
     * coerced to a string (similar format to JS `Date.toString()`.
     *
     * eg `Tue Dec 25 2018 10:15:00 GMT+0000`
     *
     * @return {string} A string representation of this DateTime
     */

  }, {
    key: "toString",
    value: function toString() {
      return this[privateProperties.datetime].toString();
    }
    /**
     * When DateTime is coerced to number this will ensure its displayed as the
     * number of milliseconds since the Unix Epoch for the current DateTime
     *
     * @return {number} Amount of milliseconds since the Unix Epoch
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this[privateProperties.datetime].valueOf();
    }
  }, {
    key: "timezone",
    get: function get() {
      return this[privateProperties.datetime].tz();
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      return this[privateProperties.datetime].daysInMonth();
    }
    /**
     * Whether the current instance in time is currently in Daylight Savings
     * Time.
     *
     * @return {boolean} True means it is currently in Daylight Savings Time.
     */

  }, {
    key: "isInDST",
    get: function get() {
      return this[privateProperties.datetime].isDST();
    }
    /**
     * Whether the current instance in time is currently in a leap year.
     *
     * @return {boolean} True means this date time is in a leap year.
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return this[privateProperties.datetime].isLeapYear();
    }
    /**
     * Returns the offset from UTC for the current instance in time (in minutes).
     * @return {number}  The offset is in minutes
     */

  }, {
    key: "offset",
    get: function get() {
      return this[privateProperties.datetime].utcOffset();
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      return this[privateProperties.datetime].dayOfYear();
    }
    /**
     * Exposes the quarter for the date and time in the object.
     *
     * @return {number} A number between 1 and 4
     */

  }, {
    key: "quarter",
    get: function get() {
      return this[privateProperties.datetime].quarter();
    }
    /**
     * Exposes the ISO number of the week for the date and time in the object.
     * @link https://en.wikipedia.org/wiki/ISO_week_date
     * @return {number} Will be a number between 1 and 52ish
     */

  }, {
    key: "isoWeekNumber",
    get: function get() {
      return this[privateProperties.datetime].isoWeek();
    }
    /**
     * Exposes the ISO number for the week year for the date and time in the
     * object.
     * @link https://en.wikipedia.org/wiki/ISO_week_date
     * @return {number}  Will be a number representing a year.
     */

  }, {
    key: "isoWeekYear",
    get: function get() {
      return this[privateProperties.datetime].isoWeekYear();
    }
    /**
     * Exposes the ISO number for the day of the week for the date and time in
     * the object.
     * @link https://en.wikipedia.org/wiki/ISO_week_date
     * @return {number} A number between 1 and 7 (Monday is 1 and Sunday is 7)
     */

  }, {
    key: "isoWeekDay",
    get: function get() {
      return this[privateProperties.datetime].isoWeekday();
    }
    /**
     * Exposes the number of weeks in this DateTime's year.
     * @link https://en.wikipedia.org/wiki/ISO_week_date
     *
     * @return {number} The number of weeks in the ISO year.
     */

  }, {
    key: "isoWeeksInWeekYear",
    get: function get() {
      return this[privateProperties.datetime].isoWeeksInYear();
    }
    /**
     * Returns what the set locale is for this DateTime
     * @return {string} A locale string
     */

  }, {
    key: "locale",
    get: function get() {
      return this[privateProperties.datetime].locale();
    }
  }], [{
    key: "validateLocale",
    value: function validateLocale(locale) {
      return _assertions__WEBPACK_IMPORTED_MODULE_7__["validateLocale"](locale);
    }
    /**
     * Asserts if the given locale is valid and throws an error if not.
     * @param {string} locale
     * @throws InvalidLocale
     */

  }, {
    key: "assertLocaleIsValid",
    value: function assertLocaleIsValid(locale) {
      _assertions__WEBPACK_IMPORTED_MODULE_7__["assertLocaleIsValid"](locale);
    }
    /**
     * Indicates if the given ISO8601 string is valid.
     * @param {string} dateTimeString
     * @return {boolean} true means it is valid.
     */

  }, {
    key: "validateISO8601",
    value: function validateISO8601(dateTimeString) {
      return _assertions__WEBPACK_IMPORTED_MODULE_7__["validateISO8601"](dateTimeString);
    }
    /**
     * Asserts if the given string is a valid ISO 8601 string.
     * @param {string} dateTimeString
     * @throws InvalidISO8601String
     */

  }, {
    key: "assertISO8601IsValid",
    value: function assertISO8601IsValid(dateTimeString) {
      _assertions__WEBPACK_IMPORTED_MODULE_7__["assertISO8601IsValid"](dateTimeString);
    }
    /**
     * Indicates if the given string is a valid timezone
     * @param {string} timezone
     * @return {boolean} true means it is valid.
     */

  }, {
    key: "validateTimezone",
    value: function validateTimezone(timezone) {
      return _assertions__WEBPACK_IMPORTED_MODULE_7__["validateTimezone"](timezone);
    }
    /**
     * Asserts whether the given string is a valid timezone string.
     * @param {string} timezone
     * @throws InvalidTimezone
     */

  }, {
    key: "assertTimezoneIsValid",
    value: function assertTimezoneIsValid(timezone) {
      _assertions__WEBPACK_IMPORTED_MODULE_7__["assertTimezoneIsValid"](timezone);
    }
    /**
     * Validates whether the provided value is a valid offset
     *
     * Currently this just validates the provided value is a number. Eventually it
     * might check upper and lower limits.
     *
     * @param {number} offset
     * @return {boolean}  true means its valid.
     */

  }, {
    key: "validateIsOffset",
    value: function validateIsOffset(offset) {
      return _assertions__WEBPACK_IMPORTED_MODULE_7__["validateIsOffset"](offset);
    }
    /**
     * Asserts whether the provided value is a valid offset.
     *
     * @param {number} offset
     * @throws TypeError
     */

  }, {
    key: "assertIsOffset",
    value: function assertIsOffset(offset) {
      _assertions__WEBPACK_IMPORTED_MODULE_7__["assertIsOffset"](offset);
    }
    /**
     * Indicates whether the provided value is an instance of DateTime
     * @param {DateTime} datetime
     * @return {boolean} returns true if it is an instance of DateTime
     */

  }, {
    key: "validateIsDateTime",
    value: function validateIsDateTime(datetime) {
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["instanceOf"])(datetime, 'DateTime') || Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["instanceOf"])(datetime, 'ServerDateTime');
    }
    /**
     * Asserts whether the provided value is an instance of DateTime
     * @param {DateTime} datetime
     * @throws TypeError
     */

  }, {
    key: "assertIsDateTime",
    value: function assertIsDateTime(datetime) {
      if (!DateTime.validateIsDateTime(datetime)) {
        throw new TypeError('The provided value is not an instance of DateTime');
      }
    }
    /**
     * Validates whether the given value is an instance of the javascript Date
     * object.
     *
     * @param {Date} date
     * @return {boolean} True means the value is an instance of Date
     */

  }, {
    key: "validateIsDate",
    value: function validateIsDate(date) {
      return _assertions__WEBPACK_IMPORTED_MODULE_7__["validateIsDate"](date);
    }
    /**
     * Asserts whether the given value is an instance of Date.
     * @param {Date} date
     * @throws TypeError
     */

  }, {
    key: "assertIsDate",
    value: function assertIsDate(date) {
      _assertions__WEBPACK_IMPORTED_MODULE_7__["assertIsDate"](date);
    }
    /**
     * Indicates whether the provided value is an instance of DateTime and is
     * a "valid" datetime (meaning the instance was constructed with valid
     * arguments).
     * @param {DateTime} datetime
     * @return {boolean} true means it is valid.
     */

  }, {
    key: "isValid",
    value: function isValid(datetime) {
      return DateTime.validateIsDateTime(datetime) && datetime.isValid();
    }
    /**
     * Asserts whether the provided value is an instance of DateTime and is
     * a "valid" datetime (meaning the instance was constructed with valid
     * arguments)
     * @param {DateTime} datetime
     * @throws InvalidDateTime
     */

  }, {
    key: "assertIsValid",
    value: function assertIsValid(datetime) {
      if (!DateTime.isValid(datetime)) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidDateTime"](datetime);
      }
    }
    /**
     * A private internal helper method that is used to extract all moment
     * instances from the provided DateTimes (passed in as arguments).
     * @param {...DateTime} datetimes
     * @return {Moment[]} An array of moment instances extracted from the
     * DateTimes
     */

  }, {
    key: privateMethods.extractMomentsFromDateTimes,
    value: function value() {
      for (var _len = arguments.length, datetimes = new Array(_len), _key = 0; _key < _len; _key++) {
        datetimes[_key] = arguments[_key];
      }

      return datetimes.map(function (datetime) {
        DateTime.assertIsDateTime(datetime);
        return datetime[privateProperties.datetime];
      });
    }
    /**
     * Given an indefinite number of DateTimes as arguments, this will return a
     * new DateTime that represents the latest point in time.
     * @param {...DateTime} datetimes
     * @return {DateTime} A new DateTime representing the latest point of time.
     */

  }, {
    key: "max",
    value: function max() {
      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.max(DateTime[privateMethods.extractMomentsFromDateTimes].apply(DateTime, arguments)));
    }
    /**
     * Given an indefinite number of DateTimes as arguments, this will return a
     * new DateTime that represents the earliest point in time.
     * @param {...DateTime} datetimes
     * @return {DateTime} A new DateTime representing the earliest point in
     * time.
     */

  }, {
    key: "min",
    value: function min() {
      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.min(DateTime[privateMethods.extractMomentsFromDateTimes].apply(DateTime, arguments)));
    }
    /**
     * Constructs a DateTime from an instance of moment.
     *
     * @param {moment} momentInstance
     * @return {DateTime} An instance of DateTime
     */

  }, {
    key: "fromMoment",
    value: function fromMoment(momentInstance) {
      if (!moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.isMoment(momentInstance)) {
        throw new TypeError('Requires an instance of moment.');
      } // this would account for client code that is using `moment` but not
      // using `moment-timezone`.


      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(momentInstance.tz) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(momentInstance.tz()) && momentInstance.tz() !== 'UTC' ? new DateTime(momentInstance.toISOString(), momentInstance.tz(), momentInstance.locale()) : new DateTime(momentInstance.toISOString(true), null, momentInstance.locale());
    }
    /**
     * Constructs a DateTime from an ISO 8601 string.
     *
     * @param {string} ISOString
     * @param {string} timezone
     * @param {string} locale
     * @return {DateTime} An instance of DateTime
     */

  }, {
    key: "fromISO",
    value: function fromISO(ISOString) {
      var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_TIMEZONE_STRING"];
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(ISOString)) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidISO8601String"](ISOString);
      }

      return new DateTime(ISOString, timezone, locale);
    }
    /**
     * Constructs a DateTime from an ISO 8601 String
     * Differs with `fromISO` in that this allows passing a offset value
     * instead of a timezone string.
     *
     * @param {string} ISOString
     * @param {number} offset  In minutes unless > -16 or < -16 in which case it
     * is treated as hours.
     * @param {string} locale
     * @return {DateTime}  An instance of DateTime
     */

  }, {
    key: "fromISOWithOffset",
    value: function fromISOWithOffset(ISOString) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_OFFSET"];
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertISO8601IsValid(ISOString);
      DateTime.assertIsOffset(offset);
      DateTime.assertLocaleIsValid(locale);
      var datetime = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.utc(ISOString).utcOffset(offset, true).locale(locale);
      return new DateTime.fromMoment(datetime);
    }
    /**
     * Constructs a DateTime from a javascript Date object.
     *
     * @param {Date} date
     * @param {string} timezone
     * @param {string} locale
     * @return {DateTime} Returns an instance of DateTime
     */

  }, {
    key: "fromJSDate",
    value: function fromJSDate(date) {
      var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_TIMEZONE_STRING"];
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertIsDate(date);
      DateTime.assertTimezoneIsValid(timezone);
      DateTime.assertLocaleIsValid(locale);
      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(date).tz(timezone).locale(locale));
    }
    /**
     * Constructs a Datetime from a javascript Date object.
     *
     * The difference between this and fromJSDate is that this can be set with
     * an offset vs a timezone string.
     *
     * @param {Date} date
     * @param {number} offset
     * @param {string} locale
     * @return {DateTime} Returns an instance of DateTime
     */

  }, {
    key: "fromJSDateWithOffset",
    value: function fromJSDateWithOffset(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_OFFSET"];
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertIsDate(date);
      DateTime.assertIsOffset(offset);
      DateTime.assertLocaleIsValid(locale);
      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(date).utcOffset(offset).locale(locale));
    }
    /**
     * Constructs a DateTime (in UTC) with milliseconds from epoch.
     *
     * @param {number} milliseconds
     * @param {string} locale
     * @return {DateTime} Returns an instance of DateTime
     * @throws TypeError
     */

  }, {
    key: "fromMilliseconds",
    value: function fromMilliseconds(milliseconds) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertLocaleIsValid(locale);

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(milliseconds)) {
        throw new TypeError('Provided value must be a number ' + 'representing milliseconds from the epoch');
      }

      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(milliseconds).utc().locale(locale));
    }
    /**
     * Constructs a DateTime in UTC with seconds from the epoch.
     *
     * @param {number} seconds
     * @param {string} locale
     * @return {DateTime} An instance of DateTime
     * @throws TypeError
     */

  }, {
    key: "fromUnix",
    value: function fromUnix(seconds) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertLocaleIsValid(locale);

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(seconds)) {
        throw new TypeError('Provided value must be a number ' + 'representing seconds from the epoch');
      }

      return DateTime.fromMoment(moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.unix(seconds).utc().locale(locale));
    }
    /**
     * Constructs a DateTime from an object of values assuming its in "local"
     * time (if run via browser or server if run server side).
     *
     * The object is expected to be a representation of this instance in time:
     * Eg.
     * { year: 2018, month: 12, day: 25, hour: 0, minute: 15, seconds: 0 }
     *
     * Pass an empty values value if you want the instance in time to represent
     * "now".
     *
     * @param {Object} values
     * @param {string} locale
     * @return {DateTime} An instance of DateTime
     * @throws InvalidArgument
     */

  }, {
    key: "fromLocal",
    value: function fromLocal(values) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertLocaleIsValid(locale);
      values = DateTime[privateMethods.normalizeUnitObject](values);
      var datetime = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(values) ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()().locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(values).locale(locale);

      if (datetime.isValid() !== true) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidArgument"]('Double-check the values you sent in.', values);
      }

      return DateTime.fromMoment(datetime);
    }
    /**
     * Constructs a DateTime from an object of values and assumes its in
     * 'UTC'.
     *
     * The object is expected to be a representation of this instance in time:
     * Eg.
     * { year: 2018, month: 12, day: 25, hour: 0, minute: 15, seconds: 0 }
     *
     * Any units not specified will be assumed to be `0`.
     *
     * Pass an empty values value if you want the instance in time to represent
     * "now".
     *
     * @param {Object} values
     * @param {string} locale
     * @return {DateTime} An instance of DateTime
     * @throws InvalidArgument
     */

  }, {
    key: "utc",
    value: function utc(values) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      DateTime.assertLocaleIsValid(locale);
      values = DateTime[privateMethods.normalizeUnitObject](values);
      var datetime = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(values) ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.utc().locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.utc(values).locale(locale);

      if (datetime.isValid() !== true) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidArgument"]('Double-check the values sent in.', values);
      }

      return DateTime.fromMoment(datetime);
    }
    /**
     * Constructs a DateTime from a configuration object.
     *
     * The configuration object can have:
     * - any of the DateTime units ('year', 'month', etc)
     * - 'locale' a string representing the locale
     * - 'timezone' a string representing the timezone
     * - 'offset' a number representing the offset from UTC this instance in
     * time represents.
     *
     * @param {Object} values
     * @return {DateTime} An instance of DateTime
     */

  }, {
    key: "fromObject",
    value: function fromObject(values) {
      var locale = values.locale || _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_VALID_LOCALE"];
      var timezone = values.timezone || _defaults__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_TIMEZONE_STRING"];
      var offset = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(values.offset) ? null : values.offset;
      var valuesForConstruct = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(values, ['locale', 'timezone', 'offset']);
      DateTime.assertLocaleIsValid(locale);

      if (offset !== null) {
        DateTime.assertIsOffset(offset);
        valuesForConstruct = DateTime[privateMethods.normalizeUnitObject](valuesForConstruct);

        var _datetime = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(valuesForConstruct) ? moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()().utcOffset(offset, true).locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.utc(valuesForConstruct).utcOffset(offset, true).locale(locale);

        if (_datetime.isValid() !== true) {
          throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidArgument"]('Double-check the configuration object sent in.', values);
        }

        return DateTime.fromMoment(_datetime);
      }

      if (timezone === DateTime.TIMEZONE_LOCAL) {
        return DateTime.fromLocal(valuesForConstruct, locale);
      }

      DateTime.assertTimezoneIsValid(timezone);
      valuesForConstruct = DateTime[privateMethods.normalizeUnitObject](valuesForConstruct);
      var datetime = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.tz(valuesForConstruct, timezone).locale(locale);

      if (datetime.isValid() !== true) {
        throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_6__["InvalidArgument"]('Double-check the configuration object sent in.', values);
      }

      return DateTime.fromMoment(datetime);
    }
    /**
     * Moment uses different names for some unit getters/setters/properties so
     * this is used to normalize a given unit name to what moment uses.
     *
     * @param {string} nameToNormalize
     * @return {string}  Normalized unit name.
     */

  }, {
    key: privateMethods.normalizeUnitName,
    value: function value(nameToNormalize) {
      var map = {
        day: 'date',
        days: 'day',
        date: 'day',
        years: 'year',
        months: 'month',
        milliseconds: 'millisecond',
        minutes: 'minute',
        seconds: 'second',
        hours: 'hour'
      };
      return map[nameToNormalize] ? map[nameToNormalize] : nameToNormalize;
    }
    /**
     * Handles normalizing unit values for internal library use.
     *
     * For example, moment zero indexes months. DateTime does not, so this
     * method helps with normalizing month values for both setting (used by
     * moment) and getting (returned to client).  This allows client code
     * to expect months in DateTime to be handled with a non-zero index.
     *
     * @param {string} unit The unit to be normalized
     * @param {mixed}  value The value for that unit
     * @param {boolean} set  Whether this should normalize for setting or
     * getting.
     * @return {mixed}  The normalized value.
     */

  }, {
    key: privateMethods.normalizeUnitValue,
    value: function value(unit, _value) {
      var set = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (unit === 'month') {
        _value = set ? _value - 1 : _value + 1;
      }

      return _value;
    }
    /**
     * Given a simple object containing units, this normalizes the object to
     * what moment recognizes.
     *
     * @param {Object} setObject
     * @param {boolean} set  true if setting the object, false if getting the
     * object
     * @return {Object} The normalized object.
     */

  }, {
    key: privateMethods.normalizeUnitObject,
    value: function value(setObject) {
      var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isObject"])(setObject)) {
        throw new TypeError('The incoming value must be an object');
      }

      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["reduce"])(setObject, function (result, value, key) {
        key = DateTime[privateMethods.normalizeUnitName](key);
        result[key] = DateTime[privateMethods.normalizeUnitValue](key, value, set);
        return result;
      }, {});
    }
  }]);

  return DateTime;
}();
/**
 * These static properties need to be defined outside of the class definition
 * because of compile issues.
 */



DateTime.UNIT_YEAR = 'year';
DateTime.UNIT_MONTH = 'month';
DateTime.UNIT_DAY = 'day';
DateTime.UNIT_HOUR = 'hour';
DateTime.UNIT_MINUTE = 'minute';
DateTime.UNIT_SECOND = 'second';
DateTime.UNIT_MILLISECOND = 'millisecond';
DateTime.TIMEZONE_LOCAL = 'local';

/***/ }),

/***/ "./assets/src/vo/date-time/defaults.js":
/*!*********************************************!*\
  !*** ./assets/src/vo/date-time/defaults.js ***!
  \*********************************************/
/*! exports provided: DEFAULT_TIMEZONE_STRING, DEFAULT_OFFSET, HAS_TIMEZONE_STRING, DEFAULT_FORMAT, DEFAULT_LOCALE, DEFAULT_VALID_LOCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEZONE_STRING", function() { return DEFAULT_TIMEZONE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFSET", function() { return DEFAULT_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_TIMEZONE_STRING", function() { return HAS_TIMEZONE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FORMAT", function() { return DEFAULT_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCALE", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VALID_LOCALE", function() { return DEFAULT_VALID_LOCALE; });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assertions */ "./assets/src/vo/date-time/assertions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External imports
 */




/**
 * Default timezone string to use.
 *
 * @type {string}
 */

var DEFAULT_TIMEZONE_STRING = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["TIMEZONE_CONFIG"].string === '' ? 'UTC' : _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["TIMEZONE_CONFIG"].string;
/**
 * Default offset
 *
 * @type {number}
 */

var DEFAULT_OFFSET = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["TIMEZONE_CONFIG"].offset;
/**
 * Whether there is a default timezone string to use.
 * This helps with determining whether to use the offset or not for constructing
 * DateTime value objects.
 *
 * @type {boolean}
 */

var HAS_TIMEZONE_STRING = DEFAULT_TIMEZONE_STRING !== 'UTC' || !(DEFAULT_TIMEZONE_STRING === 'UTC' && DEFAULT_OFFSET !== 0);
/**
 *
 * @type {string}
 */

var DEFAULT_FORMAT = _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["FORMAT_SITE_DATE"] + ' ' + _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["FORMAT_SITE_TIME"];
/**
 * Exposes what to use for the default locale.
 * @type {string}
 */

var DEFAULT_LOCALE = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["snakeCase"])(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__["SERVER_LOCALE"].user);
/**
 * This ensures that the provided locale is valid.  So if `DEFAULT_LOCALE` is
 * not valid for this environment, then a fallback of 'en' locale is used.
 *
 * @type {string}
 */

var DEFAULT_VALID_LOCALE = Object(_assertions__WEBPACK_IMPORTED_MODULE_2__["validateLocale"])(DEFAULT_LOCALE) ? DEFAULT_LOCALE : 'en';

/***/ }),

/***/ "./assets/src/vo/date-time/duration.js":
/*!*********************************************!*\
  !*** ./assets/src/vo/date-time/duration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Duration; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assertions */ "./assets/src/vo/date-time/assertions.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaults */ "./assets/src/vo/date-time/defaults.js");





/**
 * External imports
 */






/**
 * Internal imports
 */



moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default()(moment_timezone__WEBPACK_IMPORTED_MODULE_4___default.a);
/**
 * A collection of symbols used for "private" properties in the Duration object.
 * @type {
 * 	{
 * 		duration: Symbol,
 * 		values: Symbol,
 * 		isValid: Symbol,
 * 	}
 * }
 */

var privateProperties = {
  duration: Symbol('DurationPrivatePropertiesDuration'),
  durationValues: Symbol('DurationPrivatePropertiesDurationValues'),
  isValid: Symbol('DurationPrivatePropertiesIsValid')
};
/**
 * A collection of symbols used for "private" methods in the Duration object.
 * @type {
 * 	{
 * 		createGettersAndSetters: Symbol,
 * 		getAllUnitNames: Symbol,
 * 		populateValuesFromDuration: Symbol,
 * 		setValues: Symbol,
 * 	    filterValues: Symbol,
 * 	}
 * }
 */

var privateMethods = {
  createGetters: Symbol('DurationPrivateMethodsCreateGetters'),
  getAllUnitNames: Symbol('DurationPrivateMethodsGetAllUnitNames'),
  populateValuesFromDuration: Symbol('DurationPrivateMethodsPopulateValuesFromDuration'),
  setValues: Symbol('DurationPrivateMethodsSetValues'),
  filterValues: Symbol('DurationPrivateMethodsFilterValues')
};
/**
 * An array of unit names for properties in the Duration object
 * @type {string[]}
 */

var unitNames = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
/**
 * An array of derivative unit names.
 * These are accessors that are derivatives of base units.  For instance,
 * "weeks" ends up being a derivative (calculated from) the "days" unit.
 * @type {string[]}
 */

var derivativeUnitNames = ['weeks'];
/**
 * Where a DateTime object represents a single point in time, a Duration object
 * represents a length of time.
 *
 * Durations do not have a defined beginning and end date.  They are contextless.
 *
 * As an example, durations are representative of something like "2 hours" and
 * not representative of something like "between 1pm and 3pm".
 *
 * Internally, the Duration class here uses `moment.Duration`.  This is an
 * abstraction loosely following the adapter pattern so that there is a common
 * api that can be depended on if in the future the internal library is switched
 * to something different (such as Luxon).
 */

var _privateMethods$filte = privateMethods.filterValues;
var _privateMethods$setVa = privateMethods.setValues;
var _privateMethods$popul = privateMethods.populateValuesFromDuration;
var _privateMethods$getAl = privateMethods.getAllUnitNames;
var _privateMethods$creat = privateMethods.createGetters;

var Duration =
/*#__PURE__*/
function () {
  /**
   * The constructor for the Duration class.
   *
   * @param {Object|moment.Duration|string|number} values
   * Receiving a moment.Duration object is something for internal use and should not be used directly via
   * client code.
   * @param {string} locale  A valid locale string.
   * 							@link http://tools.ietf.org/html/rfc5646
   */
  function Duration(values) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_VALID_LOCALE"];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Duration);

    this[privateProperties.isValid] = true;
    _assertions__WEBPACK_IMPORTED_MODULE_10__["assertLocaleIsValid"](locale);

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(values) !== 'object') {
      values = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default.a.duration(values).locale(locale);
    }

    if (moment_timezone__WEBPACK_IMPORTED_MODULE_4___default.a.isDuration(values)) {
      this[privateProperties.duration] = values;
      this[privateMethods.populateValuesFromDuration](values);
    } else {
      values = this[privateMethods.filterValues](values);
      this[privateMethods.setValues](values);
      this[privateProperties.duration] = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default.a.duration(values).locale(locale);
    }

    this[privateMethods.createGetters]();
    Object.freeze(this);
  }
  /**
   * Create an instance of Duration from a number of milliseconds.
   * @param {number} milliseconds
   * @param {string} locale
   * @return {Duration}  An instance of Duration.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Duration, [{
    key: _privateMethods$filte,

    /**
     * This filters the incoming values and returns only key/value pairs that
     * are acceptable as duration units.
     *
     * If a invalid duration unit is discovered, a console.error is generated
     * (in non-production mode).
     *
     * @param {mixed} values
     * @return {Object} Filtered values.
     * @throws TypeError if incoming values argument is not an object.
     */
    value: function value(values) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(values) !== 'object') {
        throw new TypeError('Incoming values must be a simple object.');
      }

      var valuesToSet = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["pick"])(values, unitNames);

      if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default()(values, valuesToSet)) {
        warning__WEBPACK_IMPORTED_MODULE_8___default()(false, 'The following unexpected keys were in the configuration ' + 'object for constructing the Duration: ' + Object(lodash__WEBPACK_IMPORTED_MODULE_6__["keys"])(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["omit"])(values, unitNames)).join());
        this[privateProperties.isValid] = false;
      }

      return valuesToSet;
    }
    /**
     * Used to set the internal "private" values property.
     *
     * @param {Object} values
     * @access private
     */

  }, {
    key: _privateMethods$setVa,
    value: function value(values) {
      var _this = this;

      this[privateProperties.durationValues] = {};
      unitNames.forEach(function (unit) {
        _this[privateProperties.durationValues][unit] = values[unit] || 0;
      });
    }
    /**
     * Used to set the values "private" property from a moment.Duration object.
     *
     * @param {moment.Duration} duration
     * @access private
     */

  }, {
    key: _privateMethods$popul,
    value: function value(duration) {
      var setValues = {};
      unitNames.forEach(function (unit) {
        setValues[unit] = duration[unit]();
      });
      this[privateMethods.setValues](setValues);
    }
    /**
     * Returns an array of accessor names (that in turn are used for generating
     * private properties).
     *
     * @access private
     * @return {string[]}  Array of accessor names.
     */

  }, {
    key: _privateMethods$getAl,
    value: function value() {
      return [].concat(unitNames, derivativeUnitNames);
    }
    /**
     * Creates getters for the Duration instance from the accessor names.
     * @access private
     */

  }, {
    key: _privateMethods$creat,
    value: function value() {
      var _this2 = this;

      this[privateMethods.getAllUnitNames]().forEach(function (accessorName) {
        // creates accessor for getting the value via a property
        // eg. instance.hours
        Object.defineProperty(_this2, accessorName, {
          get: function get() {
            if (derivativeUnitNames.indexOf(accessorName) > -1) {
              return this[privateProperties.duration][accessorName]();
            }

            return this[privateProperties.durationValues][accessorName] || 0;
          }
        }); // creates `as*` methods.
        // eg `instance.asHours` would return the given duration
        // expressed as the hours unit.
        // note for units such as "years" and "months", this uses what
        // is termed as "longterm" calculation. Longterm is based on
        // a 400 year cycle averaging out the days in a month and
        // days in a year over that cycle.
        // @link https://github.com/moment/moment/blob/develop/src/lib/duration/bubble.js#L52

        var asMethodName = 'as' + Object(lodash__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(accessorName);
        Object.defineProperty(_this2, asMethodName, {
          get: function get() {
            var _this3 = this;

            return function () {
              return _this3[privateProperties.duration][asMethodName]();
            };
          }
        });
      });
    }
    /**
     * Exposes the value of locale.
     * eg. instance.locale
     * @return {string} The locale string.
     */

  }, {
    key: "setLocale",

    /**
     * Returns a new Duration instance that is identical to this except the
     * locale is changed to what was provided.
     * @param {string} locale
     * @return {Duration} A new instance of Duration
     */
    value: function setLocale(locale) {
      return new Duration(this[privateProperties.durationValues], locale);
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     *
     * For example:
     * Duration
     *     .fromObject({ years: 2, days: 5000 })
     *     .normalize()
     *     .toObject() //=> { years: 15, months: 8, days: 12 }
     *
     * @return {Duration} A new instance of Duration
     */

  }, {
    key: "normalize",
    value: function normalize() {
      return new Duration(this[privateProperties.duration]);
    }
    /**
     * Returns whether the provided Duration instance is the same as this
     * Duration instance.
     *
     * @param {Duration|mixed} otherDuration
     * @throws TypeError
     * @return {boolean} True means that the compared durations have the same
     * units and the same values for each unit (as well as same locale). This
     * means that a duration with{ minutes: 60 } would be considered not equal
     * to a duration with { hours: 1 }.
     */

  }, {
    key: "sameAs",
    value: function sameAs(otherDuration) {
      Duration.assertIsDuration(otherDuration);

      if (!this.isValid || !otherDuration.isValid) {
        return false;
      }

      if (this.locale !== otherDuration.locale) {
        return false;
      }

      return _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default()(this.toObject(), otherDuration.toObject());
    }
    /**
     * Returns whether the provided Duration instance is equal to this Duration
     * instance.
     *
     * Equality is based on:
     * - locale is the same
     * - the normalized value of the duration is the same.  eg a duration with
     * { hours: 24 } would be considered equal to a duration with { days: 1 }
     *
     * @param {Duration|mixed} otherDuration
     * @throws TypeError
     * @return {boolean} true if considered equal
     */

  }, {
    key: "equals",
    value: function equals(otherDuration) {
      Duration.assertIsDuration(otherDuration);

      if (!this.isValid || !otherDuration.isValid) {
        return false;
      }

      if (this.locale !== otherDuration.locale) {
        return false;
      }

      return _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default()(this.normalize().toObject(), otherDuration.normalize().toObject());
    }
    /**
     * Make this duration longer by the specified amount.
     *
     * Note: the returned Duration will have the locale of the original
     * regardless what the locale was on any passed in duration.
     *
     * The new Duration returned will have normalized values (i.e. if addition
     * of one Duration with `{ hours: 10 }` is done with the other Duration
     * having `{ hours: 14 }` then the new Duration will have `{ days: 1 }`.
     * You can still get the total hours by calling `newDuration.asHours()`.
     *
     * @param {Duration|Object|number} value  Either a Duration instance, a
     * number of milliseconds or an object in the same shape received by
     * Duration.fromObject()
     *
     * @return {Duration} A new instance of Duration
     */

  }, {
    key: "plus",
    value: function plus(value) {
      if (Duration.isDuration(value)) {
        return new Duration(this[privateProperties.duration].clone().add(value[privateProperties.duration]));
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
        value = this[privateMethods.filterValues](value);
      }

      return new Duration(this[privateProperties.duration].clone().add(value));
    }
    /**
     * Make this duration shorter by the specified amount
     *
     * Note: the returned Duration will have the locale of the original
     * regardless what the locale was on any passed in duration.
     *
     * The new Duration returned will have normalized values (i.e. if subtraction
     * of one Duration with `{ hours: 34 }` is done with the other Duration
     * having `{ hours: 10 }` then the new Duration will have `{ days: 1 }`.
     * You can still get the total hours by calling `newDuration.asHours()`.
     *
     * @param {Duration|Object|number} value Either a duration instance, a
     * number of milliseconds or an object in the same shape as that received by
     * Duration.fromObject()
     *
     * @return {Duration} A new instance of Duration
     */

  }, {
    key: "minus",
    value: function minus(value) {
      if (Duration.isDuration(value)) {
        return new Duration(this[privateProperties.duration].clone().subtract(value[privateProperties.duration]));
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
        value = this[privateMethods.filterValues](value);
      }

      return new Duration(this[privateProperties.duration].clone().subtract(value));
    }
    /**
     * Returns the negative of this Duration.
     *
     * @return {Duration} A new instance of Duration
     */

  }, {
    key: "negate",
    value: function negate() {
      return new Duration(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["mapValues"])(this.toObject(), function (value) {
        return value * -1;
      }));
    }
    /**
     * Returns a javascript object with this Duration's values.
     *
     * @return {*} Returns { years: number, hours: number ... }
     */

  }, {
    key: "toObject",
    value: function toObject() {
      return this[privateProperties.durationValues];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @return {string} eg. "PT24H"
     */

  }, {
    key: "toISO",
    value: function toISO() {
      return this[privateProperties.duration].toISOString();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use
     * in JSON.
     * @return {string} eg. "PT24H"
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this[privateProperties.duration].toJSON();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use
     * in debugging.
     * @return {string} eg. "PT24H"
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toISO();
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number} The value of this duration represented in the number of
     * milliseconds.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.asMilliseconds();
    }
    /**
     * Returns a string representation of this Duration formatted according to
     * the specified format string.
     *
     * Currently this accepts the following tokens in the format string:
     *
     * years:   Y or y
     * months:  M
     * weeks:   W or w
     * days:    D or d
     * hours:   H or h
     * minutes: m
     * seconds: s
     * ms:      S
     *
     * You can use multiples of the same token together to add zero-length
     * padding: (eg hh -> 01 instead of h -> 1)
     *
     * Escape token characters within the format string using square brackets
     * (eg 'h [hrs], m [min]' -> '12 hrs, 3 min')
     *
     * @param {string}format
     * @return {string}  A formatted string representation of this duration.
     */

  }, {
    key: "toFormat",
    value: function toFormat(format) {
      return this.normalize()[privateProperties.duration].format(format);
    }
  }, {
    key: "locale",
    get: function get() {
      return this[privateProperties.duration].locale();
    }
    /**
     * Indicates whether the current Duration instance represents a valid
     * duration.
     *
     * @return {boolean} True means the Duration instance is valid.
     */

  }, {
    key: "isValid",
    get: function get() {
      return this[privateProperties.isValid] && this[privateProperties.duration].toISOString() !== 'P0D';
    }
  }], [{
    key: "fromMilliseconds",
    value: function fromMilliseconds(milliseconds) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_VALID_LOCALE"];
      return new Duration({
        milliseconds: milliseconds
      }, locale);
    }
    /**
     * Create an instance of Duration from a simple object.
     *
     * @param {Object} values  Keys should be the units (eg 'years', 'days').
     * @param {string} locale
     * @return {Duration} An instance of Duration
     */

  }, {
    key: "fromObject",
    value: function fromObject(values) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_VALID_LOCALE"];
      return new Duration(values, locale);
    }
    /**
     * Create an instance of Duration from an ISO8601 string.
     *
     * @param {string} ISOString (eg. 'PT23H')
     * @param {string} locale
     * @return {Duration} An instance of Duration
     */

  }, {
    key: "fromISO",
    value: function fromISO(ISOString) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_VALID_LOCALE"];
      _assertions__WEBPACK_IMPORTED_MODULE_10__["assertISO8601IsValid"](ISOString, true);
      return new Duration(ISOString, locale);
    }
    /**
     * Indicate whether the provided locale argument is a valid locale.
     *
     * @param {string} locale
     * @return {boolean}  True means it is valid.
     */

  }, {
    key: "isValidLocale",
    value: function isValidLocale(locale) {
      return _assertions__WEBPACK_IMPORTED_MODULE_10__["validateLocale"](locale);
    }
    /**
     * Asserts whether the provided locale argument is a valid locale.
     *
     * @param {string} locale
     * @throws InvalidLocale
     */

  }, {
    key: "assertIsValidLocale",
    value: function assertIsValidLocale(locale) {
      _assertions__WEBPACK_IMPORTED_MODULE_10__["assertLocaleIsValid"](locale);
    }
    /**
     * Indicate whether the provided string is a valid ISO 8601 Duration string.
     *
     * @param {string} isoString
     * @return {boolean} True means it is valid.
     */

  }, {
    key: "isValidISO8601Duration",
    value: function isValidISO8601Duration(isoString) {
      return _assertions__WEBPACK_IMPORTED_MODULE_10__["validateISO8601"](isoString, true);
    }
    /**
     * Assert whether the provided string is a valid ISO 8601 Duration string.
     *
     * @param {string} isoString
     * @throws InvalidISO8601String
     */

  }, {
    key: "assertIsValidISO8601Duration",
    value: function assertIsValidISO8601Duration(isoString) {
      _assertions__WEBPACK_IMPORTED_MODULE_10__["assertISO8601IsValid"](isoString);
    }
    /**
     * Indicates whether the provided value is a valid instance of Duration.
     * @param {mixed|Duration}duration
     * @return {boolean}  True means it is a valid Duration object.
     */

  }, {
    key: "isValidDuration",
    value: function isValidDuration(duration) {
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(duration, 'Duration') && duration.isValid;
    }
    /**
     * Asserts whether the provided value is a valid Duration and throws an
     * exception if not.
     * @param {mixed|Duration} duration
     * @throws TypeError
     */

  }, {
    key: "assertIsValidDuration",
    value: function assertIsValidDuration(duration) {
      if (!Duration.isValidDuration(duration)) {
        throw new TypeError('This Duration object is not valid.');
      }
    }
    /**
     * Indicates whether the provided value is an instance of Duration.
     *
     * @param {Duration|mixed} duration
     * @return {boolean}  True means the value is an instance of Duration.
     * Note: true may still mean that the Duration instance is not valid!
     */

  }, {
    key: "isDuration",
    value: function isDuration(duration) {
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(duration, 'Duration');
    }
    /**
     * Asserts whether the provided value is an instance of Duration and if not
     * throws an exception.
     *
     * @param {Duration|mixed} duration
     * @throws TypeError
     */

  }, {
    key: "assertIsDuration",
    value: function assertIsDuration(duration) {
      if (!Duration.isDuration(duration)) {
        throw new TypeError('The provided value is not an instance of Duration.');
      }
    }
  }]);

  return Duration;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_YEARS", 'years');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_MONTHS", 'months');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_DAYS", 'days');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_HOURS", 'hours');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_MINUTES", 'minutes');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_SECONDS", 'seconds');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_MILLISECONDS", 'milliseconds');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Duration, "UNIT_WEEKS", 'weeks');



/***/ }),

/***/ "./assets/src/vo/date-time/index.js":
/*!******************************************!*\
  !*** ./assets/src/vo/date-time/index.js ***!
  \******************************************/
/*! exports provided: DateTime, Duration, ServerDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime */ "./assets/src/vo/date-time/datetime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTime", function() { return _datetime__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./assets/src/vo/date-time/duration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return _duration__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _server_date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-date-time */ "./assets/src/vo/date-time/server-date-time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerDateTime", function() { return _server_date_time__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/vo/date-time/server-date-time.js":
/*!*****************************************************!*\
  !*** ./assets/src/vo/date-time/server-date-time.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerDateTime; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime */ "./assets/src/vo/date-time/datetime.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaults */ "./assets/src/vo/date-time/defaults.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_9__);







/**
 * Internal Imports.
 */


/**
 * External Imports.
 */



/**
 * Inheriting the DateTime Value object, this represents a single point in time
 * within the context of the timezone or offset the server is set at.
 *
 * Instantiating this instead of `DateTime` removes the need to pass along
 * timezone string or offset and instantiates according to what has been set as
 * the defaults for those from the server.  Usage of this class is preferred
 * over DateTime to remove the need for client code to figure out if the server
 * has a timezone string set or is using a UTC offset.
 */

var ServerDateTime =
/*#__PURE__*/
function (_DateTime) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ServerDateTime, _DateTime);

  /**
   * The constructor for the ServerDateTime class
   *
   * @param {string} iso8601DateString
   * @param {string} locale
   */
  function ServerDateTime() {
    var _this;

    var iso8601DateString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_VALID_LOCALE"];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ServerDateTime);

    if (_defaults__WEBPACK_IMPORTED_MODULE_7__["HAS_TIMEZONE_STRING"]) {
      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime).call(this, iso8601DateString, _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_TIMEZONE_STRING"], locale));
    } else {
      var datetime = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(iso8601DateString) ? moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().utcOffset(_defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_OFFSET"], true).locale(locale) : moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()(iso8601DateString).utcOffset(_defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_OFFSET"], true).locale(locale);
      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime).call(this, datetime.toISOString(true), null, locale));
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this);
  }
  /**
   * Instantiate ServerDateTime from an ISO string.
   * This overrides `DateTime.fromISO` removing the need to worry about
   * whether to use `timezone` or `offset`.  This will simply use whatever is
   * provided by the server (preferring timezone if its available).
   *
   * @param {string} ISOString
   * @param {string} locale
   * @return {ServerDateTime} An instance of ServerDateTime
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ServerDateTime, null, [{
    key: "fromISO",
    value: function fromISO(ISOString) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_VALID_LOCALE"];
      return _defaults__WEBPACK_IMPORTED_MODULE_7__["HAS_TIMEZONE_STRING"] ? new ServerDateTime(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime), "fromISO", this).call(this, ISOString, _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_TIMEZONE_STRING"]).toISO(), locale) : new ServerDateTime(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime), "fromISOWithOffset", this).call(this, ISOString, _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_OFFSET"]).toISO(), locale);
    }
    /**
     * Instantiate ServerDateTime from an ISO string.
     * This overrides `DateTime.fromJSDate` removing the need to worry about
     * whether to use `timezone` or `offset`.  This will simply use whatever is
     * provided by the server (preferring timezone if its available).
     *
     * @param {Date} date
     * @param {string} locale
     * @return {ServerDateTime} An instance of ServerDateTime
     */

  }, {
    key: "fromJSDate",
    value: function fromJSDate(date) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_VALID_LOCALE"];
      return _defaults__WEBPACK_IMPORTED_MODULE_7__["HAS_TIMEZONE_STRING"] ? new ServerDateTime(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime), "fromJSDate", this).call(this, date, _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_TIMEZONE_STRING"]).toISO(), locale) : new ServerDateTime(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ServerDateTime), "fromJSDateWithOffset", this).call(this, date, _defaults__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_OFFSET"]).toISO(), locale);
    }
  }]);

  return ServerDateTime;
}(_datetime__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./assets/src/vo/index.js":
/*!********************************!*\
  !*** ./assets/src/vo/index.js ***!
  \********************************/
/*! exports provided: Money, SiteCurrency, Currency, Label, DateTime, Duration, ServerDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./money */ "./assets/src/vo/money.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return _money__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./assets/src/vo/currency.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteCurrency", function() { return _currency__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return _currency__WEBPACK_IMPORTED_MODULE_1__["Currency"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./assets/src/vo/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time */ "./assets/src/vo/date-time/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTime", function() { return _date_time__WEBPACK_IMPORTED_MODULE_3__["DateTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return _date_time__WEBPACK_IMPORTED_MODULE_3__["Duration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerDateTime", function() { return _date_time__WEBPACK_IMPORTED_MODULE_3__["ServerDateTime"]; });






/***/ }),

/***/ "./assets/src/vo/label.js":
/*!********************************!*\
  !*** ./assets/src/vo/label.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);




/**
 * External imports
 */


/**
 * A value object for representing a label with singular and plural string
 * values.
 */

var Label =
/*#__PURE__*/
function () {
  /**
   * The string representing the singular form of the label.
   * @type {string}
   */

  /**
   * The string representing the plural form of the label.
   * @type {string}
   */

  /**
   * Constructor
   * @param {string} singular
   * @param {string} plural
   */
  function Label(singular, plural) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Label);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "singular", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "plural", '');

    this.setSingular(singular).setPlural(plural);
    Object.freeze(this);
  }
  /**
   * Fluid setter for setting the singular property.
   *
   * If the singular property has already been set, this will return a new
   * instance of Label
   * @param {string} singular
   * @return {Label}  An instance of Label
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Label, [{
    key: "setSingular",
    value: function setSingular(singular) {
      Label.assertString(singular);

      if (this.singular !== '') {
        return new Label(singular, this.plural);
      }

      this.singular = singular;
      return this;
    }
    /**
     * Fluid setter for setting the plural property
     *
     * If the plural property has already been set, this will return a new
     * instance of label.
     *
     * @param {string} plural
     * @return {Label} An instance of Label
     */

  }, {
    key: "setPlural",
    value: function setPlural(plural) {
      Label.assertString(plural);

      if (this.plural !== '') {
        return new Label(this.singular, plural);
      }

      this.plural = plural;
      return this;
    }
    /**
     * Return the value for the property formatted in sentence case.
     *
     * Note, this strips any `-` in dashed labels.  So for instance if your
     * label value was `something-else`, the value returned would be
     * `Something Else`
     *
     * @param {boolean} singular  If true, return the formatted value of the
     * singular property otherwise return the formatted value of the plural
     * property.
     * @return {string} The string in sentence case
     */

  }, {
    key: "asSentenceCase",
    value: function asSentenceCase() {
      var singular = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return singular === true ? Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startCase"])(this.singular.toLowerCase()) : Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startCase"])(this.plural.toLowerCase());
    }
    /**
     * Return the value for the property formatted in lower case.
     *
     * @param {boolean} singular  If true, return the formatted value of the
     * singular property otherwise return the formatted value of the plural
     * property.
     * @return {string} The string in lower case
     */

  }, {
    key: "asLowerCase",
    value: function asLowerCase() {
      var singular = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return singular ? this.singular.toLowerCase() : this.plural.toLowerCase();
    }
    /**
     * Return the value for the property formatted in upper case.
     *
     * @param {boolean} singular  If true, return the formatted value of the
     * singular property otherwise return the formatted value of the plural
     * property.
     * @return {string} The string in upper case
     */

  }, {
    key: "asUpperCase",
    value: function asUpperCase() {
      var singular = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return singular ? this.singular.toUpperCase() : this.plural.toUpperCase();
    }
    /**
     * Return the value for the property formatted according to the provided
     * formatType.
     *
     * @param {boolean} singular If true, return the formatted value of the
     * singular property otherwise return the formatted value of the plural
     * property.
     * @param {('sentence'|'lower'|'upper')} formatType
     * @return {string} The string formatted according to formatType
     */

  }, {
    key: "asFormatted",
    value: function asFormatted() {
      var singular = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var formatType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Label.FORMAT_SENTENCE_CASE;

      switch (formatType) {
        case Label.FORMAT_SENTENCE_CASE:
          return this.asSentenceCase(singular);

        case Label.FORMAT_LOWERCASE:
          return this.asLowerCase(singular);

        case Label.FORMAT_UPPERCASE:
          return this.asUpperCase(singular);

        default:
          warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'Format type must be one of ' + 'Label.FORMAT_SENTENCE_CASE, Label.FORMAT_UPPERCASE, ' + 'or Label.FORMAT_LOWERCASE');
          return this.asSentenceCase(singular);
      }
    }
    /**
     * Asserts whether the provided value is a string or not.
     *
     * @param {*} value
     * @throws TypeError
     */

  }], [{
    key: "assertString",
    value: function assertString(value) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(value)) {
        throw new TypeError('Incoming label value (' + value + ') must' + ' be a string');
      }
    }
    /**
     * Creates an instance of Label that has the same value for singluar and
     * plural properties for the provided argument.
     *
     * @param {string} label
     * @return {Label}  A Label instance
     */

  }]);

  return Label;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Label, "FORMAT_LOWERCASE", 'lower');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Label, "FORMAT_UPPERCASE", 'upper');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Label, "FORMAT_SENTENCE_CASE", 'sentence');

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Label, "fromSameSingleAndPlural", function (label) {
  return new Label(label, label);
});



/***/ }),

/***/ "./assets/src/vo/money.js":
/*!********************************!*\
  !*** ./assets/src/vo/money.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Money; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! decimal.js-light */ "./node_modules/decimal.js-light/decimal.js");
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var accounting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accounting-js */ "./node_modules/accounting-js/dist/accounting.umd.js");
/* harmony import */ var accounting_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accounting_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__);





/**
 * External imports
 */






/**
 * Asserts if incoming value is an instance of Money
 * @param {Money} money
 * @throws {TypeError}
 */

var assertMoney = function assertMoney(money) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(money, 'Money')) {
    throw new TypeError('Instance of Money required');
  }
};
/**
 * Asserts if incoming value is an instance of Currency
 * @param {Currency} currency
 * @throws {TypeError}
 */


var assertCurrency = function assertCurrency(currency) {
  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(currency, 'Currency')) {
    throw new TypeError('Instance of Currency required');
  }
};
/**
 * Asserts if two currencies are shallow equal.
 * @param {Currency} currencyA
 * @param {Currency} currencyB
 * @throws {Exception}
 */


var assertSameCurrency = function assertSameCurrency(currencyA, currencyB) {
  assertCurrency(currencyA);
  assertCurrency(currencyB);

  if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6___default()(currencyA.toJSON(), currencyB.toJSON())) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_7__["Exception"]('Provided currencies are not equivalent.');
  }
};
/**
 * A Value object representing money values.
 */


var Money =
/*#__PURE__*/
function () {
  /**
   * Internally the amount is stored as a Decimal instance.
   * @type {Decimal}
   */

  /**
   * Internally the amount is stored as a Currency instance.
   * @type {Currency}
   */

  /**
   * Formatter object for money values.
   * @type {{}}
   */

  /**
   * Rounds away from zero
   * @type {number}
   */

  /**
   * Rounds towards zero
   * @type {number}
   */

  /**
   * Rounds towards infinity
   * @type {number}
   */

  /**
   * Rounds towards -Infinity
   * @type {number}
   */

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds away from zero.
   * @type {number}
   */

  /**
   * Rounds towards nearest neighbour. If equidistant rounds towards zero.
   * @type {number}
   */

  /**
   * Rounds towards nearest neighbour. If equidistant, rounds towards even
   * neighbour.
   * @type {number}
   */

  /**
   * Class constructor
   * @param {number|string|Decimal} amount
   * @param {Currency} currency
   */
  function Money(amount, currency) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Money);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "amount", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "currency", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "formatter", {});

    this.setCurrency(currency).setAmount(amount).setFormatter();
    Object.freeze(this);
  }
  /**
   * Set the currency property
   *
   * @param {Currency} currency
   * @return {Money} Either this Money or new Money depending on state of
   * property.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Money, [{
    key: "setCurrency",
    value: function setCurrency(currency) {
      Money.assertCurrency(currency); // if there's already a currency set, then return a new object.

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(this.currency, 'Currency')) {
        return new Money(this.amount, currency);
      }

      this.currency = currency;
      return this;
    }
    /**
     * Set the amount property
     *
     * @param {Decimal|number|string} amount
     * @return {Money} Either this Money or new Money depending on state of the
     * property.
     */

  }, {
    key: "setAmount",
    value: function setAmount(amount) {
      var value = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(amount, 'Decimal') ? amount.toNumber() : amount; // if there's already an amount set, then return a new object.

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(this.amount, 'Decimal')) {
        return new Money(new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](value), this.currency);
      }

      this.amount = new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](value);
      return this;
    }
    /**
     * Set the formatter for money values
     *
     * @return {Money} An instance of this object.
     */

  }, {
    key: "setFormatter",
    value: function setFormatter() {
      // only initialize if its not already initialized
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(this.formatter)) {
        this.formatter = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, accounting_js__WEBPACK_IMPORTED_MODULE_5__);
        this.formatter.settings = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.formatter.settings, this.currency.toAccountingSettings().currency);
      }

      return this;
    }
    /**
     * Returns the value of this Money as its subunits.
     * @return {number} If the subunits is 100 and the value is .45,
     * this returns 450
     */

  }, {
    key: "toSubunits",
    value: function toSubunits() {
      return this.amount.toNumber() * this.currency.subunits;
    }
    /**
     * Returns whether the provided money object equals this money object.
     * Compares both amount and currency.
     *
     * @param {Money} other
     * @return {boolean} True means this is equal. False means it isn't.
     */

  }, {
    key: "equals",
    value: function equals(other) {
      Money.assertMoney(other);
      return this.amount.equals(other.amount) && this.hasSameCurrency(other);
    }
    /**
     * Returns whether provided Money object's Currency equals this Money
     * object's Currency.
     *
     * This does a shallow comparison on the serialized values for the currency
     * objects.  That way if the currencies are different instances, but share
     * the same internal value, they are considered equal.
     *
     * @param {Money} other
     * @return {boolean} True means the currencies are equal.
     */

  }, {
    key: "hasSameCurrency",
    value: function hasSameCurrency(other) {
      Money.assertMoney(other);
      return _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_6___default()(this.currency.toJSON(), other.currency.toJSON());
    }
    /**
     * Add one Money object to this Money object
     * @param {Money} other
     * @return {Money} Returns a new instance of Money.
     */

  }, {
    key: "add",
    value: function add(other) {
      Money.assertUsingSameCurrency(this, other);
      return new Money(this.amount.plus(other.amount), this.currency);
    }
    /**
     * Subtract one Money object from this Money object
     * @param {Money} other
     * @return {Money} Returns a new instance of Money
     */

  }, {
    key: "subtract",
    value: function subtract(other) {
      Money.assertUsingSameCurrency(this, other);
      return new Money(this.amount.minus(other.amount), this.currency);
    }
    /**
     * Multiply this money object by the provided multiplier value.
     *
     * @param {number|string|Decimal} multiplier
     * @return {Money} Returns a new instance of Money
     */

  }, {
    key: "multiply",
    value: function multiply(multiplier) {
      return new Money(this.amount.times(multiplier), this.currency);
    }
    /**
     * Divide this money object by the provided divisor value.
     *
     * @param {number|string|Decimal} divisor
     * @return {Money} Returns a new instance of Money
     */

  }, {
    key: "divide",
    value: function divide(divisor) {
      return new Money(this.amount.dividedBy(divisor), this.currency);
    }
    /**
     * Allocates fund bases on the ratios provided returning an array of Money
     * objects as a product of the allocation.
     *
     * Example: splitting a provided Money object three equal ways.
     *
     * ```
     * const splitMoney = moneyInstance.allocate( [ 1, 1, 1 ] );
     * ```
     *
     * Example: splitting a provided Money object two ways with one having 75%
     * of the allocation.
     *
     * ```
     * const splitMoney = moneyInstance.allocate( [ 75, 25 ] );
     * ```
     *
     * Note: Array values for ratios are simply totalled and then each element
     * is considered a fraction of the total value.  So how you submit ratio
     * values is up to you for whatever is most clear to you.
     *
     * @param {number[]} ratios
     * @return {Money[]} An array of Money objects
     */

  }, {
    key: "allocate",
    value: function allocate(ratios) {
      var _this = this;

      var self = this;
      var results = [];
      var convertedRatios = [];
      var remainder = new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](self.toSubunits());
      var total = new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](0); // convert ratios to decimal and generate total.

      ratios.forEach(function (ratio) {
        convertedRatios.push(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_9__["instanceOf"])(ratio, 'Decimal') ? ratio : new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](ratio));
        total = total.plus(ratio);
      });
      convertedRatios.forEach(function (ratio) {
        var share = new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](Math.floor(self.toSubunits() * ratio.toNumber() / total.toNumber()));
        results.push(new Money(share.dividedBy(_this.currency.subunits), _this.currency));
        remainder = remainder.minus(share);
      });

      for (var i = 0; remainder.greaterThan(0); i++) {
        results[i] = new Money(new decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"](results[i].toSubunits()).plus(1).dividedBy(this.currency.subunits), this.currency);
        remainder = remainder.minus(1);
      }

      return results;
    }
    /**
     * Compares two instances of Money.
     *
     * Note: "same" means has equal value and equal currency.  It does not mean
     * identical instances.
     *
     * @param {Money} other
     * @return {number} 0 if they are the same, 1 if this is greater than
     * other and -1 if other is greater than this.
     */

  }, {
    key: "compare",
    value: function compare(other) {
      //quickly return 0 if identical
      if (this === other) {
        return 0;
      }

      Money.assertUsingSameCurrency(this, other);
      return this.amount.comparedTo(other.amount);
    }
    /**
     * Compares whether this Money object is greater than the other Money object.
     * @param {Money} other
     * @return {boolean} If true then this is greater than other.
     */

  }, {
    key: "greaterThan",
    value: function greaterThan(other) {
      Money.assertUsingSameCurrency(this, other);
      return this.amount.greaterThan(other.amount);
    }
    /**
     * Compares whether this Money object is greater than or equal to the other
     * Money object.
     *
     * @param {Money} other
     * @return {boolean} If true then this is greater than or equal to the other.
     */

  }, {
    key: "greaterThanOrEqualTo",
    value: function greaterThanOrEqualTo(other) {
      Money.assertUsingSameCurrency(this, other);
      return this.amount.greaterThanOrEqualTo(other.amount);
    }
    /**
     * Compares whether this Money object is less than the other Money object.
     * @param {Money} other
     * @return {boolean} If true then this is less than other
     */

  }, {
    key: "lessThan",
    value: function lessThan(other) {
      Money.assertUsingSameCurrency(this, other);
      return this.amount.lessThan(other.amount);
    }
    /**
     * Compares whether this Money object is less than or equal to the other
     * Money object.
     *
     * @param {Money} other
     * @return {boolean} If true then this is less than or equal to other.
     */

  }, {
    key: "lessThanOrEqualTo",
    value: function lessThanOrEqualTo(other) {
      Money.assertUsingSameCurrency(this, other);
      return this.amount.lessThanOrEqualTo(other.amount);
    }
    /**
     * Indicates if this object has the value of 0
     *
     * @return {boolean} If true then the value is 0.
     */

  }, {
    key: "isZero",
    value: function isZero() {
      return this.amount.isZero();
    }
    /**
     * Indicates if the value in this Money object is negative.
     *
     * @return {boolean} If true then the value is negative.
     */

  }, {
    key: "isNegative",
    value: function isNegative() {
      return this.amount.isNegative();
    }
    /**
     * Indicates if the value in this Money object is positive.
     *
     * @return {boolean} If true then the value is positive.
     */

  }, {
    key: "isPositive",
    value: function isPositive() {
      return this.amount.isPositive();
    }
    /**
     * Returns the value of this Money object as a number primitive.
     * @return {number} Returns a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.amount.toNumber();
    }
    /**
     * A string representing this Money object in normal (fixed-point) notation
     * rounded to `decimalPlaces` using `rounding` mode.
     *
     * If the value of this instance in normal notation has fewer than
     * decimalPlaces fraction digits, the return value will be appended with
     * zeros accordingly.
     *
     * @param {number} decimalPlaces The number of decimal places to round to.
     * If not provided uses the internal decimal place value.
     * @param {number} rounding What rounding type to use (0-8).  Use Money ROUND
     * constants.  Defaults to Money.ROUND_HALF_UP
     * @return {string} Returns a string representing the value of this Money
     * in normal (fixed-point) notation rounded to decimal places using
     * rounding mode.
     */

  }, {
    key: "toFixed",
    value: function toFixed(decimalPlaces) {
      var rounding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Money.ROUND_HALF_UP;
      decimalPlaces = decimalPlaces || this.currency.decimalPlaces;
      return this.amount.toFixed(decimalPlaces, rounding);
    }
    /**
     * Returns a new Money whose value is the value of this Money rounded
     * to a whole number using rounding mode rounding set on the original
     * Decimal amount.
     *
     * @return {Money} A new Money object
     */

  }, {
    key: "toIntegerMoney",
    value: function toIntegerMoney() {
      return new Money(this.amount.toInteger(), this.currency);
    }
    /**
     * Returns the value of this Money object as a formatted string according
     * to the currency configuration.
     * @return {string} Returns a formatted string according to Currency.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.formatter.format(this.amount.toNumber(), this.formatter.settings);
    }
    /**
     * @return { Object } Returns an object that represents the serialized
     * value of this object.
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        amount: this.amount.toJSON(),
        currency: this.currency.toJSON()
      };
    }
    /**
     * Asserts if the provided value is an instance of Money.
     * @param {Money} money
     * @throws {TypeError}
     */

  }]);

  return Money;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_UP", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_UP);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_DOWN", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_DOWN);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_CEIL", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_CEIL);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_FLOOR", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_FLOOR);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_HALF_UP", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_HALF_UP);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_HALF_DOWN", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_HALF_DOWN);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "ROUND_HALF_EVEN", decimal_js_light__WEBPACK_IMPORTED_MODULE_4__["Decimal"].ROUND_HALF_EVEN);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "assertMoney", function (money) {
  assertMoney(money);
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "assertCurrency", function (currency) {
  assertCurrency(currency);
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "assertUsingSameCurrency", function (thisMoney, otherMoney) {
  assertMoney(thisMoney);
  assertMoney(otherMoney);
  assertSameCurrency(thisMoney.currency, otherMoney.currency);
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Money, "assertSameCurrency", function (currencyA, currencyB) {
  assertSameCurrency(currencyA, currencyB);
});



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/accounting-js/dist/accounting.umd.js":
/*!***********************************************************!*\
  !*** ./node_modules/accounting-js/dist/accounting.umd.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, function (exports) { 'use strict';

	function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

	/**
	 * The library's settings configuration object.
	 *
	 * Contains default parameters for currency and number formatting
	 */
	var settings = {
	  symbol: '$', // default currency symbol is '$'
	  format: '%s%v', // controls output: %s = symbol, %v = value (can be object, see docs)
	  decimal: '.', // decimal point separator
	  thousand: ',', // thousands separator
	  precision: 2, // decimal places
	  grouping: 3, // digit grouping (not implemented yet)
	  stripZeros: false, // strip insignificant zeros from decimal part
	  fallback: 0 // value returned on unformat() failure
	};

	/**
	 * Takes a string/array of strings, removes all formatting/cruft and returns the raw float value
	 * Alias: `accounting.parse(string)`
	 *
	 * Decimal must be included in the regular expression to match floats (defaults to
	 * accounting.settings.decimal), so if the number uses a non-standard decimal
	 * separator, provide it as the second argument.
	 *
	 * Also matches bracketed negatives (eg. '$ (1.99)' => -1.99)
	 *
	 * Doesn't throw any errors (`NaN`s become 0) but this may change in future
	 *
	 * ```js
	 *  accounting.unformat("£ 12,345,678.90 GBP"); // 12345678.9
	 * ```
	 *
	 * @method unformat
	 * @for accounting
	 * @param {String|Array<String>} value The string or array of strings containing the number/s to parse.
	 * @param {Number}               decimal Number of decimal digits of the resultant number
	 * @return {Float} The parsed number
	 */
	function unformat(value) {
	  var decimal = arguments.length <= 1 || arguments[1] === undefined ? settings.decimal : arguments[1];
	  var fallback = arguments.length <= 2 || arguments[2] === undefined ? settings.fallback : arguments[2];

	  // Recursively unformat arrays:
	  if (Array.isArray(value)) {
	    return value.map(function (val) {
	      return unformat(val, decimal, fallback);
	    });
	  }

	  // Return the value as-is if it's already a number:
	  if (typeof value === 'number') return value;

	  // Build regex to strip out everything except digits, decimal point and minus sign:
	  var regex = new RegExp('[^0-9-(-)-' + decimal + ']', ['g']);
	  var unformattedValueString = ('' + value).replace(regex, '') // strip out any cruft
	  .replace(decimal, '.') // make sure decimal point is standard
	  .replace(/\(([-]*\d*[^)]?\d+)\)/g, '-$1') // replace bracketed values with negatives
	  .replace(/\((.*)\)/, ''); // remove any brackets that do not have numeric value

	  /**
	   * Handling -ve number and bracket, eg.
	   * (-100) = 100, -(100) = 100, --100 = 100
	   */
	  var negative = (unformattedValueString.match(/-/g) || 2).length % 2,
	      absUnformatted = parseFloat(unformattedValueString.replace(/-/g, '')),
	      unformatted = absUnformatted * (negative ? -1 : 1);

	  // This will fail silently which may cause trouble, let's wait and see:
	  return !isNaN(unformatted) ? unformatted : fallback;
	}

	/**
	 * Check and normalise the value of precision (must be positive integer)
	 */
	function _checkPrecision(val, base) {
	  val = Math.round(Math.abs(val));
	  return isNaN(val) ? base : val;
	}

	/**
	 * Implementation of toFixed() that treats floats more like decimals
	 *
	 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	 * problems for accounting- and finance-related software.
	 *
	 * ```js
	 *  (0.615).toFixed(2);           // "0.61" (native toFixed has rounding issues)
	 *  accounting.toFixed(0.615, 2); // "0.62"
	 * ```
	 *
	 * @method toFixed
	 * @for accounting
	 * @param {Float}   value         The float to be treated as a decimal number.
	 * @param {Number} [precision=2] The number of decimal digits to keep.
	 * @return {String} The given number transformed into a string with the given precission
	 */
	function toFixed(value, precision) {
	  precision = _checkPrecision(precision, settings.precision);
	  var power = Math.pow(10, precision);

	  // Multiply up by precision, round accurately, then divide and use native toFixed():
	  return (Math.round((value + 1e-8) * power) / power).toFixed(precision);
	}

	var index = __commonjs(function (module) {
	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	});

	var objectAssign = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

	function _stripInsignificantZeros(str, decimal) {
	  var parts = str.split(decimal);
	  var integerPart = parts[0];
	  var decimalPart = parts[1].replace(/0+$/, '');

	  if (decimalPart.length > 0) {
	    return integerPart + decimal + decimalPart;
	  }

	  return integerPart;
	}

	/**
	 * Format a number, with comma-separated thousands and custom precision/decimal places
	 * Alias: `accounting.format()`
	 *
	 * Localise by overriding the precision and thousand / decimal separators
	 *
	 * ```js
	 * accounting.formatNumber(5318008);              // 5,318,008
	 * accounting.formatNumber(9876543.21, { precision: 3, thousand: " " }); // 9 876 543.210
	 * ```
	 *
	 * @method formatNumber
	 * @for accounting
	 * @param {Number}        number The number to be formatted.
	 * @param {Object}        [opts={}] Object containing all the options of the method.
	 * @return {String} The given number properly formatted.
	  */
	function formatNumber(number) {
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  // Resursively format arrays:
	  if (Array.isArray(number)) {
	    return number.map(function (val) {
	      return formatNumber(val, opts);
	    });
	  }

	  // Build options object from second param (if object) or all params, extending defaults:
	  opts = objectAssign({}, settings, opts);

	  // Do some calc:
	  var negative = number < 0 ? '-' : '';
	  var base = parseInt(toFixed(Math.abs(number), opts.precision), 10) + '';
	  var mod = base.length > 3 ? base.length % 3 : 0;

	  // Format the number:
	  var formatted = negative + (mod ? base.substr(0, mod) + opts.thousand : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + opts.thousand) + (opts.precision > 0 ? opts.decimal + toFixed(Math.abs(number), opts.precision).split('.')[1] : '');

	  return opts.stripZeros ? _stripInsignificantZeros(formatted, opts.decimal) : formatted;
	}

	var index$1 = __commonjs(function (module) {
	'use strict';

	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
	};
	});

	var isString = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

	/**
	 * Parses a format string or object and returns format obj for use in rendering
	 *
	 * `format` is either a string with the default (positive) format, or object
	 * containing `pos` (required), `neg` and `zero` values
	 *
	 * Either string or format.pos must contain "%v" (value) to be valid
	 *
	 * @method _checkCurrencyFormat
	 * @for accounting
	 * @param {String}        [format="%s%v"] String with the format to apply, where %s is the currency symbol and %v is the value.
	 * @return {Object} object represnting format (with pos, neg and zero attributes)
	 */
	function _checkCurrencyFormat(format) {
	  // Format should be a string, in which case `value` ('%v') must be present:
	  if (isString(format) && format.match('%v')) {
	    // Create and return positive, negative and zero formats:
	    return {
	      pos: format,
	      neg: format.replace('-', '').replace('%v', '-%v'),
	      zero: format
	    };
	  }

	  // Otherwise, assume format was fine:
	  return format;
	}

	/**
	 * Format a number into currency
	 *
	 * Usage: accounting.formatMoney(number, symbol, precision, thousandsSep, decimalSep, format)
	 * defaults: (0, '$', 2, ',', '.', '%s%v')
	 *
	 * Localise by overriding the symbol, precision, thousand / decimal separators and format
	 *
	 * ```js
	 * // Default usage:
	 * accounting.formatMoney(12345678); // $12,345,678.00
	 *
	 * // European formatting (custom symbol and separators), can also use options object as second parameter:
	 * accounting.formatMoney(4999.99, { symbol: "€", precision: 2, thousand: ".", decimal: "," }); // €4.999,99
	 *
	 * // Negative values can be formatted nicely:
	 * accounting.formatMoney(-500000, { symbol: "£ ", precision: 0 }); // £ -500,000
	 *
	 * // Simple `format` string allows control of symbol position (%v = value, %s = symbol):
	 * accounting.formatMoney(5318008, { symbol: "GBP",  format: "%v %s" }); // 5,318,008.00 GBP
	 * ```
	 *
	 * @method formatMoney
	 * @for accounting
	 * @param {Number}        number Number to be formatted.
	 * @param {Object}        [opts={}] Object containing all the options of the method.
	 * @return {String} The given number properly formatted as money.
	 */
	function formatMoney(number) {
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  // Resursively format arrays:
	  if (Array.isArray(number)) {
	    return number.map(function (val) {
	      return formatMoney(val, opts);
	    });
	  }

	  // Build options object from second param (if object) or all params, extending defaults:
	  opts = objectAssign({}, settings, opts);

	  // Check format (returns object with pos, neg and zero):
	  var formats = _checkCurrencyFormat(opts.format);

	  // Choose which format to use for this value:
	  var useFormat = undefined;

	  if (number > 0) {
	    useFormat = formats.pos;
	  } else if (number < 0) {
	    useFormat = formats.neg;
	  } else {
	    useFormat = formats.zero;
	  }

	  // Return with currency symbol added:
	  return useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(number), opts));
	}

	/**
	 * Format a list of numbers into an accounting column, padding with whitespace
	 * to line up currency symbols, thousand separators and decimals places
	 *
	 * List should be an array of numbers
	 *
	 * Returns array of accouting-formatted number strings of same length
	 *
	 * NB: `white-space:pre` CSS rule is required on the list container to prevent
	 * browsers from collapsing the whitespace in the output strings.
	 *
	 * ```js
	 * accounting.formatColumn([123.5, 3456.49, 777888.99, 12345678, -5432], { symbol: "$ " });
	 * ```
	 *
	 * @method formatColumn
	 * @for accounting
	 * @param {Array<Number>} list An array of numbers to format
	 * @param {Object}        [opts={}] Object containing all the options of the method.
	 * @param {Object|String} [symbol="$"] String with the currency symbol. For conveniency if can be an object containing all the options of the method.
	 * @param {Integer}       [precision=2] Number of decimal digits
	 * @param {String}        [thousand=','] String with the thousands separator.
	 * @param {String}        [decimal="."] String with the decimal separator.
	 * @param {String}        [format="%s%v"] String with the format to apply, where %s is the currency symbol and %v is the value.
	 * @return {Array<String>} array of accouting-formatted number strings of same length
	 */
	function formatColumn(list) {
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (!list) return [];

	  // Build options object from second param (if object) or all params, extending defaults:
	  opts = objectAssign({}, settings, opts);

	  // Check format (returns object with pos, neg and zero), only need pos for now:
	  var formats = _checkCurrencyFormat(opts.format);

	  // Whether to pad at start of string or after currency symbol:
	  var padAfterSymbol = formats.pos.indexOf('%s') < formats.pos.indexOf('%v');

	  // Store value for the length of the longest string in the column:
	  var maxLength = 0;

	  // Format the list according to options, store the length of the longest string:
	  var formatted = list.map(function (val) {
	    if (Array.isArray(val)) {
	      // Recursively format columns if list is a multi-dimensional array:
	      return formatColumn(val, opts);
	    }
	    // Clean up the value
	    val = unformat(val, opts.decimal);

	    // Choose which format to use for this value (pos, neg or zero):
	    var useFormat = undefined;

	    if (val > 0) {
	      useFormat = formats.pos;
	    } else if (val < 0) {
	      useFormat = formats.neg;
	    } else {
	      useFormat = formats.zero;
	    }

	    // Format this value, push into formatted list and save the length:
	    var fVal = useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(val), opts));

	    if (fVal.length > maxLength) {
	      maxLength = fVal.length;
	    }

	    return fVal;
	  });

	  // Pad each number in the list and send back the column of numbers:
	  return formatted.map(function (val) {
	    // Only if this is a string (not a nested array, which would have already been padded):
	    if (isString(val) && val.length < maxLength) {
	      // Depending on symbol position, pad after symbol or at index 0:
	      return padAfterSymbol ? val.replace(opts.symbol, opts.symbol + new Array(maxLength - val.length + 1).join(' ')) : new Array(maxLength - val.length + 1).join(' ') + val;
	    }
	    return val;
	  });
	}

	exports.settings = settings;
	exports.unformat = unformat;
	exports.toFixed = toFixed;
	exports.formatMoney = formatMoney;
	exports.formatNumber = formatNumber;
	exports.formatColumn = formatColumn;
	exports.format = formatMoney;
	exports.parse = unformat;

}));
//# sourceMappingURL=accounting.umd.js.map

/***/ }),

/***/ "./node_modules/decimal.js-light/decimal.js":
/*!**************************************************!*\
  !*** ./node_modules/decimal.js-light/decimal.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! decimal.js-light v2.5.0 https://github.com/MikeMcl/decimal.js-light/LICENCE */
;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js-light v2.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js-light
   *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Expat Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
  var MAX_DIGITS = 1e9,                        // 0 to 1e9


    // The initial configuration properties of the Decimal constructor.
    Decimal = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed during run-time using `Decimal.config`.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
      // `toFixed`, `toPrecision` and `toSignificantDigits`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -MAX_E

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to MAX_E

      // The natural logarithm of 10.
      // 115 digits
      LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    exponentOutOfRange = decimalError + 'Exponent out of range: ',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    ONE,
    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),    // 1286742750677284

    // Decimal.prototype object
    P = {};


  // Decimal prototype methods


  /*
   *  absoluteValue                       abs
   *  comparedTo                          cmp
   *  decimalPlaces                       dp
   *  dividedBy                           div
   *  dividedToIntegerBy                  idiv
   *  equals                              eq
   *  exponent
   *  greaterThan                         gt
   *  greaterThanOrEqualTo                gte
   *  isInteger                           isint
   *  isNegative                          isneg
   *  isPositive                          ispos
   *  isZero
   *  lessThan                            lt
   *  lessThanOrEqualTo                   lte
   *  logarithm                           log
   *  minus                               sub
   *  modulo                              mod
   *  naturalExponential                  exp
   *  naturalLogarithm                    ln
   *  negated                             neg
   *  plus                                add
   *  precision                           sd
   *  squareRoot                          sqrt
   *  times                               mul
   *  toDecimalPlaces                     todp
   *  toExponential
   *  toFixed
   *  toInteger                           toint
   *  toNumber
   *  toPower                             pow
   *  toPrecision
   *  toSignificantDigits                 tosd
   *  toString
   *  valueOf                             val
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this;

    y = new x.constructor(y);

    // Signs differ?
    if (x.s !== y.s) return x.s || -y.s;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;

    xdL = x.d.length;
    ydL = y.d.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var x = this,
      w = x.d.length - 1,
      dp = (w - x.e) * LOG_BASE;

    // Subtract the number of trailing zeros of the last word.
    w = x.d[w];
    if (w) for (; w % 10 == 0; w /= 10) dp--;

    return dp < 0 ? 0 : dp;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, truncated to `precision` significant digits.
   *
   */
  P.dividedToIntegerBy = P.idiv = function (y) {
    var x = this,
      Ctor = x.constructor;
    return round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return !this.cmp(y);
  };


  /*
   * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
   *
   */
  P.exponent = function () {
    return getBase10Exponent(this);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    return this.cmp(y) >= 0;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isint = function () {
    return this.e > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isneg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.ispos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0, otherwise return false.
   *
   */
  P.isZero = function () {
    return this.s === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, truncated to
   * `precision` significant digits.
   *
   * If no base is specified, return log[10](x).
   *
   * log[base](x) = ln(x) / ln(base)
   *
   * The maximum error of the result is 1 ulp (unit in the last place).
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var r,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      wpr = pr + 5;

    // Default base is 10.
    if (base === void 0) {
      base = new Ctor(10);
    } else {
      base = new Ctor(base);

      // log[-b](x) = NaN
      // log[0](x)  = NaN
      // log[1](x)  = NaN
      if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + 'NaN');
    }

    // log[b](-x) = NaN
    // log[b](0) = -Infinity
    if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

    // log[b](1) = 0
    if (x.eq(ONE)) return new Ctor(0);

    external = false;
    r = divide(ln(x, wpr), ln(base, wpr), wpr);
    external = true;

    return round(r, pr);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.minus = P.sub = function (y) {
    var x = this;
    y = new x.constructor(y);
    return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision;

    y = new Ctor(y);

    // x % 0 = NaN
    if (!y.s) throw Error(decimalError + 'NaN');

    // Return x if x is 0.
    if (!x.s) return round(new Ctor(x), pr);

    // Prevent rounding of intermediate calculations.
    external = false;
    q = divide(x, y, 0, 1).times(y);
    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
   * significant digits.
   *
   */
  P.naturalExponential = P.exp = function () {
    return exp(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * truncated to `precision` significant digits.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return ln(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s || 0;
    return x;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.plus = P.add = function (y) {
    var x = this;
    y = new x.constructor(y);
    return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var e, sd, w,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    e = getBase10Exponent(x) + 1;
    w = x.d.length - 1;
    sd = w * LOG_BASE + 1;
    w = x.d[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) sd--;

      // Add the number of digits of the first word.
      for (w = x.d[0]; w >= 10; w /= 10) sd++;
    }

    return z && e > sd ? e : sd;
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
   * significant digits.
   *
   */
  P.squareRoot = P.sqrt = function () {
    var e, n, pr, r, s, t, wpr,
      x = this,
      Ctor = x.constructor;

    // Negative or zero?
    if (x.s < 1) {
      if (!x.s) return new Ctor(0);

      // sqrt(-x) = NaN
      throw Error(decimalError + 'NaN');
    }

    e = getBase10Exponent(x);
    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(x.d);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '1e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    pr = Ctor.precision;
    s = wpr = pr + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, wpr + 2)).times(0.5);

      if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
        n = n.slice(wpr - 3, wpr + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (s == wpr && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          round(t, pr + 1, 0);

          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        } else if (n != '9999') {
          break;
        }

        wpr += 4;
      }
    }

    external = true;

    return round(r, pr);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    // Return 0 if either is 0.
    if (!x.s || !y.s) return new Ctor(0);

    y.s *= x.s;
    e = x.e + y.e;
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = e;

    return external ? round(y, Ctor.precision) : y;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.todp = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return round(x, dp + getBase10Exponent(x) + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = toString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = round(new Ctor(x), dp + 1, rm);
      str = toString(x, true, dp + 1);
    }

    return str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) return toString(x);

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
    str = toString(y.abs(), false, dp + getBase10Exponent(y) + 1);

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isneg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.toInteger = P.toint = function () {
    var x = this,
      Ctor = x.constructor;
    return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
   * truncated to `precision` significant digits.
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * The maximum error is 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, sign, yIsInt,
      x = this,
      Ctor = x.constructor,
      guard = 12,
      yn = +(y = new Ctor(y));

    // pow(x, 0) = 1
    if (!y.s) return new Ctor(ONE);

    x = new Ctor(x);

    // pow(0, y > 0) = 0
    // pow(0, y < 0) = Infinity
    if (!x.s) {
      if (y.s < 1) throw Error(decimalError + 'Infinity');
      return x;
    }

    // pow(1, y) = 1
    if (x.eq(ONE)) return x;

    pr = Ctor.precision;

    // pow(x, 1) = x
    if (y.eq(ONE)) return round(x, pr);

    e = y.e;
    k = y.d.length - 1;
    yIsInt = e >= k;
    sign = x.s;

    if (!yIsInt) {

      // pow(x < 0, y non-integer) = NaN
      if (sign < 0) throw Error(decimalError + 'NaN');

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = new Ctor(ONE);

      // Max k of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      e = Math.ceil(pr / LOG_BASE + 4);

      external = false;

      for (;;) {
        if (k % 2) {
          r = r.times(x);
          truncate(r.d, e);
        }

        k = mathfloor(k / 2);
        if (k === 0) break;

        x = x.times(x);
        truncate(x.d, e);
      }

      external = true;

      return y.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
    }

    // Result is negative if x is negative and the last digit of integer y is odd.
    sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;

    x.s = 1;
    external = false;
    r = y.times(ln(x, pr + guard));
    external = true;
    r = exp(r);
    r.s = sign;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var e, str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      e = getBase10Exponent(x);
      str = toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = round(new Ctor(x), sd, rm);
      e = getBase10Exponent(x);
      str = toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
    }

    return str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toSignificantDigits = P.tosd = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return round(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = P.valueOf = P.val = P.toJSON = function () {
    var x = this,
      e = getBase10Exponent(x),
      Ctor = x.constructor;

    return toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  };


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  add                 P.minus, P.plus
   *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
   *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
   *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
   *  exp                 P.exp, P.pow
   *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
   *                      P.toString, divide, round, toString, exp, ln
   *  getLn10             P.log, ln
   *  getZeroString       digitsToString, toString
   *  ln                  P.log, P.ln, P.pow, exp
   *  parseDecimal        Decimal
   *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
   *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
   *                      divide, getLn10, exp, ln
   *  subtract            P.minus, P.plus
   *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
   *  truncate            P.pow
   *
   *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
   *                      getLn10, exp, ln, parseDecimal, Decimal, config
   */


  function add(x, y) {
    var carry, d, e, i, k, len, xd, yd,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // If either is zero...
    if (!x.s || !y.s) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!y.s) y = new Ctor(x);
      return external ? round(y, pr) : y;
    }

    xd = x.d;
    yd = y.d;

    // x and y are finite, non-zero numbers with the same sign.

    k = x.e;
    e = y.e;
    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {
      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = e;

    return external ? round(y, pr) : y;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % BASE | 0;
        carry = temp / BASE | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * BASE + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, dp) {
      var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either 0?
      if (!x.s) return new Ctor(x);
      if (!y.s) throw Error(decimalError + 'Division by zero');

      e = x.e - y.e;
      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
      if (yd[i] > (xd[i] || 0)) --e;

      if (pr == null) {
        sd = pr = Ctor.precision;
      } else if (dp) {
        sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) return new Ctor(0);

      // Convert precision in number of base 10 digits to base 1e7 digits.
      sd = sd / LOG_BASE + 2 | 0;
      i = 0;

      // divisor < 1e7
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;

        // k is the carry.
        for (; (i < xL || k) && sd--; i++) {
          t = k * BASE + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }

      // divisor >= 1e7
      } else {

        // Normalise xd and yd so highest order digit of yd is >= BASE/2
        k = BASE / (yd[0] + 1) | 0;

        if (k > 1) {
          yd = multiplyInteger(yd, k);
          xd = multiplyInteger(xd, k);
          yL = yd.length;
          xL = xd.length;
        }

        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL;) rem[remL++] = 0;

        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];

        if (yd[1] >= BASE / 2) ++yd0;

        do {
          k = 0;

          // Compare divisor and remainder.
          cmp = compare(yd, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, k.
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);

            // k will be how many times the divisor goes into the current remainder.
            k = rem0 / yd0 | 0;

            //  Algorithm:
            //  1. product = divisor * trial digit (k)
            //  2. if product > remainder: product -= divisor, k--
            //  3. remainder -= product
            //  4. if product was < remainder at 2:
            //    5. compare new remainder and divisor
            //    6. If remainder > divisor: remainder -= divisor, k++

            if (k > 1) {
              if (k >= BASE) k = BASE - 1;

              // product = divisor * trial digit.
              prod = multiplyInteger(yd, k);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              cmp = compare(prod, rem, prodL, remL);

              // product > remainder.
              if (cmp == 1) {
                k--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yd, prodL);
              }
            } else {

              // cmp is -1.
              // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
              // to avoid it. If k is 1 there is a need to compare yd and rem again below.
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }

            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);

            // Subtract product from remainder.
            subtract(rem, prod, remL);

            // If product was < previous remainder.
            if (cmp == -1) {
              remL = rem.length;

              // Compare divisor and new remainder.
              cmp = compare(yd, rem, yL, remL);

              // If divisor < new remainder, subtract divisor from remainder.
              if (cmp < 1) {
                k++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yd, remL);
              }
            }

            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }    // if cmp === 1, k will be 0

          // Add the next digit, k, to the result array.
          qd[i++] = k;

          // Update the remainder.
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }

        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
      }

      // Leading zero?
      if (!qd[0]) qd.shift();

      q.e = e;

      return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
    };
  })();


  /*
   * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
   * significant digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   */
  function exp(x, sd) {
    var denominator, guard, pow, sum, t, wpr,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      pr = Ctor.precision;

    if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));

    // exp(0) = 1
    if (!x.s) return new Ctor(ONE);

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    while (x.abs().gte(0.1)) {
      x = x.times(t);    // x = x / 2^5
      k += 5;
    }

    // Estimate the precision increase necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(ONE);
    Ctor.precision = wpr;

    for (;;) {
      pow = round(pow.times(x), wpr);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        while (k--) sum = round(sum.times(sum), wpr);
        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }

      sum = t;
    }
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(x) {
    var e = x.e * LOG_BASE,
      w = x.d[0];

    // Add the number of digits of the first word of the digits array.
    for (; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {

    if (sd > Ctor.LN10.sd()) {


      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(decimalError + 'LN10 precision limit exceeded');
    }

    return round(new Ctor(Ctor.LN10), sd);
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
   * digits.
   *
   *  ln(n) is non-terminating (n != 1)
   *
   */
  function ln(y, sd) {
    var c, c0, denominator, e, numerator, sum, t, wpr, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // ln(-x) = NaN
    // ln(0) = -Infinity
    if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

    // ln(1) = 0
    if (x.eq(ONE)) return new Ctor(0);

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    if (x.eq(10)) {
      if (sd == null) external = true;
      return getLn10(Ctor, wpr);
    }

    wpr += guard;
    Ctor.precision = wpr;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    e = getBase10Exponent(x);

    if (Math.abs(e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = getBase10Exponent(x);

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = ln(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);

      Ctor.precision = pr;
      return sd == null ? (external = true, round(x, pr)) : x;
    }

    // x is reduced to a value near 1.

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
    x2 = round(x.times(x), wpr);
    denominator = 3;

    for (;;) {
      numerator = round(numerator.times(x2), wpr);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr);

        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }

      sum = t;
      denominator += 2;
    }
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48;) ++i;

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48;) --len;
    str = str.slice(i, len);

    if (str) {
      len -= i;
      e = e - i - 1;
      x.e = mathfloor(e / LOG_BASE);
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
    } else {

      // Zero.
      x.s = 0;
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
   */
   function round(x, sd, rm) {
    var i, j, k, n, rd, doRound, w, xdi,
      xd = x.d;

    // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
    // w: the word of xd which contains the rounding digit, a base 1e7 number.
    // xdi: the index of w within xd.
    // n: the number of digits of w.
    // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
    // they had leading zeros)
    // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

    // Get the length of the first word of the digits array xd.
    for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
    i = sd - n;

    // Is the rounding digit in the first word of xd?
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) return x;
      w = k = xd[xdi];

      // Get the number of digits of w.
      for (n = 1; k >= 10; k /= 10) n++;

      // Get the index of rd within w.
      i %= LOG_BASE;

      // Get the index of rd within w, adjusted for leading zeros.
      // The number of leading zeros of w is given by LOG_BASE - n.
      j = i - LOG_BASE + n;
    }

    if (rm !== void 0) {
      k = mathpow(10, n - j - 1);

      // Get the rounding digit at index j of w.
      rd = w / k % 10 | 0;

      // Are there any non-zero digits after the rounding digit?
      doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;

      // The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
      // digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
      // 714.

      doRound = rm < 4
        ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));
    }

    if (sd < 1 || !xd[0]) {
      if (doRound) {
        k = getBase10Exponent(x);
        xd.length = 1;

        // Convert sd to decimal places.
        sd = sd - k - 1;

        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = mathfloor(-sd / LOG_BASE) || 0;
      } else {
        xd.length = 1;

        // Zero.
        xd[0] = x.e = x.s = 0;
      }

      return x;
    }

    // Remove excess digits.
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);

      // E.g. 56700 becomes 56000 if 7 is the rounding digit.
      // j > 0 means i > number of leading zeros of w.
      xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
    }

    if (doRound) {
      for (;;) {

        // Is the digit to be rounded up in the first word of xd?
        if (xdi == 0) {
          if ((xd[0] += k) == BASE) {
            xd[0] = 1;
            ++x.e;
          }

          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }

    // Remove trailing zeros.
    for (i = xd.length; xd[--i] === 0;) xd.pop();

    if (external && (x.e > MAX_E || x.e < -MAX_E)) {
      throw Error(exponentOutOfRange + getBase10Exponent(x));
    }

    return x;
  }


  function subtract(x, y) {
    var d, e, i, j, k, len, xd, xe, xLTy, yd,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // Return y negated if x is zero.
    // Return x if y is zero and x is non-zero.
    if (!x.s || !y.s) {
      if (y.s) y.s = -y.s;
      else y = new Ctor(x);
      return external ? round(y, pr) : y;
    }

    xd = x.d;
    yd = y.d;

    // x and y are non-zero numbers with the same sign.

    e = y.e;
    xe = x.e;
    xd = xd.slice();
    k = xe - e;

    // If exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of zeros
      // needing to be prepended, but this can be avoided while still ensuring correct rounding by
      // limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to xd if shorter.
    // Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {
      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(0);

    y.d = xd;
    y.e = e;

    //return external && xd.length >= pr / LOG_BASE ? round(y, pr) : y;
    return external ? round(y, pr) : y;
  }


  function toString(x, isExp, sd) {
    var k,
      e = getBase10Exponent(x),
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (e < 0 ? 'e' : 'e+') + e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  clone
   *  config/set
   */


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * value {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(value) {
      var x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(value);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (value instanceof Decimal) {
        x.s = value.s;
        x.e = value.e;
        x.d = (value = value.d) ? value.slice() : value;
        return;
      }

      if (typeof value === 'number') {

        // Reject Infinity/NaN.
        if (value * 0 !== 0) {
          throw Error(invalidArgument + value);
        }

        if (value > 0) {
          x.s = 1;
        } else if (value < 0) {
          value = -value;
          x.s = -1;
        } else {
          x.s = 0;
          x.e = 0;
          x.d = [0];
          return;
        }

        // Fast path for small integers.
        if (value === ~~value && value < 1e7) {
          x.e = 0;
          x.d = [value];
          return;
        }

        return parseDecimal(x, value.toString());
      } else if (typeof value !== 'string') {
        throw Error(invalidArgument + value);
      }

      // Minus sign?
      if (value.charCodeAt(0) === 45) {
        value = value.slice(1);
        x.s = -1;
      } else {
        x.s = 1;
      }

      if (isDecimal.test(value)) parseDecimal(x, value);
      else throw Error(invalidArgument + value);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;

    Decimal.clone = clone;
    Decimal.config = Decimal.set = config;

    if (obj === void 0) obj = {};
    if (obj) {
      ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
      for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') {
      throw Error(decimalError + 'Object expected');
    }
    var i, p, v,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -1 / 0, 0,
        'toExpPos', 0, 1 / 0
      ];

    for (i = 0; i < ps.length; i += 3) {
      if ((v = obj[p = ps[i]]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if ((v = obj[p = 'LN10']) !== void 0) {
        if (v == Math.LN10) this[p] = new this(v);
        else throw Error(invalidArgument + p + ': ' + v);
    }

    return this;
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(Decimal);

  Decimal['default'] = Decimal.Decimal = Decimal;

  // Internal constant.
  ONE = new Decimal(1);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/moment-duration-format/lib/moment-duration-format.js":
/*!***************************************************************************!*\
  !*** ./node_modules/moment-duration-format/lib/moment-duration-format.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Moment Duration Format v2.2.2
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-02-16
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ "moment")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

    if (root) {
        // Globals.
        root.momentDurationFormatSetup = root.moment ? factory(root.moment) : factory;
    }
})(this, function (moment) {
    // `Number#tolocaleString` is tested on plugin initialization.
    // If the feature test passes, `toLocaleStringWorks` will be set to `true` and the
    // native function will be used to generate formatted output. If the feature
    // test fails, the fallback format function internal to this plugin will be
    // used.
    var toLocaleStringWorks = false;

    // `Number#toLocaleString` rounds incorrectly for select numbers in Microsoft
    // environments (Edge, IE11, Windows Phone) and possibly other environments.
    // If the rounding test fails and `toLocaleString` will be used for formatting,
    // the plugin will "pre-round" number values using the fallback number format
    // function before passing them to `toLocaleString` for final formatting.
    var toLocaleStringRoundingWorks = false;

    // Token type names in order of descending magnitude.
    var types = "escape years months weeks days hours minutes seconds milliseconds general".split(" ");

    var bubbles = [
        {
            type: "seconds",
            targets: [
                { type: "minutes", value: 60 },
                { type: "hours", value: 3600 },
                { type: "days", value: 86400 },
                { type: "weeks", value: 604800 },
                { type: "months", value: 2678400 },
                { type: "years", value: 31536000 }
            ]
        },
        {
            type: "minutes",
            targets: [
                { type: "hours", value: 60 },
                { type: "days", value: 1440 },
                { type: "weeks", value: 10080 },
                { type: "months", value: 44640 },
                { type: "years", value: 525600 }
            ]
        },
        {
            type: "hours",
            targets: [
                { type: "days", value: 24 },
                { type: "weeks", value: 168 },
                { type: "months", value: 744 },
                { type: "years", value: 8760 }
            ]
        },
        {
            type: "days",
            targets: [
                { type: "weeks", value: 7 },
                { type: "months", value: 31 },
                { type: "years", value: 365 }
            ]
        },
        {
            type: "months",
            targets: [
                { type: "years", value: 12 }
            ]
        }
    ];

    // stringIncludes
    function stringIncludes(str, search) {
        if (search.length > str.length) {
          return false;
        }

        return str.indexOf(search) !== -1;
    }

    // repeatZero(qty)
    // Returns "0" repeated `qty` times.
    // `qty` must be a integer >= 0.
    function repeatZero(qty) {
        var result = "";

        while (qty) {
            result += "0";
            qty -= 1;
        }

        return result;
    }

    function stringRound(digits) {
        var digitsArray = digits.split("").reverse();
        var i = 0;
        var carry = true;

        while (carry && i < digitsArray.length) {
            if (i) {
                if (digitsArray[i] === "9") {
                    digitsArray[i] = "0";
                } else {
                    digitsArray[i] = (parseInt(digitsArray[i], 10) + 1).toString();
                    carry = false;
                }
            } else {
                if (parseInt(digitsArray[i], 10) < 5) {
                    carry = false;
                }

                digitsArray[i] = "0";
            }

            i += 1;
        }

        if (carry) {
            digitsArray.push("1");
        }

        return digitsArray.reverse().join("");
    }

    // formatNumber
    // Formats any number greater than or equal to zero using these options:
    // - userLocale
    // - useToLocaleString
    // - useGrouping
    // - grouping
    // - maximumSignificantDigits
    // - minimumIntegerDigits
    // - fractionDigits
    // - groupingSeparator
    // - decimalSeparator
    //
    // `useToLocaleString` will use `toLocaleString` for formatting.
    // `userLocale` option is passed through to `toLocaleString`.
    // `fractionDigits` is passed through to `maximumFractionDigits` and `minimumFractionDigits`
    // Using `maximumSignificantDigits` will override `minimumIntegerDigits` and `fractionDigits`.
    function formatNumber(number, options, userLocale) {
        var useToLocaleString = options.useToLocaleString;
        var useGrouping = options.useGrouping;
        var grouping = useGrouping && options.grouping.slice();
        var maximumSignificantDigits = options.maximumSignificantDigits;
        var minimumIntegerDigits = options.minimumIntegerDigits || 1;
        var fractionDigits = options.fractionDigits || 0;
        var groupingSeparator = options.groupingSeparator;
        var decimalSeparator = options.decimalSeparator;

        if (useToLocaleString && userLocale) {
            var localeStringOptions = {
                minimumIntegerDigits: minimumIntegerDigits,
                useGrouping: useGrouping
            };

            if (fractionDigits) {
                localeStringOptions.maximumFractionDigits = fractionDigits;
                localeStringOptions.minimumFractionDigits = fractionDigits;
            }

            // toLocaleString output is "0.0" instead of "0" for HTC browsers
            // when maximumSignificantDigits is set. See #96.
            if (maximumSignificantDigits && number > 0) {
                localeStringOptions.maximumSignificantDigits = maximumSignificantDigits;
            }

            if (!toLocaleStringRoundingWorks) {
                var roundingOptions = extend({}, options);
                roundingOptions.useGrouping = false;
                roundingOptions.decimalSeparator = ".";
                number = parseFloat(formatNumber(number, roundingOptions), 10);
            }

            return number.toLocaleString(userLocale, localeStringOptions);
        }

        var numberString;

        // Add 1 to digit output length for floating point errors workaround. See below.
        if (maximumSignificantDigits) {
            numberString = number.toPrecision(maximumSignificantDigits + 1);
        } else {
            numberString = number.toFixed(fractionDigits + 1);
        }

        var integerString;
        var fractionString;
        var exponentString;

        var temp = numberString.split("e");

        exponentString = temp[1] || "";

        temp = temp[0].split(".");

        fractionString = temp[1] || "";
        integerString = temp[0] || "";

        // Workaround for floating point errors in `toFixed` and `toPrecision`.
        // (3.55).toFixed(1); --> "3.5"
        // (123.55 - 120).toPrecision(2); --> "3.5"
        // (123.55 - 120); --> 3.549999999999997
        // (123.55 - 120).toFixed(2); --> "3.55"
        // Round by examing the string output of the next digit.

        // *************** Implement String Rounding here ***********************
        // Check integerString + fractionString length of toPrecision before rounding.
        // Check length of fractionString from toFixed output before rounding.
        var integerLength = integerString.length;
        var fractionLength = fractionString.length;
        var digitCount = integerLength + fractionLength;
        var digits = integerString + fractionString;

        if (maximumSignificantDigits && digitCount === (maximumSignificantDigits + 1) || !maximumSignificantDigits && fractionLength === (fractionDigits + 1)) {
            // Round digits.
            digits = stringRound(digits);

            if (digits.length === digitCount + 1) {
                integerLength = integerLength + 1;
            }

            // Discard final fractionDigit.
            if (fractionLength) {
                digits = digits.slice(0, -1);
            }

            // Separate integer and fraction.
            integerString = digits.slice(0, integerLength);
            fractionString = digits.slice(integerLength);
        }

        // Trim trailing zeroes from fractionString because toPrecision outputs
        // precision, not significant digits.
        if (maximumSignificantDigits) {
            fractionString = fractionString.replace(/0*$/, "");
        }

        // Handle exponent.
        var exponent = parseInt(exponentString, 10);

        if (exponent > 0) {
            if (fractionString.length <= exponent) {
                fractionString = fractionString + repeatZero(exponent - fractionString.length);

                integerString = integerString + fractionString;
                fractionString = "";
            } else {
                integerString = integerString + fractionString.slice(0, exponent);
                fractionString = fractionString.slice(exponent);
            }
        } else if (exponent < 0) {
            fractionString = (repeatZero(Math.abs(exponent) - integerString.length) + integerString + fractionString);

            integerString = "0";
        }

        if (!maximumSignificantDigits) {
            // Trim or pad fraction when not using maximumSignificantDigits.
            fractionString = fractionString.slice(0, fractionDigits);

            if (fractionString.length < fractionDigits) {
                fractionString = fractionString + repeatZero(fractionDigits - fractionString.length);
            }

            // Pad integer when using minimumIntegerDigits
            // and not using maximumSignificantDigits.
            if (integerString.length < minimumIntegerDigits) {
                integerString = repeatZero(minimumIntegerDigits - integerString.length) + integerString;
            }
        }

        var formattedString = "";

        // Handle grouping.
        if (useGrouping) {
            temp = integerString;
            var group;

            while (temp.length) {
                if (grouping.length) {
                    group = grouping.shift();
                }

                if (formattedString) {
                    formattedString = groupingSeparator + formattedString;
                }

                formattedString = temp.slice(-group) + formattedString;

                temp = temp.slice(0, -group);
            }
        } else {
            formattedString = integerString;
        }

        // Add decimalSeparator and fraction.
        if (fractionString) {
            formattedString = formattedString + decimalSeparator + fractionString;
        }

        return formattedString;
    }

    // durationLabelCompare
    function durationLabelCompare(a, b) {
        if (a.label.length > b.label.length) {
            return -1;
        }

        if (a.label.length < b.label.length) {
            return 1;
        }

        // a must be equal to b
        return 0;
    }

    // durationGetLabels
    function durationGetLabels(token, localeData) {
        var labels = [];

        each(keys(localeData), function (localeDataKey) {
            if (localeDataKey.slice(0, 15) !== "_durationLabels") {
                return;
            }

            var labelType = localeDataKey.slice(15).toLowerCase();

            each(keys(localeData[localeDataKey]), function (labelKey) {
                if (labelKey.slice(0, 1) === token) {
                    labels.push({
                        type: labelType,
                        key: labelKey,
                        label: localeData[localeDataKey][labelKey]
                    });
                }
            });
        });

        return labels;
    }

    // durationPluralKey
    function durationPluralKey(token, integerValue, decimalValue) {
        // Singular for a value of `1`, but not for `1.0`.
        if (integerValue === 1 && decimalValue === null) {
            return token;
        }

        return token + token;
    }

    var engLocale = {
        durationLabelsStandard: {
            S: 'millisecond',
            SS: 'milliseconds',
            s: 'second',
            ss: 'seconds',
            m: 'minute',
            mm: 'minutes',
            h: 'hour',
            hh: 'hours',
            d: 'day',
            dd: 'days',
            w: 'week',
            ww: 'weeks',
            M: 'month',
            MM: 'months',
            y: 'year',
            yy: 'years'
        },
        durationLabelsShort: {
            S: 'msec',
            SS: 'msecs',
            s: 'sec',
            ss: 'secs',
            m: 'min',
            mm: 'mins',
            h: 'hr',
            hh: 'hrs',
            d: 'dy',
            dd: 'dys',
            w: 'wk',
            ww: 'wks',
            M: 'mo',
            MM: 'mos',
            y: 'yr',
            yy: 'yrs'
        },
        durationTimeTemplates: {
            HMS: 'h:mm:ss',
            HM: 'h:mm',
            MS: 'm:ss'
        },
        durationLabelTypes: [
            { type: "standard", string: "__" },
            { type: "short", string: "_" }
        ],
        durationPluralKey: durationPluralKey
    };

    // isArray
    function isArray(array) {
        return Object.prototype.toString.call(array) === "[object Array]";
    }

    // isObject
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }

    // findLast
    function findLast(array, callback) {
        var index = array.length;

        while (index -= 1) {
            if (callback(array[index])) { return array[index]; }
        }
    }

    // find
    function find(array, callback) {
        var index = 0;

        var max = array && array.length || 0;

        var match;

        if (typeof callback !== "function") {
            match = callback;
            callback = function (item) {
                return item === match;
            };
        }

        while (index < max) {
            if (callback(array[index])) { return array[index]; }
            index += 1;
        }
    }

    // each
    function each(array, callback) {
        var index = 0,
            max = array.length;

        if (!array || !max) { return; }

        while (index < max) {
            if (callback(array[index], index) === false) { return; }
            index += 1;
        }
    }

    // map
    function map(array, callback) {
        var index = 0,
            max = array.length,
            ret = [];

        if (!array || !max) { return ret; }

        while (index < max) {
            ret[index] = callback(array[index], index);
            index += 1;
        }

        return ret;
    }

    // pluck
    function pluck(array, prop) {
        return map(array, function (item) {
            return item[prop];
        });
    }

    // compact
    function compact(array) {
        var ret = [];

        each(array, function (item) {
            if (item) { ret.push(item); }
        });

        return ret;
    }

    // unique
    function unique(array) {
        var ret = [];

        each(array, function (_a) {
            if (!find(ret, _a)) { ret.push(_a); }
        });

        return ret;
    }

    // intersection
    function intersection(a, b) {
        var ret = [];

        each(a, function (_a) {
            each(b, function (_b) {
                if (_a === _b) { ret.push(_a); }
            });
        });

        return unique(ret);
    }

    // rest
    function rest(array, callback) {
        var ret = [];

        each(array, function (item, index) {
            if (!callback(item)) {
                ret = array.slice(index);
                return false;
            }
        });

        return ret;
    }

    // initial
    function initial(array, callback) {
        var reversed = array.slice().reverse();

        return rest(reversed, callback).reverse();
    }

    // extend
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) { a[key] = b[key]; }
        }

        return a;
    }

    // keys
    function keys(a) {
        var ret = [];

        for (var key in a) {
            if (a.hasOwnProperty(key)) { ret.push(key); }
        }

        return ret;
    }

    // any
    function any(array, callback) {
        var index = 0,
            max = array.length;

        if (!array || !max) { return false; }

        while (index < max) {
            if (callback(array[index], index) === true) { return true; }
            index += 1;
        }

        return false;
    }

    // flatten
    function flatten(array) {
        var ret = [];

        each(array, function(child) {
            ret = ret.concat(child);
        });

        return ret;
    }

    function toLocaleStringSupportsLocales() {
        var number = 0;
        try {
            number.toLocaleString('i');
        } catch (e) {
            return e.name === 'RangeError';
        }
        return false;
    }

    function featureTestToLocaleStringRounding() {
        return (3.55).toLocaleString("en", {
            useGrouping: false,
            minimumIntegerDigits: 1,
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }) === "3.6";
    }

    function featureTestToLocaleString() {
        var passed = true;

        // Test locale.
        passed = passed && toLocaleStringSupportsLocales();
        if (!passed) { return false; }

        // Test minimumIntegerDigits.
        passed = passed && (1).toLocaleString("en", { minimumIntegerDigits: 1 }) === "1";
        passed = passed && (1).toLocaleString("en", { minimumIntegerDigits: 2 }) === "01";
        passed = passed && (1).toLocaleString("en", { minimumIntegerDigits: 3 }) === "001";
        if (!passed) { return false; }

        // Test maximumFractionDigits and minimumFractionDigits.
        passed = passed && (99.99).toLocaleString("en", { maximumFractionDigits: 0, minimumFractionDigits: 0 }) === "100";
        passed = passed && (99.99).toLocaleString("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 }) === "100.0";
        passed = passed && (99.99).toLocaleString("en", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) === "99.99";
        passed = passed && (99.99).toLocaleString("en", { maximumFractionDigits: 3, minimumFractionDigits: 3 }) === "99.990";
        if (!passed) { return false; }

        // Test maximumSignificantDigits.
        passed = passed && (99.99).toLocaleString("en", { maximumSignificantDigits: 1 }) === "100";
        passed = passed && (99.99).toLocaleString("en", { maximumSignificantDigits: 2 }) === "100";
        passed = passed && (99.99).toLocaleString("en", { maximumSignificantDigits: 3 }) === "100";
        passed = passed && (99.99).toLocaleString("en", { maximumSignificantDigits: 4 }) === "99.99";
        passed = passed && (99.99).toLocaleString("en", { maximumSignificantDigits: 5 }) === "99.99";
        if (!passed) { return false; }

        // Test grouping.
        passed = passed && (1000).toLocaleString("en", { useGrouping: true }) === "1,000";
        passed = passed && (1000).toLocaleString("en", { useGrouping: false }) === "1000";
        if (!passed) { return false; }

        return true;
    }

    // durationsFormat(durations [, template] [, precision] [, settings])
    function durationsFormat() {
        var args = [].slice.call(arguments);
        var settings = {};
        var durations;

        // Parse arguments.
        each(args, function (arg, index) {
            if (!index) {
                if (!isArray(arg)) {
                    throw "Expected array as the first argument to durationsFormat.";
                }

                durations = arg;
            }

            if (typeof arg === "string" || typeof arg === "function") {
                settings.template = arg;
                return;
            }

            if (typeof arg === "number") {
                settings.precision = arg;
                return;
            }

            if (isObject(arg)) {
                extend(settings, arg);
            }
        });

        if (!durations || !durations.length) {
            return [];
        }

        settings.returnMomentTypes = true;

        var formattedDurations = map(durations, function (dur) {
            return dur.format(settings);
        });

        // Merge token types from all durations.
        var outputTypes = intersection(types, unique(pluck(flatten(formattedDurations), "type")));

        var largest = settings.largest;

        if (largest) {
            outputTypes = outputTypes.slice(0, largest);
        }

        settings.returnMomentTypes = false;
        settings.outputTypes = outputTypes;

        return map(durations, function (dur) {
            return dur.format(settings);
        });
    }

    // durationFormat([template] [, precision] [, settings])
    function durationFormat() {

        var args = [].slice.call(arguments);
        var settings = extend({}, this.format.defaults);

        // Keep a shadow copy of this moment for calculating remainders.
        // Perform all calculations on positive duration value, handle negative
        // sign at the very end.
        var asMilliseconds = this.asMilliseconds();
        var asMonths = this.asMonths();

        // Treat invalid durations as having a value of 0 milliseconds.
        if (typeof this.isValid === "function" && this.isValid() === false) {
            asMilliseconds = 0;
            asMonths = 0;
        }

        var isNegative = asMilliseconds < 0;

        // Two shadow copies are needed because of the way moment.js handles
        // duration arithmetic for years/months and for weeks/days/hours/minutes/seconds.
        var remainder = moment.duration(Math.abs(asMilliseconds), "milliseconds");
        var remainderMonths = moment.duration(Math.abs(asMonths), "months");

        // Parse arguments.
        each(args, function (arg) {
            if (typeof arg === "string" || typeof arg === "function") {
                settings.template = arg;
                return;
            }

            if (typeof arg === "number") {
                settings.precision = arg;
                return;
            }

            if (isObject(arg)) {
                extend(settings, arg);
            }
        });

        var momentTokens = {
            years: "y",
            months: "M",
            weeks: "w",
            days: "d",
            hours: "h",
            minutes: "m",
            seconds: "s",
            milliseconds: "S"
        };

        var tokenDefs = {
            escape: /\[(.+?)\]/,
            years: /\*?[Yy]+/,
            months: /\*?M+/,
            weeks: /\*?[Ww]+/,
            days: /\*?[Dd]+/,
            hours: /\*?[Hh]+/,
            minutes: /\*?m+/,
            seconds: /\*?s+/,
            milliseconds: /\*?S+/,
            general: /.+?/
        };

        // Types array is available in the template function.
        settings.types = types;

        var typeMap = function (token) {
            return find(types, function (type) {
                return tokenDefs[type].test(token);
            });
        };

        var tokenizer = new RegExp(map(types, function (type) {
            return tokenDefs[type].source;
        }).join("|"), "g");

        // Current duration object is available in the template function.
        settings.duration = this;

        // Eval template function and cache template string.
        var template = typeof settings.template === "function" ? settings.template.apply(settings) : settings.template;

        // outputTypes and returnMomentTypes are settings to support durationsFormat().

        // outputTypes is an array of moment token types that determines
        // the tokens returned in formatted output. This option overrides
        // trim, largest, stopTrim, etc.
        var outputTypes = settings.outputTypes;

        // returnMomentTypes is a boolean that sets durationFormat to return
        // the processed momentTypes instead of formatted output.
        var returnMomentTypes = settings.returnMomentTypes;

        var largest = settings.largest;

        // Setup stopTrim array of token types.
        var stopTrim = [];

        if (!outputTypes) {
            if (isArray(settings.stopTrim)) {
                settings.stopTrim = settings.stopTrim.join("");
            }

            // Parse stopTrim string to create token types array.
            if (settings.stopTrim) {
                each(settings.stopTrim.match(tokenizer), function (token) {
                    var type = typeMap(token);

                    if (type === "escape" || type === "general") {
                        return;
                    }

                    stopTrim.push(type);
                });
            }
        }

        // Cache moment's locale data.
        var localeData = moment.localeData();

        if (!localeData) {
            localeData = {};
        }

        // Fall back to this plugin's `eng` extension.
        each(keys(engLocale), function (key) {
            if (typeof engLocale[key] === "function") {
                if (!localeData[key]) {
                    localeData[key] = engLocale[key];
                }

                return;
            }

            if (!localeData["_" + key]) {
                localeData["_" + key] = engLocale[key];
            }
        });

        // Replace Duration Time Template strings.
        // For locale `eng`: `_HMS_`, `_HM_`, and `_MS_`.
        each(keys(localeData._durationTimeTemplates), function (item) {
            template = template.replace("_" + item + "_", localeData._durationTimeTemplates[item]);
        });

        // Determine user's locale.
        var userLocale = settings.userLocale || moment.locale();

        var useLeftUnits = settings.useLeftUnits;
        var usePlural = settings.usePlural;
        var precision = settings.precision;
        var forceLength = settings.forceLength;
        var useGrouping = settings.useGrouping;
        var trunc = settings.trunc;

        // Use significant digits only when precision is greater than 0.
        var useSignificantDigits = settings.useSignificantDigits && precision > 0;
        var significantDigits = useSignificantDigits ? settings.precision : 0;
        var significantDigitsCache = significantDigits;

        var minValue = settings.minValue;
        var isMinValue = false;

        var maxValue = settings.maxValue;
        var isMaxValue = false;

        // formatNumber fallback options.
        var useToLocaleString = settings.useToLocaleString;
        var groupingSeparator = settings.groupingSeparator;
        var decimalSeparator = settings.decimalSeparator;
        var grouping = settings.grouping;

        useToLocaleString = useToLocaleString && toLocaleStringWorks;

        // Trim options.
        var trim = settings.trim;

        if (isArray(trim)) {
            trim = trim.join(" ");
        }

        if (trim === null && (largest || maxValue || useSignificantDigits)) {
            trim = "all";
        }

        if (trim === null || trim === true || trim === "left" || trim === "right") {
            trim = "large";
        }

        if (trim === false) {
            trim = "";
        }

        var trimIncludes = function (item) {
            return item.test(trim);
        };

        var rLarge = /large/;
        var rSmall = /small/;
        var rBoth = /both/;
        var rMid = /mid/;
        var rAll = /^all|[^sm]all/;
        var rFinal = /final/;

        var trimLarge = largest > 0 || any([rLarge, rBoth, rAll], trimIncludes);
        var trimSmall = any([rSmall, rBoth, rAll], trimIncludes);
        var trimMid = any([rMid, rAll], trimIncludes);
        var trimFinal = any([rFinal, rAll], trimIncludes);

        // Parse format string to create raw tokens array.
        var rawTokens = map(template.match(tokenizer), function (token, index) {
            var type = typeMap(token);

            if (token.slice(0, 1) === "*") {
                token = token.slice(1);

                if (type !== "escape" && type !== "general") {
                    stopTrim.push(type);
                }
            }

            return {
                index: index,
                length: token.length,
                text: "",

                // Replace escaped tokens with the non-escaped token text.
                token: (type === "escape" ? token.replace(tokenDefs.escape, "$1") : token),

                // Ignore type on non-moment tokens.
                type: ((type === "escape" || type === "general") ? null : type)
            };
        });

        // Associate text tokens with moment tokens.
        var currentToken = {
            index: 0,
            length: 0,
            token: "",
            text: "",
            type: null
        };

        var tokens = [];

        if (useLeftUnits) {
            rawTokens.reverse();
        }

        each(rawTokens, function (token) {
            if (token.type) {
                if (currentToken.type || currentToken.text) {
                    tokens.push(currentToken);
                }

                currentToken = token;

                return;
            }

            if (useLeftUnits) {
                currentToken.text = token.token + currentToken.text;
            } else {
                currentToken.text += token.token;
            }
        });

        if (currentToken.type || currentToken.text) {
            tokens.push(currentToken);
        }

        if (useLeftUnits) {
            tokens.reverse();
        }

        // Find unique moment token types in the template in order of
        // descending magnitude.
        var momentTypes = intersection(types, unique(compact(pluck(tokens, "type"))));

        // Exit early if there are no moment token types.
        if (!momentTypes.length) {
            return pluck(tokens, "text").join("");
        }

        // Calculate values for each moment type in the template.
        // For processing the settings, values are associated with moment types.
        // Values will be assigned to tokens at the last step in order to
        // assume nothing about frequency or order of tokens in the template.
        momentTypes = map(momentTypes, function (momentType, index) {
            // Is this the least-magnitude moment token found?
            var isSmallest = ((index + 1) === momentTypes.length);

            // Is this the greatest-magnitude moment token found?
            var isLargest = (!index);

            // Get the raw value in the current units.
            var rawValue;

            if (momentType === "years" || momentType === "months") {
                rawValue = remainderMonths.as(momentType);
            } else {
                rawValue = remainder.as(momentType);
            }

            var wholeValue = Math.floor(rawValue);
            var decimalValue = rawValue - wholeValue;

            var token = find(tokens, function (token) {
                return momentType === token.type;
            });

            if (isLargest && maxValue && rawValue > maxValue) {
                isMaxValue = true;
            }

            if (isSmallest && minValue && Math.abs(settings.duration.as(momentType)) < minValue) {
                isMinValue = true;
            }

            // Note the length of the largest-magnitude moment token:
            // if it is greater than one and forceLength is not set,
            // then default forceLength to `true`.
            //
            // Rationale is this: If the template is "h:mm:ss" and the
            // moment value is 5 minutes, the user-friendly output is
            // "5:00", not "05:00". We shouldn't pad the `minutes` token
            // even though it has length of two if the template is "h:mm:ss";
            //
            // If the minutes output should always include the leading zero
            // even when the hour is trimmed then set `{ forceLength: true }`
            // to output "05:00". If the template is "hh:mm:ss", the user
            // clearly wanted everything padded so we should output "05:00";
            //
            // If the user wants the full padded output, they can use
            // template "hh:mm:ss" and set `{ trim: false }` to output
            // "00:05:00".
            if (isLargest && forceLength === null && token.length > 1) {
                forceLength = true;
            }

            // Update remainder.
            remainder.subtract(wholeValue, momentType);
            remainderMonths.subtract(wholeValue, momentType);

            return {
                rawValue: rawValue,
                wholeValue: wholeValue,
                // Decimal value is only retained for the least-magnitude
                // moment type in the format template.
                decimalValue: isSmallest ? decimalValue : 0,
                isSmallest: isSmallest,
                isLargest: isLargest,
                type: momentType,
                // Tokens can appear multiple times in a template string,
                // but all instances must share the same length.
                tokenLength: token.length
            };
        });

        var truncMethod = trunc ? Math.floor : Math.round;
        var truncate = function (value, places) {
            var factor = Math.pow(10, places);
            return truncMethod(value * factor) / factor;
        };

        var foundFirst = false;
        var bubbled = false;

        var formatValue = function (momentType, index) {
            var formatOptions = {
                useGrouping: useGrouping,
                groupingSeparator: groupingSeparator,
                decimalSeparator: decimalSeparator,
                grouping: grouping,
                useToLocaleString: useToLocaleString
            };

            if (useSignificantDigits) {
                if (significantDigits <= 0) {
                    momentType.rawValue = 0;
                    momentType.wholeValue = 0;
                    momentType.decimalValue = 0;
                } else {
                    formatOptions.maximumSignificantDigits = significantDigits;
                    momentType.significantDigits = significantDigits;
                }
            }

            if (isMaxValue && !bubbled) {
                if (momentType.isLargest) {
                    momentType.wholeValue = maxValue;
                    momentType.decimalValue = 0;
                } else {
                    momentType.wholeValue = 0;
                    momentType.decimalValue = 0;
                }
            }

            if (isMinValue && !bubbled) {
                if (momentType.isSmallest) {
                    momentType.wholeValue = minValue;
                    momentType.decimalValue = 0;
                } else {
                    momentType.wholeValue = 0;
                    momentType.decimalValue = 0;
                }
            }

            if (momentType.isSmallest || momentType.significantDigits && momentType.significantDigits - momentType.wholeValue.toString().length <= 0) {
                // Apply precision to least significant token value.
                if (precision < 0) {
                    momentType.value = truncate(momentType.wholeValue, precision);
                } else if (precision === 0) {
                    momentType.value = truncMethod(momentType.wholeValue + momentType.decimalValue);
                } else { // precision > 0
                    if (useSignificantDigits) {
                        if (trunc) {
                            momentType.value = truncate(momentType.rawValue, significantDigits - momentType.wholeValue.toString().length);
                        } else {
                            momentType.value = momentType.rawValue;
                        }

                        if (momentType.wholeValue) {
                            significantDigits -= momentType.wholeValue.toString().length;
                        }
                    } else {
                        formatOptions.fractionDigits = precision;

                        if (trunc) {
                            momentType.value = momentType.wholeValue + truncate(momentType.decimalValue, precision);
                        } else {
                            momentType.value = momentType.wholeValue + momentType.decimalValue;
                        }
                    }
                }
            } else {
                if (useSignificantDigits && momentType.wholeValue) {
                    // Outer Math.round required here to handle floating point errors.
                    momentType.value = Math.round(truncate(momentType.wholeValue, momentType.significantDigits - momentType.wholeValue.toString().length));

                    significantDigits -= momentType.wholeValue.toString().length;
                } else {
                    momentType.value = momentType.wholeValue;
                }
            }

            if (momentType.tokenLength > 1 && (forceLength || foundFirst)) {
                formatOptions.minimumIntegerDigits = momentType.tokenLength;

                if (bubbled && formatOptions.maximumSignificantDigits < momentType.tokenLength) {
                    delete formatOptions.maximumSignificantDigits;
                }
            }

            if (!foundFirst && (momentType.value > 0 || trim === "" /* trim: false */ || find(stopTrim, momentType.type) || find(outputTypes, momentType.type))) {
                foundFirst = true;
            }

            momentType.formattedValue = formatNumber(momentType.value, formatOptions, userLocale);

            formatOptions.useGrouping = false;
            formatOptions.decimalSeparator = ".";
            momentType.formattedValueEn = formatNumber(momentType.value, formatOptions, "en");

            if (momentType.tokenLength === 2 && momentType.type === "milliseconds") {
                momentType.formattedValueMS = formatNumber(momentType.value, {
                    minimumIntegerDigits: 3,
                    useGrouping: false
                }, "en").slice(0, 2);
            }

            return momentType;
        };

        // Calculate formatted values.
        momentTypes = map(momentTypes, formatValue);
        momentTypes = compact(momentTypes);

        // Bubble rounded values.
        if (momentTypes.length > 1) {
            var findType = function (type) {
                return find(momentTypes, function (momentType) {
                    return momentType.type === type;
                });
            };

            var bubbleTypes = function (bubble) {
                var bubbleMomentType = findType(bubble.type);

                if (!bubbleMomentType) {
                    return;
                }

                each(bubble.targets, function (target) {
                    var targetMomentType = findType(target.type);

                    if (!targetMomentType) {
                        return;
                    }

                    if (parseInt(bubbleMomentType.formattedValueEn, 10) === target.value) {
                        bubbleMomentType.rawValue = 0;
                        bubbleMomentType.wholeValue = 0;
                        bubbleMomentType.decimalValue = 0;
                        targetMomentType.rawValue += 1;
                        targetMomentType.wholeValue += 1;
                        targetMomentType.decimalValue = 0;
                        targetMomentType.formattedValueEn = targetMomentType.wholeValue.toString();
                        bubbled = true;
                    }
                });
            };

            each(bubbles, bubbleTypes);
        }

        // Recalculate formatted values.
        if (bubbled) {
            foundFirst = false;
            significantDigits = significantDigitsCache;
            momentTypes = map(momentTypes, formatValue);
            momentTypes = compact(momentTypes);
        }

        if (outputTypes && !(isMaxValue && !settings.trim)) {
            momentTypes = map(momentTypes, function (momentType) {
                if (find(outputTypes, function (outputType) {
                    return momentType.type === outputType;
                })) {
                    return momentType;
                }

                return null;
            });

            momentTypes = compact(momentTypes);
        } else {
            // Trim Large.
            if (trimLarge) {
                momentTypes = rest(momentTypes, function (momentType) {
                    // Stop trimming on:
                    // - the smallest moment type
                    // - a type marked for stopTrim
                    // - a type that has a whole value
                    return !momentType.isSmallest && !momentType.wholeValue && !find(stopTrim, momentType.type);
                });
            }

            // Largest.
            if (largest && momentTypes.length) {
                momentTypes = momentTypes.slice(0, largest);
            }

            // Trim Small.
            if (trimSmall && momentTypes.length > 1) {
                momentTypes = initial(momentTypes, function (momentType) {
                    // Stop trimming on:
                    // - a type marked for stopTrim
                    // - a type that has a whole value
                    // - the largest momentType
                    return !momentType.wholeValue && !find(stopTrim, momentType.type) && !momentType.isLargest;
                });
            }

            // Trim Mid.
            if (trimMid) {
                momentTypes = map(momentTypes, function (momentType, index) {
                    if (index > 0 && index < momentTypes.length - 1 && !momentType.wholeValue) {
                        return null;
                    }

                    return momentType;
                });

                momentTypes = compact(momentTypes);
            }

            // Trim Final.
            if (trimFinal && momentTypes.length === 1 && !momentTypes[0].wholeValue && !(!trunc && momentTypes[0].isSmallest && momentTypes[0].rawValue < minValue)) {
                momentTypes = [];
            }
        }

        if (returnMomentTypes) {
            return momentTypes;
        }

        // Localize and pluralize unit labels.
        each(tokens, function (token) {
            var key = momentTokens[token.type];

            var momentType = find(momentTypes, function (momentType) {
                return momentType.type === token.type;
            });

            if (!key || !momentType) {
                return;
            }

            var values = momentType.formattedValueEn.split(".");

            values[0] = parseInt(values[0], 10);

            if (values[1]) {
                values[1] = parseFloat("0." + values[1], 10);
            } else {
                values[1] = null;
            }

            var pluralKey = localeData.durationPluralKey(key, values[0], values[1]);

            var labels = durationGetLabels(key, localeData);

            var autoLocalized = false;

            var pluralizedLabels = {};

            // Auto-Localized unit labels.
            each(localeData._durationLabelTypes, function (labelType) {
                var label = find(labels, function (label) {
                    return label.type === labelType.type && label.key === pluralKey;
                });

                if (label) {
                    pluralizedLabels[label.type] = label.label;

                    if (stringIncludes(token.text, labelType.string)) {
                        token.text = token.text.replace(labelType.string, label.label);
                        autoLocalized = true;
                    }
                }
            });

            // Auto-pluralized unit labels.
            if (usePlural && !autoLocalized) {
                labels.sort(durationLabelCompare);

                each(labels, function (label) {
                    if (pluralizedLabels[label.type] === label.label) {
                        if (stringIncludes(token.text, label.label)) {
                            // Stop checking this token if its label is already
                            // correctly pluralized.
                            return false;
                        }

                        // Skip this label if it is correct, but not present in
                        // the token's text.
                        return;
                    }

                    if (stringIncludes(token.text, label.label)) {
                        // Replece this token's label and stop checking.
                        token.text = token.text.replace(label.label, pluralizedLabels[label.type]);
                        return false;
                    }
                });
            }
        });

        // Build ouptut.
        tokens = map(tokens, function (token) {
            if (!token.type) {
                return token.text;
            }

            var momentType = find(momentTypes, function (momentType) {
                return momentType.type === token.type;
            });

            if (!momentType) {
                return "";
            }

            var out = "";

            if (useLeftUnits) {
                out += token.text;
            }

            if (isNegative && isMaxValue || !isNegative && isMinValue) {
                out += "< ";
                isMaxValue = false;
                isMinValue = false;
            }

            if (isNegative && isMinValue || !isNegative && isMaxValue) {
                out += "> ";
                isMaxValue = false;
                isMinValue = false;
            }

            if (isNegative && (momentType.value > 0 || trim === "" || find(stopTrim, momentType.type) || find(outputTypes, momentType.type))) {
                out += "-";
                isNegative = false;
            }

            if (token.type === "milliseconds" && momentType.formattedValueMS) {
                out += momentType.formattedValueMS;
            } else {
                out += momentType.formattedValue;
            }

            if (!useLeftUnits) {
                out += token.text;
            }

            return out;
        });

        // Trim leading and trailing comma, space, colon, and dot.
        return tokens.join("").replace(/(,| |:|\.)*$/, "").replace(/^(,| |:|\.)*/, "");
    }

    // defaultFormatTemplate
    function defaultFormatTemplate() {
        var dur = this.duration;

        var findType = function findType(type) {
            return dur._data[type];
        };

        var firstType = find(this.types, findType);

        var lastType = findLast(this.types, findType);

        // Default template strings for each duration dimension type.
        switch (firstType) {
            case "milliseconds":
                return "S __";
            case "seconds": // Fallthrough.
            case "minutes":
                return "*_MS_";
            case "hours":
                return "_HMS_";
            case "days": // Possible Fallthrough.
                if (firstType === lastType) {
                    return "d __";
                }
            case "weeks":
                if (firstType === lastType) {
                    return "w __";
                }

                if (this.trim === null) {
                    this.trim = "both";
                }

                return "w __, d __, h __";
            case "months": // Possible Fallthrough.
                if (firstType === lastType) {
                    return "M __";
                }
            case "years":
                if (firstType === lastType) {
                    return "y __";
                }

                if (this.trim === null) {
                    this.trim = "both";
                }

                return "y __, M __, d __";
            default:
                if (this.trim === null) {
                    this.trim = "both";
                }

                return "y __, d __, h __, m __, s __";
        }
    }

    // init
    function init(context) {
        if (!context) {
            throw "Moment Duration Format init cannot find moment instance.";
        }

        context.duration.format = durationsFormat;
        context.duration.fn.format = durationFormat;

        context.duration.fn.format.defaults = {
            // Many options are defaulted to `null` to distinguish between
            // 'not set' and 'set to `false`'

            // trim
            // Can be a string, a delimited list of strings, an array of strings,
            // or a boolean.
            // "large" - will trim largest-magnitude zero-value tokens until
            // finding a token with a value, a token identified as 'stopTrim', or
            // the final token of the format string.
            // "small" - will trim smallest-magnitude zero-value tokens until
            // finding a token with a value, a token identified as 'stopTrim', or
            // the final token of the format string.
            // "both" - will execute "large" trim then "small" trim.
            // "mid" - will trim any zero-value tokens that are not the first or
            // last tokens. Usually used in conjunction with "large" or "both".
            // e.g. "large mid" or "both mid".
            // "final" - will trim the final token if it is zero-value. Use this
            // option with "large" or "both" to output an empty string when
            // formatting a zero-value duration. e.g. "large final" or "both final".
            // "all" - Will trim all zero-value tokens. Shorthand for "both mid final".
            // "left" - maps to "large" to support plugin's version 1 API.
            // "right" - maps to "large" to support plugin's version 1 API.
            // `false` - template tokens are not trimmed.
            // `true` - treated as "large".
            // `null` - treated as "large".
            trim: null,

            // stopTrim
            // A moment token string, a delimited set of moment token strings,
            // or an array of moment token strings. Trimming will stop when a token
            // listed in this option is reached. A "*" character in the format
            // template string will also mark a moment token as stopTrim.
            // e.g. "d [days] *h:mm:ss" will always stop trimming at the 'hours' token.
            stopTrim: null,

            // largest
            // Set to a positive integer to output only the "n" largest-magnitude
            // moment tokens that have a value. All lesser-magnitude moment tokens
            // will be ignored. This option takes effect even if `trim` is set
            // to `false`.
            largest: null,

            // maxValue
            // Use `maxValue` to render generalized output for large duration values,
            // e.g. `"> 60 days"`. `maxValue` must be a positive integer and is
            /// applied to the greatest-magnitude moment token in the format template.
            maxValue: null,

            // minValue
            // Use `minValue` to render generalized output for small duration values,
            // e.g. `"< 5 minutes"`. `minValue` must be a positive integer and is
            // applied to the least-magnitude moment token in the format template.
            minValue: null,

            // precision
            // If a positive integer, number of decimal fraction digits to render.
            // If a negative integer, number of integer place digits to truncate to 0.
            // If `useSignificantDigits` is set to `true` and `precision` is a positive
            // integer, sets the maximum number of significant digits used in the
            // formatted output.
            precision: 0,

            // trunc
            // Default behavior rounds final token value. Set to `true` to
            // truncate final token value, which was the default behavior in
            // version 1 of this plugin.
            trunc: false,

            // forceLength
            // Force first moment token with a value to render at full length
            // even when template is trimmed and first moment token has length of 1.
            forceLength: null,

            // userLocale
            // Formatted numerical output is rendered using `toLocaleString`
            // and the locale of the user's environment. Set this option to render
            // numerical output using a different locale. Unit names are rendered
            // and detected using the locale set in moment.js, which can be different
            // from the locale of user's environment.
            userLocale: null,

            // usePlural
            // Will automatically singularize or pluralize unit names when they
            // appear in the text associated with each moment token. Standard and
            // short unit labels are singularized and pluralized, based on locale.
            // e.g. in english, "1 second" or "1 sec" would be rendered instead
            // of "1 seconds" or "1 secs". The default pluralization function
            // renders a plural label for a value with decimal precision.
            // e.g. "1.0 seconds" is never rendered as "1.0 second".
            // Label types and pluralization function are configurable in the
            // localeData extensions.
            usePlural: true,

            // useLeftUnits
            // The text to the right of each moment token in a format string
            // is treated as that token's units for the purposes of trimming,
            // singularizing, and auto-localizing.
            // e.g. "h [hours], m [minutes], s [seconds]".
            // To properly singularize or localize a format string such as
            // "[hours] h, [minutes] m, [seconds] s", where the units appear
            // to the left of each moment token, set useLeftUnits to `true`.
            // This plugin is not tested in the context of rtl text.
            useLeftUnits: false,

            // useGrouping
            // Enables locale-based digit grouping in the formatted output. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
            useGrouping: true,

            // useSignificantDigits
            // Treat the `precision` option as the maximum significant digits
            // to be rendered. Precision must be a positive integer. Significant
            // digits extend across unit types,
            // e.g. "6 hours 37.5 minutes" represents 4 significant digits.
            // Enabling this option causes token length to be ignored. See  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
            useSignificantDigits: false,

            // template
            // The template string used to format the duration. May be a function
            // or a string. Template functions are executed with the `this` binding
            // of the settings object so that template strings may be dynamically
            // generated based on the duration object (accessible via `this.duration`)
            // or any of the other settings. Leading and trailing space, comma,
            // period, and colon characters are trimmed from the resulting string.
            template: defaultFormatTemplate,

            // useToLocaleString
            // Set this option to `false` to ignore the `toLocaleString` feature
            // test and force the use of the `formatNumber` fallback function
            // included in this plugin.
            useToLocaleString: true,

            // formatNumber fallback options.
            // When `toLocaleString` is detected and passes the feature test, the
            // following options will have no effect: `toLocaleString` will be used
            // for formatting and the grouping separator, decimal separator, and
            // integer digit grouping will be determined by the user locale.

            // groupingSeparator
            // The integer digit grouping separator used when using the fallback
            // formatNumber function.
            groupingSeparator: ",",

            // decimalSeparator
            // The decimal separator used when using the fallback formatNumber
            // function.
            decimalSeparator: ".",

            // grouping
            // The integer digit grouping used when using the fallback formatNumber
            // function. Must be an array. The default value of `[3]` gives the
            // standard 3-digit thousand/million/billion digit groupings for the
            // "en" locale. Setting this option to `[3, 2]` would generate the
            // thousand/lakh/crore digit groupings used in the "en-IN" locale.
            grouping: [3]
        };

        context.updateLocale('en', engLocale);
    }

    // Run feature tests for `Number#toLocaleString`.
    toLocaleStringWorks = featureTestToLocaleString();
    toLocaleStringRoundingWorks = toLocaleStringWorks && featureTestToLocaleStringRounding();

    // Initialize duration format on the global moment instance.
    init(moment);

    // Return the init function so that duration format can be
    // initialized on other moment instances.
    return init;
});


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "@eventespresso/eejs":
/*!**********************************!*\
  !*** external {"this":["eejs"]} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]; }());

/***/ }),

/***/ "@eventespresso/helpers":
/*!********************************************!*\
  !*** external {"this":["eejs","helpers"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["helpers"]; }());

/***/ }),

/***/ "@eventespresso/validators":
/*!***********************************************!*\
  !*** external {"this":["eejs","validators"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["validators"]; }());

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "moment":
/*!**********************************!*\
  !*** external {"this":"moment"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ "moment-timezone":
/*!****************************************************!*\
  !*** external {"this":["eejs","vendor","moment"]} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["moment"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL2Fzc2V0cy9zcmMvdm8vY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9hc3NldHMvc3JjL3ZvL2RhdGUtdGltZS9hc3NlcnRpb25zLmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vYXNzZXRzL3NyYy92by9kYXRlLXRpbWUvZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9hc3NldHMvc3JjL3ZvL2RhdGUtdGltZS9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL2Fzc2V0cy9zcmMvdm8vZGF0ZS10aW1lL2R1cmF0aW9uLmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vYXNzZXRzL3NyYy92by9kYXRlLXRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9hc3NldHMvc3JjL3ZvL2RhdGUtdGltZS9zZXJ2ZXItZGF0ZS10aW1lLmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vYXNzZXRzL3NyYy92by9pbmRleC5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL2Fzc2V0cy9zcmMvdm8vbGFiZWwuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9hc3NldHMvc3JjL3ZvL21vbmV5LmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvLi9ub2RlX21vZHVsZXMvYWNjb3VudGluZy1qcy9kaXN0L2FjY291bnRpbmcudW1kLmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL2RlY2ltYWwuanMtbGlnaHQvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy8uL25vZGVfbW9kdWxlcy9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzIiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy9leHRlcm5hbCB7XCJ0aGlzXCI6W1wiZWVqc1wiXX0iLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvZXh0ZXJuYWwge1widGhpc1wiOltcImVlanNcIixcImhlbHBlcnNcIl19Iiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzL2V4dGVybmFsIHtcInRoaXNcIjpbXCJlZWpzXCIsXCJ2YWxpZGF0b3JzXCJdfSIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy9leHRlcm5hbCB7XCJ0aGlzXCI6W1wid3BcIixcImlzU2hhbGxvd0VxdWFsXCJdfSIsIndlYnBhY2s6Ly9lZWpzLnZhbHVlT2JqZWN0cy9leHRlcm5hbCB7XCJ0aGlzXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vZWVqcy52YWx1ZU9iamVjdHMvZXh0ZXJuYWwge1widGhpc1wiOlwibW9tZW50XCJ9Iiwid2VicGFjazovL2VlanMudmFsdWVPYmplY3RzL2V4dGVybmFsIHtcInRoaXNcIjpbXCJlZWpzXCIsXCJ2ZW5kb3JcIixcIm1vbWVudFwiXX0iXSwibmFtZXMiOlsiQ3VycmVuY3kiLCJjdXJyZW5jeUNvbmZpZyIsInZhbGlkYXRlQ3VycmVuY3lDb25maWciLCJjb2RlIiwic2luZ3VsYXJMYWJlbCIsInBsdXJhbExhYmVsIiwic2lnbiIsInNpZ25CNCIsImlzVW5kZWZpbmVkIiwiZGVjaW1hbFBsYWNlcyIsImRlY2ltYWxNYXJrIiwidGhvdXNhbmRzU2VwYXJhdG9yIiwic3VidW5pdHMiLCJNYXRoIiwicG93IiwiT2JqZWN0IiwiZnJlZXplIiwiZGVjaW1hbEluZm8iLCJkZWNpbWFsIiwidGhvdXNhbmQiLCJwcmVjaXNpb24iLCJjdXJyZW5jeSIsInN5bWJvbCIsImZvcm1hdCIsInBvcyIsIm5lZyIsInplcm8iLCJudW1iZXIiLCJjb25maWciLCJpc0VtcHR5IiwiRXhjZXB0aW9uIiwiaXNTdHJpbmciLCJUeXBlRXJyb3IiLCJpc0Jvb2xlYW4iLCJpc051bWJlciIsIlNpdGVDdXJyZW5jeSIsImUiLCJ3YXJuaW5nIiwibWVzc2FnZSIsIkNVUlJFTkNZX0NPTkZJRyIsInZhbGlkYXRlTG9jYWxlIiwibG9jYWxlIiwib3JpZ2luYWxMb2NhbGUiLCJtb21lbnQiLCJ2YWxpZGF0aW9uTG9jYWxlIiwiYXNzZXJ0TG9jYWxlSXNWYWxpZCIsIkludmFsaWRMb2NhbGUiLCJ2YWxpZGF0ZUlTTzg2MDEiLCJkYXRlVGltZVN0cmluZyIsImlzRHVyYXRpb24iLCJyZWdleCIsInRlc3QiLCJhc3NlcnRJU084NjAxSXNWYWxpZCIsIkludmFsaWRJU084NjAxU3RyaW5nIiwidmFsaWRhdGVUaW1lem9uZSIsInRpbWV6b25lIiwiZHQiLCJ0eiIsInpvbmUiLCJhc3NlcnRUaW1lem9uZUlzVmFsaWQiLCJJbnZhbGlkVGltZXpvbmUiLCJ2YWxpZGF0ZUlzRGF0ZSIsImRhdGUiLCJEYXRlIiwiYXNzZXJ0SXNEYXRlIiwidmFsaWRhdGVJc09mZnNldCIsIm9mZnNldCIsImFzc2VydElzT2Zmc2V0IiwicHJpdmF0ZVByb3BlcnRpZXMiLCJkYXRldGltZSIsIlN5bWJvbCIsInByaXZhdGVNZXRob2RzIiwiZ2V0VW5pdE5hbWVzIiwiY3JlYXRlR2V0dGVyc0FuZFNldHRlcnMiLCJleHRyYWN0TW9tZW50c0Zyb21EYXRlVGltZXMiLCJub3JtYWxpemVVbml0TmFtZSIsIm5vcm1hbGl6ZVVuaXRPYmplY3QiLCJub3JtYWxpemVVbml0VmFsdWUiLCJ2YWxpZERhdGVUaW1lVW5pdHMiLCJEYXRlVGltZSIsImlzbzg2MDFEYXRlU3RyaW5nIiwiREVGQVVMVF9USU1FWk9ORV9TVFJJTkciLCJERUZBVUxUX1ZBTElEX0xPQ0FMRSIsInV0YyIsInV0Y09mZnNldCIsIlRJTUVaT05FX0xPQ0FMIiwiZm9yRWFjaCIsInVuaXROYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJtZXRob2ROYW1lIiwidW5pdFZhbHVlIiwiY2FwaXRhbGl6ZSIsInZhbHVlIiwic2V0Iiwic2V0T2JqZWN0IiwiY2xvbmUiLCJ0b0lTT1N0cmluZyIsImZyb21Nb21lbnQiLCJpc1ZhbGlkIiwib3RoZXJEYXRlVGltZSIsImFzc2VydElzRGF0ZVRpbWUiLCJEdXJhdGlvbiIsImR1cmF0aW9uIiwiZGlmZiIsInVuaXQiLCJlbmRPZiIsImlzU2FtZSIsImFzc2VydElzVmFsaWREdXJhdGlvbiIsInN1YnRyYWN0IiwidG9PYmplY3QiLCJhZGQiLCJzdGFydE9mIiwiREVGQVVMVF9GT1JNQVQiLCJpblVUQyIsInRvRGF0ZSIsImxvY2FsIiwidmFsdWVPZiIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsInRvU3RyaW5nIiwiZGF5c0luTW9udGgiLCJpc0RTVCIsImlzTGVhcFllYXIiLCJkYXlPZlllYXIiLCJxdWFydGVyIiwiaXNvV2VlayIsImlzb1dlZWtZZWFyIiwiaXNvV2Vla2RheSIsImlzb1dlZWtzSW5ZZWFyIiwiYXNzZXJ0aW9ucyIsImluc3RhbmNlT2YiLCJ2YWxpZGF0ZUlzRGF0ZVRpbWUiLCJJbnZhbGlkRGF0ZVRpbWUiLCJkYXRldGltZXMiLCJtYXAiLCJtYXgiLCJtaW4iLCJtb21lbnRJbnN0YW5jZSIsImlzTW9tZW50IiwiaXNGdW5jdGlvbiIsIklTT1N0cmluZyIsIkRFRkFVTFRfT0ZGU0VUIiwibWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsInVuaXgiLCJ2YWx1ZXMiLCJJbnZhbGlkQXJndW1lbnQiLCJ2YWx1ZXNGb3JDb25zdHJ1Y3QiLCJvbWl0IiwiZnJvbUxvY2FsIiwibmFtZVRvTm9ybWFsaXplIiwiZGF5IiwiZGF5cyIsInllYXJzIiwibW9udGhzIiwibWludXRlcyIsImhvdXJzIiwiaXNPYmplY3QiLCJVTklUX1lFQVIiLCJVTklUX01PTlRIIiwiVU5JVF9EQVkiLCJVTklUX0hPVVIiLCJVTklUX01JTlVURSIsIlVOSVRfU0VDT05EIiwiVU5JVF9NSUxMSVNFQ09ORCIsIlRJTUVaT05FX0NPTkZJRyIsInN0cmluZyIsIkhBU19USU1FWk9ORV9TVFJJTkciLCJGT1JNQVRfU0lURV9EQVRFIiwiRk9STUFUX1NJVEVfVElNRSIsIkRFRkFVTFRfTE9DQUxFIiwic25ha2VDYXNlIiwiU0VSVkVSX0xPQ0FMRSIsInVzZXIiLCJtb21lbnREdXJhdGlvbkZvcm1hdFNldHVwIiwiZHVyYXRpb25WYWx1ZXMiLCJjcmVhdGVHZXR0ZXJzIiwiZ2V0QWxsVW5pdE5hbWVzIiwicG9wdWxhdGVWYWx1ZXNGcm9tRHVyYXRpb24iLCJzZXRWYWx1ZXMiLCJmaWx0ZXJWYWx1ZXMiLCJ1bml0TmFtZXMiLCJkZXJpdmF0aXZlVW5pdE5hbWVzIiwidmFsdWVzVG9TZXQiLCJwaWNrIiwiaXNTaGFsbG93RXF1YWwiLCJrZXlzIiwiam9pbiIsImFjY2Vzc29yTmFtZSIsImluZGV4T2YiLCJhc01ldGhvZE5hbWUiLCJvdGhlckR1cmF0aW9uIiwiYXNzZXJ0SXNEdXJhdGlvbiIsIm5vcm1hbGl6ZSIsIm1hcFZhbHVlcyIsInRvSlNPTiIsInRvSVNPIiwiYXNNaWxsaXNlY29uZHMiLCJpc29TdHJpbmciLCJpc1ZhbGlkRHVyYXRpb24iLCJTZXJ2ZXJEYXRlVGltZSIsIkxhYmVsIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJzZXRTaW5ndWxhciIsInNldFBsdXJhbCIsImFzc2VydFN0cmluZyIsInN0YXJ0Q2FzZSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJmb3JtYXRUeXBlIiwiRk9STUFUX1NFTlRFTkNFX0NBU0UiLCJhc1NlbnRlbmNlQ2FzZSIsIkZPUk1BVF9MT1dFUkNBU0UiLCJhc0xvd2VyQ2FzZSIsIkZPUk1BVF9VUFBFUkNBU0UiLCJhc1VwcGVyQ2FzZSIsImxhYmVsIiwiYXNzZXJ0TW9uZXkiLCJtb25leSIsImFzc2VydEN1cnJlbmN5IiwiYXNzZXJ0U2FtZUN1cnJlbmN5IiwiY3VycmVuY3lBIiwiY3VycmVuY3lCIiwiTW9uZXkiLCJhbW91bnQiLCJzZXRDdXJyZW5jeSIsInNldEFtb3VudCIsInNldEZvcm1hdHRlciIsInRvTnVtYmVyIiwiRGVjaW1hbCIsImZvcm1hdHRlciIsIkFjY291bnRpbmciLCJzZXR0aW5ncyIsInRvQWNjb3VudGluZ1NldHRpbmdzIiwib3RoZXIiLCJlcXVhbHMiLCJoYXNTYW1lQ3VycmVuY3kiLCJhc3NlcnRVc2luZ1NhbWVDdXJyZW5jeSIsInBsdXMiLCJtaW51cyIsIm11bHRpcGxpZXIiLCJ0aW1lcyIsImRpdmlzb3IiLCJkaXZpZGVkQnkiLCJyYXRpb3MiLCJzZWxmIiwicmVzdWx0cyIsImNvbnZlcnRlZFJhdGlvcyIsInJlbWFpbmRlciIsInRvU3VidW5pdHMiLCJ0b3RhbCIsInJhdGlvIiwicHVzaCIsInNoYXJlIiwiZmxvb3IiLCJpIiwiZ3JlYXRlclRoYW4iLCJjb21wYXJlZFRvIiwiZ3JlYXRlclRoYW5PckVxdWFsVG8iLCJsZXNzVGhhbiIsImxlc3NUaGFuT3JFcXVhbFRvIiwiaXNaZXJvIiwiaXNOZWdhdGl2ZSIsImlzUG9zaXRpdmUiLCJyb3VuZGluZyIsIlJPVU5EX0hBTEZfVVAiLCJ0b0ZpeGVkIiwidG9JbnRlZ2VyIiwiUk9VTkRfVVAiLCJST1VORF9ET1dOIiwiUk9VTkRfQ0VJTCIsIlJPVU5EX0ZMT09SIiwiUk9VTkRfSEFMRl9ET1dOIiwiUk9VTkRfSEFMRl9FVkVOIiwidGhpc01vbmV5Iiwib3RoZXJNb25leSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7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QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7O0FBRTlCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxlQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksYUFBYTs7QUFFekI7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7O0FBRXJCO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQkFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLFVBQVUsY0FBYzs7QUFFeEI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxXQUFXOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsb0JBQW9CO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeG9ERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsYUFBb0I7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdEQSxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsMENBQTBDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBekQsYUFBYSw2Q0FBNkMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E1RCxhQUFhLCtDQUErQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlELGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLG1EQUFtRCxFQUFFLEkiLCJmaWxlIjoiZXZlbnRlc3ByZXNzby12YWx1ZS1vYmplY3RzLjY5ZTk5MzYyOGY4MmE1YmY2NWJmLmRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zcmMvdm8vaW5kZXguanNcIik7XG4iLCIvKipcbiAqIEV4dGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IHtcblx0aXNFbXB0eSxcblx0aXNTdHJpbmcsXG5cdGlzTnVtYmVyLFxuXHRpc0Jvb2xlYW4sXG5cdGlzVW5kZWZpbmVkLFxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRXhjZXB0aW9uLCBDVVJSRU5DWV9DT05GSUcgfSBmcm9tICdAZXZlbnRlc3ByZXNzby9lZWpzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG4vKipcbiAqIEEgdmFsdWUgb2JqZWN0IHJlcHJlc2VudGluZyBjdXJyZW5jeSB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcblx0LyoqXG5cdCAqIFRoZSBJU08gNDIxNyBjb2RlIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW5jeSAoZWcuICdVU0QnKVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Y29kZSA9ICcnO1xuXG5cdC8qKlxuXHQgKiBUaGUgc2luZ3VsYXIgbGFiZWwgZm9yIHRoZSBjdXJyZW5jeSAoZWcuICdEb2xsYXInKTtcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNpbmd1bGFyTGFiZWwgPSAnJztcblxuXHQvKipcblx0ICogVGhlIHBsdXJhbCBsYWJlbCBmb3IgdGhlIGN1cnJlbmN5IChlZy4gJ0RvbGxhcnMnKTtcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHBsdXJhbExhYmVsID0gJyc7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW5jeSBzeW1ib2wgKGVnLiAnJCcpO1xuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c2lnbiA9ICcnO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBjdXJyZW5jeSBzeW1ib2wgaXMgZGlzcGxheWVkIGJlZm9yZSBvciBhZnRlciB0aGUgdmFsdWUuXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0c2lnbkI0ID0gdHJ1ZTtcblxuXHQvKipcblx0ICogVGhlIHByZWNpc2lvbiBmb3IgdGhlIHZhbHVlIChlZy4gMTAuMDIgaXMgMiwgMTAuMTIzIGlzIDMpLiBUaGUgbnVtYmVyIG9mXG5cdCAqIGRlY2ltYWwgcGxhY2VzIGNhbiBiZSB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHN1YnVuaXRzIGZvciB0aGVcblx0ICogY3VycmVuY3kgLSBzdWJ1bml0cyA9IHBvdyggMTAsIGRlY2ltYWxQbGFjZXMpLlxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0ZGVjaW1hbFBsYWNlcyA9IDI7XG5cblx0LyoqXG5cdCAqIFRoZSBzeW1ib2wgdXNlZCBmb3IgdGhlIGRlY2ltYWwgbWFyayAoZWcuICcuJylcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGRlY2ltYWxNYXJrID0gJy4nO1xuXG5cdC8qKlxuXHQgKiBUaGUgc3ltYm9sIHVzZWQgdG8gc3BsaXQgdXAgdGhvdXNhbmRzIGluIHRoZSB2YWx1ZSAoZWcuICcsJylcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHRob3VzYW5kc1NlcGFyYXRvciA9ICcsJztcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBmcmFjdGlvbmFsIGRpdmlzaW9ucyBvZiBhIGN1cnJlbmN5J3MgbWFpbiB1bml0LiAgSWYgbm90XG5cdCAqIHByb3ZpZGVkLCB0aGVuIGl0IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBkZWNpbWFsUGxhY2VzXG5cdCAqIHZhbHVlLlxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0c3VidW5pdHMgPSAxMDA7XG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7e319IGN1cnJlbmN5Q29uZmlnIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjb25maWd1cmF0aW9uIGZvclxuXHQgKiB0aGlzIGN1cnJlbmN5IHZhbHVlIG9iamVjdC4gIE9uIGNvbnN0cnVjdGlvbiwgdGhlIEN1cnJlbmN5IG9iamVjdCBpc1xuXHQgKiBmcm96ZW4gc28gdGhhdCBpdCBiZWNvbWVzIGltbXV0YWJsZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBjdXJyZW5jeUNvbmZpZyApIHtcblx0XHRDdXJyZW5jeS52YWxpZGF0ZUN1cnJlbmN5Q29uZmlnKCBjdXJyZW5jeUNvbmZpZyApO1xuXHRcdHRoaXMuY29kZSA9IGN1cnJlbmN5Q29uZmlnLmNvZGU7XG5cdFx0dGhpcy5zaW5ndWxhckxhYmVsID0gY3VycmVuY3lDb25maWcuc2luZ3VsYXJMYWJlbCB8fCAnJztcblx0XHR0aGlzLnBsdXJhbExhYmVsID0gY3VycmVuY3lDb25maWcucGx1cmFsTGFiZWwgfHwgJyc7XG5cdFx0dGhpcy5zaWduID0gY3VycmVuY3lDb25maWcuc2lnbjtcblx0XHR0aGlzLnNpZ25CNCA9IGlzVW5kZWZpbmVkKCBjdXJyZW5jeUNvbmZpZy5zaWduQjQgKSA/XG5cdFx0XHR0aGlzLnNpZ25CNCA6XG5cdFx0XHRjdXJyZW5jeUNvbmZpZy5zaWduQjQ7XG5cdFx0dGhpcy5kZWNpbWFsUGxhY2VzID0gaXNVbmRlZmluZWQoIGN1cnJlbmN5Q29uZmlnLmRlY2ltYWxQbGFjZXMgKSA/XG5cdFx0XHR0aGlzLmRlY2ltYWxQbGFjZXMgOlxuXHRcdFx0Y3VycmVuY3lDb25maWcuZGVjaW1hbFBsYWNlcztcblx0XHR0aGlzLmRlY2ltYWxNYXJrID0gY3VycmVuY3lDb25maWcuZGVjaW1hbE1hcmsgfHwgdGhpcy5kZWNpbWFsTWFyaztcblx0XHR0aGlzLnRob3VzYW5kc1NlcGFyYXRvciA9IGN1cnJlbmN5Q29uZmlnLnRob3VzYW5kc1NlcGFyYXRvciB8fCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcjtcblx0XHR0aGlzLnN1YnVuaXRzID0gY3VycmVuY3lDb25maWcuc3VidW5pdHMgfHxcblx0XHRcdE1hdGgucG93KCAxMCwgdGhpcy5kZWNpbWFsUGxhY2VzICk7XG5cdFx0T2JqZWN0LmZyZWV6ZSggdGhpcyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGN1cnJlbmN5IHByb3BlcnRpZXMgYXMgYW4gb2JqZWN0IGZvcm1hdHRlZCBmb3IgdGhlXG5cdCAqIGFjY291bnRpbmctanMgbGlicmFyeSBjb25maWd1cmF0aW9uLlxuXHQgKiBAcmV0dXJuIHt7fX0gIEFuIG9iamVjdCBzaGFwZWQgZm9yIHdoYXQgdGhlIGFjY291bnRpbmctanMgbGlicmFyeSBleHBlY3RzXG5cdCAqL1xuXHR0b0FjY291bnRpbmdTZXR0aW5ncygpIHtcblx0XHRjb25zdCBkZWNpbWFsSW5mbyA9IHtcblx0XHRcdGRlY2ltYWw6IHRoaXMuZGVjaW1hbE1hcmssXG5cdFx0XHR0aG91c2FuZDogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IsXG5cdFx0XHRwcmVjaXNpb246IHRoaXMuZGVjaW1hbFBsYWNlcyxcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdXJyZW5jeToge1xuXHRcdFx0XHRzeW1ib2w6IHRoaXMuc2lnbixcblx0XHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdFx0cG9zOiB0aGlzLnNpZ25CNCA/ICclcyV2JyA6ICcldiVzJyxcblx0XHRcdFx0XHRuZWc6IHRoaXMuc2lnbkI0ID8gJy0gJHMldicgOiAnLSAldiVzJyxcblx0XHRcdFx0XHR6ZXJvOiB0aGlzLnNpZ25CNCA/ICclcyV2JyA6ICcldiVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uZGVjaW1hbEluZm8sXG5cdFx0XHR9LFxuXHRcdFx0bnVtYmVyOiBkZWNpbWFsSW5mbyxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGlzIG9iamVjdC5cblx0ICogQHJldHVybiB7T2JqZWN0fSBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIG9iamVjdCB0byBiZSBzZXJpYWxpemVkIGJ5XG5cdCAqIEpTT04uc3RyaW5naWZ5XG5cdCAqL1xuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvZGU6IHRoaXMuY29kZSxcblx0XHRcdHNpbmd1bGFyTGFiZWw6IHRoaXMuc2luZ3VsYXJMYWJlbCxcblx0XHRcdHBsdXJhbExhYmVsOiB0aGlzLnBsdXJhbExhYmVsLFxuXHRcdFx0c2lnbjogdGhpcy5zaWduLFxuXHRcdFx0c2lnbkI0OiB0aGlzLnNpZ25CNCxcblx0XHRcdGRlY2ltYWxNYXJrOiB0aGlzLmRlY2ltYWxNYXJrLFxuXHRcdFx0dGhvdXNhbmRzU2VwYXJhdG9yOiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcixcblx0XHRcdHN1YnVuaXRzOiB0aGlzLnN1YnVuaXRzLFxuXHRcdFx0ZGVjaW1hbFBsYWNlczogdGhpcy5kZWNpbWFsUGxhY2VzLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyB2YWxpZGF0ZXMgd2hldGhlciB0aGUgcGFzc2VkIGluIGNvbmZpZyBoYXMgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXNcblx0ICogKGFuZCBjb3JyZWN0IHR5cGVzKSBmb3IgY29uc3RydWN0aW5nIGEgQ3VycmVuY3kgb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3t9fSBjb25maWdcblx0ICogQHRocm93cyB7RXhjZXB0aW9ufVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRhdGVDdXJyZW5jeUNvbmZpZyA9ICggY29uZmlnICkgPT4ge1xuXHRcdGlmICggaXNFbXB0eSggY29uZmlnICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXhjZXB0aW9uKFxuXHRcdFx0XHQnVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHByb3ZpZGVkIHRvIEN1cnJlbmN5IG11c3Qgbm90JyArXG5cdFx0XHRcdCcgYmUgZW1wdHknXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoICEgY29uZmlnLmNvZGUgfHwgISBpc1N0cmluZyggY29uZmlnLmNvZGUgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRcdCdUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgcHJvdmlkZWQgdG8gQ3VycmVuY3kgbXVzdCBoYXZlICcgK1xuXHRcdFx0XHQnYSBcImNvZGVcIiBwcm9wZXJ0eSB0aGF0IGlzIGEgc3RyaW5nLidcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhIGNvbmZpZy5zaWduIHx8ICEgaXNTdHJpbmcoIGNvbmZpZy5zaWduICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHQnVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHByb3ZpZGVkIHRvIEN1cnJlbmN5IG11c3QgaGF2ZSBhICcgK1xuXHRcdFx0XHQnXCJzaWduXCIgcHJvcGVydHkgdGhhdCBpcyBhIHN0cmluZy4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggY29uZmlnLnNpbmd1bGFyTGFiZWwgJiYgISBpc1N0cmluZyggY29uZmlnLnNpbmd1bGFyTGFiZWwgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRcdCdUaGUgc2luZ3VsYXJMYWJlbCBwcm9wZXJ0eSBvbiB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgJyArXG5cdFx0XHRcdCdtdXN0IGJlIGEgc3RyaW5nIHByaW1pdGl2ZS4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggY29uZmlnLnBsdXJhbExhYmVsICYmICEgaXNTdHJpbmcoIGNvbmZpZy5wbHVyYWxMYWJlbCApICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0J1RoZSBwbHVyYWxMYWJlbCBwcm9wZXJ0eSBvbiB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgJyArXG5cdFx0XHRcdCdtdXN0IGJlIGEgc3RyaW5nIHByaW1pdGl2ZS4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggY29uZmlnLnNpZ25CNCAmJiAhIGlzQm9vbGVhbiggY29uZmlnLnNpZ25CNCApICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0J1RoZSBzaWduQjQgcHJvcGVydHkgb24gdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0ICcgK1xuXHRcdFx0XHQnbXVzdCBiZSBhIGJvb2xlYW4gcHJpbWl0aXZlLidcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcuZGVjaW1hbFBsYWNlcyAmJiAhIGlzTnVtYmVyKCBjb25maWcuZGVjaW1hbFBsYWNlcyApICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0J1RoZSBkZWNpbWFsUGxhY2VzIHByb3BlcnR5IG9uIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCAnICtcblx0XHRcdFx0J211c3QgYmUgYSBudW1iZXIgcHJpbWl0aXZlJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIGNvbmZpZy5kZWNpbWFsTWFyayAmJiAhIGlzU3RyaW5nKCBjb25maWcuZGVjaW1hbE1hcmsgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRcdCdUaGUgZGVjaW1hbE1hcmsgcHJvcGVydHkgb24gdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0ICcgK1xuXHRcdFx0XHQnbXVzdCBiZSBhIHN0cmluZyBwcmltaXRpdmUuJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIGNvbmZpZy50aG91c2FuZHNTZXBhcmF0b3IgJiZcblx0XHRcdCEgaXNTdHJpbmcoIGNvbmZpZy50aG91c2FuZHNTZXBhcmF0b3IgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRcdCdUaGUgdGhvdXNhbmRzU2VwYXJhdG9yIHByb3BlcnR5IG9uIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCAnICtcblx0XHRcdFx0J211c3QgYmUgYSBzdHJpbmcgcHJpbWl0aXZlLidcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcuc3VidW5pdHMgJiYgISBpc051bWJlciggY29uZmlnLnN1YnVuaXRzICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHQnVGhlIHN1YnVuaXRzIHByb3BlcnR5IG9uIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCAnICtcblx0XHRcdFx0J211c3QgYmUgYSBudW1iZXIgcHJpbWl0aXZlLidcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogRXhwb3J0IG9mIGEgQ3VycmVuY3kgVmFsdWUgb2JqZWN0IGNyZWF0ZWQgZnJvbSBhIGN1cnJlbmN5IGNvbmZpZyBwcm92aWRlZC5cbiAqIFRoaXMgY2F0Y2hlcyBhbnkgZXhjZXB0aW9uIGFuZCB0cmlnZ2VycyBhIGNvbnNvbGUgZXJyb3IuXG4gKlxuICogQHBhcmFtIHt7fX0gY29uZmlnXG4gKiBAcmV0dXJuIHtDdXJyZW5jeXx7fX0gSWYgdGhlcmUncyBhIHByb2JsZW0gY29uc3RydWN0aW5nIHRoZSBjdXJyZW5jeSBvYmplY3RcbiAqIGFuIGVtcHR5IG9iamVjdCBpcyByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFNpdGVDdXJyZW5jeSA9ICggY29uZmlnID0ge30gKSA9PiB7XG5cdGxldCBjdXJyZW5jeTtcblx0dHJ5IHtcblx0XHRjdXJyZW5jeSA9IG5ldyBDdXJyZW5jeSggY29uZmlnICk7XG5cdH0gY2F0Y2ggKCBlICkge1xuXHRcdGN1cnJlbmN5ID0ge307XG5cdFx0d2FybmluZyhcblx0XHRcdGZhbHNlLFxuXHRcdFx0J1RoZSBTaXRlIEN1cnJlbmN5IG9iamVjdCBjb3VsZCBub3QgYmUgY3JlYXRlZCBiZWNhdXNlICcgK1xuXHRcdFx0J29mIHRoaXMgZXJyb3I6ICcgKyBlLm1lc3NhZ2Vcblx0XHQpO1xuXHR9XG5cdHJldHVybiBjdXJyZW5jeTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVDdXJyZW5jeSggQ1VSUkVOQ1lfQ09ORklHICk7XG4iLCIvKipcbiAqIEV4dGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzTnVtYmVyIH0gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBJbnRlcm5hbCBpbXBvcnRzXG4gKi9cbmltcG9ydCB7XG5cdEludmFsaWRUaW1lem9uZSxcblx0SW52YWxpZElTTzg2MDFTdHJpbmcsXG5cdEludmFsaWRMb2NhbGUsXG59IGZyb20gJ0BldmVudGVzcHJlc3NvL2VlanMnO1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBsb2NhbGUgc3RyaW5nIGlzIGEgdmFsaWQgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gbG9jYWxlXG4gKiBAcmV0dXJuIHtib29sZWFufSBJZiBnaXZlbiBsb2NhbGUgc3RyaW5nIGlzIG5vdCB2YWxpZCB0aGlzIHdpbGwgcmV0dXJuIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMb2NhbGUoIGxvY2FsZSApIHtcblx0aWYgKCAhIGlzU3RyaW5nKCBsb2NhbGUgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3Qgb3JpZ2luYWxMb2NhbGUgPSBtb21lbnQubG9jYWxlKCk7XG5cdGNvbnN0IHZhbGlkYXRpb25Mb2NhbGUgPSBtb21lbnQubG9jYWxlKCBsb2NhbGUgKTtcblx0Ly8gcmVzZXQgYmFjayB0byBvcmlnaW5hbCBsb2NhbGVcblx0bW9tZW50LmxvY2FsZSggb3JpZ2luYWxMb2NhbGUgKTtcblx0cmV0dXJuICEgKCBsb2NhbGUgIT09ICdlbicgJiYgdmFsaWRhdGlvbkxvY2FsZSA9PT0gJ2VuJyApO1xufVxuXG4vKipcbiAqIEFzc2VydHMgd2hldGhlciBnaXZlbiBsb2NhbGUgc3RyaW5nIGlzIHZhbGlkLiAgSWYgaXQncyBub3QgYW4gZXhjZXB0aW9uIGlzXG4gKiB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuICogQHRocm93cyBJbnZhbGlkTG9jYWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKSB7XG5cdGlmICggISB2YWxpZGF0ZUxvY2FsZSggbG9jYWxlICkgKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRMb2NhbGUoIGxvY2FsZSApO1xuXHR9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIElTTzg2MDEgZm9ybWF0dGVkIGRhdGUgYW5kXG4gKiB0aW1lIHN0cmluZy5cbiAqXG4gKiBOb3RlOiBkYXRlIHJlZ2V4IHBhdHRlcm4gZnJvbVxuICogaHR0cDovL3d3dy5wZWxhZ29kZXNpZ24uY29tL2Jsb2cvMjAwOS8wNS8yMC9pc28tODYwMS1kYXRlLXZhbGlkYXRpb24tdGhhdC1kb2VzbnQtc3Vjay9cbiAqIE5vdGU6IGlzRHVyYXRpb24gcmVnZXggcGF0dGVybiBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY3lsYy9jeWxjL2lzc3Vlcy8xMTkjaXNzdWVjb21tZW50LTk0MzU1MzNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVRpbWVTdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEdXJhdGlvbiAgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgYSBkdXJhdGlvbiBmb3JtYXQgb3Igbm90LlxuICogQHJldHVybiB7Ym9vbGVhbn0gIFJldHVybnMgZmFsc2UgaWYgdGhlIGdpdmVuIHN0cmluZyBpcyBub3QgdmFsaWQgSVNPODYwMVxuICogZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlTTzg2MDEoIGRhdGVUaW1lU3RyaW5nLCBpc0R1cmF0aW9uID0gZmFsc2UgKSB7XG5cdGlmICggISBpc1N0cmluZyggZGF0ZVRpbWVTdHJpbmcgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3QgcmVnZXggPSBpc0R1cmF0aW9uID9cblx0XHQvXihSXFxkKlxcLyk/UCg/OlxcZCsoPzpcXC5cXGQrKT9ZKT8oPzpcXGQrKD86XFwuXFxkKyk/TSk/KD86XFxkKyg/OlxcLlxcZCspP1cpPyg/OlxcZCsoPzpcXC5cXGQrKT9EKT8oPzpUKD86XFxkKyg/OlxcLlxcZCspP0gpPyg/OlxcZCsoPzpcXC5cXGQrKT9NKT8oPzpcXGQrKD86XFwuXFxkKyk/Uyk/KT8kLyA6XG5cdFx0L14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0yXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoW1xcLixdXFxkKyg/ITopKT8pPyhcXDE3WzAtNV1cXGQoW1xcLixdXFxkKyk/KT8oW3paXXwoW1xcKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XG5cdHJldHVybiByZWdleC50ZXN0KCBkYXRlVGltZVN0cmluZyApO1xufVxuXG4vKipcbiAqIEFzc2VydHMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgSVNPODYwMSBmb3JtYXR0ZWQgZGF0ZSBhbmQgdGltZVxuICogc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlVGltZVN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBpc0R1cmF0aW9uICBXaGV0aGVyIHRvIGFzc2VydCBmb3IgYSBkdXJhdGlvbiBmb3JtYXQgb3Igbm90LlxuICogQHRocm93cyBJbnZhbGlkSVNPODYwMVN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SVNPODYwMUlzVmFsaWQoIGRhdGVUaW1lU3RyaW5nLCBpc0R1cmF0aW9uID0gZmFsc2UgKSB7XG5cdGlmICggISB2YWxpZGF0ZUlTTzg2MDEoIGRhdGVUaW1lU3RyaW5nLCBpc0R1cmF0aW9uICkgKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRJU084NjAxU3RyaW5nKCBkYXRlVGltZVN0cmluZyApO1xuXHR9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIHRpbWV6b25lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZXpvbmVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgZmFsc2UgaWYgdGhlIGdpdmVuIHN0cmluZyBpcyBub3QgYSB2YWxpZCB0aW1lem9uZVxuICogc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKCB0aW1lem9uZSApIHtcblx0aWYgKCAhIGlzU3RyaW5nKCB0aW1lem9uZSApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRjb25zdCBkdCA9IG1vbWVudC50ei56b25lKCB0aW1lem9uZSApO1xuXHRyZXR1cm4gZHQgIT09IG51bGw7XG59XG5cbi8qKlxuICogQXNzZXJ0cyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCB0aW1lem9uZSBzdHJpbmcgYW5kIHRocm93cyBhblxuICogZXhjZXB0aW9uIGlmIGl0IGlzbid0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lem9uZVxuICogQHRocm93cyBJbnZhbGlkVGltZXpvbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFRpbWV6b25lSXNWYWxpZCggdGltZXpvbmUgKSB7XG5cdGlmICggISB2YWxpZGF0ZVRpbWV6b25lKCB0aW1lem9uZSApICkge1xuXHRcdHRocm93IG5ldyBJbnZhbGlkVGltZXpvbmUoIHRpbWV6b25lICk7XG5cdH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGphdmFzY3JpcHQgRGF0ZVxuICogb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBtZWFucyB0aGUgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJc0RhdGUoIGRhdGUgKSB7XG5cdHJldHVybiBkYXRlIGluc3RhbmNlb2YgRGF0ZTtcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAqIEB0aHJvd3MgVHlwZUVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRJc0RhdGUoIGRhdGUgKSB7XG5cdGlmICggISB2YWxpZGF0ZUlzRGF0ZSggZGF0ZSApICkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHQnVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlJ1xuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBvZmZzZXRcbiAqXG4gKiBDdXJyZW50bHkgdGhpcyBqdXN0IHZhbGlkYXRlcyB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBudW1iZXIuIEV2ZW50dWFsbHkgaXRcbiAqIG1pZ2h0IGNoZWNrIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHJldHVybiB7Ym9vbGVhbn0gIHRydWUgbWVhbnMgaXRzIHZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJc09mZnNldCggb2Zmc2V0ICkge1xuXHRyZXR1cm4gaXNOdW1iZXIoIG9mZnNldCApO1xufVxuXG4vKipcbiAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBvZmZzZXQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHRocm93cyBUeXBlRXJyb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydElzT2Zmc2V0KCBvZmZzZXQgKSB7XG5cdGlmICggISB2YWxpZGF0ZUlzT2Zmc2V0KCBvZmZzZXQgKSApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0J09mZnNldCBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlcidcblx0XHQpO1xuXHR9XG59XG4iLCIvKipcbiAqIEV4dGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IHtcblx0Y2FwaXRhbGl6ZSxcblx0b21pdCxcblx0aXNOdW1iZXIsXG5cdGlzRW1wdHksXG5cdHJlZHVjZSxcblx0aXNPYmplY3QsXG5cdGlzVW5kZWZpbmVkLFxuXHRpc0Z1bmN0aW9uLFxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zdGFuY2VPZiB9IGZyb20gJ0BldmVudGVzcHJlc3NvL3ZhbGlkYXRvcnMnO1xuXG4vKipcbiAqIEludGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IHtcblx0SW52YWxpZERhdGVUaW1lLFxuXHRJbnZhbGlkQXJndW1lbnQsXG5cdEludmFsaWRJU084NjAxU3RyaW5nLFxufSBmcm9tICdAZXZlbnRlc3ByZXNzby9lZWpzJztcbmltcG9ydCAqIGFzIGFzc2VydGlvbnMgZnJvbSAnLi9hc3NlcnRpb25zJztcbmltcG9ydCBEdXJhdGlvbiBmcm9tICcuL2R1cmF0aW9uJztcbmltcG9ydCB7XG5cdERFRkFVTFRfVElNRVpPTkVfU1RSSU5HLFxuXHRERUZBVUxUX09GRlNFVCxcblx0REVGQVVMVF9WQUxJRF9MT0NBTEUsXG5cdERFRkFVTFRfRk9STUFULFxufSBmcm9tICcuL2RlZmF1bHRzJztcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3ltYm9scyB1c2VkIGZvciBcInByaXZhdGVcIiBwcm9wZXJ0aWVzIGluIHRoZSBEYXRlVGltZSBvYmplY3QuXG4gKlxuICogQHR5cGUge1xuICogXHR7XG4gKiBcdFx0ZGF0ZXRpbWU6IFN5bWJvbFxuICogXHR9XG4gKiB9XG4gKi9cbmNvbnN0IHByaXZhdGVQcm9wZXJ0aWVzID0ge1xuXHRkYXRldGltZTogU3ltYm9sKCAnRGF0ZVRpbWVQcm9wZXJ0eURhdGVUaW1lJyApLFxufTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3ltYm9scyB1c2VkIGZvciBcInByaXZhdGVcIiBtZXRob2RzIGluIHRoZSBEYXRlVGltZSBvYmplY3QuXG4gKlxuICogQHR5cGUge1xuICoge1xuICogXHRnZXRVbml0TmFtZXM6IFN5bWJvbCxcbiAqIFx0Y3JlYXRlR2V0dGVyc0FuZFNldHRlcnM6IFN5bWJvbCxcbiAqIFx0ZXh0cmFjdE1vbWVudHNGcm9tRGF0ZVRpbWVzOiBTeW1ib2wsXG4gKiBcdG5vcm1hbGl6ZVVuaXROYW1lOiBTeW1ib2wsXG4gKiBcdG5vcm1hbGl6ZVVuaXRPYmplY3Q6IFN5bWJvbCxcbiAqIFx0bm9ybWFsaXplVW5pdFZhbHVlOiBTeW1ib2wsXG4gKiBcdH1cbiAqIH1cbiAqL1xuY29uc3QgcHJpdmF0ZU1ldGhvZHMgPSB7XG5cdGdldFVuaXROYW1lczogU3ltYm9sKCAnRGF0ZVRpbWVNZXRob2RHZXRVbml0TmFtZXMnICksXG5cdGNyZWF0ZUdldHRlcnNBbmRTZXR0ZXJzOiBTeW1ib2woICdEYXRlVGltZU1ldGhvZENyZWF0ZUdldHRlcnNBbmRTZXR0ZXJzJyApLFxuXHRleHRyYWN0TW9tZW50c0Zyb21EYXRlVGltZXM6IFN5bWJvbCggJ0RhdGVUaW1lTWV0aG9kRXh0cmFjdE1vbWVudHNGcm9tRGF0ZVRpbWVzJyApLFxuXHRub3JtYWxpemVVbml0TmFtZTogU3ltYm9sKCAnRGF0ZVRpbWVNZXRob2ROb3JtYWxpemVVbml0TmFtZScgKSxcblx0bm9ybWFsaXplVW5pdE9iamVjdDogU3ltYm9sKCAnRGF0ZVRpbWVNZXRob2ROb3JtYWxpemVVbml0T2JqZWN0JyApLFxuXHRub3JtYWxpemVVbml0VmFsdWU6IFN5bWJvbCggJ0RhdGVUaW1lTWV0aG9kTm9ybWFsaXplVW5pdFZhbHVlJyApLFxufTtcblxuY29uc3QgdmFsaWREYXRlVGltZVVuaXRzID0gW1xuXHQneWVhcicsXG5cdCdtb250aCcsXG5cdCdkYXknLFxuXHQnaG91cicsXG5cdCdtaW51dGUnLFxuXHQnc2Vjb25kJyxcblx0J21pbGxpc2Vjb25kJyxcbl07XG5cbi8qKlxuICogVGhlIERhdGVUaW1lIHZhbHVlIG9iamVjdCByZXByZXNlbnRzIGEgc2luZ2xlIHBvaW50IGluIHRpbWUuXG4gKlxuICogSW50ZXJuYWxseSwgdGhlIERhdGVUaW1lIGNsYXNzIGhlcmUgdXNlcyBgbW9tZW50YC4gIFRoaXMgaXMgYW4gYWJzdHJhY3Rpb25cbiAqIGxvb3NlbHkgZm9sbG93aW5nIHRoZSBhZGFwdGVyIHBhdHRlcm4gc28gdGhhdCB0aGVyZSBpcyBhIGNvbW1vbiBhcGkgdGhhdFxuICogY2FuIGJlIGRlcGVuZGVkIG9uIGlmIGluIHRoZSBmdXR1cmUgdGhlIGludGVybmFsIGxpYnJhcnkgaXMgc3dpdGNoZWQgdG9cbiAqIHNvbWV0aGluZyBkaWZmZXJlbnQgKHN1Y2ggYXMgTHV4b24pLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZSB7XG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBEYXRlVGltZSBjbGFzc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaXNvODYwMURhdGVTdHJpbmdcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gdGltZXpvbmUgSWYgbnVsbCwgdGhlbiB0aW1lem9uZSBpcyBub3Qgc2V0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRpc284NjAxRGF0ZVN0cmluZyA9ICcnLFxuXHRcdHRpbWV6b25lID0gREVGQVVMVF9USU1FWk9ORV9TVFJJTkcsXG5cdFx0bG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEVcblx0KSB7XG5cdFx0aWYgKCBpc284NjAxRGF0ZVN0cmluZyAhPT0gJycgKSB7XG5cdFx0XHREYXRlVGltZS5hc3NlcnRJU084NjAxSXNWYWxpZCggaXNvODYwMURhdGVTdHJpbmcgKTtcblx0XHR9XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0TG9jYWxlSXNWYWxpZCggbG9jYWxlICk7XG5cdFx0aWYgKCB0aW1lem9uZSA9PT0gbnVsbCApIHtcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0gPSBpc284NjAxRGF0ZVN0cmluZyA9PT0gJycgP1xuXHRcdFx0XHRtb21lbnQudXRjKCkubG9jYWxlKCBsb2NhbGUgKSA6XG5cdFx0XHRcdG1vbWVudCggaXNvODYwMURhdGVTdHJpbmcgKVxuXHRcdFx0XHRcdC51dGNPZmZzZXQoIGlzbzg2MDFEYXRlU3RyaW5nIClcblx0XHRcdFx0XHQubG9jYWxlKCBsb2NhbGUgKTtcblx0XHR9IGVsc2UgaWYgKCB0aW1lem9uZSA9PT0gRGF0ZVRpbWUuVElNRVpPTkVfTE9DQUwgKSB7XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdID0gaXNvODYwMURhdGVTdHJpbmcgPT09ICcnID9cblx0XHRcdFx0bW9tZW50KCkubG9jYWxlKCBsb2NhbGUgKSA6XG5cdFx0XHRcdG1vbWVudCggaXNvODYwMURhdGVTdHJpbmcgKS5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHREYXRlVGltZS5hc3NlcnRUaW1lem9uZUlzVmFsaWQoIHRpbWV6b25lICk7XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdID0gaXNvODYwMURhdGVTdHJpbmcgPT09ICcnID9cblx0XHRcdFx0bW9tZW50KCkudHooIHRpbWV6b25lICkubG9jYWxlKCBsb2NhbGUgKSA6XG5cdFx0XHRcdG1vbWVudC50eihcblx0XHRcdFx0XHRpc284NjAxRGF0ZVN0cmluZyxcblx0XHRcdFx0XHR0aW1lem9uZVxuXHRcdFx0XHQpLmxvY2FsZSggbG9jYWxlICk7XG5cdFx0fVxuXHRcdHRoaXNbIHByaXZhdGVNZXRob2RzLmNyZWF0ZUdldHRlcnNBbmRTZXR0ZXJzIF0oKTtcblx0XHRPYmplY3QuZnJlZXplKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIGlmIHRoZSBnaXZlbiBsb2NhbGUgaXMgYSB2YWxpZCBsb2NhbGUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBtZWFucyBpdCBpcyB2YWxpZFxuXHQgKi9cblx0c3RhdGljIHZhbGlkYXRlTG9jYWxlKCBsb2NhbGUgKSB7XG5cdFx0cmV0dXJuIGFzc2VydGlvbnMudmFsaWRhdGVMb2NhbGUoIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgaWYgdGhlIGdpdmVuIGxvY2FsZSBpcyB2YWxpZCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIG5vdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQgKiBAdGhyb3dzIEludmFsaWRMb2NhbGVcblx0ICovXG5cdHN0YXRpYyBhc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKSB7XG5cdFx0YXNzZXJ0aW9ucy5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgaWYgdGhlIGdpdmVuIElTTzg2MDEgc3RyaW5nIGlzIHZhbGlkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVRpbWVTdHJpbmdcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBtZWFucyBpdCBpcyB2YWxpZC5cblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZUlTTzg2MDEoIGRhdGVUaW1lU3RyaW5nICkge1xuXHRcdHJldHVybiBhc3NlcnRpb25zLnZhbGlkYXRlSVNPODYwMSggZGF0ZVRpbWVTdHJpbmcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnRzIGlmIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBJU08gODYwMSBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlVGltZVN0cmluZ1xuXHQgKiBAdGhyb3dzIEludmFsaWRJU084NjAxU3RyaW5nXG5cdCAqL1xuXHRzdGF0aWMgYXNzZXJ0SVNPODYwMUlzVmFsaWQoIGRhdGVUaW1lU3RyaW5nICkge1xuXHRcdGFzc2VydGlvbnMuYXNzZXJ0SVNPODYwMUlzVmFsaWQoIGRhdGVUaW1lU3RyaW5nICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIGlmIHRoZSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCB0aW1lem9uZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGltZXpvbmVcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBtZWFucyBpdCBpcyB2YWxpZC5cblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZVRpbWV6b25lKCB0aW1lem9uZSApIHtcblx0XHRyZXR1cm4gYXNzZXJ0aW9ucy52YWxpZGF0ZVRpbWV6b25lKCB0aW1lem9uZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgdGltZXpvbmUgc3RyaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGltZXpvbmVcblx0ICogQHRocm93cyBJbnZhbGlkVGltZXpvbmVcblx0ICovXG5cdHN0YXRpYyBhc3NlcnRUaW1lem9uZUlzVmFsaWQoIHRpbWV6b25lICkge1xuXHRcdGFzc2VydGlvbnMuYXNzZXJ0VGltZXpvbmVJc1ZhbGlkKCB0aW1lem9uZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhIHZhbGlkIG9mZnNldFxuXHQgKlxuXHQgKiBDdXJyZW50bHkgdGhpcyBqdXN0IHZhbGlkYXRlcyB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBudW1iZXIuIEV2ZW50dWFsbHkgaXRcblx0ICogbWlnaHQgY2hlY2sgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuXHQgKiBAcmV0dXJuIHtib29sZWFufSAgdHJ1ZSBtZWFucyBpdHMgdmFsaWQuXG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRhdGVJc09mZnNldCggb2Zmc2V0ICkge1xuXHRcdHJldHVybiBhc3NlcnRpb25zLnZhbGlkYXRlSXNPZmZzZXQoIG9mZnNldCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcblx0ICogQHRocm93cyBUeXBlRXJyb3Jcblx0ICovXG5cdHN0YXRpYyBhc3NlcnRJc09mZnNldCggb2Zmc2V0ICkge1xuXHRcdGFzc2VydGlvbnMuYXNzZXJ0SXNPZmZzZXQoIG9mZnNldCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRldGltZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufSByZXR1cm5zIHRydWUgaWYgaXQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWVcblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZUlzRGF0ZVRpbWUoIGRhdGV0aW1lICkge1xuXHRcdHJldHVybiBpbnN0YW5jZU9mKCBkYXRldGltZSwgJ0RhdGVUaW1lJyApIHx8XG5cdFx0XHRpbnN0YW5jZU9mKCBkYXRldGltZSwgJ1NlcnZlckRhdGVUaW1lJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWVcblx0ICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZXRpbWVcblx0ICogQHRocm93cyBUeXBlRXJyb3Jcblx0ICovXG5cdHN0YXRpYyBhc3NlcnRJc0RhdGVUaW1lKCBkYXRldGltZSApIHtcblx0XHRpZiAoICEgRGF0ZVRpbWUudmFsaWRhdGVJc0RhdGVUaW1lKCBkYXRldGltZSApICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0J1RoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWUnXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGphdmFzY3JpcHQgRGF0ZVxuXHQgKiBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIG1lYW5zIHRoZSB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlXG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRhdGVJc0RhdGUoIGRhdGUgKSB7XG5cdFx0cmV0dXJuIGFzc2VydGlvbnMudmFsaWRhdGVJc0RhdGUoIGRhdGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnRzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAdGhyb3dzIFR5cGVFcnJvclxuXHQgKi9cblx0c3RhdGljIGFzc2VydElzRGF0ZSggZGF0ZSApIHtcblx0XHRhc3NlcnRpb25zLmFzc2VydElzRGF0ZSggZGF0ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZSBhbmQgaXNcblx0ICogYSBcInZhbGlkXCIgZGF0ZXRpbWUgKG1lYW5pbmcgdGhlIGluc3RhbmNlIHdhcyBjb25zdHJ1Y3RlZCB3aXRoIHZhbGlkXG5cdCAqIGFyZ3VtZW50cykuXG5cdCAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGV0aW1lXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgbWVhbnMgaXQgaXMgdmFsaWQuXG5cdCAqL1xuXHRzdGF0aWMgaXNWYWxpZCggZGF0ZXRpbWUgKSB7XG5cdFx0cmV0dXJuIERhdGVUaW1lLnZhbGlkYXRlSXNEYXRlVGltZSggZGF0ZXRpbWUgKSAmJiBkYXRldGltZS5pc1ZhbGlkKCk7XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0cyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZSBhbmQgaXNcblx0ICogYSBcInZhbGlkXCIgZGF0ZXRpbWUgKG1lYW5pbmcgdGhlIGluc3RhbmNlIHdhcyBjb25zdHJ1Y3RlZCB3aXRoIHZhbGlkXG5cdCAqIGFyZ3VtZW50cylcblx0ICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZXRpbWVcblx0ICogQHRocm93cyBJbnZhbGlkRGF0ZVRpbWVcblx0ICovXG5cdHN0YXRpYyBhc3NlcnRJc1ZhbGlkKCBkYXRldGltZSApIHtcblx0XHRpZiAoICEgRGF0ZVRpbWUuaXNWYWxpZCggZGF0ZXRpbWUgKSApIHtcblx0XHRcdHRocm93IG5ldyBJbnZhbGlkRGF0ZVRpbWUoIGRhdGV0aW1lICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEEgcHJpdmF0ZSBpbnRlcm5hbCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBleHRyYWN0IGFsbCBtb21lbnRcblx0ICogaW5zdGFuY2VzIGZyb20gdGhlIHByb3ZpZGVkIERhdGVUaW1lcyAocGFzc2VkIGluIGFzIGFyZ3VtZW50cykuXG5cdCAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGV0aW1lc1xuXHQgKiBAcmV0dXJuIHtNb21lbnRbXX0gQW4gYXJyYXkgb2YgbW9tZW50IGluc3RhbmNlcyBleHRyYWN0ZWQgZnJvbSB0aGVcblx0ICogRGF0ZVRpbWVzXG5cdCAqL1xuXHRzdGF0aWMgWyBwcml2YXRlTWV0aG9kcy5leHRyYWN0TW9tZW50c0Zyb21EYXRlVGltZXMgXSggLi4uZGF0ZXRpbWVzICkge1xuXHRcdHJldHVybiBkYXRldGltZXMubWFwKCAoIGRhdGV0aW1lICkgPT4ge1xuXHRcdFx0RGF0ZVRpbWUuYXNzZXJ0SXNEYXRlVGltZSggZGF0ZXRpbWUgKTtcblx0XHRcdHJldHVybiBkYXRldGltZVsgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogR2l2ZW4gYW4gaW5kZWZpbml0ZSBudW1iZXIgb2YgRGF0ZVRpbWVzIGFzIGFyZ3VtZW50cywgdGhpcyB3aWxsIHJldHVybiBhXG5cdCAqIG5ldyBEYXRlVGltZSB0aGF0IHJlcHJlc2VudHMgdGhlIGxhdGVzdCBwb2ludCBpbiB0aW1lLlxuXHQgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRldGltZXNcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEEgbmV3IERhdGVUaW1lIHJlcHJlc2VudGluZyB0aGUgbGF0ZXN0IHBvaW50IG9mIHRpbWUuXG5cdCAqL1xuXHRzdGF0aWMgbWF4KCAuLi5kYXRldGltZXMgKSB7XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoXG5cdFx0XHRtb21lbnQubWF4KFxuXHRcdFx0XHREYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMuZXh0cmFjdE1vbWVudHNGcm9tRGF0ZVRpbWVzIF0oXG5cdFx0XHRcdFx0Li4uZGF0ZXRpbWVzXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdpdmVuIGFuIGluZGVmaW5pdGUgbnVtYmVyIG9mIERhdGVUaW1lcyBhcyBhcmd1bWVudHMsIHRoaXMgd2lsbCByZXR1cm4gYVxuXHQgKiBuZXcgRGF0ZVRpbWUgdGhhdCByZXByZXNlbnRzIHRoZSBlYXJsaWVzdCBwb2ludCBpbiB0aW1lLlxuXHQgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRldGltZXNcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEEgbmV3IERhdGVUaW1lIHJlcHJlc2VudGluZyB0aGUgZWFybGllc3QgcG9pbnQgaW5cblx0ICogdGltZS5cblx0ICovXG5cdHN0YXRpYyBtaW4oIC4uLmRhdGV0aW1lcyApIHtcblx0XHRyZXR1cm4gRGF0ZVRpbWUuZnJvbU1vbWVudChcblx0XHRcdG1vbWVudC5taW4oXG5cdFx0XHRcdERhdGVUaW1lWyBwcml2YXRlTWV0aG9kcy5leHRyYWN0TW9tZW50c0Zyb21EYXRlVGltZXMgXShcblx0XHRcdFx0XHQuLi5kYXRldGltZXNcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGVUaW1lIGZyb20gYW4gaW5zdGFuY2Ugb2YgbW9tZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge21vbWVudH0gbW9tZW50SW5zdGFuY2Vcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEFuIGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqL1xuXHRzdGF0aWMgZnJvbU1vbWVudCggbW9tZW50SW5zdGFuY2UgKSB7XG5cdFx0aWYgKCAhIG1vbWVudC5pc01vbWVudCggbW9tZW50SW5zdGFuY2UgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoICdSZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBtb21lbnQuJyApO1xuXHRcdH1cblx0XHQvLyB0aGlzIHdvdWxkIGFjY291bnQgZm9yIGNsaWVudCBjb2RlIHRoYXQgaXMgdXNpbmcgYG1vbWVudGAgYnV0IG5vdFxuXHRcdC8vIHVzaW5nIGBtb21lbnQtdGltZXpvbmVgLlxuXHRcdHJldHVybiBpc0Z1bmN0aW9uKCBtb21lbnRJbnN0YW5jZS50eiApICYmXG5cdFx0XHQhIGlzVW5kZWZpbmVkKCBtb21lbnRJbnN0YW5jZS50eigpICkgJiZcblx0XHRcdG1vbWVudEluc3RhbmNlLnR6KCkgIT09ICdVVEMnID9cblx0XHRcdG5ldyBEYXRlVGltZShcblx0XHRcdFx0bW9tZW50SW5zdGFuY2UudG9JU09TdHJpbmcoKSxcblx0XHRcdFx0bW9tZW50SW5zdGFuY2UudHooKSxcblx0XHRcdFx0bW9tZW50SW5zdGFuY2UubG9jYWxlKClcblx0XHRcdCkgOlxuXHRcdFx0bmV3IERhdGVUaW1lKFxuXHRcdFx0XHRtb21lbnRJbnN0YW5jZS50b0lTT1N0cmluZyggdHJ1ZSApLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRtb21lbnRJbnN0YW5jZS5sb2NhbGUoKVxuXHRcdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RzIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBJU09TdHJpbmdcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbWV6b25lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEFuIGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqL1xuXHRzdGF0aWMgZnJvbUlTTyhcblx0XHRJU09TdHJpbmcsXG5cdFx0dGltZXpvbmUgPSBERUZBVUxUX1RJTUVaT05FX1NUUklORyxcblx0XHRsb2NhbGUgPSBERUZBVUxUX1ZBTElEX0xPQ0FMRVxuXHQpIHtcblx0XHRpZiAoIGlzRW1wdHkoIElTT1N0cmluZyApICkge1xuXHRcdFx0dGhyb3cgbmV3IEludmFsaWRJU084NjAxU3RyaW5nKCBJU09TdHJpbmcgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBEYXRlVGltZSggSVNPU3RyaW5nLCB0aW1lem9uZSwgbG9jYWxlICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgU3RyaW5nXG5cdCAqIERpZmZlcnMgd2l0aCBgZnJvbUlTT2AgaW4gdGhhdCB0aGlzIGFsbG93cyBwYXNzaW5nIGEgb2Zmc2V0IHZhbHVlXG5cdCAqIGluc3RlYWQgb2YgYSB0aW1lem9uZSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBJU09TdHJpbmdcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAgSW4gbWludXRlcyB1bmxlc3MgPiAtMTYgb3IgPCAtMTYgaW4gd2hpY2ggY2FzZSBpdFxuXHQgKiBpcyB0cmVhdGVkIGFzIGhvdXJzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSAgQW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWVcblx0ICovXG5cdHN0YXRpYyBmcm9tSVNPV2l0aE9mZnNldChcblx0XHRJU09TdHJpbmcsXG5cdFx0b2Zmc2V0ID0gREVGQVVMVF9PRkZTRVQsXG5cdFx0bG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEVcblx0KSB7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0SVNPODYwMUlzVmFsaWQoIElTT1N0cmluZyApO1xuXHRcdERhdGVUaW1lLmFzc2VydElzT2Zmc2V0KCBvZmZzZXQgKTtcblx0XHREYXRlVGltZS5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0XHRjb25zdCBkYXRldGltZSA9IG1vbWVudC51dGMoIElTT1N0cmluZyApXG5cdFx0XHQudXRjT2Zmc2V0KCBvZmZzZXQsIHRydWUgKVxuXHRcdFx0LmxvY2FsZSggbG9jYWxlICk7XG5cdFx0cmV0dXJuIG5ldyBEYXRlVGltZS5mcm9tTW9tZW50KCBkYXRldGltZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdHMgYSBEYXRlVGltZSBmcm9tIGEgamF2YXNjcmlwdCBEYXRlIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtEYXRlfSBkYXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lem9uZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqL1xuXHRzdGF0aWMgZnJvbUpTRGF0ZShcblx0XHRkYXRlLFxuXHRcdHRpbWV6b25lID0gREVGQVVMVF9USU1FWk9ORV9TVFJJTkcsXG5cdFx0bG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEVcblx0KSB7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0SXNEYXRlKCBkYXRlICk7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0VGltZXpvbmVJc1ZhbGlkKCB0aW1lem9uZSApO1xuXHRcdERhdGVUaW1lLmFzc2VydExvY2FsZUlzVmFsaWQoIGxvY2FsZSApO1xuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KFxuXHRcdFx0bW9tZW50KCBkYXRlICkudHooIHRpbWV6b25lICkubG9jYWxlKCBsb2NhbGUgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGV0aW1lIGZyb20gYSBqYXZhc2NyaXB0IERhdGUgb2JqZWN0LlxuXHQgKlxuXHQgKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgYW5kIGZyb21KU0RhdGUgaXMgdGhhdCB0aGlzIGNhbiBiZSBzZXQgd2l0aFxuXHQgKiBhbiBvZmZzZXQgdnMgYSB0aW1lem9uZSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWVcblx0ICovXG5cdHN0YXRpYyBmcm9tSlNEYXRlV2l0aE9mZnNldChcblx0XHRkYXRlLFxuXHRcdG9mZnNldCA9IERFRkFVTFRfT0ZGU0VULFxuXHRcdGxvY2FsZSA9IERFRkFVTFRfVkFMSURfTE9DQUxFXG5cdCkge1xuXHRcdERhdGVUaW1lLmFzc2VydElzRGF0ZSggZGF0ZSApO1xuXHRcdERhdGVUaW1lLmFzc2VydElzT2Zmc2V0KCBvZmZzZXQgKTtcblx0XHREYXRlVGltZS5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0XHRyZXR1cm4gRGF0ZVRpbWUuZnJvbU1vbWVudChcblx0XHRcdG1vbWVudCggZGF0ZSApLnV0Y09mZnNldCggb2Zmc2V0ICkubG9jYWxlKCBsb2NhbGUgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGVUaW1lIChpbiBVVEMpIHdpdGggbWlsbGlzZWNvbmRzIGZyb20gZXBvY2guXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKiBAdGhyb3dzIFR5cGVFcnJvclxuXHQgKi9cblx0c3RhdGljIGZyb21NaWxsaXNlY29uZHMoIG1pbGxpc2Vjb25kcywgbG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEUgKSB7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0TG9jYWxlSXNWYWxpZCggbG9jYWxlICk7XG5cdFx0aWYgKCAhIGlzTnVtYmVyKCBtaWxsaXNlY29uZHMgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoICdQcm92aWRlZCB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyICcgK1xuXHRcdFx0XHQncmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBlcG9jaCcgKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoXG5cdFx0XHRtb21lbnQoIG1pbGxpc2Vjb25kcyApLnV0YygpLmxvY2FsZSggbG9jYWxlIClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdHMgYSBEYXRlVGltZSBpbiBVVEMgd2l0aCBzZWNvbmRzIGZyb20gdGhlIGVwb2NoLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBBbiBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKiBAdGhyb3dzIFR5cGVFcnJvclxuXHQgKi9cblx0c3RhdGljIGZyb21Vbml4KCBzZWNvbmRzLCBsb2NhbGUgPSBERUZBVUxUX1ZBTElEX0xPQ0FMRSApIHtcblx0XHREYXRlVGltZS5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0XHRpZiAoICEgaXNOdW1iZXIoIHNlY29uZHMgKSApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoICdQcm92aWRlZCB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyICcgK1xuXHRcdFx0XHQncmVwcmVzZW50aW5nIHNlY29uZHMgZnJvbSB0aGUgZXBvY2gnICk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KFxuXHRcdFx0bW9tZW50LnVuaXgoIHNlY29uZHMgKS51dGMoKS5sb2NhbGUoIGxvY2FsZSApXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RzIGEgRGF0ZVRpbWUgZnJvbSBhbiBvYmplY3Qgb2YgdmFsdWVzIGFzc3VtaW5nIGl0cyBpbiBcImxvY2FsXCJcblx0ICogdGltZSAoaWYgcnVuIHZpYSBicm93c2VyIG9yIHNlcnZlciBpZiBydW4gc2VydmVyIHNpZGUpLlxuXHQgKlxuXHQgKiBUaGUgb2JqZWN0IGlzIGV4cGVjdGVkIHRvIGJlIGEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBpbnN0YW5jZSBpbiB0aW1lOlxuXHQgKiBFZy5cblx0ICogeyB5ZWFyOiAyMDE4LCBtb250aDogMTIsIGRheTogMjUsIGhvdXI6IDAsIG1pbnV0ZTogMTUsIHNlY29uZHM6IDAgfVxuXHQgKlxuXHQgKiBQYXNzIGFuIGVtcHR5IHZhbHVlcyB2YWx1ZSBpZiB5b3Ugd2FudCB0aGUgaW5zdGFuY2UgaW4gdGltZSB0byByZXByZXNlbnRcblx0ICogXCJub3dcIi5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbHVlc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBBbiBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKiBAdGhyb3dzIEludmFsaWRBcmd1bWVudFxuXHQgKi9cblx0c3RhdGljIGZyb21Mb2NhbCggdmFsdWVzLCBsb2NhbGUgPSBERUZBVUxUX1ZBTElEX0xPQ0FMRSApIHtcblx0XHREYXRlVGltZS5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0XHR2YWx1ZXMgPSBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdE9iamVjdCBdKCB2YWx1ZXMgKTtcblx0XHRjb25zdCBkYXRldGltZSA9IGlzRW1wdHkoIHZhbHVlcyApID9cblx0XHRcdG1vbWVudCgpLmxvY2FsZSggbG9jYWxlICkgOlxuXHRcdFx0bW9tZW50KCB2YWx1ZXMgKS5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdGlmICggZGF0ZXRpbWUuaXNWYWxpZCgpICE9PSB0cnVlICkge1xuXHRcdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudChcblx0XHRcdFx0J0RvdWJsZS1jaGVjayB0aGUgdmFsdWVzIHlvdSBzZW50IGluLicsXG5cdFx0XHRcdHZhbHVlc1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoIGRhdGV0aW1lICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGVUaW1lIGZyb20gYW4gb2JqZWN0IG9mIHZhbHVlcyBhbmQgYXNzdW1lcyBpdHMgaW5cblx0ICogJ1VUQycuXG5cdCAqXG5cdCAqIFRoZSBvYmplY3QgaXMgZXhwZWN0ZWQgdG8gYmUgYSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGluc3RhbmNlIGluIHRpbWU6XG5cdCAqIEVnLlxuXHQgKiB7IHllYXI6IDIwMTgsIG1vbnRoOiAxMiwgZGF5OiAyNSwgaG91cjogMCwgbWludXRlOiAxNSwgc2Vjb25kczogMCB9XG5cdCAqXG5cdCAqIEFueSB1bml0cyBub3Qgc3BlY2lmaWVkIHdpbGwgYmUgYXNzdW1lZCB0byBiZSBgMGAuXG5cdCAqXG5cdCAqIFBhc3MgYW4gZW1wdHkgdmFsdWVzIHZhbHVlIGlmIHlvdSB3YW50IHRoZSBpbnN0YW5jZSBpbiB0aW1lIHRvIHJlcHJlc2VudFxuXHQgKiBcIm5vd1wiLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEFuIGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqIEB0aHJvd3MgSW52YWxpZEFyZ3VtZW50XG5cdCAqL1xuXHRzdGF0aWMgdXRjKCB2YWx1ZXMsIGxvY2FsZSA9IERFRkFVTFRfVkFMSURfTE9DQUxFICkge1xuXHRcdERhdGVUaW1lLmFzc2VydExvY2FsZUlzVmFsaWQoIGxvY2FsZSApO1xuXHRcdHZhbHVlcyA9IERhdGVUaW1lWyBwcml2YXRlTWV0aG9kcy5ub3JtYWxpemVVbml0T2JqZWN0IF0oIHZhbHVlcyApO1xuXHRcdGNvbnN0IGRhdGV0aW1lID0gaXNFbXB0eSggdmFsdWVzICkgP1xuXHRcdFx0bW9tZW50LnV0YygpLmxvY2FsZSggbG9jYWxlICkgOlxuXHRcdFx0bW9tZW50LnV0YyggdmFsdWVzICkubG9jYWxlKCBsb2NhbGUgKTtcblx0XHRpZiAoIGRhdGV0aW1lLmlzVmFsaWQoKSAhPT0gdHJ1ZSApIHtcblx0XHRcdHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoXG5cdFx0XHRcdCdEb3VibGUtY2hlY2sgdGhlIHZhbHVlcyBzZW50IGluLicsXG5cdFx0XHRcdHZhbHVlc1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoIGRhdGV0aW1lICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIERhdGVUaW1lIGZyb20gYSBjb25maWd1cmF0aW9uIG9iamVjdC5cblx0ICpcblx0ICogVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGNhbiBoYXZlOlxuXHQgKiAtIGFueSBvZiB0aGUgRGF0ZVRpbWUgdW5pdHMgKCd5ZWFyJywgJ21vbnRoJywgZXRjKVxuXHQgKiAtICdsb2NhbGUnIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbG9jYWxlXG5cdCAqIC0gJ3RpbWV6b25lJyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRpbWV6b25lXG5cdCAqIC0gJ29mZnNldCcgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgZnJvbSBVVEMgdGhpcyBpbnN0YW5jZSBpblxuXHQgKiB0aW1lIHJlcHJlc2VudHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEFuIGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqL1xuXHRzdGF0aWMgZnJvbU9iamVjdCggdmFsdWVzICkge1xuXHRcdGNvbnN0IGxvY2FsZSA9IHZhbHVlcy5sb2NhbGUgfHwgREVGQVVMVF9WQUxJRF9MT0NBTEU7XG5cdFx0Y29uc3QgdGltZXpvbmUgPSB2YWx1ZXMudGltZXpvbmUgfHwgREVGQVVMVF9USU1FWk9ORV9TVFJJTkc7XG5cdFx0Y29uc3Qgb2Zmc2V0ID0gaXNVbmRlZmluZWQoIHZhbHVlcy5vZmZzZXQgKSA/XG5cdFx0XHRudWxsIDpcblx0XHRcdHZhbHVlcy5vZmZzZXQ7XG5cdFx0bGV0IHZhbHVlc0ZvckNvbnN0cnVjdCA9IG9taXQoXG5cdFx0XHR2YWx1ZXMsXG5cdFx0XHRbICdsb2NhbGUnLCAndGltZXpvbmUnLCAnb2Zmc2V0JyBdXG5cdFx0KTtcblxuXHRcdERhdGVUaW1lLmFzc2VydExvY2FsZUlzVmFsaWQoIGxvY2FsZSApO1xuXG5cdFx0aWYgKCBvZmZzZXQgIT09IG51bGwgKSB7XG5cdFx0XHREYXRlVGltZS5hc3NlcnRJc09mZnNldCggb2Zmc2V0ICk7XG5cdFx0XHR2YWx1ZXNGb3JDb25zdHJ1Y3QgPSBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdE9iamVjdCBdKFxuXHRcdFx0XHR2YWx1ZXNGb3JDb25zdHJ1Y3Rcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBkYXRldGltZSA9IGlzRW1wdHkoIHZhbHVlc0ZvckNvbnN0cnVjdCApID9cblx0XHRcdFx0bW9tZW50KCkudXRjT2Zmc2V0KCBvZmZzZXQsIHRydWUgKS5sb2NhbGUoIGxvY2FsZSApIDpcblx0XHRcdFx0bW9tZW50LnV0YyggdmFsdWVzRm9yQ29uc3RydWN0IClcblx0XHRcdFx0XHQudXRjT2Zmc2V0KCBvZmZzZXQsIHRydWUgKVxuXHRcdFx0XHRcdC5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdFx0aWYgKCBkYXRldGltZS5pc1ZhbGlkKCkgIT09IHRydWUgKSB7XG5cdFx0XHRcdHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnQoXG5cdFx0XHRcdFx0J0RvdWJsZS1jaGVjayB0aGUgY29uZmlndXJhdGlvbiBvYmplY3Qgc2VudCBpbi4nLFxuXHRcdFx0XHRcdHZhbHVlc1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoIGRhdGV0aW1lICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aW1lem9uZSA9PT0gRGF0ZVRpbWUuVElNRVpPTkVfTE9DQUwgKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZVRpbWUuZnJvbUxvY2FsKCB2YWx1ZXNGb3JDb25zdHJ1Y3QsIGxvY2FsZSApO1xuXHRcdH1cblxuXHRcdERhdGVUaW1lLmFzc2VydFRpbWV6b25lSXNWYWxpZCggdGltZXpvbmUgKTtcblxuXHRcdHZhbHVlc0ZvckNvbnN0cnVjdCA9IERhdGVUaW1lWyBwcml2YXRlTWV0aG9kcy5ub3JtYWxpemVVbml0T2JqZWN0IF0oXG5cdFx0XHR2YWx1ZXNGb3JDb25zdHJ1Y3Rcblx0XHQpO1xuXHRcdGNvbnN0IGRhdGV0aW1lID0gbW9tZW50LnR6KCB2YWx1ZXNGb3JDb25zdHJ1Y3QsIHRpbWV6b25lIClcblx0XHRcdC5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdGlmICggZGF0ZXRpbWUuaXNWYWxpZCgpICE9PSB0cnVlICkge1xuXHRcdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudChcblx0XHRcdFx0J0RvdWJsZS1jaGVjayB0aGUgY29uZmlndXJhdGlvbiBvYmplY3Qgc2VudCBpbi4nLFxuXHRcdFx0XHR2YWx1ZXNcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KCBkYXRldGltZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vbWVudCB1c2VzIGRpZmZlcmVudCBuYW1lcyBmb3Igc29tZSB1bml0IGdldHRlcnMvc2V0dGVycy9wcm9wZXJ0aWVzIHNvXG5cdCAqIHRoaXMgaXMgdXNlZCB0byBub3JtYWxpemUgYSBnaXZlbiB1bml0IG5hbWUgdG8gd2hhdCBtb21lbnQgdXNlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVUb05vcm1hbGl6ZVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9ICBOb3JtYWxpemVkIHVuaXQgbmFtZS5cblx0ICovXG5cdHN0YXRpYyBbIHByaXZhdGVNZXRob2RzLm5vcm1hbGl6ZVVuaXROYW1lIF0oIG5hbWVUb05vcm1hbGl6ZSApIHtcblx0XHRjb25zdCBtYXAgPSB7XG5cdFx0XHRkYXk6ICdkYXRlJyxcblx0XHRcdGRheXM6ICdkYXknLFxuXHRcdFx0ZGF0ZTogJ2RheScsXG5cdFx0XHR5ZWFyczogJ3llYXInLFxuXHRcdFx0bW9udGhzOiAnbW9udGgnLFxuXHRcdFx0bWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxuXHRcdFx0bWludXRlczogJ21pbnV0ZScsXG5cdFx0XHRzZWNvbmRzOiAnc2Vjb25kJyxcblx0XHRcdGhvdXJzOiAnaG91cicsXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFwWyBuYW1lVG9Ob3JtYWxpemUgXSA/XG5cdFx0XHRtYXBbIG5hbWVUb05vcm1hbGl6ZSBdIDpcblx0XHRcdG5hbWVUb05vcm1hbGl6ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIG5vcm1hbGl6aW5nIHVuaXQgdmFsdWVzIGZvciBpbnRlcm5hbCBsaWJyYXJ5IHVzZS5cblx0ICpcblx0ICogRm9yIGV4YW1wbGUsIG1vbWVudCB6ZXJvIGluZGV4ZXMgbW9udGhzLiBEYXRlVGltZSBkb2VzIG5vdCwgc28gdGhpc1xuXHQgKiBtZXRob2QgaGVscHMgd2l0aCBub3JtYWxpemluZyBtb250aCB2YWx1ZXMgZm9yIGJvdGggc2V0dGluZyAodXNlZCBieVxuXHQgKiBtb21lbnQpIGFuZCBnZXR0aW5nIChyZXR1cm5lZCB0byBjbGllbnQpLiAgVGhpcyBhbGxvd3MgY2xpZW50IGNvZGVcblx0ICogdG8gZXhwZWN0IG1vbnRocyBpbiBEYXRlVGltZSB0byBiZSBoYW5kbGVkIHdpdGggYSBub24temVybyBpbmRleC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgVGhlIHVuaXQgdG8gYmUgbm9ybWFsaXplZFxuXHQgKiBAcGFyYW0ge21peGVkfSAgdmFsdWUgVGhlIHZhbHVlIGZvciB0aGF0IHVuaXRcblx0ICogQHBhcmFtIHtib29sZWFufSBzZXQgIFdoZXRoZXIgdGhpcyBzaG91bGQgbm9ybWFsaXplIGZvciBzZXR0aW5nIG9yXG5cdCAqIGdldHRpbmcuXG5cdCAqIEByZXR1cm4ge21peGVkfSAgVGhlIG5vcm1hbGl6ZWQgdmFsdWUuXG5cdCAqL1xuXHRzdGF0aWMgWyBwcml2YXRlTWV0aG9kcy5ub3JtYWxpemVVbml0VmFsdWUgXSggdW5pdCwgdmFsdWUsIHNldCA9IHRydWUgKSB7XG5cdFx0aWYgKCB1bml0ID09PSAnbW9udGgnICkge1xuXHRcdFx0dmFsdWUgPSBzZXQgPyB2YWx1ZSAtIDEgOiB2YWx1ZSArIDE7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHaXZlbiBhIHNpbXBsZSBvYmplY3QgY29udGFpbmluZyB1bml0cywgdGhpcyBub3JtYWxpemVzIHRoZSBvYmplY3QgdG9cblx0ICogd2hhdCBtb21lbnQgcmVjb2duaXplcy5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHNldE9iamVjdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNldCAgdHJ1ZSBpZiBzZXR0aW5nIHRoZSBvYmplY3QsIGZhbHNlIGlmIGdldHRpbmcgdGhlXG5cdCAqIG9iamVjdFxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBub3JtYWxpemVkIG9iamVjdC5cblx0ICovXG5cdHN0YXRpYyBbIHByaXZhdGVNZXRob2RzLm5vcm1hbGl6ZVVuaXRPYmplY3QgXSggc2V0T2JqZWN0LCBzZXQgPSB0cnVlICkge1xuXHRcdGlmICggISBpc09iamVjdCggc2V0T2JqZWN0ICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHQnVGhlIGluY29taW5nIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0J1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZHVjZSggc2V0T2JqZWN0LCAoIHJlc3VsdCwgdmFsdWUsIGtleSApID0+IHtcblx0XHRcdGtleSA9IERhdGVUaW1lWyBwcml2YXRlTWV0aG9kcy5ub3JtYWxpemVVbml0TmFtZSBdKCBrZXkgKTtcblx0XHRcdHJlc3VsdFsga2V5IF0gPSBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdFZhbHVlIF0oXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdHNldFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBkYXRlIGFuZCB0aW1lIHVuaXQgbmFtZXNcblx0ICogQHJldHVybiB7c3RyaW5nW119IEFuIGFycmF5IG9mIHVuaXQgbmFtZXNcblx0ICovXG5cdFsgcHJpdmF0ZU1ldGhvZHMuZ2V0VW5pdE5hbWVzIF0oKSB7XG5cdFx0cmV0dXJuIHZhbGlkRGF0ZVRpbWVVbml0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB2YXJpb3VzIGdldHRlciBhbmQgc2V0dGVycyBmb3IgdGhlIHZhbHVlIG9iamVjdC5cblx0ICovXG5cdFsgcHJpdmF0ZU1ldGhvZHMuY3JlYXRlR2V0dGVyc0FuZFNldHRlcnMgXSgpIHtcblx0XHR0aGlzWyBwcml2YXRlTWV0aG9kcy5nZXRVbml0TmFtZXMgXSgpLmZvckVhY2goXG5cdFx0XHQoIHVuaXROYW1lICkgPT4ge1xuXHRcdFx0XHQvLyBjcmVhdGVzIGFjY2Vzc29yIGZvciBnZXR0aW5nIHRoZSB1bml0IHZhbHVlIHZpYSBhXG5cdFx0XHRcdC8vIHByb3BlcnR5IChlZy4gaW5zdGFuY2UuaG91cilcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCB1bml0TmFtZSwge1xuXHRcdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZE5hbWUgPSBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdE5hbWUgXSggdW5pdE5hbWUgKTtcblx0XHRcdFx0XHRcdGNvbnN0IHVuaXRWYWx1ZSA9IHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF1cblx0XHRcdFx0XHRcdFx0WyBtZXRob2ROYW1lIF0oKTtcblx0XHRcdFx0XHRcdHJldHVybiBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdFZhbHVlIF0oXG5cdFx0XHRcdFx0XHRcdHVuaXROYW1lLFxuXHRcdFx0XHRcdFx0XHR1bml0VmFsdWUsXG5cdFx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0Ly8gY3JlYXRlcyBhIGZsdWVudCBzZXR0ZXIgZm9yIHRoZSB2YWx1ZS5cblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCAnc2V0JyArIGNhcGl0YWxpemUoIHVuaXROYW1lICksIHtcblx0XHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0KCB7IFsgdW5pdE5hbWUgXTogdmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVc2VkIHRvIHNldCB2YXJpb3VzIHBhcnRzIG9mIHRoZSBkYXRldGltZSBzdHJpbmcgYW5kIHJldHVybnMgYSBORVdcblx0ICogaW5zdGFuY2Ugb2YgRGF0ZVRpbWVcblx0ICpcblx0ICogTm90ZTogdGhpcyB3aWxsIGNvbnN0cnVjdCBhIERhdGVUaW1lIGV2ZW4gd2l0aCBpbnZhbGlkIHVuaXRzLiBNYWtlIHVzZSBvZlxuXHQgKiBgaXNWYWxpZCgpYCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaW5zdGFuY2UgaXMgYSB2YWxpZCBEYXRlVGltZSBvciBub3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7e319IHNldE9iamVjdCBBbiBvYmplY3Qgd2hlcmUga2V5cyBhcmUgdGhlIHVuaXRzLlxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gQSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZVRpbWUuXG5cdCAqL1xuXHRzZXQoIHNldE9iamVjdCA9IHt9ICkge1xuXHRcdHNldE9iamVjdCA9IERhdGVUaW1lWyBwcml2YXRlTWV0aG9kcy5ub3JtYWxpemVVbml0T2JqZWN0IF0oIHNldE9iamVjdCApO1xuXHRcdHJldHVybiBuZXcgRGF0ZVRpbWUoXG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5zZXQoIHNldE9iamVjdCApLnRvSVNPU3RyaW5nKCksXG5cdFx0XHR0aGlzLnRpbWV6b25lLFxuXHRcdFx0dGhpcy5sb2NhbGVcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFjY2Vzc29yIGZvciB0aGUgdGltZXpvbmUgc3RyaW5nLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0aW1lem9uZSBzdHJpbmdcblx0ICovXG5cdGdldCB0aW1lem9uZSgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS50eigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZsdWVudCBzZXR0ZXIgZm9yIHRoZSB0aW1lem9uZSBwcm9wZXJ0eS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbWV6b25lXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIERhdGVUaW1lXG5cdCAqL1xuXHRzZXRUaW1lem9uZSggdGltZXpvbmUgKSB7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0VGltZXpvbmVJc1ZhbGlkKCB0aW1lem9uZSApO1xuXHRcdHJldHVybiBuZXcgRGF0ZVRpbWUoXG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLnRvSVNPU3RyaW5nKCksXG5cdFx0XHR0aW1lem9uZSxcblx0XHRcdHRoaXMubG9jYWxlXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBmb3IgdGhlIG1vbnRoIHNldCBpbiB0aGlzIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9ICBUaGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoLlxuXHQgKi9cblx0Z2V0IGRheXNJbk1vbnRoKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLmRheXNJbk1vbnRoKCk7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgY3VycmVudCBpbnN0YW5jZSBpbiB0aW1lIGlzIGN1cnJlbnRseSBpbiBEYXlsaWdodCBTYXZpbmdzXG5cdCAqIFRpbWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgbWVhbnMgaXQgaXMgY3VycmVudGx5IGluIERheWxpZ2h0IFNhdmluZ3MgVGltZS5cblx0ICovXG5cdGdldCBpc0luRFNUKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLmlzRFNUKCk7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgY3VycmVudCBpbnN0YW5jZSBpbiB0aW1lIGlzIGN1cnJlbnRseSBpbiBhIGxlYXAgeWVhci5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBtZWFucyB0aGlzIGRhdGUgdGltZSBpcyBpbiBhIGxlYXAgeWVhci5cblx0ICovXG5cdGdldCBpc0luTGVhcFllYXIoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0uaXNMZWFwWWVhcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG9mZnNldCBmcm9tIFVUQyBmb3IgdGhlIGN1cnJlbnQgaW5zdGFuY2UgaW4gdGltZSAoaW4gbWludXRlcykuXG5cdCAqIEByZXR1cm4ge251bWJlcn0gIFRoZSBvZmZzZXQgaXMgaW4gbWludXRlc1xuXHQgKi9cblx0Z2V0IG9mZnNldCgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS51dGNPZmZzZXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIGZsdWVudCBzZXR0ZXIgZm9yIHRoZSBVVEMgb2Zmc2V0LlxuXHQgKlxuXHQgKiBUaGUgb2Zmc2V0IHByb3ZpZGVkIGRlZmF1bHRzIHRvIGV4cGVjdGluZyBpbiBtaW51dGVzLiAgSG93ZXZlciBpZiB0aGVcblx0ICogaW5wdXQgaXMgbGVzcyB0aGFuIDE2IGFuZCBncmVhdGVyIHRoYW4gLTE2LCBpdCB3aWxsIGludGVycHJldCB0aGUgaW5wdXRcblx0ICogYXMgaG91cnMgaW5zdGVhZC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKi9cblx0c2V0T2Zmc2V0KCBvZmZzZXQgKSB7XG5cdFx0RGF0ZVRpbWUuYXNzZXJ0SXNPZmZzZXQoIG9mZnNldCApO1xuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KFxuXHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5jbG9uZSgpLnV0Y09mZnNldCggb2Zmc2V0IClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEV4cG9zZXMgdGhlIGRheSBvZiB0aGUgeWVhciBmb3IgdGhlIGRhdGUgYW5kIHRpbWUgaW4gdGhlIG9iamVjdC5cblx0ICpcblx0ICpcblx0ICogQHJldHVybiB7bnVtYmVyfSBBIG51bWJlciBiZXR3ZWVuIDEgYW5kIDM2NiAoZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlXG5cdCAqIGludGVybmFsIGRhdGUgYW5kIHRpbWUgaXMgaW4gYSBsZWFwIHllYXIgb3Igbm90KS5cblx0ICovXG5cdGdldCBkYXlPZlllYXIoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0uZGF5T2ZZZWFyKCk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwb3NlcyB0aGUgcXVhcnRlciBmb3IgdGhlIGRhdGUgYW5kIHRpbWUgaW4gdGhlIG9iamVjdC5cblx0ICpcblx0ICogQHJldHVybiB7bnVtYmVyfSBBIG51bWJlciBiZXR3ZWVuIDEgYW5kIDRcblx0ICovXG5cdGdldCBxdWFydGVyKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLnF1YXJ0ZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBvc2VzIHRoZSBJU08gbnVtYmVyIG9mIHRoZSB3ZWVrIGZvciB0aGUgZGF0ZSBhbmQgdGltZSBpbiB0aGUgb2JqZWN0LlxuXHQgKiBAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG5cdCAqIEByZXR1cm4ge251bWJlcn0gV2lsbCBiZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDUyaXNoXG5cdCAqL1xuXHRnZXQgaXNvV2Vla051bWJlcigpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5pc29XZWVrKCk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwb3NlcyB0aGUgSVNPIG51bWJlciBmb3IgdGhlIHdlZWsgeWVhciBmb3IgdGhlIGRhdGUgYW5kIHRpbWUgaW4gdGhlXG5cdCAqIG9iamVjdC5cblx0ICogQGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9ICBXaWxsIGJlIGEgbnVtYmVyIHJlcHJlc2VudGluZyBhIHllYXIuXG5cdCAqL1xuXHRnZXQgaXNvV2Vla1llYXIoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0uaXNvV2Vla1llYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeHBvc2VzIHRoZSBJU08gbnVtYmVyIGZvciB0aGUgZGF5IG9mIHRoZSB3ZWVrIGZvciB0aGUgZGF0ZSBhbmQgdGltZSBpblxuXHQgKiB0aGUgb2JqZWN0LlxuXHQgKiBAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG5cdCAqIEByZXR1cm4ge251bWJlcn0gQSBudW1iZXIgYmV0d2VlbiAxIGFuZCA3IChNb25kYXkgaXMgMSBhbmQgU3VuZGF5IGlzIDcpXG5cdCAqL1xuXHRnZXQgaXNvV2Vla0RheSgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5pc29XZWVrZGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwb3NlcyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLlxuXHQgKiBAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG5cdCAqXG5cdCAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGUgSVNPIHllYXIuXG5cdCAqL1xuXHRnZXQgaXNvV2Vla3NJbldlZWtZZWFyKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLmlzb1dlZWtzSW5ZZWFyKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB3aGF0IHRoZSBzZXQgbG9jYWxlIGlzIGZvciB0aGlzIERhdGVUaW1lXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gQSBsb2NhbGUgc3RyaW5nXG5cdCAqL1xuXHRnZXQgbG9jYWxlKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLmxvY2FsZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZmx1ZW50IHNldHRlciBmb3Igc2V0dGluZyB0aGUgbG9jYWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBhIG5ldyBpbnN0YW5jZSBvZiBEYXRlVGltZSBlcXVpdmFsZW50IHRvIHRoaXMgb25lIGJ1dFxuXHQgKiB3aXRoIGRpZmZlcmVudCBsb2NhbGUuXG5cdCAqL1xuXHRzZXRMb2NhbGUoIGxvY2FsZSApIHtcblx0XHREYXRlVGltZS5hc3NlcnRMb2NhbGVJc1ZhbGlkKCBsb2NhbGUgKTtcblx0XHRyZXR1cm4gRGF0ZVRpbWUuZnJvbU1vbWVudChcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF1cblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmxvY2FsZSggbG9jYWxlIClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhpcyBEYXRlVGltZSBpbnN0YW5jZSBpcyB2YWxpZC5cblx0ICpcblx0ICogVHlwaWNhbGx5IGFuIGludmFsaWQgc3RhdGUgaXMgYWNoaWV2ZWQgd2hlbiB0aGUgaW50ZXJuYWwgbW9tZW50IGlzXG5cdCAqIGludmFsaWQuICBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgbW9tZW50IGluc3RhbmNlIGlzIGNyZWF0ZWQgd2l0aFxuXHQgKiBpbnZhbGlkIHBhcmFtZXRlcnMuXG5cdCAqXG5cdCAqIE5vdGU6IHdpdGggbW9tZW50LnRpbWV6b25lICh3aGljaCBpcyB0aGUgaW50ZXJuYWwgbGlicmFyeSksXG5cdCAqIG1vbWVudC5pc1ZhbGlkKCkgY291bGQgcmV0dXJuIHRydWUsIGZhbHNlIG9yIGEgc3RyaW5nIGZvciB3aHkgaXQnc1xuXHQgKiBpbnZhbGlkLiAgVGhpcyBpcyB3aHkgYSBzdHJpY3QgZXF1YWxpdHkgY2hlY2sgaXMgZG9uZSBmb3Igd2hldGhlciBpdCBpc1xuXHQgKiB0cnVlIG9yIG5vdC5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gIFRydWUgbWVhbnMgdGhlIGluc3RhbmNlIGlzIHZhbGlkLlxuXHQgKi9cblx0aXNWYWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5pc1ZhbGlkKCkgPT09IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZSBpbnN0YW5jZXMgYXMgYSBEdXJhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZVxuXHQgKiBAcmV0dXJuIHtEdXJhdGlvbn0gQW4gaW5zdGFuY2Ugb2YgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSBkaWZmZXJlbmNlXG5cdCAqIGJldHdlZW4gdGhlIHR3byBEYXRlVGltZSBvYmplY3RzLlxuXHQgKi9cblx0ZGlmZiggb3RoZXJEYXRlVGltZSApIHtcblx0XHREYXRlVGltZS5hc3NlcnRJc0RhdGVUaW1lKCBvdGhlckRhdGVUaW1lICk7XG5cdFx0cmV0dXJuIG5ldyBEdXJhdGlvbihcblx0XHRcdG1vbWVudC5kdXJhdGlvbihcblx0XHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXVxuXHRcdFx0XHRcdC5kaWZmKCBvdGhlckRhdGVUaW1lWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdIClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCBcIm5vd1wiIGFzIGEgRHVyYXRpb24uXG5cdCAqIEByZXR1cm4ge0R1cmF0aW9ufSBBbiBpbnN0YW5jZSBvZiBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIGRpZmZlcmVuY2Vcblx0ICogYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCBcIm5vd1wiXG5cdCAqL1xuXHRkaWZmTm93KCkge1xuXHRcdHJldHVybiBuZXcgRHVyYXRpb24oXG5cdFx0XHRtb21lbnQuZHVyYXRpb24oXG5cdFx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF1cblx0XHRcdFx0XHQuZGlmZiggbW9tZW50KCkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB2YWx1ZSBvZiB0aGlzIERhdGVUaW1lIHRvIHRoZSBlbmQgKGkuZS4gdGhlIGxhc3QgbWlsbGlzZWNvbmQpIG9mXG5cdCAqIGEgdW5pdCBvZiB0aW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gUmV0dXJucyBhIG5ldyBEYXRlVGltZSBpbnN0YW5jZS5cblx0ICovXG5cdGVuZE9mKCB1bml0ICkge1xuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KFxuXHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5jbG9uZSgpLmVuZE9mKCB1bml0IClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmVzIHRoaXMgRGF0ZVRpbWUgd2l0aCBwcm92aWRlZCBEYXRlVGltZSBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZXlcblx0ICogYXJlIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG5cdCAqXG5cdCAqIFRoZSB0d28gRGF0ZVRpbWVzIGFyZSBjb25zaWRlcmVkIGVxdWFsIGlmIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lXG5cdCAqIG1pbGxpc2Vjb25kLCBoYXZlIHRoZSBzYW1lIHpvbmUgYW5kIGxvY2F0aW9uLCBhbmQgYXJlIGJvdGggdmFsaWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWVcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gIFRydWUgbWVhbnMgdGhleSBhcmUgZXF1YWxcblx0ICovXG5cdGVxdWFscyggb3RoZXJEYXRlVGltZSApIHtcblx0XHREYXRlVGltZS5hc3NlcnRJc0RhdGVUaW1lKCBvdGhlckRhdGVUaW1lICk7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF1cblx0XHRcdC5pc1NhbWUoIG90aGVyRGF0ZVRpbWVbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWVcblx0ICpcblx0ICogZWcuIERhdGVUaW1lLmZyb21Mb2NhbCgpLmhhc1NhbWUoIG90aGVyRFQsICdkYXknICkgLy9+PiB0cnVlIGlmIGJvdGggdGhlXG5cdCAqIHNhbWUgY2FsZW5kYXIgZGF5LlxuXHQgKlxuXHQgKiBOb3RlOiB0aGlzIHdpbGwgbWF0Y2ggYWxsIHVuaXRzIGVxdWFsIG9yIGxhcmdlci4gIEZvciBleGFtcGxlLCBwYXNzaW5nIGluXG5cdCAqIGBtb250aGAgd2lsbCBjaGVjayBgbW9udGhgIGFuZCBgeWVhcmAuICBTbyBpdCdzIG5vdCBvbmx5IGNoZWNraW5nIGlmIHRoZVxuXHQgKiB0d28gZGF0ZXMgc2hhcmUgdGhlIHNhbWUgbW9udGgsIGJ1dCB0aGF0IHRoZXkgYXJlIHRoZSBzYW1lIG1vbnRoIGluIHRoZVxuXHQgKiBzYW1lIHllYXIuICBJZiB5b3UgcGFzc2VkIGluIGRheSwgaXQgd291bGQgcmV0dXJuIHdoZXRoZXIgdGhlIHByb3ZpZGVkXG5cdCAqIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIGRheSwgbW9udGggYW5kIHllYXIgYXMgdGhpcyBEYXRlVGltZS5cblx0ICpcblx0ICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHQgKiBAcmV0dXJuIHtib29sZWFufSAgVHJ1ZSBtZWFucyB0aGV5IGFyZSBib3RoIGluIHRoZSBzYW1lIHRpbWUgZm9yIHRoZVxuXHQgKiBnaXZlbiB1bml0LlxuXHQgKi9cblx0aGFzU2FtZSggb3RoZXJEYXRlVGltZSwgdW5pdCApIHtcblx0XHREYXRlVGltZS5hc3NlcnRJc0RhdGVUaW1lKCBvdGhlckRhdGVUaW1lICk7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF1cblx0XHRcdC5pc1NhbWUoIG90aGVyRGF0ZVRpbWVbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0sIHVuaXQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIChyZXByZXNlbnRlZCBieSBhIER1cmF0aW9uKSBmcm9tIHRoaXMgRGF0ZVRpbWVcblx0ICogYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0R1cmF0aW9ufSBkdXJhdGlvblxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gQSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZVRpbWUgZm9yIHRoZSBuZXcgZGF0ZSBhbmQgdGltZS5cblx0ICovXG5cdG1pbnVzKCBkdXJhdGlvbiApIHtcblx0XHREdXJhdGlvbi5hc3NlcnRJc1ZhbGlkRHVyYXRpb24oIGR1cmF0aW9uICk7XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoXG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5zdWJ0cmFjdCggZHVyYXRpb24udG9PYmplY3QoKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSAocmVwcmVzZW50ZWQgYnkgYSBEdXJhdGlvbikgdG8gdGhpcyBEYXRlVGltZSBhbmRcblx0ICogcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcblx0ICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb25cblx0ICogQHJldHVybiB7RGF0ZVRpbWV9IEEgbmV3IGluc3RhbmNlIG9mIERhdGVUaW1lIGZvciB0aGUgbmV3IGRhdGUgYW5kIHRpbWUuXG5cdCAqL1xuXHRwbHVzKCBkdXJhdGlvbiApIHtcblx0XHREdXJhdGlvbi5hc3NlcnRJc1ZhbGlkRHVyYXRpb24oIGR1cmF0aW9uICk7XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoXG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdXG5cdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdC5hZGQoIGR1cmF0aW9uLnRvT2JqZWN0KCkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB2YWx1ZSBvZiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSBzcGVjaWZpZWQgdW5pdCBvZlxuXHQgKiB0aW1lIGFuZCByZXR1cm4gYSBuZXcgRGF0ZVRpbWUgcmVwcmVzZW50aW5nIHRoYXQuXG5cdCAqXG5cdCAqIGVnLlxuXHQgKiBzdGFydE9mKCBEYXRlVGltZS5VTklUX1lFQVIgKSAvL3NldHMgdG8gSmFudWFyeSAxc3QsIDEyOjAwYW0gdGhpc1xuXHQgKiB5ZWFyLlxuXHQgKiBzdGFydE9mKCBEYXRlVGltZS5VTklUX01PTlRIICkgLy9zZXRzIHRvIHRoZSBmaXJzdCBvZiB0aGlzIG1vbnRoLCAxMjowMGFtXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBBIG5ldyBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKi9cblx0c3RhcnRPZiggdW5pdCApIHtcblx0XHRyZXR1cm4gRGF0ZVRpbWUuZnJvbU1vbWVudChcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0uY2xvbmUoKS5zdGFydE9mKCB1bml0IClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvXG5cdCAqIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuXHQgKiBAc2VlIE1vbWVudCBmb3JtYXQgXl4gc2VjdGlvbiBmb3IgdGhlIGF2YWlsYWJsZSBmb3JtYXRzIHRoYXQgY2FuIGJlIHVzZWQuXG5cdCAqXG5cdCAqIEFuIGVtcHR5IGZvcm1hdCB2YWx1ZSB3aWxsIHJldHVybiB0aGUgc3RyaW5nIGZvcm1hdHRlZCBpbiBJU08gODYwMSB3aXRoXG5cdCAqIGFueSBvZmZzZXQgaW5jbHVkZWQuXG5cdCAqXG5cdCAqIFdpdGhvdXQgYW55IGFyZ3VtZW50IHBhc3NlZCwgdGhlIGZvcm1hdCB3aWxsIGJlIHdoYXRldmVyIHN0cmluZyB0aGVcblx0ICogZm9ybWF0IGlzIHNlcnZlciBzaWRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0XG5cdCAqIEByZXR1cm4ge3N0cmluZ30gIFRoZSBkYXRlIGFuZCB0aW1lIGRpc3BsYXllZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkXG5cdCAqIGZvcm1hdC5cblx0ICovXG5cdHRvRm9ybWF0KCBmb3JtYXQgPSBERUZBVUxUX0ZPUk1BVCApIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5mb3JtYXQoIGZvcm1hdCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvXG5cdCAqIHRoZSBJU08gODYwMSBzdGFuZGFyZC5cblx0ICpcblx0ICogSWYgYGluVVRDYCBpcyB0cnVlIChkZWZhdWx0KSB0aGVuIGB0b0lTT2Agd2lsbCByZXR1cm4gdGhlIElTTyBzdHJpbmcgaW5cblx0ICogVVRDLiBPdGhlcndpc2UgaXQgd2lsbCBpbmNsdWRlIHRoZSBvZmZzZXQgaW5mb3JtYXRpb24gZm9yIHRoZSBpbnRlcm5hbFxuXHQgKiB0aW1lem9uZS9vZmZzZXQgb24gdGhlIG1vbWVudCBpbiB0aW1lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGluVVRDXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gQW4gSVNPODYwMSBzdHJpbmdcblx0ICovXG5cdHRvSVNPKCBpblVUQyA9IHRydWUgKSB7XG5cdFx0cmV0dXJuIGluVVRDID9cblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0udG9JU09TdHJpbmcoKSA6XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLnRvSVNPU3RyaW5nKCB0cnVlICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdmFsdWUgZm9yIHRoaXMgRGF0ZVRpbWUgYXMgYSBqYXZhc2NyaXB0IERhdGUgb2JqZWN0LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtEYXRlfSBBIGphdmFzY3JpcHQgRGF0ZSBpbnN0YW5jZVxuXHQgKi9cblx0dG9KU0RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0udG9EYXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICogV2hlbiBzZXJpYWxpemluZyBhbiBvYmplY3QgdG8gSlNPTiwgaWYgdGhlcmUgaXMgYSBEYXRlVGltZSBpbnN0YW5jZSwgaXRcblx0ICogd2lsbCBiZSByZXByZXNlbnRlZCBhcyBhbiBJU084NjAxIHN0cmluZy5cblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfSBBbiBJU08gODYwMSBzdHJpbmdcblx0ICovXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS50b0lTT1N0cmluZygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgRGF0ZVRpbWUgdG8gd2hhdGV2ZXIgdGhlIFwibG9jYWxcIiB0aW1lIGlzLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtEYXRlVGltZX0gYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIERhdGVUaW1lXG5cdCAqL1xuXHR0b0xvY2FsKCkge1xuXHRcdHJldHVybiBEYXRlVGltZS5mcm9tTW9tZW50KFxuXHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS5jbG9uZSgpLmxvY2FsKClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgVW5peCBFcG9jaCBmb3IgdGhlIGN1cnJlbnQgRGF0ZVRpbWVcblx0ICogaW5zdGFuY2UuXG5cdCAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSBVbml4IEVwb2NoXG5cdCAqL1xuXHR0b01pbGxpcygpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHNpbXBsZSBvYmplY3QgY29udGFpbmluZyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLFxuXHQgKiBtaW51dGUsIHNlY29uZCwgYW5kIG1pbGxpc2Vjb25kLlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLFxuXHQgKiBhbmQgbWlsbGlzZWNvbmQuXG5cdCAqL1xuXHR0b09iamVjdCgpIHtcblx0XHRjb25zdCBkYXRldGltZSA9IHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0udG9PYmplY3QoKTtcblx0XHRyZXR1cm4gcmVkdWNlKCBkYXRldGltZSwgKCByZXN1bHQsIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRrZXkgPSBEYXRlVGltZVsgcHJpdmF0ZU1ldGhvZHMubm9ybWFsaXplVW5pdE5hbWUgXSgga2V5ICk7XG5cdFx0XHRyZXN1bHRbIGtleSBdID0gRGF0ZVRpbWVbIHByaXZhdGVNZXRob2RzLm5vcm1hbGl6ZVVuaXRWYWx1ZSBdKFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRmYWxzZVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0aGUgRGF0ZVRpbWUncyB0aW1lem9uZSB0byBVVEMuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0RhdGVUaW1lfSBBIG5ldyBpbnN0YW5jZSBvZiBEYXRlVGltZVxuXHQgKi9cblx0dG9VVEMoKSB7XG5cdFx0cmV0dXJuIERhdGVUaW1lLmZyb21Nb21lbnQoXG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kYXRldGltZSBdLmNsb25lKCkudXRjKClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gZW5nbGlzaCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSB3aGVuIHRoZSBpbnN0YW5jZSBpc1xuXHQgKiBjb2VyY2VkIHRvIGEgc3RyaW5nIChzaW1pbGFyIGZvcm1hdCB0byBKUyBgRGF0ZS50b1N0cmluZygpYC5cblx0ICpcblx0ICogZWcgYFR1ZSBEZWMgMjUgMjAxOCAxMDoxNTowMCBHTVQrMDAwMGBcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG5cdCAqL1xuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZGF0ZXRpbWUgXS50b1N0cmluZygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gRGF0ZVRpbWUgaXMgY29lcmNlZCB0byBudW1iZXIgdGhpcyB3aWxsIGVuc3VyZSBpdHMgZGlzcGxheWVkIGFzIHRoZVxuXHQgKiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBVbml4IEVwb2NoIGZvciB0aGUgY3VycmVudCBEYXRlVGltZVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IEFtb3VudCBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2hcblx0ICovXG5cdHZhbHVlT2YoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmRhdGV0aW1lIF0udmFsdWVPZigpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlc2Ugc3RhdGljIHByb3BlcnRpZXMgbmVlZCB0byBiZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGNsYXNzIGRlZmluaXRpb25cbiAqIGJlY2F1c2Ugb2YgY29tcGlsZSBpc3N1ZXMuXG4gKi9cbkRhdGVUaW1lLlVOSVRfWUVBUiA9ICd5ZWFyJztcbkRhdGVUaW1lLlVOSVRfTU9OVEggPSAnbW9udGgnO1xuRGF0ZVRpbWUuVU5JVF9EQVkgPSAnZGF5JztcbkRhdGVUaW1lLlVOSVRfSE9VUiA9ICdob3VyJztcbkRhdGVUaW1lLlVOSVRfTUlOVVRFID0gJ21pbnV0ZSc7XG5EYXRlVGltZS5VTklUX1NFQ09ORCA9ICdzZWNvbmQnO1xuRGF0ZVRpbWUuVU5JVF9NSUxMSVNFQ09ORCA9ICdtaWxsaXNlY29uZCc7XG5EYXRlVGltZS5USU1FWk9ORV9MT0NBTCA9ICdsb2NhbCc7XG4iLCIvKipcbiAqIEV4dGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IHtcblx0VElNRVpPTkVfQ09ORklHLFxuXHRTRVJWRVJfTE9DQUxFLFxufSBmcm9tICdAZXZlbnRlc3ByZXNzby9lZWpzJztcbmltcG9ydCB7XG5cdEZPUk1BVF9TSVRFX0RBVEUsXG5cdEZPUk1BVF9TSVRFX1RJTUUsXG59IGZyb20gJ0BldmVudGVzcHJlc3NvL2hlbHBlcnMnO1xuaW1wb3J0IHsgdmFsaWRhdGVMb2NhbGUgfSBmcm9tICcuL2Fzc2VydGlvbnMnO1xuXG5pbXBvcnQgeyBzbmFrZUNhc2UgfSBmcm9tICdsb2Rhc2gnO1xuLyoqXG4gKiBEZWZhdWx0IHRpbWV6b25lIHN0cmluZyB0byB1c2UuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRVpPTkVfU1RSSU5HID0gVElNRVpPTkVfQ09ORklHLnN0cmluZyA9PT0gJycgP1xuXHQnVVRDJyA6XG5cdFRJTUVaT05FX0NPTkZJRy5zdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBvZmZzZXRcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9PRkZTRVQgPSBUSU1FWk9ORV9DT05GSUcub2Zmc2V0O1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlcmUgaXMgYSBkZWZhdWx0IHRpbWV6b25lIHN0cmluZyB0byB1c2UuXG4gKiBUaGlzIGhlbHBzIHdpdGggZGV0ZXJtaW5pbmcgd2hldGhlciB0byB1c2UgdGhlIG9mZnNldCBvciBub3QgZm9yIGNvbnN0cnVjdGluZ1xuICogRGF0ZVRpbWUgdmFsdWUgb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IEhBU19USU1FWk9ORV9TVFJJTkcgPSAoXG5cdERFRkFVTFRfVElNRVpPTkVfU1RSSU5HICE9PSAnVVRDJyB8fFxuXHQhICggREVGQVVMVF9USU1FWk9ORV9TVFJJTkcgPT09ICdVVEMnICYmIERFRkFVTFRfT0ZGU0VUICE9PSAwIClcbik7XG5cbi8qKlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPUk1BVCA9IEZPUk1BVF9TSVRFX0RBVEUgKyAnICcgKyBGT1JNQVRfU0lURV9USU1FO1xuXG4vKipcbiAqIEV4cG9zZXMgd2hhdCB0byB1c2UgZm9yIHRoZSBkZWZhdWx0IGxvY2FsZS5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQ0FMRSA9IHNuYWtlQ2FzZSggU0VSVkVSX0xPQ0FMRS51c2VyICk7XG5cbi8qKlxuICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHByb3ZpZGVkIGxvY2FsZSBpcyB2YWxpZC4gIFNvIGlmIGBERUZBVUxUX0xPQ0FMRWAgaXNcbiAqIG5vdCB2YWxpZCBmb3IgdGhpcyBlbnZpcm9ubWVudCwgdGhlbiBhIGZhbGxiYWNrIG9mICdlbicgbG9jYWxlIGlzIHVzZWQuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVkFMSURfTE9DQUxFID0gdmFsaWRhdGVMb2NhbGUoIERFRkFVTFRfTE9DQUxFICkgP1xuXHRERUZBVUxUX0xPQ0FMRSA6XG5cdCdlbic7XG4iLCIvKipcbiAqIEV4dGVybmFsIGltcG9ydHNcbiAqL1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IG1vbWVudER1cmF0aW9uRm9ybWF0U2V0dXAgZnJvbSAnbW9tZW50LWR1cmF0aW9uLWZvcm1hdCc7XG5pbXBvcnQgeyBjYXBpdGFsaXplLCBwaWNrLCBrZXlzLCBvbWl0LCBtYXBWYWx1ZXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGlzU2hhbGxvd0VxdWFsIGZyb20gJ0B3b3JkcHJlc3MvaXMtc2hhbGxvdy1lcXVhbCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCB7IGluc3RhbmNlT2YgfSBmcm9tICdAZXZlbnRlc3ByZXNzby92YWxpZGF0b3JzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBpbXBvcnRzXG4gKi9cbmltcG9ydCAqIGFzIGFzc2VydGlvbnMgZnJvbSAnLi9hc3NlcnRpb25zJztcbmltcG9ydCB7XG5cdERFRkFVTFRfVkFMSURfTE9DQUxFLFxufSBmcm9tICcuL2RlZmF1bHRzJztcblxubW9tZW50RHVyYXRpb25Gb3JtYXRTZXR1cCggbW9tZW50ICk7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHN5bWJvbHMgdXNlZCBmb3IgXCJwcml2YXRlXCIgcHJvcGVydGllcyBpbiB0aGUgRHVyYXRpb24gb2JqZWN0LlxuICogQHR5cGUge1xuICogXHR7XG4gKiBcdFx0ZHVyYXRpb246IFN5bWJvbCxcbiAqIFx0XHR2YWx1ZXM6IFN5bWJvbCxcbiAqIFx0XHRpc1ZhbGlkOiBTeW1ib2wsXG4gKiBcdH1cbiAqIH1cbiAqL1xuY29uc3QgcHJpdmF0ZVByb3BlcnRpZXMgPSB7XG5cdGR1cmF0aW9uOiBTeW1ib2woICdEdXJhdGlvblByaXZhdGVQcm9wZXJ0aWVzRHVyYXRpb24nICksXG5cdGR1cmF0aW9uVmFsdWVzOiBTeW1ib2woICdEdXJhdGlvblByaXZhdGVQcm9wZXJ0aWVzRHVyYXRpb25WYWx1ZXMnICksXG5cdGlzVmFsaWQ6IFN5bWJvbCggJ0R1cmF0aW9uUHJpdmF0ZVByb3BlcnRpZXNJc1ZhbGlkJyApLFxufTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3ltYm9scyB1c2VkIGZvciBcInByaXZhdGVcIiBtZXRob2RzIGluIHRoZSBEdXJhdGlvbiBvYmplY3QuXG4gKiBAdHlwZSB7XG4gKiBcdHtcbiAqIFx0XHRjcmVhdGVHZXR0ZXJzQW5kU2V0dGVyczogU3ltYm9sLFxuICogXHRcdGdldEFsbFVuaXROYW1lczogU3ltYm9sLFxuICogXHRcdHBvcHVsYXRlVmFsdWVzRnJvbUR1cmF0aW9uOiBTeW1ib2wsXG4gKiBcdFx0c2V0VmFsdWVzOiBTeW1ib2wsXG4gKiBcdCAgICBmaWx0ZXJWYWx1ZXM6IFN5bWJvbCxcbiAqIFx0fVxuICogfVxuICovXG5jb25zdCBwcml2YXRlTWV0aG9kcyA9IHtcblx0Y3JlYXRlR2V0dGVyczogU3ltYm9sKCAnRHVyYXRpb25Qcml2YXRlTWV0aG9kc0NyZWF0ZUdldHRlcnMnICksXG5cdGdldEFsbFVuaXROYW1lczogU3ltYm9sKCAnRHVyYXRpb25Qcml2YXRlTWV0aG9kc0dldEFsbFVuaXROYW1lcycgKSxcblx0cG9wdWxhdGVWYWx1ZXNGcm9tRHVyYXRpb246IFN5bWJvbChcblx0XHQnRHVyYXRpb25Qcml2YXRlTWV0aG9kc1BvcHVsYXRlVmFsdWVzRnJvbUR1cmF0aW9uJ1xuXHQpLFxuXHRzZXRWYWx1ZXM6IFN5bWJvbCggJ0R1cmF0aW9uUHJpdmF0ZU1ldGhvZHNTZXRWYWx1ZXMnICksXG5cdGZpbHRlclZhbHVlczogU3ltYm9sKCAnRHVyYXRpb25Qcml2YXRlTWV0aG9kc0ZpbHRlclZhbHVlcycgKSxcbn07XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgdW5pdCBuYW1lcyBmb3IgcHJvcGVydGllcyBpbiB0aGUgRHVyYXRpb24gb2JqZWN0XG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IHVuaXROYW1lcyA9IFtcblx0J3llYXJzJyxcblx0J21vbnRocycsXG5cdCdkYXlzJyxcblx0J2hvdXJzJyxcblx0J21pbnV0ZXMnLFxuXHQnc2Vjb25kcycsXG5cdCdtaWxsaXNlY29uZHMnLFxuXTtcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBkZXJpdmF0aXZlIHVuaXQgbmFtZXMuXG4gKiBUaGVzZSBhcmUgYWNjZXNzb3JzIHRoYXQgYXJlIGRlcml2YXRpdmVzIG9mIGJhc2UgdW5pdHMuICBGb3IgaW5zdGFuY2UsXG4gKiBcIndlZWtzXCIgZW5kcyB1cCBiZWluZyBhIGRlcml2YXRpdmUgKGNhbGN1bGF0ZWQgZnJvbSkgdGhlIFwiZGF5c1wiIHVuaXQuXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGRlcml2YXRpdmVVbml0TmFtZXMgPSBbXG5cdCd3ZWVrcycsXG5dO1xuXG4vKipcbiAqIFdoZXJlIGEgRGF0ZVRpbWUgb2JqZWN0IHJlcHJlc2VudHMgYSBzaW5nbGUgcG9pbnQgaW4gdGltZSwgYSBEdXJhdGlvbiBvYmplY3RcbiAqIHJlcHJlc2VudHMgYSBsZW5ndGggb2YgdGltZS5cbiAqXG4gKiBEdXJhdGlvbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIGJlZ2lubmluZyBhbmQgZW5kIGRhdGUuICBUaGV5IGFyZSBjb250ZXh0bGVzcy5cbiAqXG4gKiBBcyBhbiBleGFtcGxlLCBkdXJhdGlvbnMgYXJlIHJlcHJlc2VudGF0aXZlIG9mIHNvbWV0aGluZyBsaWtlIFwiMiBob3Vyc1wiIGFuZFxuICogbm90IHJlcHJlc2VudGF0aXZlIG9mIHNvbWV0aGluZyBsaWtlIFwiYmV0d2VlbiAxcG0gYW5kIDNwbVwiLlxuICpcbiAqIEludGVybmFsbHksIHRoZSBEdXJhdGlvbiBjbGFzcyBoZXJlIHVzZXMgYG1vbWVudC5EdXJhdGlvbmAuICBUaGlzIGlzIGFuXG4gKiBhYnN0cmFjdGlvbiBsb29zZWx5IGZvbGxvd2luZyB0aGUgYWRhcHRlciBwYXR0ZXJuIHNvIHRoYXQgdGhlcmUgaXMgYSBjb21tb25cbiAqIGFwaSB0aGF0IGNhbiBiZSBkZXBlbmRlZCBvbiBpZiBpbiB0aGUgZnV0dXJlIHRoZSBpbnRlcm5hbCBsaWJyYXJ5IGlzIHN3aXRjaGVkXG4gKiB0byBzb21ldGhpbmcgZGlmZmVyZW50IChzdWNoIGFzIEx1eG9uKS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVyYXRpb24ge1xuXHRzdGF0aWMgVU5JVF9ZRUFSUyA9ICd5ZWFycyc7XG5cdHN0YXRpYyBVTklUX01PTlRIUyA9ICdtb250aHMnO1xuXHRzdGF0aWMgVU5JVF9EQVlTID0gJ2RheXMnO1xuXHRzdGF0aWMgVU5JVF9IT1VSUyA9ICdob3Vycyc7XG5cdHN0YXRpYyBVTklUX01JTlVURVMgPSAnbWludXRlcyc7XG5cdHN0YXRpYyBVTklUX1NFQ09ORFMgPSAnc2Vjb25kcyc7XG5cdHN0YXRpYyBVTklUX01JTExJU0VDT05EUyA9ICdtaWxsaXNlY29uZHMnO1xuXHRzdGF0aWMgVU5JVF9XRUVLUyA9ICd3ZWVrcyc7XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIER1cmF0aW9uIGNsYXNzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdHxtb21lbnQuRHVyYXRpb258c3RyaW5nfG51bWJlcn0gdmFsdWVzXG5cdCAqIFJlY2VpdmluZyBhIG1vbWVudC5EdXJhdGlvbiBvYmplY3QgaXMgc29tZXRoaW5nIGZvciBpbnRlcm5hbCB1c2UgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSB2aWFcblx0ICogY2xpZW50IGNvZGUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgIEEgdmFsaWQgbG9jYWxlIHN0cmluZy5cblx0ICogXHRcdFx0XHRcdFx0XHRAbGluayBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1NjQ2XG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggdmFsdWVzLCBsb2NhbGUgPSBERUZBVUxUX1ZBTElEX0xPQ0FMRSApIHtcblx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5pc1ZhbGlkIF0gPSB0cnVlO1xuXHRcdGFzc2VydGlvbnMuYXNzZXJ0TG9jYWxlSXNWYWxpZCggbG9jYWxlICk7XG5cdFx0aWYgKCB0eXBlb2YgdmFsdWVzICE9PSAnb2JqZWN0JyApIHtcblx0XHRcdHZhbHVlcyA9IG1vbWVudC5kdXJhdGlvbiggdmFsdWVzICkubG9jYWxlKCBsb2NhbGUgKTtcblx0XHR9XG5cdFx0aWYgKCBtb21lbnQuaXNEdXJhdGlvbiggdmFsdWVzICkgKSB7XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kdXJhdGlvbiBdID0gdmFsdWVzO1xuXHRcdFx0dGhpc1sgcHJpdmF0ZU1ldGhvZHMucG9wdWxhdGVWYWx1ZXNGcm9tRHVyYXRpb24gXSggdmFsdWVzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlcyA9IHRoaXNbIHByaXZhdGVNZXRob2RzLmZpbHRlclZhbHVlcyBdKCB2YWx1ZXMgKTtcblx0XHRcdHRoaXNbIHByaXZhdGVNZXRob2RzLnNldFZhbHVlcyBdKCB2YWx1ZXMgKTtcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF0gPSBtb21lbnQuZHVyYXRpb24oXG5cdFx0XHRcdHZhbHVlc1xuXHRcdFx0KS5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdH1cblx0XHR0aGlzWyBwcml2YXRlTWV0aG9kcy5jcmVhdGVHZXR0ZXJzIF0oKTtcblx0XHRPYmplY3QuZnJlZXplKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7RHVyYXRpb259ICBBbiBpbnN0YW5jZSBvZiBEdXJhdGlvbi5cblx0ICovXG5cdHN0YXRpYyBmcm9tTWlsbGlzZWNvbmRzKCBtaWxsaXNlY29uZHMsIGxvY2FsZSA9IERFRkFVTFRfVkFMSURfTE9DQUxFICkge1xuXHRcdHJldHVybiBuZXcgRHVyYXRpb24oIHsgbWlsbGlzZWNvbmRzIH0sIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBEdXJhdGlvbiBmcm9tIGEgc2ltcGxlIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAgS2V5cyBzaG91bGQgYmUgdGhlIHVuaXRzIChlZyAneWVhcnMnLCAnZGF5cycpLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge0R1cmF0aW9ufSBBbiBpbnN0YW5jZSBvZiBEdXJhdGlvblxuXHQgKi9cblx0c3RhdGljIGZyb21PYmplY3QoIHZhbHVlcywgbG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEUgKSB7XG5cdFx0cmV0dXJuIG5ldyBEdXJhdGlvbiggdmFsdWVzLCBsb2NhbGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRHVyYXRpb24gZnJvbSBhbiBJU084NjAxIHN0cmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IElTT1N0cmluZyAoZWcuICdQVDIzSCcpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICogQHJldHVybiB7RHVyYXRpb259IEFuIGluc3RhbmNlIG9mIER1cmF0aW9uXG5cdCAqL1xuXHRzdGF0aWMgZnJvbUlTTyggSVNPU3RyaW5nLCBsb2NhbGUgPSBERUZBVUxUX1ZBTElEX0xPQ0FMRSApIHtcblx0XHRhc3NlcnRpb25zLmFzc2VydElTTzg2MDFJc1ZhbGlkKCBJU09TdHJpbmcsIHRydWUgKTtcblx0XHRyZXR1cm4gbmV3IER1cmF0aW9uKCBJU09TdHJpbmcsIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlIHdoZXRoZXIgdGhlIHByb3ZpZGVkIGxvY2FsZSBhcmd1bWVudCBpcyBhIHZhbGlkIGxvY2FsZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufSAgVHJ1ZSBtZWFucyBpdCBpcyB2YWxpZC5cblx0ICovXG5cdHN0YXRpYyBpc1ZhbGlkTG9jYWxlKCBsb2NhbGUgKSB7XG5cdFx0cmV0dXJuIGFzc2VydGlvbnMudmFsaWRhdGVMb2NhbGUoIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgbG9jYWxlIGFyZ3VtZW50IGlzIGEgdmFsaWQgbG9jYWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEB0aHJvd3MgSW52YWxpZExvY2FsZVxuXHQgKi9cblx0c3RhdGljIGFzc2VydElzVmFsaWRMb2NhbGUoIGxvY2FsZSApIHtcblx0XHRhc3NlcnRpb25zLmFzc2VydExvY2FsZUlzVmFsaWQoIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpcyBhIHZhbGlkIElTTyA4NjAxIER1cmF0aW9uIHN0cmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlzb1N0cmluZ1xuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIG1lYW5zIGl0IGlzIHZhbGlkLlxuXHQgKi9cblx0c3RhdGljIGlzVmFsaWRJU084NjAxRHVyYXRpb24oIGlzb1N0cmluZyApIHtcblx0XHRyZXR1cm4gYXNzZXJ0aW9ucy52YWxpZGF0ZUlTTzg2MDEoIGlzb1N0cmluZywgdHJ1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydCB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBJU08gODYwMSBEdXJhdGlvbiBzdHJpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpc29TdHJpbmdcblx0ICogQHRocm93cyBJbnZhbGlkSVNPODYwMVN0cmluZ1xuXHQgKi9cblx0c3RhdGljIGFzc2VydElzVmFsaWRJU084NjAxRHVyYXRpb24oIGlzb1N0cmluZyApIHtcblx0XHRhc3NlcnRpb25zLmFzc2VydElTTzg2MDFJc1ZhbGlkKCBpc29TdHJpbmcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBpbnN0YW5jZSBvZiBEdXJhdGlvbi5cblx0ICogQHBhcmFtIHttaXhlZHxEdXJhdGlvbn1kdXJhdGlvblxuXHQgKiBAcmV0dXJuIHtib29sZWFufSAgVHJ1ZSBtZWFucyBpdCBpcyBhIHZhbGlkIER1cmF0aW9uIG9iamVjdC5cblx0ICovXG5cdHN0YXRpYyBpc1ZhbGlkRHVyYXRpb24oIGR1cmF0aW9uICkge1xuXHRcdHJldHVybiBpbnN0YW5jZU9mKCBkdXJhdGlvbiwgJ0R1cmF0aW9uJyApICYmXG5cdFx0XHRkdXJhdGlvbi5pc1ZhbGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBEdXJhdGlvbiBhbmQgdGhyb3dzIGFuXG5cdCAqIGV4Y2VwdGlvbiBpZiBub3QuXG5cdCAqIEBwYXJhbSB7bWl4ZWR8RHVyYXRpb259IGR1cmF0aW9uXG5cdCAqIEB0aHJvd3MgVHlwZUVycm9yXG5cdCAqL1xuXHRzdGF0aWMgYXNzZXJ0SXNWYWxpZER1cmF0aW9uKCBkdXJhdGlvbiApIHtcblx0XHRpZiAoICEgRHVyYXRpb24uaXNWYWxpZER1cmF0aW9uKCBkdXJhdGlvbiApICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0J1RoaXMgRHVyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZC4nXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRHVyYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RHVyYXRpb258bWl4ZWR9IGR1cmF0aW9uXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59ICBUcnVlIG1lYW5zIHRoZSB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEdXJhdGlvbi5cblx0ICogTm90ZTogdHJ1ZSBtYXkgc3RpbGwgbWVhbiB0aGF0IHRoZSBEdXJhdGlvbiBpbnN0YW5jZSBpcyBub3QgdmFsaWQhXG5cdCAqL1xuXHRzdGF0aWMgaXNEdXJhdGlvbiggZHVyYXRpb24gKSB7XG5cdFx0cmV0dXJuIGluc3RhbmNlT2YoIGR1cmF0aW9uLCAnRHVyYXRpb24nICk7XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0cyB3aGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEdXJhdGlvbiBhbmQgaWYgbm90XG5cdCAqIHRocm93cyBhbiBleGNlcHRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RHVyYXRpb258bWl4ZWR9IGR1cmF0aW9uXG5cdCAqIEB0aHJvd3MgVHlwZUVycm9yXG5cdCAqL1xuXHRzdGF0aWMgYXNzZXJ0SXNEdXJhdGlvbiggZHVyYXRpb24gKSB7XG5cdFx0aWYgKCAhIER1cmF0aW9uLmlzRHVyYXRpb24oIGR1cmF0aW9uICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHQnVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEdXJhdGlvbi4nXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZpbHRlcnMgdGhlIGluY29taW5nIHZhbHVlcyBhbmQgcmV0dXJucyBvbmx5IGtleS92YWx1ZSBwYWlycyB0aGF0XG5cdCAqIGFyZSBhY2NlcHRhYmxlIGFzIGR1cmF0aW9uIHVuaXRzLlxuXHQgKlxuXHQgKiBJZiBhIGludmFsaWQgZHVyYXRpb24gdW5pdCBpcyBkaXNjb3ZlcmVkLCBhIGNvbnNvbGUuZXJyb3IgaXMgZ2VuZXJhdGVkXG5cdCAqIChpbiBub24tcHJvZHVjdGlvbiBtb2RlKS5cblx0ICpcblx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVzXG5cdCAqIEByZXR1cm4ge09iamVjdH0gRmlsdGVyZWQgdmFsdWVzLlxuXHQgKiBAdGhyb3dzIFR5cGVFcnJvciBpZiBpbmNvbWluZyB2YWx1ZXMgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC5cblx0ICovXG5cdFsgcHJpdmF0ZU1ldGhvZHMuZmlsdGVyVmFsdWVzIF0oIHZhbHVlcyApIHtcblx0XHRpZiAoIHR5cGVvZiB2YWx1ZXMgIT09ICdvYmplY3QnICkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggJ0luY29taW5nIHZhbHVlcyBtdXN0IGJlIGEgc2ltcGxlIG9iamVjdC4nICk7XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlc1RvU2V0ID0gcGljayggdmFsdWVzLCB1bml0TmFtZXMgKTtcblx0XHRpZiAoICEgaXNTaGFsbG93RXF1YWwoIHZhbHVlcywgdmFsdWVzVG9TZXQgKSApIHtcblx0XHRcdHdhcm5pbmcoXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHQnVGhlIGZvbGxvd2luZyB1bmV4cGVjdGVkIGtleXMgd2VyZSBpbiB0aGUgY29uZmlndXJhdGlvbiAnICtcblx0XHRcdFx0J29iamVjdCBmb3IgY29uc3RydWN0aW5nIHRoZSBEdXJhdGlvbjogJyArXG5cdFx0XHRcdGtleXMoIG9taXQoIHZhbHVlcywgdW5pdE5hbWVzICkgKS5qb2luKClcblx0XHRcdCk7XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5pc1ZhbGlkIF0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlc1RvU2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFVzZWQgdG8gc2V0IHRoZSBpbnRlcm5hbCBcInByaXZhdGVcIiB2YWx1ZXMgcHJvcGVydHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXNcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRbIHByaXZhdGVNZXRob2RzLnNldFZhbHVlcyBdKCB2YWx1ZXMgKSB7XG5cdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb25WYWx1ZXMgXSA9IHt9O1xuXHRcdHVuaXROYW1lcy5mb3JFYWNoKCAoIHVuaXQgKSA9PiB7XG5cdFx0XHR0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kdXJhdGlvblZhbHVlcyBdWyB1bml0IF0gPSB2YWx1ZXNbIHVuaXQgXSB8fFxuXHRcdFx0XHQwO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVc2VkIHRvIHNldCB0aGUgdmFsdWVzIFwicHJpdmF0ZVwiIHByb3BlcnR5IGZyb20gYSBtb21lbnQuRHVyYXRpb24gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge21vbWVudC5EdXJhdGlvbn0gZHVyYXRpb25cblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRbIHByaXZhdGVNZXRob2RzLnBvcHVsYXRlVmFsdWVzRnJvbUR1cmF0aW9uIF0oIGR1cmF0aW9uICkge1xuXHRcdGNvbnN0IHNldFZhbHVlcyA9IHt9O1xuXHRcdHVuaXROYW1lcy5mb3JFYWNoKCAoIHVuaXQgKSA9PiB7XG5cdFx0XHRzZXRWYWx1ZXNbIHVuaXQgXSA9IGR1cmF0aW9uWyB1bml0IF0oKTtcblx0XHR9ICk7XG5cdFx0dGhpc1sgcHJpdmF0ZU1ldGhvZHMuc2V0VmFsdWVzIF0oIHNldFZhbHVlcyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWNjZXNzb3IgbmFtZXMgKHRoYXQgaW4gdHVybiBhcmUgdXNlZCBmb3IgZ2VuZXJhdGluZ1xuXHQgKiBwcml2YXRlIHByb3BlcnRpZXMpLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybiB7c3RyaW5nW119ICBBcnJheSBvZiBhY2Nlc3NvciBuYW1lcy5cblx0ICovXG5cdFsgcHJpdmF0ZU1ldGhvZHMuZ2V0QWxsVW5pdE5hbWVzIF0oKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLnVuaXROYW1lcyxcblx0XHRcdC4uLmRlcml2YXRpdmVVbml0TmFtZXMsXG5cdFx0XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGdldHRlcnMgZm9yIHRoZSBEdXJhdGlvbiBpbnN0YW5jZSBmcm9tIHRoZSBhY2Nlc3NvciBuYW1lcy5cblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRbIHByaXZhdGVNZXRob2RzLmNyZWF0ZUdldHRlcnMgXSgpIHtcblx0XHR0aGlzWyBwcml2YXRlTWV0aG9kcy5nZXRBbGxVbml0TmFtZXMgXSgpLmZvckVhY2goXG5cdFx0XHQoIGFjY2Vzc29yTmFtZSApID0+IHtcblx0XHRcdFx0Ly8gY3JlYXRlcyBhY2Nlc3NvciBmb3IgZ2V0dGluZyB0aGUgdmFsdWUgdmlhIGEgcHJvcGVydHlcblx0XHRcdFx0Ly8gZWcuIGluc3RhbmNlLmhvdXJzXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgYWNjZXNzb3JOYW1lLCB7XG5cdFx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdFx0aWYgKCBkZXJpdmF0aXZlVW5pdE5hbWVzLmluZGV4T2YoIGFjY2Vzc29yTmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kdXJhdGlvbiBdWyBhY2Nlc3Nvck5hbWUgXSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNcblx0XHRcdFx0XHRcdFx0WyBwcml2YXRlUHJvcGVydGllcy5kdXJhdGlvblZhbHVlcyBdXG5cdFx0XHRcdFx0XHRcdFsgYWNjZXNzb3JOYW1lIF0gfHxcblx0XHRcdFx0XHRcdFx0MDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdC8vIGNyZWF0ZXMgYGFzKmAgbWV0aG9kcy5cblx0XHRcdFx0Ly8gZWcgYGluc3RhbmNlLmFzSG91cnNgIHdvdWxkIHJldHVybiB0aGUgZ2l2ZW4gZHVyYXRpb25cblx0XHRcdFx0Ly8gZXhwcmVzc2VkIGFzIHRoZSBob3VycyB1bml0LlxuXHRcdFx0XHQvLyBub3RlIGZvciB1bml0cyBzdWNoIGFzIFwieWVhcnNcIiBhbmQgXCJtb250aHNcIiwgdGhpcyB1c2VzIHdoYXRcblx0XHRcdFx0Ly8gaXMgdGVybWVkIGFzIFwibG9uZ3Rlcm1cIiBjYWxjdWxhdGlvbi4gTG9uZ3Rlcm0gaXMgYmFzZWQgb25cblx0XHRcdFx0Ly8gYSA0MDAgeWVhciBjeWNsZSBhdmVyYWdpbmcgb3V0IHRoZSBkYXlzIGluIGEgbW9udGggYW5kXG5cdFx0XHRcdC8vIGRheXMgaW4gYSB5ZWFyIG92ZXIgdGhhdCBjeWNsZS5cblx0XHRcdFx0Ly8gQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL3NyYy9saWIvZHVyYXRpb24vYnViYmxlLmpzI0w1MlxuXHRcdFx0XHRjb25zdCBhc01ldGhvZE5hbWUgPSAnYXMnICsgY2FwaXRhbGl6ZSggYWNjZXNzb3JOYW1lICk7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgYXNNZXRob2ROYW1lLCB7XG5cdFx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF1cblx0XHRcdFx0XHRcdFx0XHRbIGFzTWV0aG9kTmFtZSBdKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEV4cG9zZXMgdGhlIHZhbHVlIG9mIGxvY2FsZS5cblx0ICogZWcuIGluc3RhbmNlLmxvY2FsZVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBsb2NhbGUgc3RyaW5nLlxuXHQgKi9cblx0Z2V0IGxvY2FsZSgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXS5sb2NhbGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBEdXJhdGlvbiBpbnN0YW5jZSByZXByZXNlbnRzIGEgdmFsaWRcblx0ICogZHVyYXRpb24uXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgbWVhbnMgdGhlIER1cmF0aW9uIGluc3RhbmNlIGlzIHZhbGlkLlxuXHQgKi9cblx0Z2V0IGlzVmFsaWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmlzVmFsaWQgXSAmJlxuXHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXS50b0lTT1N0cmluZygpICE9PSAnUDBEJztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgbmV3IER1cmF0aW9uIGluc3RhbmNlIHRoYXQgaXMgaWRlbnRpY2FsIHRvIHRoaXMgZXhjZXB0IHRoZVxuXHQgKiBsb2NhbGUgaXMgY2hhbmdlZCB0byB3aGF0IHdhcyBwcm92aWRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHQgKiBAcmV0dXJuIHtEdXJhdGlvbn0gQSBuZXcgaW5zdGFuY2Ugb2YgRHVyYXRpb25cblx0ICovXG5cdHNldExvY2FsZSggbG9jYWxlICkge1xuXHRcdHJldHVybiBuZXcgRHVyYXRpb24oIHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uVmFsdWVzIF0sIGxvY2FsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG5cdCAqXG5cdCAqIEZvciBleGFtcGxlOlxuXHQgKiBEdXJhdGlvblxuXHQgKiAgICAgLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KVxuXHQgKiAgICAgLm5vcm1hbGl6ZSgpXG5cdCAqICAgICAudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDE1LCBtb250aHM6IDgsIGRheXM6IDEyIH1cblx0ICpcblx0ICogQHJldHVybiB7RHVyYXRpb259IEEgbmV3IGluc3RhbmNlIG9mIER1cmF0aW9uXG5cdCAqL1xuXHRub3JtYWxpemUoKSB7XG5cdFx0cmV0dXJuIG5ldyBEdXJhdGlvbiggdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgRHVyYXRpb24gaW5zdGFuY2UgaXMgdGhlIHNhbWUgYXMgdGhpc1xuXHQgKiBEdXJhdGlvbiBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHtEdXJhdGlvbnxtaXhlZH0gb3RoZXJEdXJhdGlvblxuXHQgKiBAdGhyb3dzIFR5cGVFcnJvclxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIG1lYW5zIHRoYXQgdGhlIGNvbXBhcmVkIGR1cmF0aW9ucyBoYXZlIHRoZSBzYW1lXG5cdCAqIHVuaXRzIGFuZCB0aGUgc2FtZSB2YWx1ZXMgZm9yIGVhY2ggdW5pdCAoYXMgd2VsbCBhcyBzYW1lIGxvY2FsZSkuIFRoaXNcblx0ICogbWVhbnMgdGhhdCBhIGR1cmF0aW9uIHdpdGh7IG1pbnV0ZXM6IDYwIH0gd291bGQgYmUgY29uc2lkZXJlZCBub3QgZXF1YWxcblx0ICogdG8gYSBkdXJhdGlvbiB3aXRoIHsgaG91cnM6IDEgfS5cblx0ICovXG5cdHNhbWVBcyggb3RoZXJEdXJhdGlvbiApIHtcblx0XHREdXJhdGlvbi5hc3NlcnRJc0R1cmF0aW9uKCBvdGhlckR1cmF0aW9uICk7XG5cdFx0aWYgKCAhIHRoaXMuaXNWYWxpZCB8fCAhIG90aGVyRHVyYXRpb24uaXNWYWxpZCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLmxvY2FsZSAhPT0gb3RoZXJEdXJhdGlvbi5sb2NhbGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBpc1NoYWxsb3dFcXVhbCggdGhpcy50b09iamVjdCgpLCBvdGhlckR1cmF0aW9uLnRvT2JqZWN0KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIER1cmF0aW9uIGluc3RhbmNlIGlzIGVxdWFsIHRvIHRoaXMgRHVyYXRpb25cblx0ICogaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEVxdWFsaXR5IGlzIGJhc2VkIG9uOlxuXHQgKiAtIGxvY2FsZSBpcyB0aGUgc2FtZVxuXHQgKiAtIHRoZSBub3JtYWxpemVkIHZhbHVlIG9mIHRoZSBkdXJhdGlvbiBpcyB0aGUgc2FtZS4gIGVnIGEgZHVyYXRpb24gd2l0aFxuXHQgKiB7IGhvdXJzOiAyNCB9IHdvdWxkIGJlIGNvbnNpZGVyZWQgZXF1YWwgdG8gYSBkdXJhdGlvbiB3aXRoIHsgZGF5czogMSB9XG5cdCAqXG5cdCAqIEBwYXJhbSB7RHVyYXRpb258bWl4ZWR9IG90aGVyRHVyYXRpb25cblx0ICogQHRocm93cyBUeXBlRXJyb3Jcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb25zaWRlcmVkIGVxdWFsXG5cdCAqL1xuXHRlcXVhbHMoIG90aGVyRHVyYXRpb24gKSB7XG5cdFx0RHVyYXRpb24uYXNzZXJ0SXNEdXJhdGlvbiggb3RoZXJEdXJhdGlvbiApO1xuXHRcdGlmICggISB0aGlzLmlzVmFsaWQgfHwgISBvdGhlckR1cmF0aW9uLmlzVmFsaWQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5sb2NhbGUgIT09IG90aGVyRHVyYXRpb24ubG9jYWxlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNTaGFsbG93RXF1YWwoXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCksXG5cdFx0XHRvdGhlckR1cmF0aW9uLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgdGhpcyBkdXJhdGlvbiBsb25nZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuXG5cdCAqXG5cdCAqIE5vdGU6IHRoZSByZXR1cm5lZCBEdXJhdGlvbiB3aWxsIGhhdmUgdGhlIGxvY2FsZSBvZiB0aGUgb3JpZ2luYWxcblx0ICogcmVnYXJkbGVzcyB3aGF0IHRoZSBsb2NhbGUgd2FzIG9uIGFueSBwYXNzZWQgaW4gZHVyYXRpb24uXG5cdCAqXG5cdCAqIFRoZSBuZXcgRHVyYXRpb24gcmV0dXJuZWQgd2lsbCBoYXZlIG5vcm1hbGl6ZWQgdmFsdWVzIChpLmUuIGlmIGFkZGl0aW9uXG5cdCAqIG9mIG9uZSBEdXJhdGlvbiB3aXRoIGB7IGhvdXJzOiAxMCB9YCBpcyBkb25lIHdpdGggdGhlIG90aGVyIER1cmF0aW9uXG5cdCAqIGhhdmluZyBgeyBob3VyczogMTQgfWAgdGhlbiB0aGUgbmV3IER1cmF0aW9uIHdpbGwgaGF2ZSBgeyBkYXlzOiAxIH1gLlxuXHQgKiBZb3UgY2FuIHN0aWxsIGdldCB0aGUgdG90YWwgaG91cnMgYnkgY2FsbGluZyBgbmV3RHVyYXRpb24uYXNIb3VycygpYC5cblx0ICpcblx0ICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSB2YWx1ZSAgRWl0aGVyIGEgRHVyYXRpb24gaW5zdGFuY2UsIGFcblx0ICogbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvciBhbiBvYmplY3QgaW4gdGhlIHNhbWUgc2hhcGUgcmVjZWl2ZWQgYnlcblx0ICogRHVyYXRpb24uZnJvbU9iamVjdCgpXG5cdCAqXG5cdCAqIEByZXR1cm4ge0R1cmF0aW9ufSBBIG5ldyBpbnN0YW5jZSBvZiBEdXJhdGlvblxuXHQgKi9cblx0cGx1cyggdmFsdWUgKSB7XG5cdFx0aWYgKCBEdXJhdGlvbi5pc0R1cmF0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIG5ldyBEdXJhdGlvbihcblx0XHRcdFx0dGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXVxuXHRcdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdFx0LmFkZCggdmFsdWVbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF0gKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICkge1xuXHRcdFx0dmFsdWUgPSB0aGlzWyBwcml2YXRlTWV0aG9kcy5maWx0ZXJWYWx1ZXMgXSggdmFsdWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBEdXJhdGlvbihcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF1cblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LmFkZCggdmFsdWUgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSB0aGlzIGR1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnRcblx0ICpcblx0ICogTm90ZTogdGhlIHJldHVybmVkIER1cmF0aW9uIHdpbGwgaGF2ZSB0aGUgbG9jYWxlIG9mIHRoZSBvcmlnaW5hbFxuXHQgKiByZWdhcmRsZXNzIHdoYXQgdGhlIGxvY2FsZSB3YXMgb24gYW55IHBhc3NlZCBpbiBkdXJhdGlvbi5cblx0ICpcblx0ICogVGhlIG5ldyBEdXJhdGlvbiByZXR1cm5lZCB3aWxsIGhhdmUgbm9ybWFsaXplZCB2YWx1ZXMgKGkuZS4gaWYgc3VidHJhY3Rpb25cblx0ICogb2Ygb25lIER1cmF0aW9uIHdpdGggYHsgaG91cnM6IDM0IH1gIGlzIGRvbmUgd2l0aCB0aGUgb3RoZXIgRHVyYXRpb25cblx0ICogaGF2aW5nIGB7IGhvdXJzOiAxMCB9YCB0aGVuIHRoZSBuZXcgRHVyYXRpb24gd2lsbCBoYXZlIGB7IGRheXM6IDEgfWAuXG5cdCAqIFlvdSBjYW4gc3RpbGwgZ2V0IHRoZSB0b3RhbCBob3VycyBieSBjYWxsaW5nIGBuZXdEdXJhdGlvbi5hc0hvdXJzKClgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IHZhbHVlIEVpdGhlciBhIGR1cmF0aW9uIGluc3RhbmNlLCBhXG5cdCAqIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb3IgYW4gb2JqZWN0IGluIHRoZSBzYW1lIHNoYXBlIGFzIHRoYXQgcmVjZWl2ZWQgYnlcblx0ICogRHVyYXRpb24uZnJvbU9iamVjdCgpXG5cdCAqXG5cdCAqIEByZXR1cm4ge0R1cmF0aW9ufSBBIG5ldyBpbnN0YW5jZSBvZiBEdXJhdGlvblxuXHQgKi9cblx0bWludXMoIHZhbHVlICkge1xuXHRcdGlmICggRHVyYXRpb24uaXNEdXJhdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiBuZXcgRHVyYXRpb24oXG5cdFx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF1cblx0XHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHRcdC5zdWJ0cmFjdCggdmFsdWVbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF0gKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICkge1xuXHRcdFx0dmFsdWUgPSB0aGlzWyBwcml2YXRlTWV0aG9kcy5maWx0ZXJWYWx1ZXMgXSggdmFsdWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBEdXJhdGlvbihcblx0XHRcdHRoaXNbIHByaXZhdGVQcm9wZXJ0aWVzLmR1cmF0aW9uIF1cblx0XHRcdFx0LmNsb25lKClcblx0XHRcdFx0LnN1YnRyYWN0KCB2YWx1ZSApXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtEdXJhdGlvbn0gQSBuZXcgaW5zdGFuY2Ugb2YgRHVyYXRpb25cblx0ICovXG5cdG5lZ2F0ZSgpIHtcblx0XHRyZXR1cm4gbmV3IER1cmF0aW9uKFxuXHRcdFx0bWFwVmFsdWVzKCB0aGlzLnRvT2JqZWN0KCksIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlICogLTE7XG5cdFx0XHR9IClcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBqYXZhc2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm4geyp9IFJldHVybnMgeyB5ZWFyczogbnVtYmVyLCBob3VyczogbnVtYmVyIC4uLiB9XG5cdCAqL1xuXHR0b09iamVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb25WYWx1ZXMgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbi5cblx0ICogQHJldHVybiB7c3RyaW5nfSBlZy4gXCJQVDI0SFwiXG5cdCAqL1xuXHR0b0lTTygpIHtcblx0XHRyZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXS50b0lTT1N0cmluZygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlXG5cdCAqIGluIEpTT04uXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gZWcuIFwiUFQyNEhcIlxuXHQgKi9cblx0dG9KU09OKCkge1xuXHRcdHJldHVybiB0aGlzWyBwcml2YXRlUHJvcGVydGllcy5kdXJhdGlvbiBdLnRvSlNPTigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlXG5cdCAqIGluIGRlYnVnZ2luZy5cblx0ICogQHJldHVybiB7c3RyaW5nfSBlZy4gXCJQVDI0SFwiXG5cdCAqL1xuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy50b0lTTygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG5cdCAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIG9mIHRoaXMgZHVyYXRpb24gcmVwcmVzZW50ZWQgaW4gdGhlIG51bWJlciBvZlxuXHQgKiBtaWxsaXNlY29uZHMuXG5cdCAqL1xuXHR2YWx1ZU9mKCkge1xuXHRcdHJldHVybiB0aGlzLmFzTWlsbGlzZWNvbmRzKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG9cblx0ICogdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuXHQgKlxuXHQgKiBDdXJyZW50bHkgdGhpcyBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdG9rZW5zIGluIHRoZSBmb3JtYXQgc3RyaW5nOlxuXHQgKlxuXHQgKiB5ZWFyczogICBZIG9yIHlcblx0ICogbW9udGhzOiAgTVxuXHQgKiB3ZWVrczogICBXIG9yIHdcblx0ICogZGF5czogICAgRCBvciBkXG5cdCAqIGhvdXJzOiAgIEggb3IgaFxuXHQgKiBtaW51dGVzOiBtXG5cdCAqIHNlY29uZHM6IHNcblx0ICogbXM6ICAgICAgU1xuXHQgKlxuXHQgKiBZb3UgY2FuIHVzZSBtdWx0aXBsZXMgb2YgdGhlIHNhbWUgdG9rZW4gdG9nZXRoZXIgdG8gYWRkIHplcm8tbGVuZ3RoXG5cdCAqIHBhZGRpbmc6IChlZyBoaCAtPiAwMSBpbnN0ZWFkIG9mIGggLT4gMSlcblx0ICpcblx0ICogRXNjYXBlIHRva2VuIGNoYXJhY3RlcnMgd2l0aGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHNxdWFyZSBicmFja2V0c1xuXHQgKiAoZWcgJ2ggW2hyc10sIG0gW21pbl0nIC0+ICcxMiBocnMsIDMgbWluJylcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9Zm9ybWF0XG5cdCAqIEByZXR1cm4ge3N0cmluZ30gIEEgZm9ybWF0dGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGR1cmF0aW9uLlxuXHQgKi9cblx0dG9Gb3JtYXQoIGZvcm1hdCApIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKVsgcHJpdmF0ZVByb3BlcnRpZXMuZHVyYXRpb24gXS5mb3JtYXQoIGZvcm1hdCApO1xuXHR9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIERhdGVUaW1lIH0gZnJvbSAnLi9kYXRldGltZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIER1cmF0aW9uIH0gZnJvbSAnLi9kdXJhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZlckRhdGVUaW1lIH0gZnJvbSAnLi9zZXJ2ZXItZGF0ZS10aW1lJztcblxuIiwiLyoqXG4gKiBJbnRlcm5hbCBJbXBvcnRzLlxuICovXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSAnLi9kYXRldGltZSc7XG5pbXBvcnQge1xuXHRERUZBVUxUX1RJTUVaT05FX1NUUklORyxcblx0SEFTX1RJTUVaT05FX1NUUklORyxcblx0REVGQVVMVF9PRkZTRVQsXG5cdERFRkFVTFRfVkFMSURfTE9DQUxFLFxufSBmcm9tICcuL2RlZmF1bHRzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBJbXBvcnRzLlxuICovXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuLyoqXG4gKiBJbmhlcml0aW5nIHRoZSBEYXRlVGltZSBWYWx1ZSBvYmplY3QsIHRoaXMgcmVwcmVzZW50cyBhIHNpbmdsZSBwb2ludCBpbiB0aW1lXG4gKiB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhlIHRpbWV6b25lIG9yIG9mZnNldCB0aGUgc2VydmVyIGlzIHNldCBhdC5cbiAqXG4gKiBJbnN0YW50aWF0aW5nIHRoaXMgaW5zdGVhZCBvZiBgRGF0ZVRpbWVgIHJlbW92ZXMgdGhlIG5lZWQgdG8gcGFzcyBhbG9uZ1xuICogdGltZXpvbmUgc3RyaW5nIG9yIG9mZnNldCBhbmQgaW5zdGFudGlhdGVzIGFjY29yZGluZyB0byB3aGF0IGhhcyBiZWVuIHNldCBhc1xuICogdGhlIGRlZmF1bHRzIGZvciB0aG9zZSBmcm9tIHRoZSBzZXJ2ZXIuICBVc2FnZSBvZiB0aGlzIGNsYXNzIGlzIHByZWZlcnJlZFxuICogb3ZlciBEYXRlVGltZSB0byByZW1vdmUgdGhlIG5lZWQgZm9yIGNsaWVudCBjb2RlIHRvIGZpZ3VyZSBvdXQgaWYgdGhlIHNlcnZlclxuICogaGFzIGEgdGltZXpvbmUgc3RyaW5nIHNldCBvciBpcyB1c2luZyBhIFVUQyBvZmZzZXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlckRhdGVUaW1lIGV4dGVuZHMgRGF0ZVRpbWUge1xuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgU2VydmVyRGF0ZVRpbWUgY2xhc3Ncblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlzbzg2MDFEYXRlU3RyaW5nXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGlzbzg2MDFEYXRlU3RyaW5nID0gJycsXG5cdFx0bG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEVcblx0KSB7XG5cdFx0aWYgKCBIQVNfVElNRVpPTkVfU1RSSU5HICkge1xuXHRcdFx0c3VwZXIoIGlzbzg2MDFEYXRlU3RyaW5nLCBERUZBVUxUX1RJTUVaT05FX1NUUklORywgbG9jYWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRhdGV0aW1lID0gaXNFbXB0eSggaXNvODYwMURhdGVTdHJpbmcgKSA/XG5cdFx0XHRcdG1vbWVudCgpLnV0Y09mZnNldCggREVGQVVMVF9PRkZTRVQsIHRydWUgKS5sb2NhbGUoIGxvY2FsZSApIDpcblx0XHRcdFx0bW9tZW50KCBpc284NjAxRGF0ZVN0cmluZyApXG5cdFx0XHRcdFx0LnV0Y09mZnNldCggREVGQVVMVF9PRkZTRVQsIHRydWUgKVxuXHRcdFx0XHRcdC5sb2NhbGUoIGxvY2FsZSApO1xuXHRcdFx0c3VwZXIoIGRhdGV0aW1lLnRvSVNPU3RyaW5nKCB0cnVlICksIG51bGwsIGxvY2FsZSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBTZXJ2ZXJEYXRlVGltZSBmcm9tIGFuIElTTyBzdHJpbmcuXG5cdCAqIFRoaXMgb3ZlcnJpZGVzIGBEYXRlVGltZS5mcm9tSVNPYCByZW1vdmluZyB0aGUgbmVlZCB0byB3b3JyeSBhYm91dFxuXHQgKiB3aGV0aGVyIHRvIHVzZSBgdGltZXpvbmVgIG9yIGBvZmZzZXRgLiAgVGhpcyB3aWxsIHNpbXBseSB1c2Ugd2hhdGV2ZXIgaXNcblx0ICogcHJvdmlkZWQgYnkgdGhlIHNlcnZlciAocHJlZmVycmluZyB0aW1lem9uZSBpZiBpdHMgYXZhaWxhYmxlKS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IElTT1N0cmluZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge1NlcnZlckRhdGVUaW1lfSBBbiBpbnN0YW5jZSBvZiBTZXJ2ZXJEYXRlVGltZVxuXHQgKi9cblx0c3RhdGljIGZyb21JU08oIElTT1N0cmluZywgbG9jYWxlID0gREVGQVVMVF9WQUxJRF9MT0NBTEUgKSB7XG5cdFx0cmV0dXJuIEhBU19USU1FWk9ORV9TVFJJTkcgP1xuXHRcdFx0bmV3IFNlcnZlckRhdGVUaW1lKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5mcm9tSVNPKCBJU09TdHJpbmcsIERFRkFVTFRfVElNRVpPTkVfU1RSSU5HIClcblx0XHRcdFx0XHQudG9JU08oKSxcblx0XHRcdFx0bG9jYWxlXG5cdFx0XHQpIDpcblx0XHRcdG5ldyBTZXJ2ZXJEYXRlVGltZShcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZnJvbUlTT1dpdGhPZmZzZXQoIElTT1N0cmluZywgREVGQVVMVF9PRkZTRVQgKVxuXHRcdFx0XHRcdC50b0lTTygpLFxuXHRcdFx0XHRsb2NhbGVcblx0XHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5zdGFudGlhdGUgU2VydmVyRGF0ZVRpbWUgZnJvbSBhbiBJU08gc3RyaW5nLlxuXHQgKiBUaGlzIG92ZXJyaWRlcyBgRGF0ZVRpbWUuZnJvbUpTRGF0ZWAgcmVtb3ZpbmcgdGhlIG5lZWQgdG8gd29ycnkgYWJvdXRcblx0ICogd2hldGhlciB0byB1c2UgYHRpbWV6b25lYCBvciBgb2Zmc2V0YC4gIFRoaXMgd2lsbCBzaW1wbHkgdXNlIHdoYXRldmVyIGlzXG5cdCAqIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXIgKHByZWZlcnJpbmcgdGltZXpvbmUgaWYgaXRzIGF2YWlsYWJsZSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdCAqIEByZXR1cm4ge1NlcnZlckRhdGVUaW1lfSBBbiBpbnN0YW5jZSBvZiBTZXJ2ZXJEYXRlVGltZVxuXHQgKi9cblx0c3RhdGljIGZyb21KU0RhdGUoIGRhdGUsIGxvY2FsZSA9IERFRkFVTFRfVkFMSURfTE9DQUxFICkge1xuXHRcdHJldHVybiBIQVNfVElNRVpPTkVfU1RSSU5HID9cblx0XHRcdG5ldyBTZXJ2ZXJEYXRlVGltZShcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZnJvbUpTRGF0ZSggZGF0ZSwgREVGQVVMVF9USU1FWk9ORV9TVFJJTkcgKVxuXHRcdFx0XHRcdC50b0lTTygpLFxuXHRcdFx0XHRsb2NhbGVcblx0XHRcdCkgOlxuXHRcdFx0bmV3IFNlcnZlckRhdGVUaW1lKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5mcm9tSlNEYXRlV2l0aE9mZnNldCggZGF0ZSwgREVGQVVMVF9PRkZTRVQgKVxuXHRcdFx0XHRcdC50b0lTTygpLFxuXHRcdFx0XHRsb2NhbGVcblx0XHRcdCk7XG5cdH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW9uZXkgfSBmcm9tICcuL21vbmV5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2l0ZUN1cnJlbmN5LCBDdXJyZW5jeSB9IGZyb20gJy4vY3VycmVuY3knO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuZXhwb3J0IHsgRGF0ZVRpbWUsIER1cmF0aW9uLCBTZXJ2ZXJEYXRlVGltZSB9IGZyb20gJy4vZGF0ZS10aW1lJztcbiIsIi8qKlxuICogRXh0ZXJuYWwgaW1wb3J0c1xuICovXG5pbXBvcnQgeyBzdGFydENhc2UsIGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG4vKipcbiAqIEEgdmFsdWUgb2JqZWN0IGZvciByZXByZXNlbnRpbmcgYSBsYWJlbCB3aXRoIHNpbmd1bGFyIGFuZCBwbHVyYWwgc3RyaW5nXG4gKiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIHtcblx0c3RhdGljIEZPUk1BVF9MT1dFUkNBU0UgPSAnbG93ZXInO1xuXHRzdGF0aWMgRk9STUFUX1VQUEVSQ0FTRSA9ICd1cHBlcic7XG5cdHN0YXRpYyBGT1JNQVRfU0VOVEVOQ0VfQ0FTRSA9ICdzZW50ZW5jZSc7XG5cblx0LyoqXG5cdCAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzaW5ndWxhciBmb3JtIG9mIHRoZSBsYWJlbC5cblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNpbmd1bGFyID0gJyc7XG5cblx0LyoqXG5cdCAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBwbHVyYWwgZm9ybSBvZiB0aGUgbGFiZWwuXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRwbHVyYWwgPSAnJztcblxuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNpbmd1bGFyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwbHVyYWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBzaW5ndWxhciwgcGx1cmFsICkge1xuXHRcdHRoaXMuc2V0U2luZ3VsYXIoIHNpbmd1bGFyICkuc2V0UGx1cmFsKCBwbHVyYWwgKTtcblx0XHRPYmplY3QuZnJlZXplKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogRmx1aWQgc2V0dGVyIGZvciBzZXR0aW5nIHRoZSBzaW5ndWxhciBwcm9wZXJ0eS5cblx0ICpcblx0ICogSWYgdGhlIHNpbmd1bGFyIHByb3BlcnR5IGhhcyBhbHJlYWR5IGJlZW4gc2V0LCB0aGlzIHdpbGwgcmV0dXJuIGEgbmV3XG5cdCAqIGluc3RhbmNlIG9mIExhYmVsXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzaW5ndWxhclxuXHQgKiBAcmV0dXJuIHtMYWJlbH0gIEFuIGluc3RhbmNlIG9mIExhYmVsXG5cdCAqL1xuXHRzZXRTaW5ndWxhciggc2luZ3VsYXIgKSB7XG5cdFx0TGFiZWwuYXNzZXJ0U3RyaW5nKCBzaW5ndWxhciApO1xuXHRcdGlmICggdGhpcy5zaW5ndWxhciAhPT0gJycgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhYmVsKCBzaW5ndWxhciwgdGhpcy5wbHVyYWwgKTtcblx0XHR9XG5cdFx0dGhpcy5zaW5ndWxhciA9IHNpbmd1bGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZsdWlkIHNldHRlciBmb3Igc2V0dGluZyB0aGUgcGx1cmFsIHByb3BlcnR5XG5cdCAqXG5cdCAqIElmIHRoZSBwbHVyYWwgcHJvcGVydHkgaGFzIGFscmVhZHkgYmVlbiBzZXQsIHRoaXMgd2lsbCByZXR1cm4gYSBuZXdcblx0ICogaW5zdGFuY2Ugb2YgbGFiZWwuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwbHVyYWxcblx0ICogQHJldHVybiB7TGFiZWx9IEFuIGluc3RhbmNlIG9mIExhYmVsXG5cdCAqL1xuXHRzZXRQbHVyYWwoIHBsdXJhbCApIHtcblx0XHRMYWJlbC5hc3NlcnRTdHJpbmcoIHBsdXJhbCApO1xuXHRcdGlmICggdGhpcy5wbHVyYWwgIT09ICcnICkge1xuXHRcdFx0cmV0dXJuIG5ldyBMYWJlbCggdGhpcy5zaW5ndWxhciwgcGx1cmFsICk7XG5cdFx0fVxuXHRcdHRoaXMucGx1cmFsID0gcGx1cmFsO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSBwcm9wZXJ0eSBmb3JtYXR0ZWQgaW4gc2VudGVuY2UgY2FzZS5cblx0ICpcblx0ICogTm90ZSwgdGhpcyBzdHJpcHMgYW55IGAtYCBpbiBkYXNoZWQgbGFiZWxzLiAgU28gZm9yIGluc3RhbmNlIGlmIHlvdXJcblx0ICogbGFiZWwgdmFsdWUgd2FzIGBzb21ldGhpbmctZWxzZWAsIHRoZSB2YWx1ZSByZXR1cm5lZCB3b3VsZCBiZVxuXHQgKiBgU29tZXRoaW5nIEVsc2VgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2luZ3VsYXIgIElmIHRydWUsIHJldHVybiB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIHRoZVxuXHQgKiBzaW5ndWxhciBwcm9wZXJ0eSBvdGhlcndpc2UgcmV0dXJuIHRoZSBmb3JtYXR0ZWQgdmFsdWUgb2YgdGhlIHBsdXJhbFxuXHQgKiBwcm9wZXJ0eS5cblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5nIGluIHNlbnRlbmNlIGNhc2Vcblx0ICovXG5cdGFzU2VudGVuY2VDYXNlKCBzaW5ndWxhciA9IHRydWUgKSB7XG5cdFx0cmV0dXJuIHNpbmd1bGFyID09PSB0cnVlID9cblx0XHRcdHN0YXJ0Q2FzZSggdGhpcy5zaW5ndWxhci50b0xvd2VyQ2FzZSgpICkgOlxuXHRcdFx0c3RhcnRDYXNlKCB0aGlzLnBsdXJhbC50b0xvd2VyQ2FzZSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlIHByb3BlcnR5IGZvcm1hdHRlZCBpbiBsb3dlciBjYXNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbmd1bGFyICBJZiB0cnVlLCByZXR1cm4gdGhlIGZvcm1hdHRlZCB2YWx1ZSBvZiB0aGVcblx0ICogc2luZ3VsYXIgcHJvcGVydHkgb3RoZXJ3aXNlIHJldHVybiB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIHRoZSBwbHVyYWxcblx0ICogcHJvcGVydHkuXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZyBpbiBsb3dlciBjYXNlXG5cdCAqL1xuXHRhc0xvd2VyQ2FzZSggc2luZ3VsYXIgPSB0cnVlICkge1xuXHRcdHJldHVybiBzaW5ndWxhciA/XG5cdFx0XHR0aGlzLnNpbmd1bGFyLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0dGhpcy5wbHVyYWwudG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgcHJvcGVydHkgZm9ybWF0dGVkIGluIHVwcGVyIGNhc2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2luZ3VsYXIgIElmIHRydWUsIHJldHVybiB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIHRoZVxuXHQgKiBzaW5ndWxhciBwcm9wZXJ0eSBvdGhlcndpc2UgcmV0dXJuIHRoZSBmb3JtYXR0ZWQgdmFsdWUgb2YgdGhlIHBsdXJhbFxuXHQgKiBwcm9wZXJ0eS5cblx0ICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5nIGluIHVwcGVyIGNhc2Vcblx0ICovXG5cdGFzVXBwZXJDYXNlKCBzaW5ndWxhciA9IHRydWUgKSB7XG5cdFx0cmV0dXJuIHNpbmd1bGFyID9cblx0XHRcdHRoaXMuc2luZ3VsYXIudG9VcHBlckNhc2UoKSA6XG5cdFx0XHR0aGlzLnBsdXJhbC50b1VwcGVyQ2FzZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSBwcm9wZXJ0eSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZFxuXHQgKiBmb3JtYXRUeXBlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbmd1bGFyIElmIHRydWUsIHJldHVybiB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIHRoZVxuXHQgKiBzaW5ndWxhciBwcm9wZXJ0eSBvdGhlcndpc2UgcmV0dXJuIHRoZSBmb3JtYXR0ZWQgdmFsdWUgb2YgdGhlIHBsdXJhbFxuXHQgKiBwcm9wZXJ0eS5cblx0ICogQHBhcmFtIHsoJ3NlbnRlbmNlJ3wnbG93ZXInfCd1cHBlcicpfSBmb3JtYXRUeXBlXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZyBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGZvcm1hdFR5cGVcblx0ICovXG5cdGFzRm9ybWF0dGVkKCBzaW5ndWxhciA9IHRydWUsIGZvcm1hdFR5cGUgPSBMYWJlbC5GT1JNQVRfU0VOVEVOQ0VfQ0FTRSApIHtcblx0XHRzd2l0Y2ggKCBmb3JtYXRUeXBlICkge1xuXHRcdFx0Y2FzZSBMYWJlbC5GT1JNQVRfU0VOVEVOQ0VfQ0FTRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXNTZW50ZW5jZUNhc2UoIHNpbmd1bGFyICk7XG5cdFx0XHRjYXNlIExhYmVsLkZPUk1BVF9MT1dFUkNBU0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLmFzTG93ZXJDYXNlKCBzaW5ndWxhciApO1xuXHRcdFx0Y2FzZSBMYWJlbC5GT1JNQVRfVVBQRVJDQVNFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hc1VwcGVyQ2FzZSggc2luZ3VsYXIgKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHdhcm5pbmcoIGZhbHNlLCAnRm9ybWF0IHR5cGUgbXVzdCBiZSBvbmUgb2YgJyArXG5cdFx0XHRcdFx0J0xhYmVsLkZPUk1BVF9TRU5URU5DRV9DQVNFLCBMYWJlbC5GT1JNQVRfVVBQRVJDQVNFLCAnICtcblx0XHRcdFx0XHQnb3IgTGFiZWwuRk9STUFUX0xPV0VSQ0FTRScgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXNTZW50ZW5jZUNhc2UoIHNpbmd1bGFyICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBzdHJpbmcgb3Igbm90LlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAqIEB0aHJvd3MgVHlwZUVycm9yXG5cdCAqL1xuXHRzdGF0aWMgYXNzZXJ0U3RyaW5nKCB2YWx1ZSApIHtcblx0XHRpZiAoICEgaXNTdHJpbmcoIHZhbHVlICkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCAnSW5jb21pbmcgbGFiZWwgdmFsdWUgKCcgKyB2YWx1ZSArICcpIG11c3QnICtcblx0XHRcdFx0JyBiZSBhIHN0cmluZycgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMYWJlbCB0aGF0IGhhcyB0aGUgc2FtZSB2YWx1ZSBmb3Igc2luZ2x1YXIgYW5kXG5cdCAqIHBsdXJhbCBwcm9wZXJ0aWVzIGZvciB0aGUgcHJvdmlkZWQgYXJndW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuXHQgKiBAcmV0dXJuIHtMYWJlbH0gIEEgTGFiZWwgaW5zdGFuY2Vcblx0ICovXG5cdHN0YXRpYyBmcm9tU2FtZVNpbmdsZUFuZFBsdXJhbCA9ICggbGFiZWwgKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBMYWJlbCggbGFiZWwsIGxhYmVsICk7XG5cdH1cbn1cbiIsIi8qKlxuICogRXh0ZXJuYWwgaW1wb3J0c1xuICovXG5pbXBvcnQgeyBEZWNpbWFsIH0gZnJvbSAnZGVjaW1hbC5qcy1saWdodCc7XG5pbXBvcnQgKiBhcyBBY2NvdW50aW5nIGZyb20gJ2FjY291bnRpbmctanMnO1xuaW1wb3J0IGlzU2hhbGxvd0VxdWFsIGZyb20gJ0B3b3JkcHJlc3MvaXMtc2hhbGxvdy1lcXVhbCc7XG5pbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tICdAZXZlbnRlc3ByZXNzby9lZWpzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zdGFuY2VPZiB9IGZyb20gJ0BldmVudGVzcHJlc3NvL3ZhbGlkYXRvcnMnO1xuXG4vKipcbiAqIEFzc2VydHMgaWYgaW5jb21pbmcgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgTW9uZXlcbiAqIEBwYXJhbSB7TW9uZXl9IG1vbmV5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbmNvbnN0IGFzc2VydE1vbmV5ID0gKCBtb25leSApID0+IHtcblx0aWYgKCAhICggaW5zdGFuY2VPZiggbW9uZXksICdNb25leScgKSApICkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoICdJbnN0YW5jZSBvZiBNb25leSByZXF1aXJlZCcgKTtcblx0fVxufTtcblxuLyoqXG4gKiBBc3NlcnRzIGlmIGluY29taW5nIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIEN1cnJlbmN5XG4gKiBAcGFyYW0ge0N1cnJlbmN5fSBjdXJyZW5jeVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICovXG5jb25zdCBhc3NlcnRDdXJyZW5jeSA9ICggY3VycmVuY3kgKSA9PiB7XG5cdGlmICggISAoIGluc3RhbmNlT2YoIGN1cnJlbmN5LCAnQ3VycmVuY3knICkgKSApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCAnSW5zdGFuY2Ugb2YgQ3VycmVuY3kgcmVxdWlyZWQnICk7XG5cdH1cbn07XG5cbi8qKlxuICogQXNzZXJ0cyBpZiB0d28gY3VycmVuY2llcyBhcmUgc2hhbGxvdyBlcXVhbC5cbiAqIEBwYXJhbSB7Q3VycmVuY3l9IGN1cnJlbmN5QVxuICogQHBhcmFtIHtDdXJyZW5jeX0gY3VycmVuY3lCXG4gKiBAdGhyb3dzIHtFeGNlcHRpb259XG4gKi9cbmNvbnN0IGFzc2VydFNhbWVDdXJyZW5jeSA9ICggY3VycmVuY3lBLCBjdXJyZW5jeUIgKSA9PiB7XG5cdGFzc2VydEN1cnJlbmN5KCBjdXJyZW5jeUEgKTtcblx0YXNzZXJ0Q3VycmVuY3koIGN1cnJlbmN5QiApO1xuXHRpZiAoICEgaXNTaGFsbG93RXF1YWwoIGN1cnJlbmN5QS50b0pTT04oKSwgY3VycmVuY3lCLnRvSlNPTigpICkgKSB7XG5cdFx0dGhyb3cgbmV3IEV4Y2VwdGlvbiggJ1Byb3ZpZGVkIGN1cnJlbmNpZXMgYXJlIG5vdCBlcXVpdmFsZW50LicgKTtcblx0fVxufTtcblxuLyoqXG4gKiBBIFZhbHVlIG9iamVjdCByZXByZXNlbnRpbmcgbW9uZXkgdmFsdWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25leSB7XG5cdC8qKlxuXHQgKiBJbnRlcm5hbGx5IHRoZSBhbW91bnQgaXMgc3RvcmVkIGFzIGEgRGVjaW1hbCBpbnN0YW5jZS5cblx0ICogQHR5cGUge0RlY2ltYWx9XG5cdCAqL1xuXHRhbW91bnQgPSB7fTtcblxuXHQvKipcblx0ICogSW50ZXJuYWxseSB0aGUgYW1vdW50IGlzIHN0b3JlZCBhcyBhIEN1cnJlbmN5IGluc3RhbmNlLlxuXHQgKiBAdHlwZSB7Q3VycmVuY3l9XG5cdCAqL1xuXHRjdXJyZW5jeSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBGb3JtYXR0ZXIgb2JqZWN0IGZvciBtb25leSB2YWx1ZXMuXG5cdCAqIEB0eXBlIHt7fX1cblx0ICovXG5cdGZvcm1hdHRlciA9IHt9O1xuXG5cdC8qKlxuXHQgKiBSb3VuZHMgYXdheSBmcm9tIHplcm9cblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdHN0YXRpYyBST1VORF9VUCA9IERlY2ltYWwuUk9VTkRfVVA7XG5cblx0LyoqXG5cdCAqIFJvdW5kcyB0b3dhcmRzIHplcm9cblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdHN0YXRpYyBST1VORF9ET1dOID0gRGVjaW1hbC5ST1VORF9ET1dOO1xuXG5cdC8qKlxuXHQgKiBSb3VuZHMgdG93YXJkcyBpbmZpbml0eVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0c3RhdGljIFJPVU5EX0NFSUwgPSBEZWNpbWFsLlJPVU5EX0NFSUw7XG5cblx0LyoqXG5cdCAqIFJvdW5kcyB0b3dhcmRzIC1JbmZpbml0eVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0c3RhdGljIFJPVU5EX0ZMT09SID0gRGVjaW1hbC5ST1VORF9GTE9PUjtcblxuXHQvKipcblx0ICogUm91bmRzIHRvd2FyZHMgbmVhcmVzdCBuZWlnaGJvdXIuIElmIGVxdWlkaXN0YW50LCByb3VuZHMgYXdheSBmcm9tIHplcm8uXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgUk9VTkRfSEFMRl9VUCA9IERlY2ltYWwuUk9VTkRfSEFMRl9VUDtcblxuXHQvKipcblx0ICogUm91bmRzIHRvd2FyZHMgbmVhcmVzdCBuZWlnaGJvdXIuIElmIGVxdWlkaXN0YW50IHJvdW5kcyB0b3dhcmRzIHplcm8uXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgUk9VTkRfSEFMRl9ET1dOID0gRGVjaW1hbC5ST1VORF9IQUxGX0RPV047XG5cblx0LyoqXG5cdCAqIFJvdW5kcyB0b3dhcmRzIG5lYXJlc3QgbmVpZ2hib3VyLiBJZiBlcXVpZGlzdGFudCwgcm91bmRzIHRvd2FyZHMgZXZlblxuXHQgKiBuZWlnaGJvdXIuXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgUk9VTkRfSEFMRl9FVkVOID0gRGVjaW1hbC5ST1VORF9IQUxGX0VWRU47XG5cblx0LyoqXG5cdCAqIENsYXNzIGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xEZWNpbWFsfSBhbW91bnRcblx0ICogQHBhcmFtIHtDdXJyZW5jeX0gY3VycmVuY3lcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBhbW91bnQsIGN1cnJlbmN5ICkge1xuXHRcdHRoaXMuc2V0Q3VycmVuY3koIGN1cnJlbmN5IClcblx0XHRcdC5zZXRBbW91bnQoIGFtb3VudCApXG5cdFx0XHQuc2V0Rm9ybWF0dGVyKCk7XG5cdFx0T2JqZWN0LmZyZWV6ZSggdGhpcyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgY3VycmVuY3kgcHJvcGVydHlcblx0ICpcblx0ICogQHBhcmFtIHtDdXJyZW5jeX0gY3VycmVuY3lcblx0ICogQHJldHVybiB7TW9uZXl9IEVpdGhlciB0aGlzIE1vbmV5IG9yIG5ldyBNb25leSBkZXBlbmRpbmcgb24gc3RhdGUgb2Zcblx0ICogcHJvcGVydHkuXG5cdCAqL1xuXHRzZXRDdXJyZW5jeSggY3VycmVuY3kgKSB7XG5cdFx0TW9uZXkuYXNzZXJ0Q3VycmVuY3koIGN1cnJlbmN5ICk7XG5cdFx0Ly8gaWYgdGhlcmUncyBhbHJlYWR5IGEgY3VycmVuY3kgc2V0LCB0aGVuIHJldHVybiBhIG5ldyBvYmplY3QuXG5cdFx0aWYgKCBpbnN0YW5jZU9mKCB0aGlzLmN1cnJlbmN5LCAnQ3VycmVuY3knICkgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1vbmV5KCB0aGlzLmFtb3VudCwgY3VycmVuY3kgKTtcblx0XHR9XG5cdFx0dGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgYW1vdW50IHByb3BlcnR5XG5cdCAqXG5cdCAqIEBwYXJhbSB7RGVjaW1hbHxudW1iZXJ8c3RyaW5nfSBhbW91bnRcblx0ICogQHJldHVybiB7TW9uZXl9IEVpdGhlciB0aGlzIE1vbmV5IG9yIG5ldyBNb25leSBkZXBlbmRpbmcgb24gc3RhdGUgb2YgdGhlXG5cdCAqIHByb3BlcnR5LlxuXHQgKi9cblx0c2V0QW1vdW50KCBhbW91bnQgKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBpbnN0YW5jZU9mKCBhbW91bnQsICdEZWNpbWFsJyApID9cblx0XHRcdGFtb3VudC50b051bWJlcigpIDpcblx0XHRcdGFtb3VudDtcblx0XHQvLyBpZiB0aGVyZSdzIGFscmVhZHkgYW4gYW1vdW50IHNldCwgdGhlbiByZXR1cm4gYSBuZXcgb2JqZWN0LlxuXHRcdGlmICggaW5zdGFuY2VPZiggdGhpcy5hbW91bnQsICdEZWNpbWFsJyApICkge1xuXHRcdFx0cmV0dXJuIG5ldyBNb25leSggbmV3IERlY2ltYWwoIHZhbHVlICksIHRoaXMuY3VycmVuY3kgKTtcblx0XHR9XG5cdFx0dGhpcy5hbW91bnQgPSBuZXcgRGVjaW1hbCggdmFsdWUgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvcm1hdHRlciBmb3IgbW9uZXkgdmFsdWVzXG5cdCAqXG5cdCAqIEByZXR1cm4ge01vbmV5fSBBbiBpbnN0YW5jZSBvZiB0aGlzIG9iamVjdC5cblx0ICovXG5cdHNldEZvcm1hdHRlcigpIHtcblx0XHQvLyBvbmx5IGluaXRpYWxpemUgaWYgaXRzIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkXG5cdFx0aWYgKCBpc0VtcHR5KCB0aGlzLmZvcm1hdHRlciApICkge1xuXHRcdFx0dGhpcy5mb3JtYXR0ZXIgPSB7IC4uLkFjY291bnRpbmcgfTtcblx0XHRcdHRoaXMuZm9ybWF0dGVyLnNldHRpbmdzID0ge1xuXHRcdFx0XHQuLi50aGlzLmZvcm1hdHRlci5zZXR0aW5ncyxcblx0XHRcdFx0Li4udGhpcy5jdXJyZW5jeS50b0FjY291bnRpbmdTZXR0aW5ncygpLmN1cnJlbmN5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhpcyBNb25leSBhcyBpdHMgc3VidW5pdHMuXG5cdCAqIEByZXR1cm4ge251bWJlcn0gSWYgdGhlIHN1YnVuaXRzIGlzIDEwMCBhbmQgdGhlIHZhbHVlIGlzIC40NSxcblx0ICogdGhpcyByZXR1cm5zIDQ1MFxuXHQgKi9cblx0dG9TdWJ1bml0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQudG9OdW1iZXIoKSAqIHRoaXMuY3VycmVuY3kuc3VidW5pdHM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBtb25leSBvYmplY3QgZXF1YWxzIHRoaXMgbW9uZXkgb2JqZWN0LlxuXHQgKiBDb21wYXJlcyBib3RoIGFtb3VudCBhbmQgY3VycmVuY3kuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TW9uZXl9IG90aGVyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgbWVhbnMgdGhpcyBpcyBlcXVhbC4gRmFsc2UgbWVhbnMgaXQgaXNuJ3QuXG5cdCAqL1xuXHRlcXVhbHMoIG90aGVyICkge1xuXHRcdE1vbmV5LmFzc2VydE1vbmV5KCBvdGhlciApO1xuXHRcdHJldHVybiB0aGlzLmFtb3VudC5lcXVhbHMoIG90aGVyLmFtb3VudCApICYmXG5cdFx0XHR0aGlzLmhhc1NhbWVDdXJyZW5jeSggb3RoZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgcHJvdmlkZWQgTW9uZXkgb2JqZWN0J3MgQ3VycmVuY3kgZXF1YWxzIHRoaXMgTW9uZXlcblx0ICogb2JqZWN0J3MgQ3VycmVuY3kuXG5cdCAqXG5cdCAqIFRoaXMgZG9lcyBhIHNoYWxsb3cgY29tcGFyaXNvbiBvbiB0aGUgc2VyaWFsaXplZCB2YWx1ZXMgZm9yIHRoZSBjdXJyZW5jeVxuXHQgKiBvYmplY3RzLiAgVGhhdCB3YXkgaWYgdGhlIGN1cnJlbmNpZXMgYXJlIGRpZmZlcmVudCBpbnN0YW5jZXMsIGJ1dCBzaGFyZVxuXHQgKiB0aGUgc2FtZSBpbnRlcm5hbCB2YWx1ZSwgdGhleSBhcmUgY29uc2lkZXJlZCBlcXVhbC5cblx0ICpcblx0ICogQHBhcmFtIHtNb25leX0gb3RoZXJcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBtZWFucyB0aGUgY3VycmVuY2llcyBhcmUgZXF1YWwuXG5cdCAqL1xuXHRoYXNTYW1lQ3VycmVuY3koIG90aGVyICkge1xuXHRcdE1vbmV5LmFzc2VydE1vbmV5KCBvdGhlciApO1xuXHRcdHJldHVybiBpc1NoYWxsb3dFcXVhbChcblx0XHRcdHRoaXMuY3VycmVuY3kudG9KU09OKCksXG5cdFx0XHRvdGhlci5jdXJyZW5jeS50b0pTT04oKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIG9uZSBNb25leSBvYmplY3QgdG8gdGhpcyBNb25leSBvYmplY3Rcblx0ICogQHBhcmFtIHtNb25leX0gb3RoZXJcblx0ICogQHJldHVybiB7TW9uZXl9IFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgTW9uZXkuXG5cdCAqL1xuXHRhZGQoIG90aGVyICkge1xuXHRcdE1vbmV5LmFzc2VydFVzaW5nU2FtZUN1cnJlbmN5KCB0aGlzLCBvdGhlciApO1xuXHRcdHJldHVybiBuZXcgTW9uZXkoIHRoaXMuYW1vdW50LnBsdXMoIG90aGVyLmFtb3VudCApLCB0aGlzLmN1cnJlbmN5ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3VidHJhY3Qgb25lIE1vbmV5IG9iamVjdCBmcm9tIHRoaXMgTW9uZXkgb2JqZWN0XG5cdCAqIEBwYXJhbSB7TW9uZXl9IG90aGVyXG5cdCAqIEByZXR1cm4ge01vbmV5fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIE1vbmV5XG5cdCAqL1xuXHRzdWJ0cmFjdCggb3RoZXIgKSB7XG5cdFx0TW9uZXkuYXNzZXJ0VXNpbmdTYW1lQ3VycmVuY3koIHRoaXMsIG90aGVyICk7XG5cdFx0cmV0dXJuIG5ldyBNb25leSggdGhpcy5hbW91bnQubWludXMoIG90aGVyLmFtb3VudCApLCB0aGlzLmN1cnJlbmN5ICk7XG5cdH1cblxuXHQvKipcblx0ICogTXVsdGlwbHkgdGhpcyBtb25leSBvYmplY3QgYnkgdGhlIHByb3ZpZGVkIG11bHRpcGxpZXIgdmFsdWUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xEZWNpbWFsfSBtdWx0aXBsaWVyXG5cdCAqIEByZXR1cm4ge01vbmV5fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIE1vbmV5XG5cdCAqL1xuXHRtdWx0aXBseSggbXVsdGlwbGllciApIHtcblx0XHRyZXR1cm4gbmV3IE1vbmV5KCB0aGlzLmFtb3VudC50aW1lcyggbXVsdGlwbGllciApLCB0aGlzLmN1cnJlbmN5ICk7XG5cdH1cblxuXHQvKipcblx0ICogRGl2aWRlIHRoaXMgbW9uZXkgb2JqZWN0IGJ5IHRoZSBwcm92aWRlZCBkaXZpc29yIHZhbHVlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8RGVjaW1hbH0gZGl2aXNvclxuXHQgKiBAcmV0dXJuIHtNb25leX0gUmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiBNb25leVxuXHQgKi9cblx0ZGl2aWRlKCBkaXZpc29yICkge1xuXHRcdHJldHVybiBuZXcgTW9uZXkoIHRoaXMuYW1vdW50LmRpdmlkZWRCeSggZGl2aXNvciApLCB0aGlzLmN1cnJlbmN5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQWxsb2NhdGVzIGZ1bmQgYmFzZXMgb24gdGhlIHJhdGlvcyBwcm92aWRlZCByZXR1cm5pbmcgYW4gYXJyYXkgb2YgTW9uZXlcblx0ICogb2JqZWN0cyBhcyBhIHByb2R1Y3Qgb2YgdGhlIGFsbG9jYXRpb24uXG5cdCAqXG5cdCAqIEV4YW1wbGU6IHNwbGl0dGluZyBhIHByb3ZpZGVkIE1vbmV5IG9iamVjdCB0aHJlZSBlcXVhbCB3YXlzLlxuXHQgKlxuXHQgKiBgYGBcblx0ICogY29uc3Qgc3BsaXRNb25leSA9IG1vbmV5SW5zdGFuY2UuYWxsb2NhdGUoIFsgMSwgMSwgMSBdICk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBFeGFtcGxlOiBzcGxpdHRpbmcgYSBwcm92aWRlZCBNb25leSBvYmplY3QgdHdvIHdheXMgd2l0aCBvbmUgaGF2aW5nIDc1JVxuXHQgKiBvZiB0aGUgYWxsb2NhdGlvbi5cblx0ICpcblx0ICogYGBgXG5cdCAqIGNvbnN0IHNwbGl0TW9uZXkgPSBtb25leUluc3RhbmNlLmFsbG9jYXRlKCBbIDc1LCAyNSBdICk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBOb3RlOiBBcnJheSB2YWx1ZXMgZm9yIHJhdGlvcyBhcmUgc2ltcGx5IHRvdGFsbGVkIGFuZCB0aGVuIGVhY2ggZWxlbWVudFxuXHQgKiBpcyBjb25zaWRlcmVkIGEgZnJhY3Rpb24gb2YgdGhlIHRvdGFsIHZhbHVlLiAgU28gaG93IHlvdSBzdWJtaXQgcmF0aW9cblx0ICogdmFsdWVzIGlzIHVwIHRvIHlvdSBmb3Igd2hhdGV2ZXIgaXMgbW9zdCBjbGVhciB0byB5b3UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyW119IHJhdGlvc1xuXHQgKiBAcmV0dXJuIHtNb25leVtdfSBBbiBhcnJheSBvZiBNb25leSBvYmplY3RzXG5cdCAqL1xuXHRhbGxvY2F0ZSggcmF0aW9zICkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0XHRjb25zdCBjb252ZXJ0ZWRSYXRpb3MgPSBbXTtcblx0XHRsZXQgcmVtYWluZGVyID0gbmV3IERlY2ltYWwoIHNlbGYudG9TdWJ1bml0cygpICk7XG5cdFx0bGV0IHRvdGFsID0gbmV3IERlY2ltYWwoIDAgKTtcblx0XHQvLyBjb252ZXJ0IHJhdGlvcyB0byBkZWNpbWFsIGFuZCBnZW5lcmF0ZSB0b3RhbC5cblx0XHRyYXRpb3MuZm9yRWFjaCggKCByYXRpbyApID0+IHtcblx0XHRcdGNvbnZlcnRlZFJhdGlvcy5wdXNoKFxuXHRcdFx0XHRpbnN0YW5jZU9mKCByYXRpbywgJ0RlY2ltYWwnICkgPyByYXRpbyA6IG5ldyBEZWNpbWFsKCByYXRpbyApXG5cdFx0XHQpO1xuXHRcdFx0dG90YWwgPSB0b3RhbC5wbHVzKCByYXRpbyApO1xuXHRcdH0gKTtcblx0XHRjb252ZXJ0ZWRSYXRpb3MuZm9yRWFjaCggKCByYXRpbyApID0+IHtcblx0XHRcdGNvbnN0IHNoYXJlID0gbmV3IERlY2ltYWwoXG5cdFx0XHRcdE1hdGguZmxvb3IoXG5cdFx0XHRcdFx0c2VsZi50b1N1YnVuaXRzKCkgKiByYXRpby50b051bWJlcigpIC8gdG90YWwudG9OdW1iZXIoKVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0cmVzdWx0cy5wdXNoKFxuXHRcdFx0XHRuZXcgTW9uZXkoXG5cdFx0XHRcdFx0c2hhcmUuZGl2aWRlZEJ5KCB0aGlzLmN1cnJlbmN5LnN1YnVuaXRzICksXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW5jeVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0cmVtYWluZGVyID0gcmVtYWluZGVyLm1pbnVzKCBzaGFyZSApO1xuXHRcdH0gKTtcblx0XHRmb3IgKCBsZXQgaSA9IDA7IHJlbWFpbmRlci5ncmVhdGVyVGhhbiggMCApOyBpKysgKSB7XG5cdFx0XHRyZXN1bHRzWyBpIF0gPSBuZXcgTW9uZXkoXG5cdFx0XHRcdCggbmV3IERlY2ltYWwoIHJlc3VsdHNbIGkgXS50b1N1YnVuaXRzKCkgKSApXG5cdFx0XHRcdFx0LnBsdXMoIDEgKVxuXHRcdFx0XHRcdC5kaXZpZGVkQnkoIHRoaXMuY3VycmVuY3kuc3VidW5pdHMgKSxcblx0XHRcdFx0dGhpcy5jdXJyZW5jeVxuXHRcdFx0KTtcblx0XHRcdHJlbWFpbmRlciA9IHJlbWFpbmRlci5taW51cyggMSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wYXJlcyB0d28gaW5zdGFuY2VzIG9mIE1vbmV5LlxuXHQgKlxuXHQgKiBOb3RlOiBcInNhbWVcIiBtZWFucyBoYXMgZXF1YWwgdmFsdWUgYW5kIGVxdWFsIGN1cnJlbmN5LiAgSXQgZG9lcyBub3QgbWVhblxuXHQgKiBpZGVudGljYWwgaW5zdGFuY2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge01vbmV5fSBvdGhlclxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IDAgaWYgdGhleSBhcmUgdGhlIHNhbWUsIDEgaWYgdGhpcyBpcyBncmVhdGVyIHRoYW5cblx0ICogb3RoZXIgYW5kIC0xIGlmIG90aGVyIGlzIGdyZWF0ZXIgdGhhbiB0aGlzLlxuXHQgKi9cblx0Y29tcGFyZSggb3RoZXIgKSB7XG5cdFx0Ly9xdWlja2x5IHJldHVybiAwIGlmIGlkZW50aWNhbFxuXHRcdGlmICggdGhpcyA9PT0gb3RoZXIgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0TW9uZXkuYXNzZXJ0VXNpbmdTYW1lQ3VycmVuY3koIHRoaXMsIG90aGVyICk7XG5cdFx0cmV0dXJuIHRoaXMuYW1vdW50LmNvbXBhcmVkVG8oIG90aGVyLmFtb3VudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmVzIHdoZXRoZXIgdGhpcyBNb25leSBvYmplY3QgaXMgZ3JlYXRlciB0aGFuIHRoZSBvdGhlciBNb25leSBvYmplY3QuXG5cdCAqIEBwYXJhbSB7TW9uZXl9IG90aGVyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRydWUgdGhlbiB0aGlzIGlzIGdyZWF0ZXIgdGhhbiBvdGhlci5cblx0ICovXG5cdGdyZWF0ZXJUaGFuKCBvdGhlciApIHtcblx0XHRNb25leS5hc3NlcnRVc2luZ1NhbWVDdXJyZW5jeSggdGhpcywgb3RoZXIgKTtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQuZ3JlYXRlclRoYW4oIG90aGVyLmFtb3VudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmVzIHdoZXRoZXIgdGhpcyBNb25leSBvYmplY3QgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBvdGhlclxuXHQgKiBNb25leSBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TW9uZXl9IG90aGVyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRydWUgdGhlbiB0aGlzIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgb3RoZXIuXG5cdCAqL1xuXHRncmVhdGVyVGhhbk9yRXF1YWxUbyggb3RoZXIgKSB7XG5cdFx0TW9uZXkuYXNzZXJ0VXNpbmdTYW1lQ3VycmVuY3koIHRoaXMsIG90aGVyICk7XG5cdFx0cmV0dXJuIHRoaXMuYW1vdW50LmdyZWF0ZXJUaGFuT3JFcXVhbFRvKCBvdGhlci5hbW91bnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wYXJlcyB3aGV0aGVyIHRoaXMgTW9uZXkgb2JqZWN0IGlzIGxlc3MgdGhhbiB0aGUgb3RoZXIgTW9uZXkgb2JqZWN0LlxuXHQgKiBAcGFyYW0ge01vbmV5fSBvdGhlclxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBJZiB0cnVlIHRoZW4gdGhpcyBpcyBsZXNzIHRoYW4gb3RoZXJcblx0ICovXG5cdGxlc3NUaGFuKCBvdGhlciApIHtcblx0XHRNb25leS5hc3NlcnRVc2luZ1NhbWVDdXJyZW5jeSggdGhpcywgb3RoZXIgKTtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQubGVzc1RoYW4oIG90aGVyLmFtb3VudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmVzIHdoZXRoZXIgdGhpcyBNb25leSBvYmplY3QgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBvdGhlclxuXHQgKiBNb25leSBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TW9uZXl9IG90aGVyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRydWUgdGhlbiB0aGlzIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvdGhlci5cblx0ICovXG5cdGxlc3NUaGFuT3JFcXVhbFRvKCBvdGhlciApIHtcblx0XHRNb25leS5hc3NlcnRVc2luZ1NhbWVDdXJyZW5jeSggdGhpcywgb3RoZXIgKTtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQubGVzc1RoYW5PckVxdWFsVG8oIG90aGVyLmFtb3VudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyBpZiB0aGlzIG9iamVjdCBoYXMgdGhlIHZhbHVlIG9mIDBcblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGVuIHRoZSB2YWx1ZSBpcyAwLlxuXHQgKi9cblx0aXNaZXJvKCkge1xuXHRcdHJldHVybiB0aGlzLmFtb3VudC5pc1plcm8oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgaWYgdGhlIHZhbHVlIGluIHRoaXMgTW9uZXkgb2JqZWN0IGlzIG5lZ2F0aXZlLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBJZiB0cnVlIHRoZW4gdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLlxuXHQgKi9cblx0aXNOZWdhdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQuaXNOZWdhdGl2ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyBpZiB0aGUgdmFsdWUgaW4gdGhpcyBNb25leSBvYmplY3QgaXMgcG9zaXRpdmUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRydWUgdGhlbiB0aGUgdmFsdWUgaXMgcG9zaXRpdmUuXG5cdCAqL1xuXHRpc1Bvc2l0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLmFtb3VudC5pc1Bvc2l0aXZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhpcyBNb25leSBvYmplY3QgYXMgYSBudW1iZXIgcHJpbWl0aXZlLlxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IFJldHVybnMgYSBudW1iZXIuXG5cdCAqL1xuXHR0b051bWJlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hbW91bnQudG9OdW1iZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBNb25leSBvYmplY3QgaW4gbm9ybWFsIChmaXhlZC1wb2ludCkgbm90YXRpb25cblx0ICogcm91bmRlZCB0byBgZGVjaW1hbFBsYWNlc2AgdXNpbmcgYHJvdW5kaW5nYCBtb2RlLlxuXHQgKlxuXHQgKiBJZiB0aGUgdmFsdWUgb2YgdGhpcyBpbnN0YW5jZSBpbiBub3JtYWwgbm90YXRpb24gaGFzIGZld2VyIHRoYW5cblx0ICogZGVjaW1hbFBsYWNlcyBmcmFjdGlvbiBkaWdpdHMsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSBhcHBlbmRlZCB3aXRoXG5cdCAqIHplcm9zIGFjY29yZGluZ2x5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVjaW1hbFBsYWNlcyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvLlxuXHQgKiBJZiBub3QgcHJvdmlkZWQgdXNlcyB0aGUgaW50ZXJuYWwgZGVjaW1hbCBwbGFjZSB2YWx1ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHJvdW5kaW5nIFdoYXQgcm91bmRpbmcgdHlwZSB0byB1c2UgKDAtOCkuICBVc2UgTW9uZXkgUk9VTkRcblx0ICogY29uc3RhbnRzLiAgRGVmYXVsdHMgdG8gTW9uZXkuUk9VTkRfSEFMRl9VUFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGlzIE1vbmV5XG5cdCAqIGluIG5vcm1hbCAoZml4ZWQtcG9pbnQpIG5vdGF0aW9uIHJvdW5kZWQgdG8gZGVjaW1hbCBwbGFjZXMgdXNpbmdcblx0ICogcm91bmRpbmcgbW9kZS5cblx0ICovXG5cdHRvRml4ZWQoIGRlY2ltYWxQbGFjZXMsIHJvdW5kaW5nID0gTW9uZXkuUk9VTkRfSEFMRl9VUCApIHtcblx0XHRkZWNpbWFsUGxhY2VzID0gZGVjaW1hbFBsYWNlcyB8fCB0aGlzLmN1cnJlbmN5LmRlY2ltYWxQbGFjZXM7XG5cdFx0cmV0dXJuIHRoaXMuYW1vdW50LnRvRml4ZWQoIGRlY2ltYWxQbGFjZXMsIHJvdW5kaW5nICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIG5ldyBNb25leSB3aG9zZSB2YWx1ZSBpcyB0aGUgdmFsdWUgb2YgdGhpcyBNb25leSByb3VuZGVkXG5cdCAqIHRvIGEgd2hvbGUgbnVtYmVyIHVzaW5nIHJvdW5kaW5nIG1vZGUgcm91bmRpbmcgc2V0IG9uIHRoZSBvcmlnaW5hbFxuXHQgKiBEZWNpbWFsIGFtb3VudC5cblx0ICpcblx0ICogQHJldHVybiB7TW9uZXl9IEEgbmV3IE1vbmV5IG9iamVjdFxuXHQgKi9cblx0dG9JbnRlZ2VyTW9uZXkoKSB7XG5cdFx0cmV0dXJuIG5ldyBNb25leShcblx0XHRcdHRoaXMuYW1vdW50LnRvSW50ZWdlcigpLFxuXHRcdFx0dGhpcy5jdXJyZW5jeVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhpcyBNb25leSBvYmplY3QgYXMgYSBmb3JtYXR0ZWQgc3RyaW5nIGFjY29yZGluZ1xuXHQgKiB0byB0aGUgY3VycmVuY3kgY29uZmlndXJhdGlvbi5cblx0ICogQHJldHVybiB7c3RyaW5nfSBSZXR1cm5zIGEgZm9ybWF0dGVkIHN0cmluZyBhY2NvcmRpbmcgdG8gQ3VycmVuY3kuXG5cdCAqL1xuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXR0ZXIuZm9ybWF0KFxuXHRcdFx0dGhpcy5hbW91bnQudG9OdW1iZXIoKSxcblx0XHRcdHRoaXMuZm9ybWF0dGVyLnNldHRpbmdzXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHsgT2JqZWN0IH0gUmV0dXJucyBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBzZXJpYWxpemVkXG5cdCAqIHZhbHVlIG9mIHRoaXMgb2JqZWN0LlxuXHQgKi9cblx0dG9KU09OKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhbW91bnQ6IHRoaXMuYW1vdW50LnRvSlNPTigpLFxuXHRcdFx0Y3VycmVuY3k6IHRoaXMuY3VycmVuY3kudG9KU09OKCksXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnRzIGlmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBNb25leS5cblx0ICogQHBhcmFtIHtNb25leX0gbW9uZXlcblx0ICogQHRocm93cyB7VHlwZUVycm9yfVxuXHQgKi9cblx0c3RhdGljIGFzc2VydE1vbmV5ID0gKCBtb25leSApID0+IHtcblx0XHRhc3NlcnRNb25leSggbW9uZXkgKTtcblx0fTtcblxuXHQvKipcblx0ICogQXNzZXJ0cyBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgQ3VycmVuY3kuXG5cdCAqIEBwYXJhbSB7Q3VycmVuY3l9IGN1cnJlbmN5XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cblx0ICovXG5cdHN0YXRpYyBhc3NlcnRDdXJyZW5jeSA9ICggY3VycmVuY3kgKSA9PiB7XG5cdFx0YXNzZXJ0Q3VycmVuY3koIGN1cnJlbmN5ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgaWYgdGhlIHByb3ZpZGVkIHZhbHVlcyBhcmUgYm90aCBNb25leSBvYmplY3RzIGFuZCBoYXZlIEVxdWFsXG5cdCAqIEN1cnJlbmN5IG9iamVjdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TW9uZXl9IHRoaXNNb25leVxuXHQgKiBAcGFyYW0ge01vbmV5fSBvdGhlck1vbmV5XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cblx0ICovXG5cdHN0YXRpYyBhc3NlcnRVc2luZ1NhbWVDdXJyZW5jeSA9ICggdGhpc01vbmV5LCBvdGhlck1vbmV5ICkgPT4ge1xuXHRcdGFzc2VydE1vbmV5KCB0aGlzTW9uZXkgKTtcblx0XHRhc3NlcnRNb25leSggb3RoZXJNb25leSApO1xuXHRcdGFzc2VydFNhbWVDdXJyZW5jeSggdGhpc01vbmV5LmN1cnJlbmN5LCBvdGhlck1vbmV5LmN1cnJlbmN5ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFzc2VydHMgaWYgdHdvIGN1cnJlbmNpZXMgYXJlIHNoYWxsb3cgZXF1YWwuXG5cdCAqIEBwYXJhbSB7Q3VycmVuY3l9IGN1cnJlbmN5QVxuXHQgKiBAcGFyYW0ge0N1cnJlbmN5fSBjdXJyZW5jeUJcblx0ICogQHRocm93cyB7RXhjZXB0aW9ufVxuXHQgKi9cblx0c3RhdGljIGFzc2VydFNhbWVDdXJyZW5jeSA9ICggY3VycmVuY3lBLCBjdXJyZW5jeUIgKSA9PiB7XG5cdFx0YXNzZXJ0U2FtZUN1cnJlbmN5KCBjdXJyZW5jeUEsIGN1cnJlbmN5QiApO1xuXHR9XG59XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5hY2NvdW50aW5nID0gZ2xvYmFsLmFjY291bnRpbmcgfHwge30pKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBfX2NvbW1vbmpzKGZuLCBtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzOyB9XG5cblx0LyoqXG5cdCAqIFRoZSBsaWJyYXJ5J3Mgc2V0dGluZ3MgY29uZmlndXJhdGlvbiBvYmplY3QuXG5cdCAqXG5cdCAqIENvbnRhaW5zIGRlZmF1bHQgcGFyYW1ldGVycyBmb3IgY3VycmVuY3kgYW5kIG51bWJlciBmb3JtYXR0aW5nXG5cdCAqL1xuXHR2YXIgc2V0dGluZ3MgPSB7XG5cdCAgc3ltYm9sOiAnJCcsIC8vIGRlZmF1bHQgY3VycmVuY3kgc3ltYm9sIGlzICckJ1xuXHQgIGZvcm1hdDogJyVzJXYnLCAvLyBjb250cm9scyBvdXRwdXQ6ICVzID0gc3ltYm9sLCAldiA9IHZhbHVlIChjYW4gYmUgb2JqZWN0LCBzZWUgZG9jcylcblx0ICBkZWNpbWFsOiAnLicsIC8vIGRlY2ltYWwgcG9pbnQgc2VwYXJhdG9yXG5cdCAgdGhvdXNhbmQ6ICcsJywgLy8gdGhvdXNhbmRzIHNlcGFyYXRvclxuXHQgIHByZWNpc2lvbjogMiwgLy8gZGVjaW1hbCBwbGFjZXNcblx0ICBncm91cGluZzogMywgLy8gZGlnaXQgZ3JvdXBpbmcgKG5vdCBpbXBsZW1lbnRlZCB5ZXQpXG5cdCAgc3RyaXBaZXJvczogZmFsc2UsIC8vIHN0cmlwIGluc2lnbmlmaWNhbnQgemVyb3MgZnJvbSBkZWNpbWFsIHBhcnRcblx0ICBmYWxsYmFjazogMCAvLyB2YWx1ZSByZXR1cm5lZCBvbiB1bmZvcm1hdCgpIGZhaWx1cmVcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBzdHJpbmcvYXJyYXkgb2Ygc3RyaW5ncywgcmVtb3ZlcyBhbGwgZm9ybWF0dGluZy9jcnVmdCBhbmQgcmV0dXJucyB0aGUgcmF3IGZsb2F0IHZhbHVlXG5cdCAqIEFsaWFzOiBgYWNjb3VudGluZy5wYXJzZShzdHJpbmcpYFxuXHQgKlxuXHQgKiBEZWNpbWFsIG11c3QgYmUgaW5jbHVkZWQgaW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBmbG9hdHMgKGRlZmF1bHRzIHRvXG5cdCAqIGFjY291bnRpbmcuc2V0dGluZ3MuZGVjaW1hbCksIHNvIGlmIHRoZSBudW1iZXIgdXNlcyBhIG5vbi1zdGFuZGFyZCBkZWNpbWFsXG5cdCAqIHNlcGFyYXRvciwgcHJvdmlkZSBpdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBBbHNvIG1hdGNoZXMgYnJhY2tldGVkIG5lZ2F0aXZlcyAoZWcuICckICgxLjk5KScgPT4gLTEuOTkpXG5cdCAqXG5cdCAqIERvZXNuJ3QgdGhyb3cgYW55IGVycm9ycyAoYE5hTmBzIGJlY29tZSAwKSBidXQgdGhpcyBtYXkgY2hhbmdlIGluIGZ1dHVyZVxuXHQgKlxuXHQgKiBgYGBqc1xuXHQgKiAgYWNjb3VudGluZy51bmZvcm1hdChcIsKjIDEyLDM0NSw2NzguOTAgR0JQXCIpOyAvLyAxMjM0NTY3OC45XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAbWV0aG9kIHVuZm9ybWF0XG5cdCAqIEBmb3IgYWNjb3VudGluZ1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xBcnJheTxTdHJpbmc+fSB2YWx1ZSBUaGUgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgY29udGFpbmluZyB0aGUgbnVtYmVyL3MgdG8gcGFyc2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSAgICAgICAgICAgICAgIGRlY2ltYWwgTnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIG9mIHRoZSByZXN1bHRhbnQgbnVtYmVyXG5cdCAqIEByZXR1cm4ge0Zsb2F0fSBUaGUgcGFyc2VkIG51bWJlclxuXHQgKi9cblx0ZnVuY3Rpb24gdW5mb3JtYXQodmFsdWUpIHtcblx0ICB2YXIgZGVjaW1hbCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHNldHRpbmdzLmRlY2ltYWwgOiBhcmd1bWVudHNbMV07XG5cdCAgdmFyIGZhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gc2V0dGluZ3MuZmFsbGJhY2sgOiBhcmd1bWVudHNbMl07XG5cblx0ICAvLyBSZWN1cnNpdmVseSB1bmZvcm1hdCBhcnJheXM6XG5cdCAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdCAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgcmV0dXJuIHVuZm9ybWF0KHZhbCwgZGVjaW1hbCwgZmFsbGJhY2spO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBhcy1pcyBpZiBpdCdzIGFscmVhZHkgYSBudW1iZXI6XG5cdCAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB2YWx1ZTtcblxuXHQgIC8vIEJ1aWxkIHJlZ2V4IHRvIHN0cmlwIG91dCBldmVyeXRoaW5nIGV4Y2VwdCBkaWdpdHMsIGRlY2ltYWwgcG9pbnQgYW5kIG1pbnVzIHNpZ246XG5cdCAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW14wLTktKC0pLScgKyBkZWNpbWFsICsgJ10nLCBbJ2cnXSk7XG5cdCAgdmFyIHVuZm9ybWF0dGVkVmFsdWVTdHJpbmcgPSAoJycgKyB2YWx1ZSkucmVwbGFjZShyZWdleCwgJycpIC8vIHN0cmlwIG91dCBhbnkgY3J1ZnRcblx0ICAucmVwbGFjZShkZWNpbWFsLCAnLicpIC8vIG1ha2Ugc3VyZSBkZWNpbWFsIHBvaW50IGlzIHN0YW5kYXJkXG5cdCAgLnJlcGxhY2UoL1xcKChbLV0qXFxkKlteKV0/XFxkKylcXCkvZywgJy0kMScpIC8vIHJlcGxhY2UgYnJhY2tldGVkIHZhbHVlcyB3aXRoIG5lZ2F0aXZlc1xuXHQgIC5yZXBsYWNlKC9cXCgoLiopXFwpLywgJycpOyAvLyByZW1vdmUgYW55IGJyYWNrZXRzIHRoYXQgZG8gbm90IGhhdmUgbnVtZXJpYyB2YWx1ZVxuXG5cdCAgLyoqXG5cdCAgICogSGFuZGxpbmcgLXZlIG51bWJlciBhbmQgYnJhY2tldCwgZWcuXG5cdCAgICogKC0xMDApID0gMTAwLCAtKDEwMCkgPSAxMDAsIC0tMTAwID0gMTAwXG5cdCAgICovXG5cdCAgdmFyIG5lZ2F0aXZlID0gKHVuZm9ybWF0dGVkVmFsdWVTdHJpbmcubWF0Y2goLy0vZykgfHwgMikubGVuZ3RoICUgMixcblx0ICAgICAgYWJzVW5mb3JtYXR0ZWQgPSBwYXJzZUZsb2F0KHVuZm9ybWF0dGVkVmFsdWVTdHJpbmcucmVwbGFjZSgvLS9nLCAnJykpLFxuXHQgICAgICB1bmZvcm1hdHRlZCA9IGFic1VuZm9ybWF0dGVkICogKG5lZ2F0aXZlID8gLTEgOiAxKTtcblxuXHQgIC8vIFRoaXMgd2lsbCBmYWlsIHNpbGVudGx5IHdoaWNoIG1heSBjYXVzZSB0cm91YmxlLCBsZXQncyB3YWl0IGFuZCBzZWU6XG5cdCAgcmV0dXJuICFpc05hTih1bmZvcm1hdHRlZCkgPyB1bmZvcm1hdHRlZCA6IGZhbGxiYWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGFuZCBub3JtYWxpc2UgdGhlIHZhbHVlIG9mIHByZWNpc2lvbiAobXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyKVxuXHQgKi9cblx0ZnVuY3Rpb24gX2NoZWNrUHJlY2lzaW9uKHZhbCwgYmFzZSkge1xuXHQgIHZhbCA9IE1hdGgucm91bmQoTWF0aC5hYnModmFsKSk7XG5cdCAgcmV0dXJuIGlzTmFOKHZhbCkgPyBiYXNlIDogdmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEltcGxlbWVudGF0aW9uIG9mIHRvRml4ZWQoKSB0aGF0IHRyZWF0cyBmbG9hdHMgbW9yZSBsaWtlIGRlY2ltYWxzXG5cdCAqXG5cdCAqIEZpeGVzIGJpbmFyeSByb3VuZGluZyBpc3N1ZXMgKGVnLiAoMC42MTUpLnRvRml4ZWQoMikgPT09ICcwLjYxJykgdGhhdCBwcmVzZW50XG5cdCAqIHByb2JsZW1zIGZvciBhY2NvdW50aW5nLSBhbmQgZmluYW5jZS1yZWxhdGVkIHNvZnR3YXJlLlxuXHQgKlxuXHQgKiBgYGBqc1xuXHQgKiAgKDAuNjE1KS50b0ZpeGVkKDIpOyAgICAgICAgICAgLy8gXCIwLjYxXCIgKG5hdGl2ZSB0b0ZpeGVkIGhhcyByb3VuZGluZyBpc3N1ZXMpXG5cdCAqICBhY2NvdW50aW5nLnRvRml4ZWQoMC42MTUsIDIpOyAvLyBcIjAuNjJcIlxuXHQgKiBgYGBcblx0ICpcblx0ICogQG1ldGhvZCB0b0ZpeGVkXG5cdCAqIEBmb3IgYWNjb3VudGluZ1xuXHQgKiBAcGFyYW0ge0Zsb2F0fSAgIHZhbHVlICAgICAgICAgVGhlIGZsb2F0IHRvIGJlIHRyZWF0ZWQgYXMgYSBkZWNpbWFsIG51bWJlci5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwcmVjaXNpb249Ml0gVGhlIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0byBrZWVwLlxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBnaXZlbiBudW1iZXIgdHJhbnNmb3JtZWQgaW50byBhIHN0cmluZyB3aXRoIHRoZSBnaXZlbiBwcmVjaXNzaW9uXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24pIHtcblx0ICBwcmVjaXNpb24gPSBfY2hlY2tQcmVjaXNpb24ocHJlY2lzaW9uLCBzZXR0aW5ncy5wcmVjaXNpb24pO1xuXHQgIHZhciBwb3dlciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuXG5cdCAgLy8gTXVsdGlwbHkgdXAgYnkgcHJlY2lzaW9uLCByb3VuZCBhY2N1cmF0ZWx5LCB0aGVuIGRpdmlkZSBhbmQgdXNlIG5hdGl2ZSB0b0ZpeGVkKCk6XG5cdCAgcmV0dXJuIChNYXRoLnJvdW5kKCh2YWx1ZSArIDFlLTgpICogcG93ZXIpIC8gcG93ZXIpLnRvRml4ZWQocHJlY2lzaW9uKTtcblx0fVxuXG5cdHZhciBpbmRleCA9IF9fY29tbW9uanMoZnVuY3Rpb24gKG1vZHVsZSkge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXHRmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QodmFsKTtcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0XHR2YXIgZnJvbTtcblx0XHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHRcdHZhciBzeW1ib2xzO1xuXG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdG87XG5cdH07XG5cdH0pO1xuXG5cdHZhciBvYmplY3RBc3NpZ24gPSAoaW5kZXggJiYgdHlwZW9mIGluZGV4ID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gaW5kZXggPyBpbmRleFsnZGVmYXVsdCddIDogaW5kZXgpO1xuXG5cdGZ1bmN0aW9uIF9zdHJpcEluc2lnbmlmaWNhbnRaZXJvcyhzdHIsIGRlY2ltYWwpIHtcblx0ICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoZGVjaW1hbCk7XG5cdCAgdmFyIGludGVnZXJQYXJ0ID0gcGFydHNbMF07XG5cdCAgdmFyIGRlY2ltYWxQYXJ0ID0gcGFydHNbMV0ucmVwbGFjZSgvMCskLywgJycpO1xuXG5cdCAgaWYgKGRlY2ltYWxQYXJ0Lmxlbmd0aCA+IDApIHtcblx0ICAgIHJldHVybiBpbnRlZ2VyUGFydCArIGRlY2ltYWwgKyBkZWNpbWFsUGFydDtcblx0ICB9XG5cblx0ICByZXR1cm4gaW50ZWdlclBhcnQ7XG5cdH1cblxuXHQvKipcblx0ICogRm9ybWF0IGEgbnVtYmVyLCB3aXRoIGNvbW1hLXNlcGFyYXRlZCB0aG91c2FuZHMgYW5kIGN1c3RvbSBwcmVjaXNpb24vZGVjaW1hbCBwbGFjZXNcblx0ICogQWxpYXM6IGBhY2NvdW50aW5nLmZvcm1hdCgpYFxuXHQgKlxuXHQgKiBMb2NhbGlzZSBieSBvdmVycmlkaW5nIHRoZSBwcmVjaXNpb24gYW5kIHRob3VzYW5kIC8gZGVjaW1hbCBzZXBhcmF0b3JzXG5cdCAqXG5cdCAqIGBgYGpzXG5cdCAqIGFjY291bnRpbmcuZm9ybWF0TnVtYmVyKDUzMTgwMDgpOyAgICAgICAgICAgICAgLy8gNSwzMTgsMDA4XG5cdCAqIGFjY291bnRpbmcuZm9ybWF0TnVtYmVyKDk4NzY1NDMuMjEsIHsgcHJlY2lzaW9uOiAzLCB0aG91c2FuZDogXCIgXCIgfSk7IC8vIDkgODc2IDU0My4yMTBcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBtZXRob2QgZm9ybWF0TnVtYmVyXG5cdCAqIEBmb3IgYWNjb3VudGluZ1xuXHQgKiBAcGFyYW0ge051bWJlcn0gICAgICAgIG51bWJlciBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9ICAgICAgICBbb3B0cz17fV0gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBvcHRpb25zIG9mIHRoZSBtZXRob2QuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGdpdmVuIG51bWJlciBwcm9wZXJseSBmb3JtYXR0ZWQuXG5cdCAgKi9cblx0ZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlcikge1xuXHQgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAvLyBSZXN1cnNpdmVseSBmb3JtYXQgYXJyYXlzOlxuXHQgIGlmIChBcnJheS5pc0FycmF5KG51bWJlcikpIHtcblx0ICAgIHJldHVybiBudW1iZXIubWFwKGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgcmV0dXJuIGZvcm1hdE51bWJlcih2YWwsIG9wdHMpO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgLy8gQnVpbGQgb3B0aW9ucyBvYmplY3QgZnJvbSBzZWNvbmQgcGFyYW0gKGlmIG9iamVjdCkgb3IgYWxsIHBhcmFtcywgZXh0ZW5kaW5nIGRlZmF1bHRzOlxuXHQgIG9wdHMgPSBvYmplY3RBc3NpZ24oe30sIHNldHRpbmdzLCBvcHRzKTtcblxuXHQgIC8vIERvIHNvbWUgY2FsYzpcblx0ICB2YXIgbmVnYXRpdmUgPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG5cdCAgdmFyIGJhc2UgPSBwYXJzZUludCh0b0ZpeGVkKE1hdGguYWJzKG51bWJlciksIG9wdHMucHJlY2lzaW9uKSwgMTApICsgJyc7XG5cdCAgdmFyIG1vZCA9IGJhc2UubGVuZ3RoID4gMyA/IGJhc2UubGVuZ3RoICUgMyA6IDA7XG5cblx0ICAvLyBGb3JtYXQgdGhlIG51bWJlcjpcblx0ICB2YXIgZm9ybWF0dGVkID0gbmVnYXRpdmUgKyAobW9kID8gYmFzZS5zdWJzdHIoMCwgbW9kKSArIG9wdHMudGhvdXNhbmQgOiAnJykgKyBiYXNlLnN1YnN0cihtb2QpLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCAnJDEnICsgb3B0cy50aG91c2FuZCkgKyAob3B0cy5wcmVjaXNpb24gPiAwID8gb3B0cy5kZWNpbWFsICsgdG9GaXhlZChNYXRoLmFicyhudW1iZXIpLCBvcHRzLnByZWNpc2lvbikuc3BsaXQoJy4nKVsxXSA6ICcnKTtcblxuXHQgIHJldHVybiBvcHRzLnN0cmlwWmVyb3MgPyBfc3RyaXBJbnNpZ25pZmljYW50WmVyb3MoZm9ybWF0dGVkLCBvcHRzLmRlY2ltYWwpIDogZm9ybWF0dGVkO1xuXHR9XG5cblx0dmFyIGluZGV4JDEgPSBfX2NvbW1vbmpzKGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBzdHJWYWx1ZSA9IFN0cmluZy5wcm90b3R5cGUudmFsdWVPZjtcblx0dmFyIHRyeVN0cmluZ09iamVjdCA9IGZ1bmN0aW9uIHRyeVN0cmluZ09iamVjdCh2YWx1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRzdHJWYWx1ZS5jYWxsKHZhbHVlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzdHJDbGFzcyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXHR2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeVN0cmluZ09iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gc3RyQ2xhc3M7XG5cdH07XG5cdH0pO1xuXG5cdHZhciBpc1N0cmluZyA9IChpbmRleCQxICYmIHR5cGVvZiBpbmRleCQxID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gaW5kZXgkMSA/IGluZGV4JDFbJ2RlZmF1bHQnXSA6IGluZGV4JDEpO1xuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBmb3JtYXQgc3RyaW5nIG9yIG9iamVjdCBhbmQgcmV0dXJucyBmb3JtYXQgb2JqIGZvciB1c2UgaW4gcmVuZGVyaW5nXG5cdCAqXG5cdCAqIGBmb3JtYXRgIGlzIGVpdGhlciBhIHN0cmluZyB3aXRoIHRoZSBkZWZhdWx0IChwb3NpdGl2ZSkgZm9ybWF0LCBvciBvYmplY3Rcblx0ICogY29udGFpbmluZyBgcG9zYCAocmVxdWlyZWQpLCBgbmVnYCBhbmQgYHplcm9gIHZhbHVlc1xuXHQgKlxuXHQgKiBFaXRoZXIgc3RyaW5nIG9yIGZvcm1hdC5wb3MgbXVzdCBjb250YWluIFwiJXZcIiAodmFsdWUpIHRvIGJlIHZhbGlkXG5cdCAqXG5cdCAqIEBtZXRob2QgX2NoZWNrQ3VycmVuY3lGb3JtYXRcblx0ICogQGZvciBhY2NvdW50aW5nXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAgW2Zvcm1hdD1cIiVzJXZcIl0gU3RyaW5nIHdpdGggdGhlIGZvcm1hdCB0byBhcHBseSwgd2hlcmUgJXMgaXMgdGhlIGN1cnJlbmN5IHN5bWJvbCBhbmQgJXYgaXMgdGhlIHZhbHVlLlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCByZXByZXNudGluZyBmb3JtYXQgKHdpdGggcG9zLCBuZWcgYW5kIHplcm8gYXR0cmlidXRlcylcblx0ICovXG5cdGZ1bmN0aW9uIF9jaGVja0N1cnJlbmN5Rm9ybWF0KGZvcm1hdCkge1xuXHQgIC8vIEZvcm1hdCBzaG91bGQgYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgYHZhbHVlYCAoJyV2JykgbXVzdCBiZSBwcmVzZW50OlxuXHQgIGlmIChpc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdC5tYXRjaCgnJXYnKSkge1xuXHQgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gcG9zaXRpdmUsIG5lZ2F0aXZlIGFuZCB6ZXJvIGZvcm1hdHM6XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBwb3M6IGZvcm1hdCxcblx0ICAgICAgbmVnOiBmb3JtYXQucmVwbGFjZSgnLScsICcnKS5yZXBsYWNlKCcldicsICctJXYnKSxcblx0ICAgICAgemVybzogZm9ybWF0XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGZvcm1hdCB3YXMgZmluZTpcblx0ICByZXR1cm4gZm9ybWF0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvcm1hdCBhIG51bWJlciBpbnRvIGN1cnJlbmN5XG5cdCAqXG5cdCAqIFVzYWdlOiBhY2NvdW50aW5nLmZvcm1hdE1vbmV5KG51bWJlciwgc3ltYm9sLCBwcmVjaXNpb24sIHRob3VzYW5kc1NlcCwgZGVjaW1hbFNlcCwgZm9ybWF0KVxuXHQgKiBkZWZhdWx0czogKDAsICckJywgMiwgJywnLCAnLicsICclcyV2Jylcblx0ICpcblx0ICogTG9jYWxpc2UgYnkgb3ZlcnJpZGluZyB0aGUgc3ltYm9sLCBwcmVjaXNpb24sIHRob3VzYW5kIC8gZGVjaW1hbCBzZXBhcmF0b3JzIGFuZCBmb3JtYXRcblx0ICpcblx0ICogYGBganNcblx0ICogLy8gRGVmYXVsdCB1c2FnZTpcblx0ICogYWNjb3VudGluZy5mb3JtYXRNb25leSgxMjM0NTY3OCk7IC8vICQxMiwzNDUsNjc4LjAwXG5cdCAqXG5cdCAqIC8vIEV1cm9wZWFuIGZvcm1hdHRpbmcgKGN1c3RvbSBzeW1ib2wgYW5kIHNlcGFyYXRvcnMpLCBjYW4gYWxzbyB1c2Ugb3B0aW9ucyBvYmplY3QgYXMgc2Vjb25kIHBhcmFtZXRlcjpcblx0ICogYWNjb3VudGluZy5mb3JtYXRNb25leSg0OTk5Ljk5LCB7IHN5bWJvbDogXCLigqxcIiwgcHJlY2lzaW9uOiAyLCB0aG91c2FuZDogXCIuXCIsIGRlY2ltYWw6IFwiLFwiIH0pOyAvLyDigqw0Ljk5OSw5OVxuXHQgKlxuXHQgKiAvLyBOZWdhdGl2ZSB2YWx1ZXMgY2FuIGJlIGZvcm1hdHRlZCBuaWNlbHk6XG5cdCAqIGFjY291bnRpbmcuZm9ybWF0TW9uZXkoLTUwMDAwMCwgeyBzeW1ib2w6IFwiwqMgXCIsIHByZWNpc2lvbjogMCB9KTsgLy8gwqMgLTUwMCwwMDBcblx0ICpcblx0ICogLy8gU2ltcGxlIGBmb3JtYXRgIHN0cmluZyBhbGxvd3MgY29udHJvbCBvZiBzeW1ib2wgcG9zaXRpb24gKCV2ID0gdmFsdWUsICVzID0gc3ltYm9sKTpcblx0ICogYWNjb3VudGluZy5mb3JtYXRNb25leSg1MzE4MDA4LCB7IHN5bWJvbDogXCJHQlBcIiwgIGZvcm1hdDogXCIldiAlc1wiIH0pOyAvLyA1LDMxOCwwMDguMDAgR0JQXG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAbWV0aG9kIGZvcm1hdE1vbmV5XG5cdCAqIEBmb3IgYWNjb3VudGluZ1xuXHQgKiBAcGFyYW0ge051bWJlcn0gICAgICAgIG51bWJlciBOdW1iZXIgdG8gYmUgZm9ybWF0dGVkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIFtvcHRzPXt9XSBPYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG9wdGlvbnMgb2YgdGhlIG1ldGhvZC5cblx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgZ2l2ZW4gbnVtYmVyIHByb3Blcmx5IGZvcm1hdHRlZCBhcyBtb25leS5cblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG51bWJlcikge1xuXHQgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAvLyBSZXN1cnNpdmVseSBmb3JtYXQgYXJyYXlzOlxuXHQgIGlmIChBcnJheS5pc0FycmF5KG51bWJlcikpIHtcblx0ICAgIHJldHVybiBudW1iZXIubWFwKGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgcmV0dXJuIGZvcm1hdE1vbmV5KHZhbCwgb3B0cyk7XG5cdCAgICB9KTtcblx0ICB9XG5cblx0ICAvLyBCdWlsZCBvcHRpb25zIG9iamVjdCBmcm9tIHNlY29uZCBwYXJhbSAoaWYgb2JqZWN0KSBvciBhbGwgcGFyYW1zLCBleHRlbmRpbmcgZGVmYXVsdHM6XG5cdCAgb3B0cyA9IG9iamVjdEFzc2lnbih7fSwgc2V0dGluZ3MsIG9wdHMpO1xuXG5cdCAgLy8gQ2hlY2sgZm9ybWF0IChyZXR1cm5zIG9iamVjdCB3aXRoIHBvcywgbmVnIGFuZCB6ZXJvKTpcblx0ICB2YXIgZm9ybWF0cyA9IF9jaGVja0N1cnJlbmN5Rm9ybWF0KG9wdHMuZm9ybWF0KTtcblxuXHQgIC8vIENob29zZSB3aGljaCBmb3JtYXQgdG8gdXNlIGZvciB0aGlzIHZhbHVlOlxuXHQgIHZhciB1c2VGb3JtYXQgPSB1bmRlZmluZWQ7XG5cblx0ICBpZiAobnVtYmVyID4gMCkge1xuXHQgICAgdXNlRm9ybWF0ID0gZm9ybWF0cy5wb3M7XG5cdCAgfSBlbHNlIGlmIChudW1iZXIgPCAwKSB7XG5cdCAgICB1c2VGb3JtYXQgPSBmb3JtYXRzLm5lZztcblx0ICB9IGVsc2Uge1xuXHQgICAgdXNlRm9ybWF0ID0gZm9ybWF0cy56ZXJvO1xuXHQgIH1cblxuXHQgIC8vIFJldHVybiB3aXRoIGN1cnJlbmN5IHN5bWJvbCBhZGRlZDpcblx0ICByZXR1cm4gdXNlRm9ybWF0LnJlcGxhY2UoJyVzJywgb3B0cy5zeW1ib2wpLnJlcGxhY2UoJyV2JywgZm9ybWF0TnVtYmVyKE1hdGguYWJzKG51bWJlciksIG9wdHMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3JtYXQgYSBsaXN0IG9mIG51bWJlcnMgaW50byBhbiBhY2NvdW50aW5nIGNvbHVtbiwgcGFkZGluZyB3aXRoIHdoaXRlc3BhY2Vcblx0ICogdG8gbGluZSB1cCBjdXJyZW5jeSBzeW1ib2xzLCB0aG91c2FuZCBzZXBhcmF0b3JzIGFuZCBkZWNpbWFscyBwbGFjZXNcblx0ICpcblx0ICogTGlzdCBzaG91bGQgYmUgYW4gYXJyYXkgb2YgbnVtYmVyc1xuXHQgKlxuXHQgKiBSZXR1cm5zIGFycmF5IG9mIGFjY291dGluZy1mb3JtYXR0ZWQgbnVtYmVyIHN0cmluZ3Mgb2Ygc2FtZSBsZW5ndGhcblx0ICpcblx0ICogTkI6IGB3aGl0ZS1zcGFjZTpwcmVgIENTUyBydWxlIGlzIHJlcXVpcmVkIG9uIHRoZSBsaXN0IGNvbnRhaW5lciB0byBwcmV2ZW50XG5cdCAqIGJyb3dzZXJzIGZyb20gY29sbGFwc2luZyB0aGUgd2hpdGVzcGFjZSBpbiB0aGUgb3V0cHV0IHN0cmluZ3MuXG5cdCAqXG5cdCAqIGBgYGpzXG5cdCAqIGFjY291bnRpbmcuZm9ybWF0Q29sdW1uKFsxMjMuNSwgMzQ1Ni40OSwgNzc3ODg4Ljk5LCAxMjM0NTY3OCwgLTU0MzJdLCB7IHN5bWJvbDogXCIkIFwiIH0pO1xuXHQgKiBgYGBcblx0ICpcblx0ICogQG1ldGhvZCBmb3JtYXRDb2x1bW5cblx0ICogQGZvciBhY2NvdW50aW5nXG5cdCAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbGlzdCBBbiBhcnJheSBvZiBudW1iZXJzIHRvIGZvcm1hdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIFtvcHRzPXt9XSBPYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG9wdGlvbnMgb2YgdGhlIG1ldGhvZC5cblx0ICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbc3ltYm9sPVwiJFwiXSBTdHJpbmcgd2l0aCB0aGUgY3VycmVuY3kgc3ltYm9sLiBGb3IgY29udmVuaWVuY3kgaWYgY2FuIGJlIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgb3B0aW9ucyBvZiB0aGUgbWV0aG9kLlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9ICAgICAgIFtwcmVjaXNpb249Ml0gTnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAgW3Rob3VzYW5kPScsJ10gU3RyaW5nIHdpdGggdGhlIHRob3VzYW5kcyBzZXBhcmF0b3IuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAgW2RlY2ltYWw9XCIuXCJdIFN0cmluZyB3aXRoIHRoZSBkZWNpbWFsIHNlcGFyYXRvci5cblx0ICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBbZm9ybWF0PVwiJXMldlwiXSBTdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHRvIGFwcGx5LCB3aGVyZSAlcyBpcyB0aGUgY3VycmVuY3kgc3ltYm9sIGFuZCAldiBpcyB0aGUgdmFsdWUuXG5cdCAqIEByZXR1cm4ge0FycmF5PFN0cmluZz59IGFycmF5IG9mIGFjY291dGluZy1mb3JtYXR0ZWQgbnVtYmVyIHN0cmluZ3Mgb2Ygc2FtZSBsZW5ndGhcblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdENvbHVtbihsaXN0KSB7XG5cdCAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuXG5cdCAgLy8gQnVpbGQgb3B0aW9ucyBvYmplY3QgZnJvbSBzZWNvbmQgcGFyYW0gKGlmIG9iamVjdCkgb3IgYWxsIHBhcmFtcywgZXh0ZW5kaW5nIGRlZmF1bHRzOlxuXHQgIG9wdHMgPSBvYmplY3RBc3NpZ24oe30sIHNldHRpbmdzLCBvcHRzKTtcblxuXHQgIC8vIENoZWNrIGZvcm1hdCAocmV0dXJucyBvYmplY3Qgd2l0aCBwb3MsIG5lZyBhbmQgemVybyksIG9ubHkgbmVlZCBwb3MgZm9yIG5vdzpcblx0ICB2YXIgZm9ybWF0cyA9IF9jaGVja0N1cnJlbmN5Rm9ybWF0KG9wdHMuZm9ybWF0KTtcblxuXHQgIC8vIFdoZXRoZXIgdG8gcGFkIGF0IHN0YXJ0IG9mIHN0cmluZyBvciBhZnRlciBjdXJyZW5jeSBzeW1ib2w6XG5cdCAgdmFyIHBhZEFmdGVyU3ltYm9sID0gZm9ybWF0cy5wb3MuaW5kZXhPZignJXMnKSA8IGZvcm1hdHMucG9zLmluZGV4T2YoJyV2Jyk7XG5cblx0ICAvLyBTdG9yZSB2YWx1ZSBmb3IgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCBzdHJpbmcgaW4gdGhlIGNvbHVtbjpcblx0ICB2YXIgbWF4TGVuZ3RoID0gMDtcblxuXHQgIC8vIEZvcm1hdCB0aGUgbGlzdCBhY2NvcmRpbmcgdG8gb3B0aW9ucywgc3RvcmUgdGhlIGxlbmd0aCBvZiB0aGUgbG9uZ2VzdCBzdHJpbmc6XG5cdCAgdmFyIGZvcm1hdHRlZCA9IGxpc3QubWFwKGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0ICAgICAgLy8gUmVjdXJzaXZlbHkgZm9ybWF0IGNvbHVtbnMgaWYgbGlzdCBpcyBhIG11bHRpLWRpbWVuc2lvbmFsIGFycmF5OlxuXHQgICAgICByZXR1cm4gZm9ybWF0Q29sdW1uKHZhbCwgb3B0cyk7XG5cdCAgICB9XG5cdCAgICAvLyBDbGVhbiB1cCB0aGUgdmFsdWVcblx0ICAgIHZhbCA9IHVuZm9ybWF0KHZhbCwgb3B0cy5kZWNpbWFsKTtcblxuXHQgICAgLy8gQ2hvb3NlIHdoaWNoIGZvcm1hdCB0byB1c2UgZm9yIHRoaXMgdmFsdWUgKHBvcywgbmVnIG9yIHplcm8pOlxuXHQgICAgdmFyIHVzZUZvcm1hdCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKHZhbCA+IDApIHtcblx0ICAgICAgdXNlRm9ybWF0ID0gZm9ybWF0cy5wb3M7XG5cdCAgICB9IGVsc2UgaWYgKHZhbCA8IDApIHtcblx0ICAgICAgdXNlRm9ybWF0ID0gZm9ybWF0cy5uZWc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB1c2VGb3JtYXQgPSBmb3JtYXRzLnplcm87XG5cdCAgICB9XG5cblx0ICAgIC8vIEZvcm1hdCB0aGlzIHZhbHVlLCBwdXNoIGludG8gZm9ybWF0dGVkIGxpc3QgYW5kIHNhdmUgdGhlIGxlbmd0aDpcblx0ICAgIHZhciBmVmFsID0gdXNlRm9ybWF0LnJlcGxhY2UoJyVzJywgb3B0cy5zeW1ib2wpLnJlcGxhY2UoJyV2JywgZm9ybWF0TnVtYmVyKE1hdGguYWJzKHZhbCksIG9wdHMpKTtcblxuXHQgICAgaWYgKGZWYWwubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdCAgICAgIG1heExlbmd0aCA9IGZWYWwubGVuZ3RoO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZlZhbDtcblx0ICB9KTtcblxuXHQgIC8vIFBhZCBlYWNoIG51bWJlciBpbiB0aGUgbGlzdCBhbmQgc2VuZCBiYWNrIHRoZSBjb2x1bW4gb2YgbnVtYmVyczpcblx0ICByZXR1cm4gZm9ybWF0dGVkLm1hcChmdW5jdGlvbiAodmFsKSB7XG5cdCAgICAvLyBPbmx5IGlmIHRoaXMgaXMgYSBzdHJpbmcgKG5vdCBhIG5lc3RlZCBhcnJheSwgd2hpY2ggd291bGQgaGF2ZSBhbHJlYWR5IGJlZW4gcGFkZGVkKTpcblx0ICAgIGlmIChpc1N0cmluZyh2YWwpICYmIHZhbC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcblx0ICAgICAgLy8gRGVwZW5kaW5nIG9uIHN5bWJvbCBwb3NpdGlvbiwgcGFkIGFmdGVyIHN5bWJvbCBvciBhdCBpbmRleCAwOlxuXHQgICAgICByZXR1cm4gcGFkQWZ0ZXJTeW1ib2wgPyB2YWwucmVwbGFjZShvcHRzLnN5bWJvbCwgb3B0cy5zeW1ib2wgKyBuZXcgQXJyYXkobWF4TGVuZ3RoIC0gdmFsLmxlbmd0aCArIDEpLmpvaW4oJyAnKSkgOiBuZXcgQXJyYXkobWF4TGVuZ3RoIC0gdmFsLmxlbmd0aCArIDEpLmpvaW4oJyAnKSArIHZhbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiB2YWw7XG5cdCAgfSk7XG5cdH1cblxuXHRleHBvcnRzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdGV4cG9ydHMudW5mb3JtYXQgPSB1bmZvcm1hdDtcblx0ZXhwb3J0cy50b0ZpeGVkID0gdG9GaXhlZDtcblx0ZXhwb3J0cy5mb3JtYXRNb25leSA9IGZvcm1hdE1vbmV5O1xuXHRleHBvcnRzLmZvcm1hdE51bWJlciA9IGZvcm1hdE51bWJlcjtcblx0ZXhwb3J0cy5mb3JtYXRDb2x1bW4gPSBmb3JtYXRDb2x1bW47XG5cdGV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0TW9uZXk7XG5cdGV4cG9ydHMucGFyc2UgPSB1bmZvcm1hdDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWNjb3VudGluZy51bWQuanMubWFwIiwiLyohIGRlY2ltYWwuanMtbGlnaHQgdjIuNS4wIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWtlTWNsL2RlY2ltYWwuanMtbGlnaHQvTElDRU5DRSAqL1xyXG47KGZ1bmN0aW9uIChnbG9iYWxTY29wZSkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gIC8qXHJcbiAgICogIGRlY2ltYWwuanMtbGlnaHQgdjIuNS4wXHJcbiAgICogIEFuIGFyYml0cmFyeS1wcmVjaXNpb24gRGVjaW1hbCB0eXBlIGZvciBKYXZhU2NyaXB0LlxyXG4gICAqICBodHRwczovL2dpdGh1Yi5jb20vTWlrZU1jbC9kZWNpbWFsLmpzLWxpZ2h0XHJcbiAgICogIENvcHlyaWdodCAoYykgMjAxOCBNaWNoYWVsIE1jbGF1Z2hsaW4gPE04Y2g4OGxAZ21haWwuY29tPlxyXG4gICAqICBNSVQgRXhwYXQgTGljZW5jZVxyXG4gICAqL1xyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEVESVRBQkxFIERFRkFVTFRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcblxyXG4gICAgLy8gVGhlIGxpbWl0IG9uIHRoZSB2YWx1ZSBvZiBgcHJlY2lzaW9uYCwgYW5kIG9uIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgYXJndW1lbnQgdG9cclxuICAgIC8vIGB0b0RlY2ltYWxQbGFjZXNgLCBgdG9FeHBvbmVudGlhbGAsIGB0b0ZpeGVkYCwgYHRvUHJlY2lzaW9uYCBhbmQgYHRvU2lnbmlmaWNhbnREaWdpdHNgLlxyXG4gIHZhciBNQVhfRElHSVRTID0gMWU5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgdG8gMWU5XHJcblxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBvZiB0aGUgRGVjaW1hbCBjb25zdHJ1Y3Rvci5cclxuICAgIERlY2ltYWwgPSB7XHJcblxyXG4gICAgICAvLyBUaGVzZSB2YWx1ZXMgbXVzdCBiZSBpbnRlZ2VycyB3aXRoaW4gdGhlIHN0YXRlZCByYW5nZXMgKGluY2x1c2l2ZSkuXHJcbiAgICAgIC8vIE1vc3Qgb2YgdGhlc2UgdmFsdWVzIGNhbiBiZSBjaGFuZ2VkIGR1cmluZyBydW4tdGltZSB1c2luZyBgRGVjaW1hbC5jb25maWdgLlxyXG5cclxuICAgICAgLy8gVGhlIG1heGltdW0gbnVtYmVyIG9mIHNpZ25pZmljYW50IGRpZ2l0cyBvZiB0aGUgcmVzdWx0IG9mIGEgY2FsY3VsYXRpb24gb3IgYmFzZSBjb252ZXJzaW9uLlxyXG4gICAgICAvLyBFLmcuIGBEZWNpbWFsLmNvbmZpZyh7IHByZWNpc2lvbjogMjAgfSk7YFxyXG4gICAgICBwcmVjaXNpb246IDIwLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxIHRvIE1BWF9ESUdJVFNcclxuXHJcbiAgICAgIC8vIFRoZSByb3VuZGluZyBtb2RlIHVzZWQgYnkgZGVmYXVsdCBieSBgdG9JbnRlZ2VyYCwgYHRvRGVjaW1hbFBsYWNlc2AsIGB0b0V4cG9uZW50aWFsYCxcclxuICAgICAgLy8gYHRvRml4ZWRgLCBgdG9QcmVjaXNpb25gIGFuZCBgdG9TaWduaWZpY2FudERpZ2l0c2AuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFJPVU5EX1VQICAgICAgICAgMCBBd2F5IGZyb20gemVyby5cclxuICAgICAgLy8gUk9VTkRfRE9XTiAgICAgICAxIFRvd2FyZHMgemVyby5cclxuICAgICAgLy8gUk9VTkRfQ0VJTCAgICAgICAyIFRvd2FyZHMgK0luZmluaXR5LlxyXG4gICAgICAvLyBST1VORF9GTE9PUiAgICAgIDMgVG93YXJkcyAtSW5maW5pdHkuXHJcbiAgICAgIC8vIFJPVU5EX0hBTEZfVVAgICAgNCBUb3dhcmRzIG5lYXJlc3QgbmVpZ2hib3VyLiBJZiBlcXVpZGlzdGFudCwgdXAuXHJcbiAgICAgIC8vIFJPVU5EX0hBTEZfRE9XTiAgNSBUb3dhcmRzIG5lYXJlc3QgbmVpZ2hib3VyLiBJZiBlcXVpZGlzdGFudCwgZG93bi5cclxuICAgICAgLy8gUk9VTkRfSEFMRl9FVkVOICA2IFRvd2FyZHMgbmVhcmVzdCBuZWlnaGJvdXIuIElmIGVxdWlkaXN0YW50LCB0b3dhcmRzIGV2ZW4gbmVpZ2hib3VyLlxyXG4gICAgICAvLyBST1VORF9IQUxGX0NFSUwgIDcgVG93YXJkcyBuZWFyZXN0IG5laWdoYm91ci4gSWYgZXF1aWRpc3RhbnQsIHRvd2FyZHMgK0luZmluaXR5LlxyXG4gICAgICAvLyBST1VORF9IQUxGX0ZMT09SIDggVG93YXJkcyBuZWFyZXN0IG5laWdoYm91ci4gSWYgZXF1aWRpc3RhbnQsIHRvd2FyZHMgLUluZmluaXR5LlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBFLmcuXHJcbiAgICAgIC8vIGBEZWNpbWFsLnJvdW5kaW5nID0gNDtgXHJcbiAgICAgIC8vIGBEZWNpbWFsLnJvdW5kaW5nID0gRGVjaW1hbC5ST1VORF9IQUxGX1VQO2BcclxuICAgICAgcm91bmRpbmc6IDQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCB0byA4XHJcblxyXG4gICAgICAvLyBUaGUgZXhwb25lbnQgdmFsdWUgYXQgYW5kIGJlbmVhdGggd2hpY2ggYHRvU3RyaW5nYCByZXR1cm5zIGV4cG9uZW50aWFsIG5vdGF0aW9uLlxyXG4gICAgICAvLyBKYXZhU2NyaXB0IG51bWJlcnM6IC03XHJcbiAgICAgIHRvRXhwTmVnOiAtNywgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgdG8gLU1BWF9FXHJcblxyXG4gICAgICAvLyBUaGUgZXhwb25lbnQgdmFsdWUgYXQgYW5kIGFib3ZlIHdoaWNoIGB0b1N0cmluZ2AgcmV0dXJucyBleHBvbmVudGlhbCBub3RhdGlvbi5cclxuICAgICAgLy8gSmF2YVNjcmlwdCBudW1iZXJzOiAyMVxyXG4gICAgICB0b0V4cFBvczogIDIxLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwIHRvIE1BWF9FXHJcblxyXG4gICAgICAvLyBUaGUgbmF0dXJhbCBsb2dhcml0aG0gb2YgMTAuXHJcbiAgICAgIC8vIDExNSBkaWdpdHNcclxuICAgICAgTE4xMDogJzIuMzAyNTg1MDkyOTk0MDQ1Njg0MDE3OTkxNDU0Njg0MzY0MjA3NjAxMTAxNDg4NjI4NzcyOTc2MDMzMzI3OTAwOTY3NTcyNjA5Njc3MzUyNDgwMjM1OTk3MjA1MDg5NTk4Mjk4MzQxOTY3Nzg0MDQyMjg2J1xyXG4gICAgfSxcclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCBPRiBFRElUQUJMRSBERUZBVUxUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5cclxuICAgIGV4dGVybmFsID0gdHJ1ZSxcclxuXHJcbiAgICBkZWNpbWFsRXJyb3IgPSAnW0RlY2ltYWxFcnJvcl0gJyxcclxuICAgIGludmFsaWRBcmd1bWVudCA9IGRlY2ltYWxFcnJvciArICdJbnZhbGlkIGFyZ3VtZW50OiAnLFxyXG4gICAgZXhwb25lbnRPdXRPZlJhbmdlID0gZGVjaW1hbEVycm9yICsgJ0V4cG9uZW50IG91dCBvZiByYW5nZTogJyxcclxuXHJcbiAgICBtYXRoZmxvb3IgPSBNYXRoLmZsb29yLFxyXG4gICAgbWF0aHBvdyA9IE1hdGgucG93LFxyXG5cclxuICAgIGlzRGVjaW1hbCA9IC9eKFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPyQvaSxcclxuXHJcbiAgICBPTkUsXHJcbiAgICBCQVNFID0gMWU3LFxyXG4gICAgTE9HX0JBU0UgPSA3LFxyXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTEsXHJcbiAgICBNQVhfRSA9IG1hdGhmbG9vcihNQVhfU0FGRV9JTlRFR0VSIC8gTE9HX0JBU0UpLCAgICAvLyAxMjg2NzQyNzUwNjc3Mjg0XHJcblxyXG4gICAgLy8gRGVjaW1hbC5wcm90b3R5cGUgb2JqZWN0XHJcbiAgICBQID0ge307XHJcblxyXG5cclxuICAvLyBEZWNpbWFsIHByb3RvdHlwZSBtZXRob2RzXHJcblxyXG5cclxuICAvKlxyXG4gICAqICBhYnNvbHV0ZVZhbHVlICAgICAgICAgICAgICAgICAgICAgICBhYnNcclxuICAgKiAgY29tcGFyZWRUbyAgICAgICAgICAgICAgICAgICAgICAgICAgY21wXHJcbiAgICogIGRlY2ltYWxQbGFjZXMgICAgICAgICAgICAgICAgICAgICAgIGRwXHJcbiAgICogIGRpdmlkZWRCeSAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdlxyXG4gICAqICBkaXZpZGVkVG9JbnRlZ2VyQnkgICAgICAgICAgICAgICAgICBpZGl2XHJcbiAgICogIGVxdWFscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxXHJcbiAgICogIGV4cG9uZW50XHJcbiAgICogIGdyZWF0ZXJUaGFuICAgICAgICAgICAgICAgICAgICAgICAgIGd0XHJcbiAgICogIGdyZWF0ZXJUaGFuT3JFcXVhbFRvICAgICAgICAgICAgICAgIGd0ZVxyXG4gICAqICBpc0ludGVnZXIgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2ludFxyXG4gICAqICBpc05lZ2F0aXZlICAgICAgICAgICAgICAgICAgICAgICAgICBpc25lZ1xyXG4gICAqICBpc1Bvc2l0aXZlICAgICAgICAgICAgICAgICAgICAgICAgICBpc3Bvc1xyXG4gICAqICBpc1plcm9cclxuICAgKiAgbGVzc1RoYW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbHRcclxuICAgKiAgbGVzc1RoYW5PckVxdWFsVG8gICAgICAgICAgICAgICAgICAgbHRlXHJcbiAgICogIGxvZ2FyaXRobSAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1xyXG4gICAqICBtaW51cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJcclxuICAgKiAgbW9kdWxvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kXHJcbiAgICogIG5hdHVyYWxFeHBvbmVudGlhbCAgICAgICAgICAgICAgICAgIGV4cFxyXG4gICAqICBuYXR1cmFsTG9nYXJpdGhtICAgICAgICAgICAgICAgICAgICBsblxyXG4gICAqICBuZWdhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWdcclxuICAgKiAgcGx1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkXHJcbiAgICogIHByZWNpc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkXHJcbiAgICogIHNxdWFyZVJvb3QgICAgICAgICAgICAgICAgICAgICAgICAgIHNxcnRcclxuICAgKiAgdGltZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsXHJcbiAgICogIHRvRGVjaW1hbFBsYWNlcyAgICAgICAgICAgICAgICAgICAgIHRvZHBcclxuICAgKiAgdG9FeHBvbmVudGlhbFxyXG4gICAqICB0b0ZpeGVkXHJcbiAgICogIHRvSW50ZWdlciAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvaW50XHJcbiAgICogIHRvTnVtYmVyXHJcbiAgICogIHRvUG93ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvd1xyXG4gICAqICB0b1ByZWNpc2lvblxyXG4gICAqICB0b1NpZ25pZmljYW50RGlnaXRzICAgICAgICAgICAgICAgICB0b3NkXHJcbiAgICogIHRvU3RyaW5nXHJcbiAgICogIHZhbHVlT2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbFxyXG4gICAqL1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC5hYnNvbHV0ZVZhbHVlID0gUC5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgaWYgKHgucykgeC5zID0gMTtcclxuICAgIHJldHVybiB4O1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVyblxyXG4gICAqICAgMSAgICBpZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGlzIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgb2YgYHlgLFxyXG4gICAqICAtMSAgICBpZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGlzIGxlc3MgdGhhbiB0aGUgdmFsdWUgb2YgYHlgLFxyXG4gICAqICAgMCAgICBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgKlxyXG4gICAqL1xyXG4gIFAuY29tcGFyZWRUbyA9IFAuY21wID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHZhciBpLCBqLCB4ZEwsIHlkTCxcclxuICAgICAgeCA9IHRoaXM7XHJcblxyXG4gICAgeSA9IG5ldyB4LmNvbnN0cnVjdG9yKHkpO1xyXG5cclxuICAgIC8vIFNpZ25zIGRpZmZlcj9cclxuICAgIGlmICh4LnMgIT09IHkucykgcmV0dXJuIHgucyB8fCAteS5zO1xyXG5cclxuICAgIC8vIENvbXBhcmUgZXhwb25lbnRzLlxyXG4gICAgaWYgKHguZSAhPT0geS5lKSByZXR1cm4geC5lID4geS5lIF4geC5zIDwgMCA/IDEgOiAtMTtcclxuXHJcbiAgICB4ZEwgPSB4LmQubGVuZ3RoO1xyXG4gICAgeWRMID0geS5kLmxlbmd0aDtcclxuXHJcbiAgICAvLyBDb21wYXJlIGRpZ2l0IGJ5IGRpZ2l0LlxyXG4gICAgZm9yIChpID0gMCwgaiA9IHhkTCA8IHlkTCA/IHhkTCA6IHlkTDsgaSA8IGo7ICsraSkge1xyXG4gICAgICBpZiAoeC5kW2ldICE9PSB5LmRbaV0pIHJldHVybiB4LmRbaV0gPiB5LmRbaV0gXiB4LnMgPCAwID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbXBhcmUgbGVuZ3Rocy5cclxuICAgIHJldHVybiB4ZEwgPT09IHlkTCA/IDAgOiB4ZEwgPiB5ZEwgXiB4LnMgPCAwID8gMSA6IC0xO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIG9mIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmRlY2ltYWxQbGFjZXMgPSBQLmRwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHggPSB0aGlzLFxyXG4gICAgICB3ID0geC5kLmxlbmd0aCAtIDEsXHJcbiAgICAgIGRwID0gKHcgLSB4LmUpICogTE9HX0JBU0U7XHJcblxyXG4gICAgLy8gU3VidHJhY3QgdGhlIG51bWJlciBvZiB0cmFpbGluZyB6ZXJvcyBvZiB0aGUgbGFzdCB3b3JkLlxyXG4gICAgdyA9IHguZFt3XTtcclxuICAgIGlmICh3KSBmb3IgKDsgdyAlIDEwID09IDA7IHcgLz0gMTApIGRwLS07XHJcblxyXG4gICAgcmV0dXJuIGRwIDwgMCA/IDAgOiBkcDtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGRpdmlkZWQgYnkgYHlgLCB0cnVuY2F0ZWQgdG9cclxuICAgKiBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmRpdmlkZWRCeSA9IFAuZGl2ID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHJldHVybiBkaXZpZGUodGhpcywgbmV3IHRoaXMuY29uc3RydWN0b3IoeSkpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSBpbnRlZ2VyIHBhcnQgb2YgZGl2aWRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbFxyXG4gICAqIGJ5IHRoZSB2YWx1ZSBvZiBgeWAsIHRydW5jYXRlZCB0byBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmRpdmlkZWRUb0ludGVnZXJCeSA9IFAuaWRpdiA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgeCA9IHRoaXMsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIHJvdW5kKGRpdmlkZSh4LCBuZXcgQ3Rvcih5KSwgMCwgMSksIEN0b3IucHJlY2lzaW9uKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZSBvZiBgeWAsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmVxdWFscyA9IFAuZXEgPSBmdW5jdGlvbiAoeSkge1xyXG4gICAgcmV0dXJuICF0aGlzLmNtcCh5KTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gdGhlIChiYXNlIDEwKSBleHBvbmVudCB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgKHRoaXMuZSBpcyB0aGUgYmFzZSAxMDAwMDAwMCBleHBvbmVudCkuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmV4cG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGdldEJhc2UxMEV4cG9uZW50KHRoaXMpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgaXMgZ3JlYXRlciB0aGFuIHRoZSB2YWx1ZSBvZiBgeWAsIG90aGVyd2lzZSByZXR1cm5cclxuICAgKiBmYWxzZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAuZ3JlYXRlclRoYW4gPSBQLmd0ID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHJldHVybiB0aGlzLmNtcCh5KSA+IDA7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIGB5YCxcclxuICAgKiBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC5ncmVhdGVyVGhhbk9yRXF1YWxUbyA9IFAuZ3RlID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHJldHVybiB0aGlzLmNtcCh5KSA+PSAwO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgaXMgYW4gaW50ZWdlciwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAuaXNJbnRlZ2VyID0gUC5pc2ludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmUgPiB0aGlzLmQubGVuZ3RoIC0gMjtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGlzIG5lZ2F0aXZlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC5pc05lZ2F0aXZlID0gUC5pc25lZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnMgPCAwO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgaXMgcG9zaXRpdmUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXHJcbiAgICpcclxuICAgKi9cclxuICBQLmlzUG9zaXRpdmUgPSBQLmlzcG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucyA+IDA7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCBpcyAwLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zID09PSAwO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgaXMgbGVzcyB0aGFuIGB5YCwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAubGVzc1RoYW4gPSBQLmx0ID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHJldHVybiB0aGlzLmNtcCh5KSA8IDA7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYHlgLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC5sZXNzVGhhbk9yRXF1YWxUbyA9IFAubHRlID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHJldHVybiB0aGlzLmNtcCh5KSA8IDE7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRoZSBsb2dhcml0aG0gb2YgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCB0byB0aGUgc3BlY2lmaWVkIGJhc2UsIHRydW5jYXRlZCB0b1xyXG4gICAqIGBwcmVjaXNpb25gIHNpZ25pZmljYW50IGRpZ2l0cy5cclxuICAgKlxyXG4gICAqIElmIG5vIGJhc2UgaXMgc3BlY2lmaWVkLCByZXR1cm4gbG9nWzEwXSh4KS5cclxuICAgKlxyXG4gICAqIGxvZ1tiYXNlXSh4KSA9IGxuKHgpIC8gbG4oYmFzZSlcclxuICAgKlxyXG4gICAqIFRoZSBtYXhpbXVtIGVycm9yIG9mIHRoZSByZXN1bHQgaXMgMSB1bHAgKHVuaXQgaW4gdGhlIGxhc3QgcGxhY2UpLlxyXG4gICAqXHJcbiAgICogW2Jhc2VdIHtudW1iZXJ8c3RyaW5nfERlY2ltYWx9IFRoZSBiYXNlIG9mIHRoZSBsb2dhcml0aG0uXHJcbiAgICpcclxuICAgKi9cclxuICBQLmxvZ2FyaXRobSA9IFAubG9nID0gZnVuY3Rpb24gKGJhc2UpIHtcclxuICAgIHZhciByLFxyXG4gICAgICB4ID0gdGhpcyxcclxuICAgICAgQ3RvciA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIHByID0gQ3Rvci5wcmVjaXNpb24sXHJcbiAgICAgIHdwciA9IHByICsgNTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGJhc2UgaXMgMTAuXHJcbiAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgIGJhc2UgPSBuZXcgQ3RvcigxMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNlID0gbmV3IEN0b3IoYmFzZSk7XHJcblxyXG4gICAgICAvLyBsb2dbLWJdKHgpID0gTmFOXHJcbiAgICAgIC8vIGxvZ1swXSh4KSAgPSBOYU5cclxuICAgICAgLy8gbG9nWzFdKHgpICA9IE5hTlxyXG4gICAgICBpZiAoYmFzZS5zIDwgMSB8fCBiYXNlLmVxKE9ORSkpIHRocm93IEVycm9yKGRlY2ltYWxFcnJvciArICdOYU4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2dbYl0oLXgpID0gTmFOXHJcbiAgICAvLyBsb2dbYl0oMCkgPSAtSW5maW5pdHlcclxuICAgIGlmICh4LnMgPCAxKSB0aHJvdyBFcnJvcihkZWNpbWFsRXJyb3IgKyAoeC5zID8gJ05hTicgOiAnLUluZmluaXR5JykpO1xyXG5cclxuICAgIC8vIGxvZ1tiXSgxKSA9IDBcclxuICAgIGlmICh4LmVxKE9ORSkpIHJldHVybiBuZXcgQ3RvcigwKTtcclxuXHJcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xyXG4gICAgciA9IGRpdmlkZShsbih4LCB3cHIpLCBsbihiYXNlLCB3cHIpLCB3cHIpO1xyXG4gICAgZXh0ZXJuYWwgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiByb3VuZChyLCBwcik7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgbmV3IERlY2ltYWwgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCBtaW51cyBgeWAsIHRydW5jYXRlZCB0b1xyXG4gICAqIGBwcmVjaXNpb25gIHNpZ25pZmljYW50IGRpZ2l0cy5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAubWludXMgPSBQLnN1YiA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgeCA9IHRoaXM7XHJcbiAgICB5ID0gbmV3IHguY29uc3RydWN0b3IoeSk7XHJcbiAgICByZXR1cm4geC5zID09IHkucyA/IHN1YnRyYWN0KHgsIHkpIDogYWRkKHgsICh5LnMgPSAteS5zLCB5KSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgbmV3IERlY2ltYWwgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCBtb2R1bG8gYHlgLCB0cnVuY2F0ZWQgdG9cclxuICAgKiBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLm1vZHVsbyA9IFAubW9kID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHZhciBxLFxyXG4gICAgICB4ID0gdGhpcyxcclxuICAgICAgQ3RvciA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIHByID0gQ3Rvci5wcmVjaXNpb247XHJcblxyXG4gICAgeSA9IG5ldyBDdG9yKHkpO1xyXG5cclxuICAgIC8vIHggJSAwID0gTmFOXHJcbiAgICBpZiAoIXkucykgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ05hTicpO1xyXG5cclxuICAgIC8vIFJldHVybiB4IGlmIHggaXMgMC5cclxuICAgIGlmICgheC5zKSByZXR1cm4gcm91bmQobmV3IEN0b3IoeCksIHByKTtcclxuXHJcbiAgICAvLyBQcmV2ZW50IHJvdW5kaW5nIG9mIGludGVybWVkaWF0ZSBjYWxjdWxhdGlvbnMuXHJcbiAgICBleHRlcm5hbCA9IGZhbHNlO1xyXG4gICAgcSA9IGRpdmlkZSh4LCB5LCAwLCAxKS50aW1lcyh5KTtcclxuICAgIGV4dGVybmFsID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4geC5taW51cyhxKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgbmF0dXJhbCBleHBvbmVudGlhbCBvZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsLFxyXG4gICAqIGkuZS4gdGhlIGJhc2UgZSByYWlzZWQgdG8gdGhlIHBvd2VyIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwsIHRydW5jYXRlZCB0byBgcHJlY2lzaW9uYFxyXG4gICAqIHNpZ25pZmljYW50IGRpZ2l0cy5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAubmF0dXJhbEV4cG9uZW50aWFsID0gUC5leHAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZXhwKHRoaXMpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBvZiB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsLFxyXG4gICAqIHRydW5jYXRlZCB0byBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLm5hdHVyYWxMb2dhcml0aG0gPSBQLmxuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGxuKHRoaXMpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgbmVnYXRlZCwgaS5lLiBhcyBpZiBtdWx0aXBsaWVkIGJ5XHJcbiAgICogLTEuXHJcbiAgICpcclxuICAgKi9cclxuICBQLm5lZ2F0ZWQgPSBQLm5lZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB4ID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XHJcbiAgICB4LnMgPSAteC5zIHx8IDA7XHJcbiAgICByZXR1cm4geDtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIHBsdXMgYHlgLCB0cnVuY2F0ZWQgdG9cclxuICAgKiBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLnBsdXMgPSBQLmFkZCA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgeCA9IHRoaXM7XHJcbiAgICB5ID0gbmV3IHguY29uc3RydWN0b3IoeSk7XHJcbiAgICByZXR1cm4geC5zID09IHkucyA/IGFkZCh4LCB5KSA6IHN1YnRyYWN0KHgsICh5LnMgPSAteS5zLCB5KSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzIG9mIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwuXHJcbiAgICpcclxuICAgKiBbel0ge2Jvb2xlYW58bnVtYmVyfSBXaGV0aGVyIHRvIGNvdW50IGludGVnZXItcGFydCB0cmFpbGluZyB6ZXJvczogdHJ1ZSwgZmFsc2UsIDEgb3IgMC5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAucHJlY2lzaW9uID0gUC5zZCA9IGZ1bmN0aW9uICh6KSB7XHJcbiAgICB2YXIgZSwgc2QsIHcsXHJcbiAgICAgIHggPSB0aGlzO1xyXG5cclxuICAgIGlmICh6ICE9PSB2b2lkIDAgJiYgeiAhPT0gISF6ICYmIHogIT09IDEgJiYgeiAhPT0gMCkgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgeik7XHJcblxyXG4gICAgZSA9IGdldEJhc2UxMEV4cG9uZW50KHgpICsgMTtcclxuICAgIHcgPSB4LmQubGVuZ3RoIC0gMTtcclxuICAgIHNkID0gdyAqIExPR19CQVNFICsgMTtcclxuICAgIHcgPSB4LmRbd107XHJcblxyXG4gICAgLy8gSWYgbm9uLXplcm8uLi5cclxuICAgIGlmICh3KSB7XHJcblxyXG4gICAgICAvLyBTdWJ0cmFjdCB0aGUgbnVtYmVyIG9mIHRyYWlsaW5nIHplcm9zIG9mIHRoZSBsYXN0IHdvcmQuXHJcbiAgICAgIGZvciAoOyB3ICUgMTAgPT0gMDsgdyAvPSAxMCkgc2QtLTtcclxuXHJcbiAgICAgIC8vIEFkZCB0aGUgbnVtYmVyIG9mIGRpZ2l0cyBvZiB0aGUgZmlyc3Qgd29yZC5cclxuICAgICAgZm9yICh3ID0geC5kWzBdOyB3ID49IDEwOyB3IC89IDEwKSBzZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB6ICYmIGUgPiBzZCA/IGUgOiBzZDtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhpcyBEZWNpbWFsLCB0cnVuY2F0ZWQgdG8gYHByZWNpc2lvbmBcclxuICAgKiBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLnNxdWFyZVJvb3QgPSBQLnNxcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZSwgbiwgcHIsIHIsIHMsIHQsIHdwcixcclxuICAgICAgeCA9IHRoaXMsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG5cclxuICAgIC8vIE5lZ2F0aXZlIG9yIHplcm8/XHJcbiAgICBpZiAoeC5zIDwgMSkge1xyXG4gICAgICBpZiAoIXgucykgcmV0dXJuIG5ldyBDdG9yKDApO1xyXG5cclxuICAgICAgLy8gc3FydCgteCkgPSBOYU5cclxuICAgICAgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ05hTicpO1xyXG4gICAgfVxyXG5cclxuICAgIGUgPSBnZXRCYXNlMTBFeHBvbmVudCh4KTtcclxuICAgIGV4dGVybmFsID0gZmFsc2U7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBlc3RpbWF0ZS5cclxuICAgIHMgPSBNYXRoLnNxcnQoK3gpO1xyXG5cclxuICAgIC8vIE1hdGguc3FydCB1bmRlcmZsb3cvb3ZlcmZsb3c/XHJcbiAgICAvLyBQYXNzIHggdG8gTWF0aC5zcXJ0IGFzIGludGVnZXIsIHRoZW4gYWRqdXN0IHRoZSBleHBvbmVudCBvZiB0aGUgcmVzdWx0LlxyXG4gICAgaWYgKHMgPT0gMCB8fCBzID09IDEgLyAwKSB7XHJcbiAgICAgIG4gPSBkaWdpdHNUb1N0cmluZyh4LmQpO1xyXG4gICAgICBpZiAoKG4ubGVuZ3RoICsgZSkgJSAyID09IDApIG4gKz0gJzAnO1xyXG4gICAgICBzID0gTWF0aC5zcXJ0KG4pO1xyXG4gICAgICBlID0gbWF0aGZsb29yKChlICsgMSkgLyAyKSAtIChlIDwgMCB8fCBlICUgMik7XHJcblxyXG4gICAgICBpZiAocyA9PSAxIC8gMCkge1xyXG4gICAgICAgIG4gPSAnMWUnICsgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuID0gcy50b0V4cG9uZW50aWFsKCk7XHJcbiAgICAgICAgbiA9IG4uc2xpY2UoMCwgbi5pbmRleE9mKCdlJykgKyAxKSArIGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHIgPSBuZXcgQ3RvcihuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHIgPSBuZXcgQ3RvcihzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByID0gQ3Rvci5wcmVjaXNpb247XHJcbiAgICBzID0gd3ByID0gcHIgKyAzO1xyXG5cclxuICAgIC8vIE5ld3Rvbi1SYXBoc29uIGl0ZXJhdGlvbi5cclxuICAgIGZvciAoOzspIHtcclxuICAgICAgdCA9IHI7XHJcbiAgICAgIHIgPSB0LnBsdXMoZGl2aWRlKHgsIHQsIHdwciArIDIpKS50aW1lcygwLjUpO1xyXG5cclxuICAgICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgd3ByKSA9PT0gKG4gPSBkaWdpdHNUb1N0cmluZyhyLmQpKS5zbGljZSgwLCB3cHIpKSB7XHJcbiAgICAgICAgbiA9IG4uc2xpY2Uod3ByIC0gMywgd3ByICsgMSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSA0dGggcm91bmRpbmcgZGlnaXQgbWF5IGJlIGluIGVycm9yIGJ5IC0xIHNvIGlmIHRoZSA0IHJvdW5kaW5nIGRpZ2l0cyBhcmUgOTk5OSBvclxyXG4gICAgICAgIC8vIDQ5OTksIGkuZS4gYXBwcm9hY2hpbmcgYSByb3VuZGluZyBib3VuZGFyeSwgY29udGludWUgdGhlIGl0ZXJhdGlvbi5cclxuICAgICAgICBpZiAocyA9PSB3cHIgJiYgbiA9PSAnNDk5OScpIHtcclxuXHJcbiAgICAgICAgICAvLyBPbiB0aGUgZmlyc3QgaXRlcmF0aW9uIG9ubHksIGNoZWNrIHRvIHNlZSBpZiByb3VuZGluZyB1cCBnaXZlcyB0aGUgZXhhY3QgcmVzdWx0IGFzIHRoZVxyXG4gICAgICAgICAgLy8gbmluZXMgbWF5IGluZmluaXRlbHkgcmVwZWF0LlxyXG4gICAgICAgICAgcm91bmQodCwgcHIgKyAxLCAwKTtcclxuXHJcbiAgICAgICAgICBpZiAodC50aW1lcyh0KS5lcSh4KSkge1xyXG4gICAgICAgICAgICByID0gdDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuICE9ICc5OTk5Jykge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cHIgKz0gNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4dGVybmFsID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gcm91bmQociwgcHIpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgdGltZXMgYHlgLCB0cnVuY2F0ZWQgdG9cclxuICAgKiBgcHJlY2lzaW9uYCBzaWduaWZpY2FudCBkaWdpdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBQLnRpbWVzID0gUC5tdWwgPSBmdW5jdGlvbiAoeSkge1xyXG4gICAgdmFyIGNhcnJ5LCBlLCBpLCBrLCByLCByTCwgdCwgeGRMLCB5ZEwsXHJcbiAgICAgIHggPSB0aGlzLFxyXG4gICAgICBDdG9yID0geC5jb25zdHJ1Y3RvcixcclxuICAgICAgeGQgPSB4LmQsXHJcbiAgICAgIHlkID0gKHkgPSBuZXcgQ3Rvcih5KSkuZDtcclxuXHJcbiAgICAvLyBSZXR1cm4gMCBpZiBlaXRoZXIgaXMgMC5cclxuICAgIGlmICgheC5zIHx8ICF5LnMpIHJldHVybiBuZXcgQ3RvcigwKTtcclxuXHJcbiAgICB5LnMgKj0geC5zO1xyXG4gICAgZSA9IHguZSArIHkuZTtcclxuICAgIHhkTCA9IHhkLmxlbmd0aDtcclxuICAgIHlkTCA9IHlkLmxlbmd0aDtcclxuXHJcbiAgICAvLyBFbnN1cmUgeGQgcG9pbnRzIHRvIHRoZSBsb25nZXIgYXJyYXkuXHJcbiAgICBpZiAoeGRMIDwgeWRMKSB7XHJcbiAgICAgIHIgPSB4ZDtcclxuICAgICAgeGQgPSB5ZDtcclxuICAgICAgeWQgPSByO1xyXG4gICAgICByTCA9IHhkTDtcclxuICAgICAgeGRMID0geWRMO1xyXG4gICAgICB5ZEwgPSByTDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXNlIHRoZSByZXN1bHQgYXJyYXkgd2l0aCB6ZXJvcy5cclxuICAgIHIgPSBbXTtcclxuICAgIHJMID0geGRMICsgeWRMO1xyXG4gICAgZm9yIChpID0gckw7IGktLTspIHIucHVzaCgwKTtcclxuXHJcbiAgICAvLyBNdWx0aXBseSFcclxuICAgIGZvciAoaSA9IHlkTDsgLS1pID49IDA7KSB7XHJcbiAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgZm9yIChrID0geGRMICsgaTsgayA+IGk7KSB7XHJcbiAgICAgICAgdCA9IHJba10gKyB5ZFtpXSAqIHhkW2sgLSBpIC0gMV0gKyBjYXJyeTtcclxuICAgICAgICByW2stLV0gPSB0ICUgQkFTRSB8IDA7XHJcbiAgICAgICAgY2FycnkgPSB0IC8gQkFTRSB8IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJba10gPSAocltrXSArIGNhcnJ5KSAlIEJBU0UgfCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcy5cclxuICAgIGZvciAoOyAhclstLXJMXTspIHIucG9wKCk7XHJcblxyXG4gICAgaWYgKGNhcnJ5KSArK2U7XHJcbiAgICBlbHNlIHIuc2hpZnQoKTtcclxuXHJcbiAgICB5LmQgPSByO1xyXG4gICAgeS5lID0gZTtcclxuXHJcbiAgICByZXR1cm4gZXh0ZXJuYWwgPyByb3VuZCh5LCBDdG9yLnByZWNpc2lvbikgOiB5O1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgcm91bmRlZCB0byBhIG1heGltdW0gb2YgYGRwYFxyXG4gICAqIGRlY2ltYWwgcGxhY2VzIHVzaW5nIHJvdW5kaW5nIG1vZGUgYHJtYCBvciBgcm91bmRpbmdgIGlmIGBybWAgaXMgb21pdHRlZC5cclxuICAgKlxyXG4gICAqIElmIGBkcGAgaXMgb21pdHRlZCwgcmV0dXJuIGEgbmV3IERlY2ltYWwgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbC5cclxuICAgKlxyXG4gICAqIFtkcF0ge251bWJlcn0gRGVjaW1hbCBwbGFjZXMuIEludGVnZXIsIDAgdG8gTUFYX0RJR0lUUyBpbmNsdXNpdmUuXHJcbiAgICogW3JtXSB7bnVtYmVyfSBSb3VuZGluZyBtb2RlLiBJbnRlZ2VyLCAwIHRvIDggaW5jbHVzaXZlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC50b0RlY2ltYWxQbGFjZXMgPSBQLnRvZHAgPSBmdW5jdGlvbiAoZHAsIHJtKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG5cclxuICAgIHggPSBuZXcgQ3Rvcih4KTtcclxuICAgIGlmIChkcCA9PT0gdm9pZCAwKSByZXR1cm4geDtcclxuXHJcbiAgICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcclxuXHJcbiAgICBpZiAocm0gPT09IHZvaWQgMCkgcm0gPSBDdG9yLnJvdW5kaW5nO1xyXG4gICAgZWxzZSBjaGVja0ludDMyKHJtLCAwLCA4KTtcclxuXHJcbiAgICByZXR1cm4gcm91bmQoeCwgZHAgKyBnZXRCYXNlMTBFeHBvbmVudCh4KSArIDEsIHJtKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgaW4gZXhwb25lbnRpYWwgbm90YXRpb24gcm91bmRlZCB0b1xyXG4gICAqIGBkcGAgZml4ZWQgZGVjaW1hbCBwbGFjZXMgdXNpbmcgcm91bmRpbmcgbW9kZSBgcm91bmRpbmdgLlxyXG4gICAqXHJcbiAgICogW2RwXSB7bnVtYmVyfSBEZWNpbWFsIHBsYWNlcy4gSW50ZWdlciwgMCB0byBNQVhfRElHSVRTIGluY2x1c2l2ZS5cclxuICAgKiBbcm1dIHtudW1iZXJ9IFJvdW5kaW5nIG1vZGUuIEludGVnZXIsIDAgdG8gOCBpbmNsdXNpdmUuXHJcbiAgICpcclxuICAgKi9cclxuICBQLnRvRXhwb25lbnRpYWwgPSBmdW5jdGlvbiAoZHAsIHJtKSB7XHJcbiAgICB2YXIgc3RyLFxyXG4gICAgICB4ID0gdGhpcyxcclxuICAgICAgQ3RvciA9IHguY29uc3RydWN0b3I7XHJcblxyXG4gICAgaWYgKGRwID09PSB2b2lkIDApIHtcclxuICAgICAgc3RyID0gdG9TdHJpbmcoeCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGVja0ludDMyKGRwLCAwLCBNQVhfRElHSVRTKTtcclxuXHJcbiAgICAgIGlmIChybSA9PT0gdm9pZCAwKSBybSA9IEN0b3Iucm91bmRpbmc7XHJcbiAgICAgIGVsc2UgY2hlY2tJbnQzMihybSwgMCwgOCk7XHJcblxyXG4gICAgICB4ID0gcm91bmQobmV3IEN0b3IoeCksIGRwICsgMSwgcm0pO1xyXG4gICAgICBzdHIgPSB0b1N0cmluZyh4LCB0cnVlLCBkcCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIGluIG5vcm1hbCAoZml4ZWQtcG9pbnQpIG5vdGF0aW9uIHRvXHJcbiAgICogYGRwYCBmaXhlZCBkZWNpbWFsIHBsYWNlcyBhbmQgcm91bmRlZCB1c2luZyByb3VuZGluZyBtb2RlIGBybWAgb3IgYHJvdW5kaW5nYCBpZiBgcm1gIGlzXHJcbiAgICogb21pdHRlZC5cclxuICAgKlxyXG4gICAqIEFzIHdpdGggSmF2YVNjcmlwdCBudW1iZXJzLCAoLTApLnRvRml4ZWQoMCkgaXMgJzAnLCBidXQgZS5nLiAoLTAuMDAwMDEpLnRvRml4ZWQoMCkgaXMgJy0wJy5cclxuICAgKlxyXG4gICAqIFtkcF0ge251bWJlcn0gRGVjaW1hbCBwbGFjZXMuIEludGVnZXIsIDAgdG8gTUFYX0RJR0lUUyBpbmNsdXNpdmUuXHJcbiAgICogW3JtXSB7bnVtYmVyfSBSb3VuZGluZyBtb2RlLiBJbnRlZ2VyLCAwIHRvIDggaW5jbHVzaXZlLlxyXG4gICAqXHJcbiAgICogKC0wKS50b0ZpeGVkKDApIGlzICcwJywgYnV0ICgtMC4xKS50b0ZpeGVkKDApIGlzICctMCcuXHJcbiAgICogKC0wKS50b0ZpeGVkKDEpIGlzICcwLjAnLCBidXQgKC0wLjAxKS50b0ZpeGVkKDEpIGlzICctMC4wJy5cclxuICAgKiAoLTApLnRvRml4ZWQoMykgaXMgJzAuMDAwJy5cclxuICAgKiAoLTAuNSkudG9GaXhlZCgwKSBpcyAnLTAnLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC50b0ZpeGVkID0gZnVuY3Rpb24gKGRwLCBybSkge1xyXG4gICAgdmFyIHN0ciwgeSxcclxuICAgICAgeCA9IHRoaXMsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG5cclxuICAgIGlmIChkcCA9PT0gdm9pZCAwKSByZXR1cm4gdG9TdHJpbmcoeCk7XHJcblxyXG4gICAgY2hlY2tJbnQzMihkcCwgMCwgTUFYX0RJR0lUUyk7XHJcblxyXG4gICAgaWYgKHJtID09PSB2b2lkIDApIHJtID0gQ3Rvci5yb3VuZGluZztcclxuICAgIGVsc2UgY2hlY2tJbnQzMihybSwgMCwgOCk7XHJcblxyXG4gICAgeSA9IHJvdW5kKG5ldyBDdG9yKHgpLCBkcCArIGdldEJhc2UxMEV4cG9uZW50KHgpICsgMSwgcm0pO1xyXG4gICAgc3RyID0gdG9TdHJpbmcoeS5hYnMoKSwgZmFsc2UsIGRwICsgZ2V0QmFzZTEwRXhwb25lbnQoeSkgKyAxKTtcclxuXHJcbiAgICAvLyBUbyBkZXRlcm1pbmUgd2hldGhlciB0byBhZGQgdGhlIG1pbnVzIHNpZ24gbG9vayBhdCB0aGUgdmFsdWUgYmVmb3JlIGl0IHdhcyByb3VuZGVkLFxyXG4gICAgLy8gaS5lLiBsb29rIGF0IGB4YCByYXRoZXIgdGhhbiBgeWAuXHJcbiAgICByZXR1cm4geC5pc25lZygpICYmICF4LmlzWmVybygpID8gJy0nICsgc3RyIDogc3RyO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgcm91bmRlZCB0byBhIHdob2xlIG51bWJlciB1c2luZ1xyXG4gICAqIHJvdW5kaW5nIG1vZGUgYHJvdW5kaW5nYC5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAudG9JbnRlZ2VyID0gUC50b2ludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB4ID0gdGhpcyxcclxuICAgICAgQ3RvciA9IHguY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gcm91bmQobmV3IEN0b3IoeCksIGdldEJhc2UxMEV4cG9uZW50KHgpICsgMSwgQ3Rvci5yb3VuZGluZyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgY29udmVydGVkIHRvIGEgbnVtYmVyIHByaW1pdGl2ZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAudG9OdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gK3RoaXM7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgbmV3IERlY2ltYWwgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbCByYWlzZWQgdG8gdGhlIHBvd2VyIGB5YCxcclxuICAgKiB0cnVuY2F0ZWQgdG8gYHByZWNpc2lvbmAgc2lnbmlmaWNhbnQgZGlnaXRzLlxyXG4gICAqXHJcbiAgICogRm9yIG5vbi1pbnRlZ2VyIG9yIHZlcnkgbGFyZ2UgZXhwb25lbnRzIHBvdyh4LCB5KSBpcyBjYWxjdWxhdGVkIHVzaW5nXHJcbiAgICpcclxuICAgKiAgIHheeSA9IGV4cCh5KmxuKHgpKVxyXG4gICAqXHJcbiAgICogVGhlIG1heGltdW0gZXJyb3IgaXMgMSB1bHAgKHVuaXQgaW4gbGFzdCBwbGFjZSkuXHJcbiAgICpcclxuICAgKiB5IHtudW1iZXJ8c3RyaW5nfERlY2ltYWx9IFRoZSBwb3dlciB0byB3aGljaCB0byByYWlzZSB0aGlzIERlY2ltYWwuXHJcbiAgICpcclxuICAgKi9cclxuICBQLnRvUG93ZXIgPSBQLnBvdyA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgZSwgaywgcHIsIHIsIHNpZ24sIHlJc0ludCxcclxuICAgICAgeCA9IHRoaXMsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yLFxyXG4gICAgICBndWFyZCA9IDEyLFxyXG4gICAgICB5biA9ICsoeSA9IG5ldyBDdG9yKHkpKTtcclxuXHJcbiAgICAvLyBwb3coeCwgMCkgPSAxXHJcbiAgICBpZiAoIXkucykgcmV0dXJuIG5ldyBDdG9yKE9ORSk7XHJcblxyXG4gICAgeCA9IG5ldyBDdG9yKHgpO1xyXG5cclxuICAgIC8vIHBvdygwLCB5ID4gMCkgPSAwXHJcbiAgICAvLyBwb3coMCwgeSA8IDApID0gSW5maW5pdHlcclxuICAgIGlmICgheC5zKSB7XHJcbiAgICAgIGlmICh5LnMgPCAxKSB0aHJvdyBFcnJvcihkZWNpbWFsRXJyb3IgKyAnSW5maW5pdHknKTtcclxuICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG93KDEsIHkpID0gMVxyXG4gICAgaWYgKHguZXEoT05FKSkgcmV0dXJuIHg7XHJcblxyXG4gICAgcHIgPSBDdG9yLnByZWNpc2lvbjtcclxuXHJcbiAgICAvLyBwb3coeCwgMSkgPSB4XHJcbiAgICBpZiAoeS5lcShPTkUpKSByZXR1cm4gcm91bmQoeCwgcHIpO1xyXG5cclxuICAgIGUgPSB5LmU7XHJcbiAgICBrID0geS5kLmxlbmd0aCAtIDE7XHJcbiAgICB5SXNJbnQgPSBlID49IGs7XHJcbiAgICBzaWduID0geC5zO1xyXG5cclxuICAgIGlmICgheUlzSW50KSB7XHJcblxyXG4gICAgICAvLyBwb3coeCA8IDAsIHkgbm9uLWludGVnZXIpID0gTmFOXHJcbiAgICAgIGlmIChzaWduIDwgMCkgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ05hTicpO1xyXG5cclxuICAgIC8vIElmIHkgaXMgYSBzbWFsbCBpbnRlZ2VyIHVzZSB0aGUgJ2V4cG9uZW50aWF0aW9uIGJ5IHNxdWFyaW5nJyBhbGdvcml0aG0uXHJcbiAgICB9IGVsc2UgaWYgKChrID0geW4gPCAwID8gLXluIDogeW4pIDw9IE1BWF9TQUZFX0lOVEVHRVIpIHtcclxuICAgICAgciA9IG5ldyBDdG9yKE9ORSk7XHJcblxyXG4gICAgICAvLyBNYXggayBvZiA5MDA3MTk5MjU0NzQwOTkxIHRha2VzIDUzIGxvb3AgaXRlcmF0aW9ucy5cclxuICAgICAgLy8gTWF4aW11bSBkaWdpdHMgYXJyYXkgbGVuZ3RoOyBsZWF2ZXMgWzI4LCAzNF0gZ3VhcmQgZGlnaXRzLlxyXG4gICAgICBlID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UgKyA0KTtcclxuXHJcbiAgICAgIGV4dGVybmFsID0gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKDs7KSB7XHJcbiAgICAgICAgaWYgKGsgJSAyKSB7XHJcbiAgICAgICAgICByID0gci50aW1lcyh4KTtcclxuICAgICAgICAgIHRydW5jYXRlKHIuZCwgZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrID0gbWF0aGZsb29yKGsgLyAyKTtcclxuICAgICAgICBpZiAoayA9PT0gMCkgYnJlYWs7XHJcblxyXG4gICAgICAgIHggPSB4LnRpbWVzKHgpO1xyXG4gICAgICAgIHRydW5jYXRlKHguZCwgZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV4dGVybmFsID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB5LnMgPCAwID8gbmV3IEN0b3IoT05FKS5kaXYocikgOiByb3VuZChyLCBwcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdWx0IGlzIG5lZ2F0aXZlIGlmIHggaXMgbmVnYXRpdmUgYW5kIHRoZSBsYXN0IGRpZ2l0IG9mIGludGVnZXIgeSBpcyBvZGQuXHJcbiAgICBzaWduID0gc2lnbiA8IDAgJiYgeS5kW01hdGgubWF4KGUsIGspXSAmIDEgPyAtMSA6IDE7XHJcblxyXG4gICAgeC5zID0gMTtcclxuICAgIGV4dGVybmFsID0gZmFsc2U7XHJcbiAgICByID0geS50aW1lcyhsbih4LCBwciArIGd1YXJkKSk7XHJcbiAgICBleHRlcm5hbCA9IHRydWU7XHJcbiAgICByID0gZXhwKHIpO1xyXG4gICAgci5zID0gc2lnbjtcclxuXHJcbiAgICByZXR1cm4gcjtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGlzIERlY2ltYWwgcm91bmRlZCB0byBgc2RgIHNpZ25pZmljYW50IGRpZ2l0c1xyXG4gICAqIHVzaW5nIHJvdW5kaW5nIG1vZGUgYHJvdW5kaW5nYC5cclxuICAgKlxyXG4gICAqIFJldHVybiBleHBvbmVudGlhbCBub3RhdGlvbiBpZiBgc2RgIGlzIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIGRpZ2l0cyBuZWNlc3NhcnkgdG8gcmVwcmVzZW50XHJcbiAgICogdGhlIGludGVnZXIgcGFydCBvZiB0aGUgdmFsdWUgaW4gbm9ybWFsIG5vdGF0aW9uLlxyXG4gICAqXHJcbiAgICogW3NkXSB7bnVtYmVyfSBTaWduaWZpY2FudCBkaWdpdHMuIEludGVnZXIsIDEgdG8gTUFYX0RJR0lUUyBpbmNsdXNpdmUuXHJcbiAgICogW3JtXSB7bnVtYmVyfSBSb3VuZGluZyBtb2RlLiBJbnRlZ2VyLCAwIHRvIDggaW5jbHVzaXZlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC50b1ByZWNpc2lvbiA9IGZ1bmN0aW9uIChzZCwgcm0pIHtcclxuICAgIHZhciBlLCBzdHIsXHJcbiAgICAgIHggPSB0aGlzLFxyXG4gICAgICBDdG9yID0geC5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICBpZiAoc2QgPT09IHZvaWQgMCkge1xyXG4gICAgICBlID0gZ2V0QmFzZTEwRXhwb25lbnQoeCk7XHJcbiAgICAgIHN0ciA9IHRvU3RyaW5nKHgsIGUgPD0gQ3Rvci50b0V4cE5lZyB8fCBlID49IEN0b3IudG9FeHBQb3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hlY2tJbnQzMihzZCwgMSwgTUFYX0RJR0lUUyk7XHJcblxyXG4gICAgICBpZiAocm0gPT09IHZvaWQgMCkgcm0gPSBDdG9yLnJvdW5kaW5nO1xyXG4gICAgICBlbHNlIGNoZWNrSW50MzIocm0sIDAsIDgpO1xyXG5cclxuICAgICAgeCA9IHJvdW5kKG5ldyBDdG9yKHgpLCBzZCwgcm0pO1xyXG4gICAgICBlID0gZ2V0QmFzZTEwRXhwb25lbnQoeCk7XHJcbiAgICAgIHN0ciA9IHRvU3RyaW5nKHgsIHNkIDw9IGUgfHwgZSA8PSBDdG9yLnRvRXhwTmVnLCBzZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgRGVjaW1hbCB3aG9zZSB2YWx1ZSBpcyB0aGUgdmFsdWUgb2YgdGhpcyBEZWNpbWFsIHJvdW5kZWQgdG8gYSBtYXhpbXVtIG9mIGBzZGBcclxuICAgKiBzaWduaWZpY2FudCBkaWdpdHMgdXNpbmcgcm91bmRpbmcgbW9kZSBgcm1gLCBvciB0byBgcHJlY2lzaW9uYCBhbmQgYHJvdW5kaW5nYCByZXNwZWN0aXZlbHkgaWZcclxuICAgKiBvbWl0dGVkLlxyXG4gICAqXHJcbiAgICogW3NkXSB7bnVtYmVyfSBTaWduaWZpY2FudCBkaWdpdHMuIEludGVnZXIsIDEgdG8gTUFYX0RJR0lUUyBpbmNsdXNpdmUuXHJcbiAgICogW3JtXSB7bnVtYmVyfSBSb3VuZGluZyBtb2RlLiBJbnRlZ2VyLCAwIHRvIDggaW5jbHVzaXZlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgUC50b1NpZ25pZmljYW50RGlnaXRzID0gUC50b3NkID0gZnVuY3Rpb24gKHNkLCBybSkge1xyXG4gICAgdmFyIHggPSB0aGlzLFxyXG4gICAgICBDdG9yID0geC5jb25zdHJ1Y3RvcjtcclxuXHJcbiAgICBpZiAoc2QgPT09IHZvaWQgMCkge1xyXG4gICAgICBzZCA9IEN0b3IucHJlY2lzaW9uO1xyXG4gICAgICBybSA9IEN0b3Iucm91bmRpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGVja0ludDMyKHNkLCAxLCBNQVhfRElHSVRTKTtcclxuXHJcbiAgICAgIGlmIChybSA9PT0gdm9pZCAwKSBybSA9IEN0b3Iucm91bmRpbmc7XHJcbiAgICAgIGVsc2UgY2hlY2tJbnQzMihybSwgMCwgOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdW5kKG5ldyBDdG9yKHgpLCBzZCwgcm0pO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgRGVjaW1hbC5cclxuICAgKlxyXG4gICAqIFJldHVybiBleHBvbmVudGlhbCBub3RhdGlvbiBpZiB0aGlzIERlY2ltYWwgaGFzIGEgcG9zaXRpdmUgZXhwb25lbnQgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuXHJcbiAgICogYHRvRXhwUG9zYCwgb3IgYSBuZWdhdGl2ZSBleHBvbmVudCBlcXVhbCB0byBvciBsZXNzIHRoYW4gYHRvRXhwTmVnYC5cclxuICAgKlxyXG4gICAqL1xyXG4gIFAudG9TdHJpbmcgPSBQLnZhbHVlT2YgPSBQLnZhbCA9IFAudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHggPSB0aGlzLFxyXG4gICAgICBlID0gZ2V0QmFzZTEwRXhwb25lbnQoeCksXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG5cclxuICAgIHJldHVybiB0b1N0cmluZyh4LCBlIDw9IEN0b3IudG9FeHBOZWcgfHwgZSA+PSBDdG9yLnRvRXhwUG9zKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgRGVjaW1hbC5wcm90b3R5cGUgKFApIGFuZC9vciBEZWNpbWFsIG1ldGhvZHMsIGFuZCB0aGVpciBjYWxsZXJzLlxyXG5cclxuXHJcbiAgLypcclxuICAgKiAgYWRkICAgICAgICAgICAgICAgICBQLm1pbnVzLCBQLnBsdXNcclxuICAgKiAgY2hlY2tJbnQzMiAgICAgICAgICBQLnRvZHAsIFAudG9FeHBvbmVudGlhbCwgUC50b0ZpeGVkLCBQLnRvUHJlY2lzaW9uLCBQLnRvc2RcclxuICAgKiAgZGlnaXRzVG9TdHJpbmcgICAgICBQLmxvZywgUC5zcXJ0LCBQLnBvdywgdG9TdHJpbmcsIGV4cCwgbG5cclxuICAgKiAgZGl2aWRlICAgICAgICAgICAgICBQLmRpdiwgUC5pZGl2LCBQLmxvZywgUC5tb2QsIFAuc3FydCwgZXhwLCBsblxyXG4gICAqICBleHAgICAgICAgICAgICAgICAgIFAuZXhwLCBQLnBvd1xyXG4gICAqICBnZXRCYXNlMTBFeHBvbmVudCAgIFAuZXhwb25lbnQsIFAuc2QsIFAudG9pbnQsIFAuc3FydCwgUC50b2RwLCBQLnRvRml4ZWQsIFAudG9QcmVjaXNpb24sXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgUC50b1N0cmluZywgZGl2aWRlLCByb3VuZCwgdG9TdHJpbmcsIGV4cCwgbG5cclxuICAgKiAgZ2V0TG4xMCAgICAgICAgICAgICBQLmxvZywgbG5cclxuICAgKiAgZ2V0WmVyb1N0cmluZyAgICAgICBkaWdpdHNUb1N0cmluZywgdG9TdHJpbmdcclxuICAgKiAgbG4gICAgICAgICAgICAgICAgICBQLmxvZywgUC5sbiwgUC5wb3csIGV4cFxyXG4gICAqICBwYXJzZURlY2ltYWwgICAgICAgIERlY2ltYWxcclxuICAgKiAgcm91bmQgICAgICAgICAgICAgICBQLmFicywgUC5pZGl2LCBQLmxvZywgUC5taW51cywgUC5tb2QsIFAubmVnLCBQLnBsdXMsIFAudG9pbnQsIFAuc3FydCxcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICBQLnRpbWVzLCBQLnRvZHAsIFAudG9FeHBvbmVudGlhbCwgUC50b0ZpeGVkLCBQLnBvdywgUC50b1ByZWNpc2lvbiwgUC50b3NkLFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZSwgZ2V0TG4xMCwgZXhwLCBsblxyXG4gICAqICBzdWJ0cmFjdCAgICAgICAgICAgIFAubWludXMsIFAucGx1c1xyXG4gICAqICB0b1N0cmluZyAgICAgICAgICAgIFAudG9FeHBvbmVudGlhbCwgUC50b0ZpeGVkLCBQLnRvUHJlY2lzaW9uLCBQLnRvU3RyaW5nLCBQLnZhbHVlT2ZcclxuICAgKiAgdHJ1bmNhdGUgICAgICAgICAgICBQLnBvd1xyXG4gICAqXHJcbiAgICogIFRocm93czogICAgICAgICAgICAgUC5sb2csIFAubW9kLCBQLnNkLCBQLnNxcnQsIFAucG93LCAgY2hlY2tJbnQzMiwgZGl2aWRlLCByb3VuZCxcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICBnZXRMbjEwLCBleHAsIGxuLCBwYXJzZURlY2ltYWwsIERlY2ltYWwsIGNvbmZpZ1xyXG4gICAqL1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gYWRkKHgsIHkpIHtcclxuICAgIHZhciBjYXJyeSwgZCwgZSwgaSwgaywgbGVuLCB4ZCwgeWQsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yLFxyXG4gICAgICBwciA9IEN0b3IucHJlY2lzaW9uO1xyXG5cclxuICAgIC8vIElmIGVpdGhlciBpcyB6ZXJvLi4uXHJcbiAgICBpZiAoIXgucyB8fCAheS5zKSB7XHJcblxyXG4gICAgICAvLyBSZXR1cm4geCBpZiB5IGlzIHplcm8uXHJcbiAgICAgIC8vIFJldHVybiB5IGlmIHkgaXMgbm9uLXplcm8uXHJcbiAgICAgIGlmICgheS5zKSB5ID0gbmV3IEN0b3IoeCk7XHJcbiAgICAgIHJldHVybiBleHRlcm5hbCA/IHJvdW5kKHksIHByKSA6IHk7XHJcbiAgICB9XHJcblxyXG4gICAgeGQgPSB4LmQ7XHJcbiAgICB5ZCA9IHkuZDtcclxuXHJcbiAgICAvLyB4IGFuZCB5IGFyZSBmaW5pdGUsIG5vbi16ZXJvIG51bWJlcnMgd2l0aCB0aGUgc2FtZSBzaWduLlxyXG5cclxuICAgIGsgPSB4LmU7XHJcbiAgICBlID0geS5lO1xyXG4gICAgeGQgPSB4ZC5zbGljZSgpO1xyXG4gICAgaSA9IGsgLSBlO1xyXG5cclxuICAgIC8vIElmIGJhc2UgMWU3IGV4cG9uZW50cyBkaWZmZXIuLi5cclxuICAgIGlmIChpKSB7XHJcbiAgICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgIGQgPSB4ZDtcclxuICAgICAgICBpID0gLWk7XHJcbiAgICAgICAgbGVuID0geWQubGVuZ3RoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGQgPSB5ZDtcclxuICAgICAgICBlID0gaztcclxuICAgICAgICBsZW4gPSB4ZC5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExpbWl0IG51bWJlciBvZiB6ZXJvcyBwcmVwZW5kZWQgdG8gbWF4KGNlaWwocHIgLyBMT0dfQkFTRSksIGxlbikgKyAxLlxyXG4gICAgICBrID0gTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpO1xyXG4gICAgICBsZW4gPSBrID4gbGVuID8gayArIDEgOiBsZW4gKyAxO1xyXG5cclxuICAgICAgaWYgKGkgPiBsZW4pIHtcclxuICAgICAgICBpID0gbGVuO1xyXG4gICAgICAgIGQubGVuZ3RoID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJlcGVuZCB6ZXJvcyB0byBlcXVhbGlzZSBleHBvbmVudHMuIE5vdGU6IEZhc3RlciB0byB1c2UgcmV2ZXJzZSB0aGVuIGRvIHVuc2hpZnRzLlxyXG4gICAgICBkLnJldmVyc2UoKTtcclxuICAgICAgZm9yICg7IGktLTspIGQucHVzaCgwKTtcclxuICAgICAgZC5yZXZlcnNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuID0geGQubGVuZ3RoO1xyXG4gICAgaSA9IHlkLmxlbmd0aDtcclxuXHJcbiAgICAvLyBJZiB5ZCBpcyBsb25nZXIgdGhhbiB4ZCwgc3dhcCB4ZCBhbmQgeWQgc28geGQgcG9pbnRzIHRvIHRoZSBsb25nZXIgYXJyYXkuXHJcbiAgICBpZiAobGVuIC0gaSA8IDApIHtcclxuICAgICAgaSA9IGxlbjtcclxuICAgICAgZCA9IHlkO1xyXG4gICAgICB5ZCA9IHhkO1xyXG4gICAgICB4ZCA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25seSBzdGFydCBhZGRpbmcgYXQgeWQubGVuZ3RoIC0gMSBhcyB0aGUgZnVydGhlciBkaWdpdHMgb2YgeGQgY2FuIGJlIGxlZnQgYXMgdGhleSBhcmUuXHJcbiAgICBmb3IgKGNhcnJ5ID0gMDsgaTspIHtcclxuICAgICAgY2FycnkgPSAoeGRbLS1pXSA9IHhkW2ldICsgeWRbaV0gKyBjYXJyeSkgLyBCQVNFIHwgMDtcclxuICAgICAgeGRbaV0gJT0gQkFTRTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FycnkpIHtcclxuICAgICAgeGQudW5zaGlmdChjYXJyeSk7XHJcbiAgICAgICsrZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgdHJhaWxpbmcgemVyb3MuXHJcbiAgICAvLyBObyBuZWVkIHRvIGNoZWNrIGZvciB6ZXJvLCBhcyAreCArICt5ICE9IDAgJiYgLXggKyAteSAhPSAwXHJcbiAgICBmb3IgKGxlbiA9IHhkLmxlbmd0aDsgeGRbLS1sZW5dID09IDA7KSB4ZC5wb3AoKTtcclxuXHJcbiAgICB5LmQgPSB4ZDtcclxuICAgIHkuZSA9IGU7XHJcblxyXG4gICAgcmV0dXJuIGV4dGVybmFsID8gcm91bmQoeSwgcHIpIDogeTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ludDMyKGksIG1pbiwgbWF4KSB7XHJcbiAgICBpZiAoaSAhPT0gfn5pIHx8IGkgPCBtaW4gfHwgaSA+IG1heCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBkaWdpdHNUb1N0cmluZyhkKSB7XHJcbiAgICB2YXIgaSwgaywgd3MsXHJcbiAgICAgIGluZGV4T2ZMYXN0V29yZCA9IGQubGVuZ3RoIC0gMSxcclxuICAgICAgc3RyID0gJycsXHJcbiAgICAgIHcgPSBkWzBdO1xyXG5cclxuICAgIGlmIChpbmRleE9mTGFzdFdvcmQgPiAwKSB7XHJcbiAgICAgIHN0ciArPSB3O1xyXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgaW5kZXhPZkxhc3RXb3JkOyBpKyspIHtcclxuICAgICAgICB3cyA9IGRbaV0gKyAnJztcclxuICAgICAgICBrID0gTE9HX0JBU0UgLSB3cy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGspIHN0ciArPSBnZXRaZXJvU3RyaW5nKGspO1xyXG4gICAgICAgIHN0ciArPSB3cztcclxuICAgICAgfVxyXG5cclxuICAgICAgdyA9IGRbaV07XHJcbiAgICAgIHdzID0gdyArICcnO1xyXG4gICAgICBrID0gTE9HX0JBU0UgLSB3cy5sZW5ndGg7XHJcbiAgICAgIGlmIChrKSBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcclxuICAgIH0gZWxzZSBpZiAodyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcyBvZiBsYXN0IHcuXHJcbiAgICBmb3IgKDsgdyAlIDEwID09PSAwOykgdyAvPSAxMDtcclxuXHJcbiAgICByZXR1cm4gc3RyICsgdztcclxuICB9XHJcblxyXG5cclxuICB2YXIgZGl2aWRlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBBc3N1bWVzIG5vbi16ZXJvIHggYW5kIGssIGFuZCBoZW5jZSBub24temVybyByZXN1bHQuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUludGVnZXIoeCwgaykge1xyXG4gICAgICB2YXIgdGVtcCxcclxuICAgICAgICBjYXJyeSA9IDAsXHJcbiAgICAgICAgaSA9IHgubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yICh4ID0geC5zbGljZSgpOyBpLS07KSB7XHJcbiAgICAgICAgdGVtcCA9IHhbaV0gKiBrICsgY2Fycnk7XHJcbiAgICAgICAgeFtpXSA9IHRlbXAgJSBCQVNFIHwgMDtcclxuICAgICAgICBjYXJyeSA9IHRlbXAgLyBCQVNFIHwgMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhcnJ5KSB4LnVuc2hpZnQoY2FycnkpO1xyXG5cclxuICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZShhLCBiLCBhTCwgYkwpIHtcclxuICAgICAgdmFyIGksIHI7XHJcblxyXG4gICAgICBpZiAoYUwgIT0gYkwpIHtcclxuICAgICAgICByID0gYUwgPiBiTCA/IDEgOiAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSByID0gMDsgaSA8IGFMOyBpKyspIHtcclxuICAgICAgICAgIGlmIChhW2ldICE9IGJbaV0pIHtcclxuICAgICAgICAgICAgciA9IGFbaV0gPiBiW2ldID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGFMKSB7XHJcbiAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgIC8vIFN1YnRyYWN0IGIgZnJvbSBhLlxyXG4gICAgICBmb3IgKDsgYUwtLTspIHtcclxuICAgICAgICBhW2FMXSAtPSBpO1xyXG4gICAgICAgIGkgPSBhW2FMXSA8IGJbYUxdID8gMSA6IDA7XHJcbiAgICAgICAgYVthTF0gPSBpICogQkFTRSArIGFbYUxdIC0gYlthTF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zLlxyXG4gICAgICBmb3IgKDsgIWFbMF0gJiYgYS5sZW5ndGggPiAxOykgYS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoeCwgeSwgcHIsIGRwKSB7XHJcbiAgICAgIHZhciBjbXAsIGUsIGksIGssIHByb2QsIHByb2RMLCBxLCBxZCwgcmVtLCByZW1MLCByZW0wLCBzZCwgdCwgeGksIHhMLCB5ZDAsIHlMLCB5eixcclxuICAgICAgICBDdG9yID0geC5jb25zdHJ1Y3RvcixcclxuICAgICAgICBzaWduID0geC5zID09IHkucyA/IDEgOiAtMSxcclxuICAgICAgICB4ZCA9IHguZCxcclxuICAgICAgICB5ZCA9IHkuZDtcclxuXHJcbiAgICAgIC8vIEVpdGhlciAwP1xyXG4gICAgICBpZiAoIXgucykgcmV0dXJuIG5ldyBDdG9yKHgpO1xyXG4gICAgICBpZiAoIXkucykgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ0RpdmlzaW9uIGJ5IHplcm8nKTtcclxuXHJcbiAgICAgIGUgPSB4LmUgLSB5LmU7XHJcbiAgICAgIHlMID0geWQubGVuZ3RoO1xyXG4gICAgICB4TCA9IHhkLmxlbmd0aDtcclxuICAgICAgcSA9IG5ldyBDdG9yKHNpZ24pO1xyXG4gICAgICBxZCA9IHEuZCA9IFtdO1xyXG5cclxuICAgICAgLy8gUmVzdWx0IGV4cG9uZW50IG1heSBiZSBvbmUgbGVzcyB0aGFuIGUuXHJcbiAgICAgIGZvciAoaSA9IDA7IHlkW2ldID09ICh4ZFtpXSB8fCAwKTsgKSArK2k7XHJcbiAgICAgIGlmICh5ZFtpXSA+ICh4ZFtpXSB8fCAwKSkgLS1lO1xyXG5cclxuICAgICAgaWYgKHByID09IG51bGwpIHtcclxuICAgICAgICBzZCA9IHByID0gQ3Rvci5wcmVjaXNpb247XHJcbiAgICAgIH0gZWxzZSBpZiAoZHApIHtcclxuICAgICAgICBzZCA9IHByICsgKGdldEJhc2UxMEV4cG9uZW50KHgpIC0gZ2V0QmFzZTEwRXhwb25lbnQoeSkpICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZCA9IHByO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2QgPCAwKSByZXR1cm4gbmV3IEN0b3IoMCk7XHJcblxyXG4gICAgICAvLyBDb252ZXJ0IHByZWNpc2lvbiBpbiBudW1iZXIgb2YgYmFzZSAxMCBkaWdpdHMgdG8gYmFzZSAxZTcgZGlnaXRzLlxyXG4gICAgICBzZCA9IHNkIC8gTE9HX0JBU0UgKyAyIHwgMDtcclxuICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAvLyBkaXZpc29yIDwgMWU3XHJcbiAgICAgIGlmICh5TCA9PSAxKSB7XHJcbiAgICAgICAgayA9IDA7XHJcbiAgICAgICAgeWQgPSB5ZFswXTtcclxuICAgICAgICBzZCsrO1xyXG5cclxuICAgICAgICAvLyBrIGlzIHRoZSBjYXJyeS5cclxuICAgICAgICBmb3IgKDsgKGkgPCB4TCB8fCBrKSAmJiBzZC0tOyBpKyspIHtcclxuICAgICAgICAgIHQgPSBrICogQkFTRSArICh4ZFtpXSB8fCAwKTtcclxuICAgICAgICAgIHFkW2ldID0gdCAvIHlkIHwgMDtcclxuICAgICAgICAgIGsgPSB0ICUgeWQgfCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRpdmlzb3IgPj0gMWU3XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIC8vIE5vcm1hbGlzZSB4ZCBhbmQgeWQgc28gaGlnaGVzdCBvcmRlciBkaWdpdCBvZiB5ZCBpcyA+PSBCQVNFLzJcclxuICAgICAgICBrID0gQkFTRSAvICh5ZFswXSArIDEpIHwgMDtcclxuXHJcbiAgICAgICAgaWYgKGsgPiAxKSB7XHJcbiAgICAgICAgICB5ZCA9IG11bHRpcGx5SW50ZWdlcih5ZCwgayk7XHJcbiAgICAgICAgICB4ZCA9IG11bHRpcGx5SW50ZWdlcih4ZCwgayk7XHJcbiAgICAgICAgICB5TCA9IHlkLmxlbmd0aDtcclxuICAgICAgICAgIHhMID0geGQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeGkgPSB5TDtcclxuICAgICAgICByZW0gPSB4ZC5zbGljZSgwLCB5TCk7XHJcbiAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vIEFkZCB6ZXJvcyB0byBtYWtlIHJlbWFpbmRlciBhcyBsb25nIGFzIGRpdmlzb3IuXHJcbiAgICAgICAgZm9yICg7IHJlbUwgPCB5TDspIHJlbVtyZW1MKytdID0gMDtcclxuXHJcbiAgICAgICAgeXogPSB5ZC5zbGljZSgpO1xyXG4gICAgICAgIHl6LnVuc2hpZnQoMCk7XHJcbiAgICAgICAgeWQwID0geWRbMF07XHJcblxyXG4gICAgICAgIGlmICh5ZFsxXSA+PSBCQVNFIC8gMikgKyt5ZDA7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgIGsgPSAwO1xyXG5cclxuICAgICAgICAgIC8vIENvbXBhcmUgZGl2aXNvciBhbmQgcmVtYWluZGVyLlxyXG4gICAgICAgICAgY21wID0gY29tcGFyZSh5ZCwgcmVtLCB5TCwgcmVtTCk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgZGl2aXNvciA8IHJlbWFpbmRlci5cclxuICAgICAgICAgIGlmIChjbXAgPCAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdHJpYWwgZGlnaXQsIGsuXHJcbiAgICAgICAgICAgIHJlbTAgPSByZW1bMF07XHJcbiAgICAgICAgICAgIGlmICh5TCAhPSByZW1MKSByZW0wID0gcmVtMCAqIEJBU0UgKyAocmVtWzFdIHx8IDApO1xyXG5cclxuICAgICAgICAgICAgLy8gayB3aWxsIGJlIGhvdyBtYW55IHRpbWVzIHRoZSBkaXZpc29yIGdvZXMgaW50byB0aGUgY3VycmVudCByZW1haW5kZXIuXHJcbiAgICAgICAgICAgIGsgPSByZW0wIC8geWQwIHwgMDtcclxuXHJcbiAgICAgICAgICAgIC8vICBBbGdvcml0aG06XHJcbiAgICAgICAgICAgIC8vICAxLiBwcm9kdWN0ID0gZGl2aXNvciAqIHRyaWFsIGRpZ2l0IChrKVxyXG4gICAgICAgICAgICAvLyAgMi4gaWYgcHJvZHVjdCA+IHJlbWFpbmRlcjogcHJvZHVjdCAtPSBkaXZpc29yLCBrLS1cclxuICAgICAgICAgICAgLy8gIDMuIHJlbWFpbmRlciAtPSBwcm9kdWN0XHJcbiAgICAgICAgICAgIC8vICA0LiBpZiBwcm9kdWN0IHdhcyA8IHJlbWFpbmRlciBhdCAyOlxyXG4gICAgICAgICAgICAvLyAgICA1LiBjb21wYXJlIG5ldyByZW1haW5kZXIgYW5kIGRpdmlzb3JcclxuICAgICAgICAgICAgLy8gICAgNi4gSWYgcmVtYWluZGVyID4gZGl2aXNvcjogcmVtYWluZGVyIC09IGRpdmlzb3IsIGsrK1xyXG5cclxuICAgICAgICAgICAgaWYgKGsgPiAxKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGsgPj0gQkFTRSkgayA9IEJBU0UgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAvLyBwcm9kdWN0ID0gZGl2aXNvciAqIHRyaWFsIGRpZ2l0LlxyXG4gICAgICAgICAgICAgIHByb2QgPSBtdWx0aXBseUludGVnZXIoeWQsIGspO1xyXG4gICAgICAgICAgICAgIHByb2RMID0gcHJvZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgcHJvZHVjdCBhbmQgcmVtYWluZGVyLlxyXG4gICAgICAgICAgICAgIGNtcCA9IGNvbXBhcmUocHJvZCwgcmVtLCBwcm9kTCwgcmVtTCk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIHByb2R1Y3QgPiByZW1haW5kZXIuXHJcbiAgICAgICAgICAgICAgaWYgKGNtcCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBrLS07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3VidHJhY3QgZGl2aXNvciBmcm9tIHByb2R1Y3QuXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmFjdChwcm9kLCB5TCA8IHByb2RMID8geXogOiB5ZCwgcHJvZEwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gY21wIGlzIC0xLlxyXG4gICAgICAgICAgICAgIC8vIElmIGsgaXMgMCwgdGhlcmUgaXMgbm8gbmVlZCB0byBjb21wYXJlIHlkIGFuZCByZW0gYWdhaW4gYmVsb3csIHNvIGNoYW5nZSBjbXAgdG8gMVxyXG4gICAgICAgICAgICAgIC8vIHRvIGF2b2lkIGl0LiBJZiBrIGlzIDEgdGhlcmUgaXMgYSBuZWVkIHRvIGNvbXBhcmUgeWQgYW5kIHJlbSBhZ2FpbiBiZWxvdy5cclxuICAgICAgICAgICAgICBpZiAoayA9PSAwKSBjbXAgPSBrID0gMTtcclxuICAgICAgICAgICAgICBwcm9kID0geWQuc2xpY2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvZEwgPSBwcm9kLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHByb2RMIDwgcmVtTCkgcHJvZC51bnNoaWZ0KDApO1xyXG5cclxuICAgICAgICAgICAgLy8gU3VidHJhY3QgcHJvZHVjdCBmcm9tIHJlbWFpbmRlci5cclxuICAgICAgICAgICAgc3VidHJhY3QocmVtLCBwcm9kLCByZW1MKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHByb2R1Y3Qgd2FzIDwgcHJldmlvdXMgcmVtYWluZGVyLlxyXG4gICAgICAgICAgICBpZiAoY21wID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgcmVtTCA9IHJlbS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgZGl2aXNvciBhbmQgbmV3IHJlbWFpbmRlci5cclxuICAgICAgICAgICAgICBjbXAgPSBjb21wYXJlKHlkLCByZW0sIHlMLCByZW1MKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gSWYgZGl2aXNvciA8IG5ldyByZW1haW5kZXIsIHN1YnRyYWN0IGRpdmlzb3IgZnJvbSByZW1haW5kZXIuXHJcbiAgICAgICAgICAgICAgaWYgKGNtcCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGsrKztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdWJ0cmFjdCBkaXZpc29yIGZyb20gcmVtYWluZGVyLlxyXG4gICAgICAgICAgICAgICAgc3VidHJhY3QocmVtLCB5TCA8IHJlbUwgPyB5eiA6IHlkLCByZW1MKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbUwgPSByZW0ubGVuZ3RoO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjbXAgPT09IDApIHtcclxuICAgICAgICAgICAgaysrO1xyXG4gICAgICAgICAgICByZW0gPSBbMF07XHJcbiAgICAgICAgICB9ICAgIC8vIGlmIGNtcCA9PT0gMSwgayB3aWxsIGJlIDBcclxuXHJcbiAgICAgICAgICAvLyBBZGQgdGhlIG5leHQgZGlnaXQsIGssIHRvIHRoZSByZXN1bHQgYXJyYXkuXHJcbiAgICAgICAgICBxZFtpKytdID0gaztcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHJlbWFpbmRlci5cclxuICAgICAgICAgIGlmIChjbXAgJiYgcmVtWzBdKSB7XHJcbiAgICAgICAgICAgIHJlbVtyZW1MKytdID0geGRbeGldIHx8IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZW0gPSBbeGRbeGldXTtcclxuICAgICAgICAgICAgcmVtTCA9IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCh4aSsrIDwgeEwgfHwgcmVtWzBdICE9PSB2b2lkIDApICYmIHNkLS0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMZWFkaW5nIHplcm8/XHJcbiAgICAgIGlmICghcWRbMF0pIHFkLnNoaWZ0KCk7XHJcblxyXG4gICAgICBxLmUgPSBlO1xyXG5cclxuICAgICAgcmV0dXJuIHJvdW5kKHEsIGRwID8gcHIgKyBnZXRCYXNlMTBFeHBvbmVudChxKSArIDEgOiBwcik7XHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSBuYXR1cmFsIGV4cG9uZW50aWFsIG9mIGB4YCB0cnVuY2F0ZWQgdG8gYHNkYFxyXG4gICAqIHNpZ25pZmljYW50IGRpZ2l0cy5cclxuICAgKlxyXG4gICAqIFRheWxvci9NYWNsYXVyaW4gc2VyaWVzLlxyXG4gICAqXHJcbiAgICogZXhwKHgpID0geF4wLzAhICsgeF4xLzEhICsgeF4yLzIhICsgeF4zLzMhICsgLi4uXHJcbiAgICpcclxuICAgKiBBcmd1bWVudCByZWR1Y3Rpb246XHJcbiAgICogICBSZXBlYXQgeCA9IHggLyAzMiwgayArPSA1LCB1bnRpbCB8eHwgPCAwLjFcclxuICAgKiAgIGV4cCh4KSA9IGV4cCh4IC8gMl5rKV4oMl5rKVxyXG4gICAqXHJcbiAgICogUHJldmlvdXNseSwgdGhlIGFyZ3VtZW50IHdhcyBpbml0aWFsbHkgcmVkdWNlZCBieVxyXG4gICAqIGV4cCh4KSA9IGV4cChyKSAqIDEwXmsgIHdoZXJlIHIgPSB4IC0gayAqIGxuMTAsIGsgPSBmbG9vcih4IC8gbG4xMClcclxuICAgKiB0byBmaXJzdCBwdXQgciBpbiB0aGUgcmFuZ2UgWzAsIGxuMTBdLCBiZWZvcmUgZGl2aWRpbmcgYnkgMzIgdW50aWwgfHh8IDwgMC4xLCBidXQgdGhpcyB3YXNcclxuICAgKiBmb3VuZCB0byBiZSBzbG93ZXIgdGhhbiBqdXN0IGRpdmlkaW5nIHJlcGVhdGVkbHkgYnkgMzIgYXMgYWJvdmUuXHJcbiAgICpcclxuICAgKiAoTWF0aCBvYmplY3QgaW50ZWdlciBtaW4vbWF4OiBNYXRoLmV4cCg3MDkpID0gOC4yZSszMDcsIE1hdGguZXhwKC03NDUpID0gNWUtMzI0KVxyXG4gICAqXHJcbiAgICogIGV4cCh4KSBpcyBub24tdGVybWluYXRpbmcgZm9yIGFueSBmaW5pdGUsIG5vbi16ZXJvIHguXHJcbiAgICpcclxuICAgKi9cclxuICBmdW5jdGlvbiBleHAoeCwgc2QpIHtcclxuICAgIHZhciBkZW5vbWluYXRvciwgZ3VhcmQsIHBvdywgc3VtLCB0LCB3cHIsXHJcbiAgICAgIGkgPSAwLFxyXG4gICAgICBrID0gMCxcclxuICAgICAgQ3RvciA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIHByID0gQ3Rvci5wcmVjaXNpb247XHJcblxyXG4gICAgaWYgKGdldEJhc2UxMEV4cG9uZW50KHgpID4gMTYpIHRocm93IEVycm9yKGV4cG9uZW50T3V0T2ZSYW5nZSArIGdldEJhc2UxMEV4cG9uZW50KHgpKTtcclxuXHJcbiAgICAvLyBleHAoMCkgPSAxXHJcbiAgICBpZiAoIXgucykgcmV0dXJuIG5ldyBDdG9yKE9ORSk7XHJcblxyXG4gICAgaWYgKHNkID09IG51bGwpIHtcclxuICAgICAgZXh0ZXJuYWwgPSBmYWxzZTtcclxuICAgICAgd3ByID0gcHI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3cHIgPSBzZDtcclxuICAgIH1cclxuXHJcbiAgICB0ID0gbmV3IEN0b3IoMC4wMzEyNSk7XHJcblxyXG4gICAgd2hpbGUgKHguYWJzKCkuZ3RlKDAuMSkpIHtcclxuICAgICAgeCA9IHgudGltZXModCk7ICAgIC8vIHggPSB4IC8gMl41XHJcbiAgICAgIGsgKz0gNTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFc3RpbWF0ZSB0aGUgcHJlY2lzaW9uIGluY3JlYXNlIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhlIGZpcnN0IDQgcm91bmRpbmcgZGlnaXRzIGFyZSBjb3JyZWN0LlxyXG4gICAgZ3VhcmQgPSBNYXRoLmxvZyhtYXRocG93KDIsIGspKSAvIE1hdGguTE4xMCAqIDIgKyA1IHwgMDtcclxuICAgIHdwciArPSBndWFyZDtcclxuICAgIGRlbm9taW5hdG9yID0gcG93ID0gc3VtID0gbmV3IEN0b3IoT05FKTtcclxuICAgIEN0b3IucHJlY2lzaW9uID0gd3ByO1xyXG5cclxuICAgIGZvciAoOzspIHtcclxuICAgICAgcG93ID0gcm91bmQocG93LnRpbWVzKHgpLCB3cHIpO1xyXG4gICAgICBkZW5vbWluYXRvciA9IGRlbm9taW5hdG9yLnRpbWVzKCsraSk7XHJcbiAgICAgIHQgPSBzdW0ucGx1cyhkaXZpZGUocG93LCBkZW5vbWluYXRvciwgd3ByKSk7XHJcblxyXG4gICAgICBpZiAoZGlnaXRzVG9TdHJpbmcodC5kKS5zbGljZSgwLCB3cHIpID09PSBkaWdpdHNUb1N0cmluZyhzdW0uZCkuc2xpY2UoMCwgd3ByKSkge1xyXG4gICAgICAgIHdoaWxlIChrLS0pIHN1bSA9IHJvdW5kKHN1bS50aW1lcyhzdW0pLCB3cHIpO1xyXG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XHJcbiAgICAgICAgcmV0dXJuIHNkID09IG51bGwgPyAoZXh0ZXJuYWwgPSB0cnVlLCByb3VuZChzdW0sIHByKSkgOiBzdW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1bSA9IHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBiYXNlIDEwIGV4cG9uZW50IGZyb20gdGhlIGJhc2UgMWU3IGV4cG9uZW50LlxyXG4gIGZ1bmN0aW9uIGdldEJhc2UxMEV4cG9uZW50KHgpIHtcclxuICAgIHZhciBlID0geC5lICogTE9HX0JBU0UsXHJcbiAgICAgIHcgPSB4LmRbMF07XHJcblxyXG4gICAgLy8gQWRkIHRoZSBudW1iZXIgb2YgZGlnaXRzIG9mIHRoZSBmaXJzdCB3b3JkIG9mIHRoZSBkaWdpdHMgYXJyYXkuXHJcbiAgICBmb3IgKDsgdyA+PSAxMDsgdyAvPSAxMCkgZSsrO1xyXG4gICAgcmV0dXJuIGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TG4xMChDdG9yLCBzZCwgcHIpIHtcclxuXHJcbiAgICBpZiAoc2QgPiBDdG9yLkxOMTAuc2QoKSkge1xyXG5cclxuXHJcbiAgICAgIC8vIFJlc2V0IGdsb2JhbCBzdGF0ZSBpbiBjYXNlIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0LlxyXG4gICAgICBleHRlcm5hbCA9IHRydWU7XHJcbiAgICAgIGlmIChwcikgQ3Rvci5wcmVjaXNpb24gPSBwcjtcclxuICAgICAgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ0xOMTAgcHJlY2lzaW9uIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdW5kKG5ldyBDdG9yKEN0b3IuTE4xMCksIHNkKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBnZXRaZXJvU3RyaW5nKGspIHtcclxuICAgIHZhciB6cyA9ICcnO1xyXG4gICAgZm9yICg7IGstLTspIHpzICs9ICcwJztcclxuICAgIHJldHVybiB6cztcclxuICB9XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIHdob3NlIHZhbHVlIGlzIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBvZiBgeGAgdHJ1bmNhdGVkIHRvIGBzZGAgc2lnbmlmaWNhbnRcclxuICAgKiBkaWdpdHMuXHJcbiAgICpcclxuICAgKiAgbG4obikgaXMgbm9uLXRlcm1pbmF0aW5nIChuICE9IDEpXHJcbiAgICpcclxuICAgKi9cclxuICBmdW5jdGlvbiBsbih5LCBzZCkge1xyXG4gICAgdmFyIGMsIGMwLCBkZW5vbWluYXRvciwgZSwgbnVtZXJhdG9yLCBzdW0sIHQsIHdwciwgeDIsXHJcbiAgICAgIG4gPSAxLFxyXG4gICAgICBndWFyZCA9IDEwLFxyXG4gICAgICB4ID0geSxcclxuICAgICAgeGQgPSB4LmQsXHJcbiAgICAgIEN0b3IgPSB4LmNvbnN0cnVjdG9yLFxyXG4gICAgICBwciA9IEN0b3IucHJlY2lzaW9uO1xyXG5cclxuICAgIC8vIGxuKC14KSA9IE5hTlxyXG4gICAgLy8gbG4oMCkgPSAtSW5maW5pdHlcclxuICAgIGlmICh4LnMgPCAxKSB0aHJvdyBFcnJvcihkZWNpbWFsRXJyb3IgKyAoeC5zID8gJ05hTicgOiAnLUluZmluaXR5JykpO1xyXG5cclxuICAgIC8vIGxuKDEpID0gMFxyXG4gICAgaWYgKHguZXEoT05FKSkgcmV0dXJuIG5ldyBDdG9yKDApO1xyXG5cclxuICAgIGlmIChzZCA9PSBudWxsKSB7XHJcbiAgICAgIGV4dGVybmFsID0gZmFsc2U7XHJcbiAgICAgIHdwciA9IHByO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3ByID0gc2Q7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHguZXEoMTApKSB7XHJcbiAgICAgIGlmIChzZCA9PSBudWxsKSBleHRlcm5hbCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBnZXRMbjEwKEN0b3IsIHdwcik7XHJcbiAgICB9XHJcblxyXG4gICAgd3ByICs9IGd1YXJkO1xyXG4gICAgQ3Rvci5wcmVjaXNpb24gPSB3cHI7XHJcbiAgICBjID0gZGlnaXRzVG9TdHJpbmcoeGQpO1xyXG4gICAgYzAgPSBjLmNoYXJBdCgwKTtcclxuICAgIGUgPSBnZXRCYXNlMTBFeHBvbmVudCh4KTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMoZSkgPCAxLjVlMTUpIHtcclxuXHJcbiAgICAgIC8vIEFyZ3VtZW50IHJlZHVjdGlvbi5cclxuICAgICAgLy8gVGhlIHNlcmllcyBjb252ZXJnZXMgZmFzdGVyIHRoZSBjbG9zZXIgdGhlIGFyZ3VtZW50IGlzIHRvIDEsIHNvIHVzaW5nXHJcbiAgICAgIC8vIGxuKGFeYikgPSBiICogbG4oYSksICAgbG4oYSkgPSBsbihhXmIpIC8gYlxyXG4gICAgICAvLyBtdWx0aXBseSB0aGUgYXJndW1lbnQgYnkgaXRzZWxmIHVudGlsIHRoZSBsZWFkaW5nIGRpZ2l0cyBvZiB0aGUgc2lnbmlmaWNhbmQgYXJlIDcsIDgsIDksXHJcbiAgICAgIC8vIDEwLCAxMSwgMTIgb3IgMTMsIHJlY29yZGluZyB0aGUgbnVtYmVyIG9mIG11bHRpcGxpY2F0aW9ucyBzbyB0aGUgc3VtIG9mIHRoZSBzZXJpZXMgY2FuXHJcbiAgICAgIC8vIGxhdGVyIGJlIGRpdmlkZWQgYnkgdGhpcyBudW1iZXIsIHRoZW4gc2VwYXJhdGUgb3V0IHRoZSBwb3dlciBvZiAxMCB1c2luZ1xyXG4gICAgICAvLyBsbihhKjEwXmIpID0gbG4oYSkgKyBiKmxuKDEwKS5cclxuXHJcbiAgICAgIC8vIG1heCBuIGlzIDIxIChnaXZlcyAwLjksIDEuMCBvciAxLjEpICg5ZTE1IC8gMjEgPSA0LjJlMTQpLlxyXG4gICAgICAvL3doaWxlIChjMCA8IDkgJiYgYzAgIT0gMSB8fCBjMCA9PSAxICYmIGMuY2hhckF0KDEpID4gMSkge1xyXG4gICAgICAvLyBtYXggbiBpcyA2IChnaXZlcyAwLjcgLSAxLjMpXHJcbiAgICAgIHdoaWxlIChjMCA8IDcgJiYgYzAgIT0gMSB8fCBjMCA9PSAxICYmIGMuY2hhckF0KDEpID4gMykge1xyXG4gICAgICAgIHggPSB4LnRpbWVzKHkpO1xyXG4gICAgICAgIGMgPSBkaWdpdHNUb1N0cmluZyh4LmQpO1xyXG4gICAgICAgIGMwID0gYy5jaGFyQXQoMCk7XHJcbiAgICAgICAgbisrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlID0gZ2V0QmFzZTEwRXhwb25lbnQoeCk7XHJcblxyXG4gICAgICBpZiAoYzAgPiAxKSB7XHJcbiAgICAgICAgeCA9IG5ldyBDdG9yKCcwLicgKyBjKTtcclxuICAgICAgICBlKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IG5ldyBDdG9yKGMwICsgJy4nICsgYy5zbGljZSgxKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAvLyBUaGUgYXJndW1lbnQgcmVkdWN0aW9uIG1ldGhvZCBhYm92ZSBtYXkgcmVzdWx0IGluIG92ZXJmbG93IGlmIHRoZSBhcmd1bWVudCB5IGlzIGEgbWFzc2l2ZVxyXG4gICAgICAvLyBudW1iZXIgd2l0aCBleHBvbmVudCA+PSAxNTAwMDAwMDAwMDAwMDAwICg5ZTE1IC8gNiA9IDEuNWUxNSksIHNvIGluc3RlYWQgcmVjYWxsIHRoaXNcclxuICAgICAgLy8gZnVuY3Rpb24gdXNpbmcgbG4oeCoxMF5lKSA9IGxuKHgpICsgZSpsbigxMCkuXHJcbiAgICAgIHQgPSBnZXRMbjEwKEN0b3IsIHdwciArIDIsIHByKS50aW1lcyhlICsgJycpO1xyXG4gICAgICB4ID0gbG4obmV3IEN0b3IoYzAgKyAnLicgKyBjLnNsaWNlKDEpKSwgd3ByIC0gZ3VhcmQpLnBsdXModCk7XHJcblxyXG4gICAgICBDdG9yLnByZWNpc2lvbiA9IHByO1xyXG4gICAgICByZXR1cm4gc2QgPT0gbnVsbCA/IChleHRlcm5hbCA9IHRydWUsIHJvdW5kKHgsIHByKSkgOiB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHggaXMgcmVkdWNlZCB0byBhIHZhbHVlIG5lYXIgMS5cclxuXHJcbiAgICAvLyBUYXlsb3Igc2VyaWVzLlxyXG4gICAgLy8gbG4oeSkgPSBsbigoMSArIHgpLygxIC0geCkpID0gMih4ICsgeF4zLzMgKyB4XjUvNSArIHheNy83ICsgLi4uKVxyXG4gICAgLy8gd2hlcmUgeCA9ICh5IC0gMSkvKHkgKyAxKSAgICAofHh8IDwgMSlcclxuICAgIHN1bSA9IG51bWVyYXRvciA9IHggPSBkaXZpZGUoeC5taW51cyhPTkUpLCB4LnBsdXMoT05FKSwgd3ByKTtcclxuICAgIHgyID0gcm91bmQoeC50aW1lcyh4KSwgd3ByKTtcclxuICAgIGRlbm9taW5hdG9yID0gMztcclxuXHJcbiAgICBmb3IgKDs7KSB7XHJcbiAgICAgIG51bWVyYXRvciA9IHJvdW5kKG51bWVyYXRvci50aW1lcyh4MiksIHdwcik7XHJcbiAgICAgIHQgPSBzdW0ucGx1cyhkaXZpZGUobnVtZXJhdG9yLCBuZXcgQ3RvcihkZW5vbWluYXRvciksIHdwcikpO1xyXG5cclxuICAgICAgaWYgKGRpZ2l0c1RvU3RyaW5nKHQuZCkuc2xpY2UoMCwgd3ByKSA9PT0gZGlnaXRzVG9TdHJpbmcoc3VtLmQpLnNsaWNlKDAsIHdwcikpIHtcclxuICAgICAgICBzdW0gPSBzdW0udGltZXMoMik7XHJcblxyXG4gICAgICAgIC8vIFJldmVyc2UgdGhlIGFyZ3VtZW50IHJlZHVjdGlvbi5cclxuICAgICAgICBpZiAoZSAhPT0gMCkgc3VtID0gc3VtLnBsdXMoZ2V0TG4xMChDdG9yLCB3cHIgKyAyLCBwcikudGltZXMoZSArICcnKSk7XHJcbiAgICAgICAgc3VtID0gZGl2aWRlKHN1bSwgbmV3IEN0b3IobiksIHdwcik7XHJcblxyXG4gICAgICAgIEN0b3IucHJlY2lzaW9uID0gcHI7XHJcbiAgICAgICAgcmV0dXJuIHNkID09IG51bGwgPyAoZXh0ZXJuYWwgPSB0cnVlLCByb3VuZChzdW0sIHByKSkgOiBzdW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1bSA9IHQ7XHJcbiAgICAgIGRlbm9taW5hdG9yICs9IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLypcclxuICAgKiBQYXJzZSB0aGUgdmFsdWUgb2YgYSBuZXcgRGVjaW1hbCBgeGAgZnJvbSBzdHJpbmcgYHN0cmAuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcGFyc2VEZWNpbWFsKHgsIHN0cikge1xyXG4gICAgdmFyIGUsIGksIGxlbjtcclxuXHJcbiAgICAvLyBEZWNpbWFsIHBvaW50P1xyXG4gICAgaWYgKChlID0gc3RyLmluZGV4T2YoJy4nKSkgPiAtMSkgc3RyID0gc3RyLnJlcGxhY2UoJy4nLCAnJyk7XHJcblxyXG4gICAgLy8gRXhwb25lbnRpYWwgZm9ybT9cclxuICAgIGlmICgoaSA9IHN0ci5zZWFyY2goL2UvaSkpID4gMCkge1xyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIGV4cG9uZW50LlxyXG4gICAgICBpZiAoZSA8IDApIGUgPSBpO1xyXG4gICAgICBlICs9ICtzdHIuc2xpY2UoaSArIDEpO1xyXG4gICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGkpO1xyXG4gICAgfSBlbHNlIGlmIChlIDwgMCkge1xyXG5cclxuICAgICAgLy8gSW50ZWdlci5cclxuICAgICAgZSA9IHN0ci5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGxlYWRpbmcgemVyb3MuXHJcbiAgICBmb3IgKGkgPSAwOyBzdHIuY2hhckNvZGVBdChpKSA9PT0gNDg7KSArK2k7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHRyYWlsaW5nIHplcm9zLlxyXG4gICAgZm9yIChsZW4gPSBzdHIubGVuZ3RoOyBzdHIuY2hhckNvZGVBdChsZW4gLSAxKSA9PT0gNDg7KSAtLWxlbjtcclxuICAgIHN0ciA9IHN0ci5zbGljZShpLCBsZW4pO1xyXG5cclxuICAgIGlmIChzdHIpIHtcclxuICAgICAgbGVuIC09IGk7XHJcbiAgICAgIGUgPSBlIC0gaSAtIDE7XHJcbiAgICAgIHguZSA9IG1hdGhmbG9vcihlIC8gTE9HX0JBU0UpO1xyXG4gICAgICB4LmQgPSBbXTtcclxuXHJcbiAgICAgIC8vIFRyYW5zZm9ybSBiYXNlXHJcblxyXG4gICAgICAvLyBlIGlzIHRoZSBiYXNlIDEwIGV4cG9uZW50LlxyXG4gICAgICAvLyBpIGlzIHdoZXJlIHRvIHNsaWNlIHN0ciB0byBnZXQgdGhlIGZpcnN0IHdvcmQgb2YgdGhlIGRpZ2l0cyBhcnJheS5cclxuICAgICAgaSA9IChlICsgMSkgJSBMT0dfQkFTRTtcclxuICAgICAgaWYgKGUgPCAwKSBpICs9IExPR19CQVNFO1xyXG5cclxuICAgICAgaWYgKGkgPCBsZW4pIHtcclxuICAgICAgICBpZiAoaSkgeC5kLnB1c2goK3N0ci5zbGljZSgwLCBpKSk7XHJcbiAgICAgICAgZm9yIChsZW4gLT0gTE9HX0JBU0U7IGkgPCBsZW47KSB4LmQucHVzaCgrc3RyLnNsaWNlKGksIGkgKz0gTE9HX0JBU0UpKTtcclxuICAgICAgICBzdHIgPSBzdHIuc2xpY2UoaSk7XHJcbiAgICAgICAgaSA9IExPR19CQVNFIC0gc3RyLmxlbmd0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpIC09IGxlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICg7IGktLTspIHN0ciArPSAnMCc7XHJcbiAgICAgIHguZC5wdXNoKCtzdHIpO1xyXG5cclxuICAgICAgaWYgKGV4dGVybmFsICYmICh4LmUgPiBNQVhfRSB8fCB4LmUgPCAtTUFYX0UpKSB0aHJvdyBFcnJvcihleHBvbmVudE91dE9mUmFuZ2UgKyBlKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAvLyBaZXJvLlxyXG4gICAgICB4LnMgPSAwO1xyXG4gICAgICB4LmUgPSAwO1xyXG4gICAgICB4LmQgPSBbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLypcclxuICAgKiBSb3VuZCBgeGAgdG8gYHNkYCBzaWduaWZpY2FudCBkaWdpdHMsIHVzaW5nIHJvdW5kaW5nIG1vZGUgYHJtYCBpZiBwcmVzZW50ICh0cnVuY2F0ZSBvdGhlcndpc2UpLlxyXG4gICAqL1xyXG4gICBmdW5jdGlvbiByb3VuZCh4LCBzZCwgcm0pIHtcclxuICAgIHZhciBpLCBqLCBrLCBuLCByZCwgZG9Sb3VuZCwgdywgeGRpLFxyXG4gICAgICB4ZCA9IHguZDtcclxuXHJcbiAgICAvLyByZDogdGhlIHJvdW5kaW5nIGRpZ2l0LCBpLmUuIHRoZSBkaWdpdCBhZnRlciB0aGUgZGlnaXQgdGhhdCBtYXkgYmUgcm91bmRlZCB1cC5cclxuICAgIC8vIHc6IHRoZSB3b3JkIG9mIHhkIHdoaWNoIGNvbnRhaW5zIHRoZSByb3VuZGluZyBkaWdpdCwgYSBiYXNlIDFlNyBudW1iZXIuXHJcbiAgICAvLyB4ZGk6IHRoZSBpbmRleCBvZiB3IHdpdGhpbiB4ZC5cclxuICAgIC8vIG46IHRoZSBudW1iZXIgb2YgZGlnaXRzIG9mIHcuXHJcbiAgICAvLyBpOiB3aGF0IHdvdWxkIGJlIHRoZSBpbmRleCBvZiByZCB3aXRoaW4gdyBpZiBhbGwgdGhlIG51bWJlcnMgd2VyZSA3IGRpZ2l0cyBsb25nIChpLmUuIGlmXHJcbiAgICAvLyB0aGV5IGhhZCBsZWFkaW5nIHplcm9zKVxyXG4gICAgLy8gajogaWYgPiAwLCB0aGUgYWN0dWFsIGluZGV4IG9mIHJkIHdpdGhpbiB3IChpZiA8IDAsIHJkIGlzIGEgbGVhZGluZyB6ZXJvKS5cclxuXHJcbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZCBvZiB0aGUgZGlnaXRzIGFycmF5IHhkLlxyXG4gICAgZm9yIChuID0gMSwgayA9IHhkWzBdOyBrID49IDEwOyBrIC89IDEwKSBuKys7XHJcbiAgICBpID0gc2QgLSBuO1xyXG5cclxuICAgIC8vIElzIHRoZSByb3VuZGluZyBkaWdpdCBpbiB0aGUgZmlyc3Qgd29yZCBvZiB4ZD9cclxuICAgIGlmIChpIDwgMCkge1xyXG4gICAgICBpICs9IExPR19CQVNFO1xyXG4gICAgICBqID0gc2Q7XHJcbiAgICAgIHcgPSB4ZFt4ZGkgPSAwXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHhkaSA9IE1hdGguY2VpbCgoaSArIDEpIC8gTE9HX0JBU0UpO1xyXG4gICAgICBrID0geGQubGVuZ3RoO1xyXG4gICAgICBpZiAoeGRpID49IGspIHJldHVybiB4O1xyXG4gICAgICB3ID0gayA9IHhkW3hkaV07XHJcblxyXG4gICAgICAvLyBHZXQgdGhlIG51bWJlciBvZiBkaWdpdHMgb2Ygdy5cclxuICAgICAgZm9yIChuID0gMTsgayA+PSAxMDsgayAvPSAxMCkgbisrO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSBpbmRleCBvZiByZCB3aXRoaW4gdy5cclxuICAgICAgaSAlPSBMT0dfQkFTRTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgcmQgd2l0aGluIHcsIGFkanVzdGVkIGZvciBsZWFkaW5nIHplcm9zLlxyXG4gICAgICAvLyBUaGUgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3Mgb2YgdyBpcyBnaXZlbiBieSBMT0dfQkFTRSAtIG4uXHJcbiAgICAgIGogPSBpIC0gTE9HX0JBU0UgKyBuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChybSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgIGsgPSBtYXRocG93KDEwLCBuIC0gaiAtIDEpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSByb3VuZGluZyBkaWdpdCBhdCBpbmRleCBqIG9mIHcuXHJcbiAgICAgIHJkID0gdyAvIGsgJSAxMCB8IDA7XHJcblxyXG4gICAgICAvLyBBcmUgdGhlcmUgYW55IG5vbi16ZXJvIGRpZ2l0cyBhZnRlciB0aGUgcm91bmRpbmcgZGlnaXQ/XHJcbiAgICAgIGRvUm91bmQgPSBzZCA8IDAgfHwgeGRbeGRpICsgMV0gIT09IHZvaWQgMCB8fCB3ICUgaztcclxuXHJcbiAgICAgIC8vIFRoZSBleHByZXNzaW9uIGB3ICUgbWF0aHBvdygxMCwgbiAtIGogLSAxKWAgcmV0dXJucyBhbGwgdGhlIGRpZ2l0cyBvZiB3IHRvIHRoZSByaWdodCBvZiB0aGVcclxuICAgICAgLy8gZGlnaXQgYXQgKGxlZnQtdG8tcmlnaHQpIGluZGV4IGosIGUuZy4gaWYgdyBpcyA5MDg3MTQgYW5kIGogaXMgMiwgdGhlIGV4cHJlc3Npb24gd2lsbCBnaXZlXHJcbiAgICAgIC8vIDcxNC5cclxuXHJcbiAgICAgIGRvUm91bmQgPSBybSA8IDRcclxuICAgICAgICA/IChyZCB8fCBkb1JvdW5kKSAmJiAocm0gPT0gMCB8fCBybSA9PSAoeC5zIDwgMCA/IDMgOiAyKSlcclxuICAgICAgICA6IHJkID4gNSB8fCByZCA9PSA1ICYmIChybSA9PSA0IHx8IGRvUm91bmQgfHwgcm0gPT0gNiAmJlxyXG5cclxuICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGRpZ2l0IHRvIHRoZSBsZWZ0IG9mIHRoZSByb3VuZGluZyBkaWdpdCBpcyBvZGQuXHJcbiAgICAgICAgICAoKGkgPiAwID8gaiA+IDAgPyB3IC8gbWF0aHBvdygxMCwgbiAtIGopIDogMCA6IHhkW3hkaSAtIDFdKSAlIDEwKSAmIDEgfHxcclxuICAgICAgICAgICAgcm0gPT0gKHgucyA8IDAgPyA4IDogNykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZCA8IDEgfHwgIXhkWzBdKSB7XHJcbiAgICAgIGlmIChkb1JvdW5kKSB7XHJcbiAgICAgICAgayA9IGdldEJhc2UxMEV4cG9uZW50KHgpO1xyXG4gICAgICAgIHhkLmxlbmd0aCA9IDE7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgc2QgdG8gZGVjaW1hbCBwbGFjZXMuXHJcbiAgICAgICAgc2QgPSBzZCAtIGsgLSAxO1xyXG5cclxuICAgICAgICAvLyAxLCAwLjEsIDAuMDEsIDAuMDAxLCAwLjAwMDEgZXRjLlxyXG4gICAgICAgIHhkWzBdID0gbWF0aHBvdygxMCwgKExPR19CQVNFIC0gc2QgJSBMT0dfQkFTRSkgJSBMT0dfQkFTRSk7XHJcbiAgICAgICAgeC5lID0gbWF0aGZsb29yKC1zZCAvIExPR19CQVNFKSB8fCAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHhkLmxlbmd0aCA9IDE7XHJcblxyXG4gICAgICAgIC8vIFplcm8uXHJcbiAgICAgICAgeGRbMF0gPSB4LmUgPSB4LnMgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZXhjZXNzIGRpZ2l0cy5cclxuICAgIGlmIChpID09IDApIHtcclxuICAgICAgeGQubGVuZ3RoID0geGRpO1xyXG4gICAgICBrID0gMTtcclxuICAgICAgeGRpLS07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB4ZC5sZW5ndGggPSB4ZGkgKyAxO1xyXG4gICAgICBrID0gbWF0aHBvdygxMCwgTE9HX0JBU0UgLSBpKTtcclxuXHJcbiAgICAgIC8vIEUuZy4gNTY3MDAgYmVjb21lcyA1NjAwMCBpZiA3IGlzIHRoZSByb3VuZGluZyBkaWdpdC5cclxuICAgICAgLy8gaiA+IDAgbWVhbnMgaSA+IG51bWJlciBvZiBsZWFkaW5nIHplcm9zIG9mIHcuXHJcbiAgICAgIHhkW3hkaV0gPSBqID4gMCA/ICh3IC8gbWF0aHBvdygxMCwgbiAtIGopICUgbWF0aHBvdygxMCwgaikgfCAwKSAqIGsgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb1JvdW5kKSB7XHJcbiAgICAgIGZvciAoOzspIHtcclxuXHJcbiAgICAgICAgLy8gSXMgdGhlIGRpZ2l0IHRvIGJlIHJvdW5kZWQgdXAgaW4gdGhlIGZpcnN0IHdvcmQgb2YgeGQ/XHJcbiAgICAgICAgaWYgKHhkaSA9PSAwKSB7XHJcbiAgICAgICAgICBpZiAoKHhkWzBdICs9IGspID09IEJBU0UpIHtcclxuICAgICAgICAgICAgeGRbMF0gPSAxO1xyXG4gICAgICAgICAgICArK3guZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeGRbeGRpXSArPSBrO1xyXG4gICAgICAgICAgaWYgKHhkW3hkaV0gIT0gQkFTRSkgYnJlYWs7XHJcbiAgICAgICAgICB4ZFt4ZGktLV0gPSAwO1xyXG4gICAgICAgICAgayA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHplcm9zLlxyXG4gICAgZm9yIChpID0geGQubGVuZ3RoOyB4ZFstLWldID09PSAwOykgeGQucG9wKCk7XHJcblxyXG4gICAgaWYgKGV4dGVybmFsICYmICh4LmUgPiBNQVhfRSB8fCB4LmUgPCAtTUFYX0UpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGV4cG9uZW50T3V0T2ZSYW5nZSArIGdldEJhc2UxMEV4cG9uZW50KHgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geDtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBzdWJ0cmFjdCh4LCB5KSB7XHJcbiAgICB2YXIgZCwgZSwgaSwgaiwgaywgbGVuLCB4ZCwgeGUsIHhMVHksIHlkLFxyXG4gICAgICBDdG9yID0geC5jb25zdHJ1Y3RvcixcclxuICAgICAgcHIgPSBDdG9yLnByZWNpc2lvbjtcclxuXHJcbiAgICAvLyBSZXR1cm4geSBuZWdhdGVkIGlmIHggaXMgemVyby5cclxuICAgIC8vIFJldHVybiB4IGlmIHkgaXMgemVybyBhbmQgeCBpcyBub24temVyby5cclxuICAgIGlmICgheC5zIHx8ICF5LnMpIHtcclxuICAgICAgaWYgKHkucykgeS5zID0gLXkucztcclxuICAgICAgZWxzZSB5ID0gbmV3IEN0b3IoeCk7XHJcbiAgICAgIHJldHVybiBleHRlcm5hbCA/IHJvdW5kKHksIHByKSA6IHk7XHJcbiAgICB9XHJcblxyXG4gICAgeGQgPSB4LmQ7XHJcbiAgICB5ZCA9IHkuZDtcclxuXHJcbiAgICAvLyB4IGFuZCB5IGFyZSBub24temVybyBudW1iZXJzIHdpdGggdGhlIHNhbWUgc2lnbi5cclxuXHJcbiAgICBlID0geS5lO1xyXG4gICAgeGUgPSB4LmU7XHJcbiAgICB4ZCA9IHhkLnNsaWNlKCk7XHJcbiAgICBrID0geGUgLSBlO1xyXG5cclxuICAgIC8vIElmIGV4cG9uZW50cyBkaWZmZXIuLi5cclxuICAgIGlmIChrKSB7XHJcbiAgICAgIHhMVHkgPSBrIDwgMDtcclxuXHJcbiAgICAgIGlmICh4TFR5KSB7XHJcbiAgICAgICAgZCA9IHhkO1xyXG4gICAgICAgIGsgPSAtaztcclxuICAgICAgICBsZW4gPSB5ZC5sZW5ndGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZCA9IHlkO1xyXG4gICAgICAgIGUgPSB4ZTtcclxuICAgICAgICBsZW4gPSB4ZC5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE51bWJlcnMgd2l0aCBtYXNzaXZlbHkgZGlmZmVyZW50IGV4cG9uZW50cyB3b3VsZCByZXN1bHQgaW4gYSB2ZXJ5IGhpZ2ggbnVtYmVyIG9mIHplcm9zXHJcbiAgICAgIC8vIG5lZWRpbmcgdG8gYmUgcHJlcGVuZGVkLCBidXQgdGhpcyBjYW4gYmUgYXZvaWRlZCB3aGlsZSBzdGlsbCBlbnN1cmluZyBjb3JyZWN0IHJvdW5kaW5nIGJ5XHJcbiAgICAgIC8vIGxpbWl0aW5nIHRoZSBudW1iZXIgb2YgemVyb3MgdG8gYE1hdGguY2VpbChwciAvIExPR19CQVNFKSArIDJgLlxyXG4gICAgICBpID0gTWF0aC5tYXgoTWF0aC5jZWlsKHByIC8gTE9HX0JBU0UpLCBsZW4pICsgMjtcclxuXHJcbiAgICAgIGlmIChrID4gaSkge1xyXG4gICAgICAgIGsgPSBpO1xyXG4gICAgICAgIGQubGVuZ3RoID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJlcGVuZCB6ZXJvcyB0byBlcXVhbGlzZSBleHBvbmVudHMuXHJcbiAgICAgIGQucmV2ZXJzZSgpO1xyXG4gICAgICBmb3IgKGkgPSBrOyBpLS07KSBkLnB1c2goMCk7XHJcbiAgICAgIGQucmV2ZXJzZSgpO1xyXG5cclxuICAgIC8vIEJhc2UgMWU3IGV4cG9uZW50cyBlcXVhbC5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAvLyBDaGVjayBkaWdpdHMgdG8gZGV0ZXJtaW5lIHdoaWNoIGlzIHRoZSBiaWdnZXIgbnVtYmVyLlxyXG5cclxuICAgICAgaSA9IHhkLmxlbmd0aDtcclxuICAgICAgbGVuID0geWQubGVuZ3RoO1xyXG4gICAgICB4TFR5ID0gaSA8IGxlbjtcclxuICAgICAgaWYgKHhMVHkpIGxlbiA9IGk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoeGRbaV0gIT0geWRbaV0pIHtcclxuICAgICAgICAgIHhMVHkgPSB4ZFtpXSA8IHlkW2ldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBrID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeExUeSkge1xyXG4gICAgICBkID0geGQ7XHJcbiAgICAgIHhkID0geWQ7XHJcbiAgICAgIHlkID0gZDtcclxuICAgICAgeS5zID0gLXkucztcclxuICAgIH1cclxuXHJcbiAgICBsZW4gPSB4ZC5sZW5ndGg7XHJcblxyXG4gICAgLy8gQXBwZW5kIHplcm9zIHRvIHhkIGlmIHNob3J0ZXIuXHJcbiAgICAvLyBEb24ndCBhZGQgemVyb3MgdG8geWQgaWYgc2hvcnRlciBhcyBzdWJ0cmFjdGlvbiBvbmx5IG5lZWRzIHRvIHN0YXJ0IGF0IHlkIGxlbmd0aC5cclxuICAgIGZvciAoaSA9IHlkLmxlbmd0aCAtIGxlbjsgaSA+IDA7IC0taSkgeGRbbGVuKytdID0gMDtcclxuXHJcbiAgICAvLyBTdWJ0cmFjdCB5ZCBmcm9tIHhkLlxyXG4gICAgZm9yIChpID0geWQubGVuZ3RoOyBpID4gazspIHtcclxuICAgICAgaWYgKHhkWy0taV0gPCB5ZFtpXSkge1xyXG4gICAgICAgIGZvciAoaiA9IGk7IGogJiYgeGRbLS1qXSA9PT0gMDspIHhkW2pdID0gQkFTRSAtIDE7XHJcbiAgICAgICAgLS14ZFtqXTtcclxuICAgICAgICB4ZFtpXSArPSBCQVNFO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB4ZFtpXSAtPSB5ZFtpXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgdHJhaWxpbmcgemVyb3MuXHJcbiAgICBmb3IgKDsgeGRbLS1sZW5dID09PSAwOykgeGQucG9wKCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGxlYWRpbmcgemVyb3MgYW5kIGFkanVzdCBleHBvbmVudCBhY2NvcmRpbmdseS5cclxuICAgIGZvciAoOyB4ZFswXSA9PT0gMDsgeGQuc2hpZnQoKSkgLS1lO1xyXG5cclxuICAgIC8vIFplcm8/XHJcbiAgICBpZiAoIXhkWzBdKSByZXR1cm4gbmV3IEN0b3IoMCk7XHJcblxyXG4gICAgeS5kID0geGQ7XHJcbiAgICB5LmUgPSBlO1xyXG5cclxuICAgIC8vcmV0dXJuIGV4dGVybmFsICYmIHhkLmxlbmd0aCA+PSBwciAvIExPR19CQVNFID8gcm91bmQoeSwgcHIpIDogeTtcclxuICAgIHJldHVybiBleHRlcm5hbCA/IHJvdW5kKHksIHByKSA6IHk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gdG9TdHJpbmcoeCwgaXNFeHAsIHNkKSB7XHJcbiAgICB2YXIgayxcclxuICAgICAgZSA9IGdldEJhc2UxMEV4cG9uZW50KHgpLFxyXG4gICAgICBzdHIgPSBkaWdpdHNUb1N0cmluZyh4LmQpLFxyXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xyXG5cclxuICAgIGlmIChpc0V4cCkge1xyXG4gICAgICBpZiAoc2QgJiYgKGsgPSBzZCAtIGxlbikgPiAwKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLmNoYXJBdCgwKSArICcuJyArIHN0ci5zbGljZSgxKSArIGdldFplcm9TdHJpbmcoayk7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVuID4gMSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkgKyAnLicgKyBzdHIuc2xpY2UoMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0ciA9IHN0ciArIChlIDwgMCA/ICdlJyA6ICdlKycpICsgZTtcclxuICAgIH0gZWxzZSBpZiAoZSA8IDApIHtcclxuICAgICAgc3RyID0gJzAuJyArIGdldFplcm9TdHJpbmcoLWUgLSAxKSArIHN0cjtcclxuICAgICAgaWYgKHNkICYmIChrID0gc2QgLSBsZW4pID4gMCkgc3RyICs9IGdldFplcm9TdHJpbmcoayk7XHJcbiAgICB9IGVsc2UgaWYgKGUgPj0gbGVuKSB7XHJcbiAgICAgIHN0ciArPSBnZXRaZXJvU3RyaW5nKGUgKyAxIC0gbGVuKTtcclxuICAgICAgaWYgKHNkICYmIChrID0gc2QgLSBlIC0gMSkgPiAwKSBzdHIgPSBzdHIgKyAnLicgKyBnZXRaZXJvU3RyaW5nKGspO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKChrID0gZSArIDEpIDwgbGVuKSBzdHIgPSBzdHIuc2xpY2UoMCwgaykgKyAnLicgKyBzdHIuc2xpY2Uoayk7XHJcbiAgICAgIGlmIChzZCAmJiAoayA9IHNkIC0gbGVuKSA+IDApIHtcclxuICAgICAgICBpZiAoZSArIDEgPT09IGxlbikgc3RyICs9ICcuJztcclxuICAgICAgICBzdHIgKz0gZ2V0WmVyb1N0cmluZyhrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB4LnMgPCAwID8gJy0nICsgc3RyIDogc3RyO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIERvZXMgbm90IHN0cmlwIHRyYWlsaW5nIHplcm9zLlxyXG4gIGZ1bmN0aW9uIHRydW5jYXRlKGFyciwgbGVuKSB7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCA+IGxlbikge1xyXG4gICAgICBhcnIubGVuZ3RoID0gbGVuO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBEZWNpbWFsIG1ldGhvZHNcclxuXHJcblxyXG4gIC8qXHJcbiAgICogIGNsb25lXHJcbiAgICogIGNvbmZpZy9zZXRcclxuICAgKi9cclxuXHJcblxyXG4gIC8qXHJcbiAgICogQ3JlYXRlIGFuZCByZXR1cm4gYSBEZWNpbWFsIGNvbnN0cnVjdG9yIHdpdGggdGhlIHNhbWUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIGFzIHRoaXMgRGVjaW1hbFxyXG4gICAqIGNvbnN0cnVjdG9yLlxyXG4gICAqXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY2xvbmUob2JqKSB7XHJcbiAgICB2YXIgaSwgcCwgcHM7XHJcblxyXG4gICAgLypcclxuICAgICAqIFRoZSBEZWNpbWFsIGNvbnN0cnVjdG9yIGFuZCBleHBvcnRlZCBmdW5jdGlvbi5cclxuICAgICAqIFJldHVybiBhIG5ldyBEZWNpbWFsIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIHZhbHVlIHtudW1iZXJ8c3RyaW5nfERlY2ltYWx9IEEgbnVtZXJpYyB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIERlY2ltYWwodmFsdWUpIHtcclxuICAgICAgdmFyIHggPSB0aGlzO1xyXG5cclxuICAgICAgLy8gRGVjaW1hbCBjYWxsZWQgd2l0aG91dCBuZXcuXHJcbiAgICAgIGlmICghKHggaW5zdGFuY2VvZiBEZWNpbWFsKSkgcmV0dXJuIG5ldyBEZWNpbWFsKHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIFJldGFpbiBhIHJlZmVyZW5jZSB0byB0aGlzIERlY2ltYWwgY29uc3RydWN0b3IsIGFuZCBzaGFkb3cgRGVjaW1hbC5wcm90b3R5cGUuY29uc3RydWN0b3JcclxuICAgICAgLy8gd2hpY2ggcG9pbnRzIHRvIE9iamVjdC5cclxuICAgICAgeC5jb25zdHJ1Y3RvciA9IERlY2ltYWw7XHJcblxyXG4gICAgICAvLyBEdXBsaWNhdGUuXHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERlY2ltYWwpIHtcclxuICAgICAgICB4LnMgPSB2YWx1ZS5zO1xyXG4gICAgICAgIHguZSA9IHZhbHVlLmU7XHJcbiAgICAgICAgeC5kID0gKHZhbHVlID0gdmFsdWUuZCkgPyB2YWx1ZS5zbGljZSgpIDogdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG5cclxuICAgICAgICAvLyBSZWplY3QgSW5maW5pdHkvTmFOLlxyXG4gICAgICAgIGlmICh2YWx1ZSAqIDAgIT09IDApIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKGludmFsaWRBcmd1bWVudCArIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgIHgucyA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgeC5zID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHgucyA9IDA7XHJcbiAgICAgICAgICB4LmUgPSAwO1xyXG4gICAgICAgICAgeC5kID0gWzBdO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBzbWFsbCBpbnRlZ2Vycy5cclxuICAgICAgICBpZiAodmFsdWUgPT09IH5+dmFsdWUgJiYgdmFsdWUgPCAxZTcpIHtcclxuICAgICAgICAgIHguZSA9IDA7XHJcbiAgICAgICAgICB4LmQgPSBbdmFsdWVdO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCh4LCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNaW51cyBzaWduP1xyXG4gICAgICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gNDUpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgIHgucyA9IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHgucyA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc0RlY2ltYWwudGVzdCh2YWx1ZSkpIHBhcnNlRGVjaW1hbCh4LCB2YWx1ZSk7XHJcbiAgICAgIGVsc2UgdGhyb3cgRXJyb3IoaW52YWxpZEFyZ3VtZW50ICsgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIERlY2ltYWwucHJvdG90eXBlID0gUDtcclxuXHJcbiAgICBEZWNpbWFsLlJPVU5EX1VQID0gMDtcclxuICAgIERlY2ltYWwuUk9VTkRfRE9XTiA9IDE7XHJcbiAgICBEZWNpbWFsLlJPVU5EX0NFSUwgPSAyO1xyXG4gICAgRGVjaW1hbC5ST1VORF9GTE9PUiA9IDM7XHJcbiAgICBEZWNpbWFsLlJPVU5EX0hBTEZfVVAgPSA0O1xyXG4gICAgRGVjaW1hbC5ST1VORF9IQUxGX0RPV04gPSA1O1xyXG4gICAgRGVjaW1hbC5ST1VORF9IQUxGX0VWRU4gPSA2O1xyXG4gICAgRGVjaW1hbC5ST1VORF9IQUxGX0NFSUwgPSA3O1xyXG4gICAgRGVjaW1hbC5ST1VORF9IQUxGX0ZMT09SID0gODtcclxuXHJcbiAgICBEZWNpbWFsLmNsb25lID0gY2xvbmU7XHJcbiAgICBEZWNpbWFsLmNvbmZpZyA9IERlY2ltYWwuc2V0ID0gY29uZmlnO1xyXG5cclxuICAgIGlmIChvYmogPT09IHZvaWQgMCkgb2JqID0ge307XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIHBzID0gWydwcmVjaXNpb24nLCAncm91bmRpbmcnLCAndG9FeHBOZWcnLCAndG9FeHBQb3MnLCAnTE4xMCddO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcHMubGVuZ3RoOykgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocCA9IHBzW2krK10pKSBvYmpbcF0gPSB0aGlzW3BdO1xyXG4gICAgfVxyXG5cclxuICAgIERlY2ltYWwuY29uZmlnKG9iaik7XHJcblxyXG4gICAgcmV0dXJuIERlY2ltYWw7XHJcbiAgfVxyXG5cclxuXHJcbiAgLypcclxuICAgKiBDb25maWd1cmUgZ2xvYmFsIHNldHRpbmdzIGZvciBhIERlY2ltYWwgY29uc3RydWN0b3IuXHJcbiAgICpcclxuICAgKiBgb2JqYCBpcyBhbiBvYmplY3Qgd2l0aCBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMsXHJcbiAgICpcclxuICAgKiAgIHByZWNpc2lvbiAge251bWJlcn1cclxuICAgKiAgIHJvdW5kaW5nICAge251bWJlcn1cclxuICAgKiAgIHRvRXhwTmVnICAge251bWJlcn1cclxuICAgKiAgIHRvRXhwUG9zICAge251bWJlcn1cclxuICAgKlxyXG4gICAqIEUuZy4gRGVjaW1hbC5jb25maWcoeyBwcmVjaXNpb246IDIwLCByb3VuZGluZzogNCB9KVxyXG4gICAqXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY29uZmlnKG9iaikge1xyXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoZGVjaW1hbEVycm9yICsgJ09iamVjdCBleHBlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIGksIHAsIHYsXHJcbiAgICAgIHBzID0gW1xyXG4gICAgICAgICdwcmVjaXNpb24nLCAxLCBNQVhfRElHSVRTLFxyXG4gICAgICAgICdyb3VuZGluZycsIDAsIDgsXHJcbiAgICAgICAgJ3RvRXhwTmVnJywgLTEgLyAwLCAwLFxyXG4gICAgICAgICd0b0V4cFBvcycsIDAsIDEgLyAwXHJcbiAgICAgIF07XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgIGlmICgodiA9IG9ialtwID0gcHNbaV1dKSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKG1hdGhmbG9vcih2KSA9PT0gdiAmJiB2ID49IHBzW2kgKyAxXSAmJiB2IDw9IHBzW2kgKyAyXSkgdGhpc1twXSA9IHY7XHJcbiAgICAgICAgZWxzZSB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBwICsgJzogJyArIHYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh2ID0gb2JqW3AgPSAnTE4xMCddKSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKHYgPT0gTWF0aC5MTjEwKSB0aGlzW3BdID0gbmV3IHRoaXModik7XHJcbiAgICAgICAgZWxzZSB0aHJvdyBFcnJvcihpbnZhbGlkQXJndW1lbnQgKyBwICsgJzogJyArIHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgY29uZmlndXJlIGluaXRpYWwgRGVjaW1hbCBjb25zdHJ1Y3Rvci5cclxuICBEZWNpbWFsID0gY2xvbmUoRGVjaW1hbCk7XHJcblxyXG4gIERlY2ltYWxbJ2RlZmF1bHQnXSA9IERlY2ltYWwuRGVjaW1hbCA9IERlY2ltYWw7XHJcblxyXG4gIC8vIEludGVybmFsIGNvbnN0YW50LlxyXG4gIE9ORSA9IG5ldyBEZWNpbWFsKDEpO1xyXG5cclxuXHJcbiAgLy8gRXhwb3J0LlxyXG5cclxuXHJcbiAgLy8gQU1ELlxyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIERlY2ltYWw7XHJcbiAgICB9KTtcclxuXHJcbiAgLy8gTm9kZSBhbmQgb3RoZXIgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cy5cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gRGVjaW1hbDtcclxuXHJcbiAgICAvLyBCcm93c2VyLlxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWdsb2JhbFNjb3BlKSB7XHJcbiAgICAgIGdsb2JhbFNjb3BlID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiAmJiBzZWxmLnNlbGYgPT0gc2VsZlxyXG4gICAgICAgID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xvYmFsU2NvcGUuRGVjaW1hbCA9IERlY2ltYWw7XHJcbiAgfVxyXG59KSh0aGlzKTtcclxuIiwiLyohIE1vbWVudCBEdXJhdGlvbiBGb3JtYXQgdjIuMi4yXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2pzbXJlZXNlL21vbWVudC1kdXJhdGlvbi1mb3JtYXRcbiAqICBEYXRlOiAyMDE4LTAyLTE2XG4gKlxuICogIER1cmF0aW9uIGZvcm1hdCBwbHVnaW4gZnVuY3Rpb24gZm9yIHRoZSBNb21lbnQuanMgbGlicmFyeVxuICogIGh0dHA6Ly9tb21lbnRqcy5jb20vXG4gKlxuICogIENvcHlyaWdodCAyMDE4IEpvaG4gTWFkaGF2YW4tUmVlc2VcbiAqICBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnbW9tZW50J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2VcbiAgICAgICAgLy8gZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLCBsaWtlIE5vZGUuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnbW9tZW50JykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZiBtb21lbnQgaXMgbm90IGF2YWlsYWJsZSwgbGVhdmUgdGhlIHNldHVwIHVwIHRvIHRoZSB1c2VyLlxuICAgICAgICAgICAgLy8gTGlrZSB3aGVuIHVzaW5nIG1vbWVudC10aW1lem9uZSBvciBzaW1pbGFyIG1vbWVudC1iYXNlZCBwYWNrYWdlLlxuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJvb3QpIHtcbiAgICAgICAgLy8gR2xvYmFscy5cbiAgICAgICAgcm9vdC5tb21lbnREdXJhdGlvbkZvcm1hdFNldHVwID0gcm9vdC5tb21lbnQgPyBmYWN0b3J5KHJvb3QubW9tZW50KSA6IGZhY3Rvcnk7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vbWVudCkge1xuICAgIC8vIGBOdW1iZXIjdG9sb2NhbGVTdHJpbmdgIGlzIHRlc3RlZCBvbiBwbHVnaW4gaW5pdGlhbGl6YXRpb24uXG4gICAgLy8gSWYgdGhlIGZlYXR1cmUgdGVzdCBwYXNzZXMsIGB0b0xvY2FsZVN0cmluZ1dvcmtzYCB3aWxsIGJlIHNldCB0byBgdHJ1ZWAgYW5kIHRoZVxuICAgIC8vIG5hdGl2ZSBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgZm9ybWF0dGVkIG91dHB1dC4gSWYgdGhlIGZlYXR1cmVcbiAgICAvLyB0ZXN0IGZhaWxzLCB0aGUgZmFsbGJhY2sgZm9ybWF0IGZ1bmN0aW9uIGludGVybmFsIHRvIHRoaXMgcGx1Z2luIHdpbGwgYmVcbiAgICAvLyB1c2VkLlxuICAgIHZhciB0b0xvY2FsZVN0cmluZ1dvcmtzID0gZmFsc2U7XG5cbiAgICAvLyBgTnVtYmVyI3RvTG9jYWxlU3RyaW5nYCByb3VuZHMgaW5jb3JyZWN0bHkgZm9yIHNlbGVjdCBudW1iZXJzIGluIE1pY3Jvc29mdFxuICAgIC8vIGVudmlyb25tZW50cyAoRWRnZSwgSUUxMSwgV2luZG93cyBQaG9uZSkgYW5kIHBvc3NpYmx5IG90aGVyIGVudmlyb25tZW50cy5cbiAgICAvLyBJZiB0aGUgcm91bmRpbmcgdGVzdCBmYWlscyBhbmQgYHRvTG9jYWxlU3RyaW5nYCB3aWxsIGJlIHVzZWQgZm9yIGZvcm1hdHRpbmcsXG4gICAgLy8gdGhlIHBsdWdpbiB3aWxsIFwicHJlLXJvdW5kXCIgbnVtYmVyIHZhbHVlcyB1c2luZyB0aGUgZmFsbGJhY2sgbnVtYmVyIGZvcm1hdFxuICAgIC8vIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIHRoZW0gdG8gYHRvTG9jYWxlU3RyaW5nYCBmb3IgZmluYWwgZm9ybWF0dGluZy5cbiAgICB2YXIgdG9Mb2NhbGVTdHJpbmdSb3VuZGluZ1dvcmtzID0gZmFsc2U7XG5cbiAgICAvLyBUb2tlbiB0eXBlIG5hbWVzIGluIG9yZGVyIG9mIGRlc2NlbmRpbmcgbWFnbml0dWRlLlxuICAgIHZhciB0eXBlcyA9IFwiZXNjYXBlIHllYXJzIG1vbnRocyB3ZWVrcyBkYXlzIGhvdXJzIG1pbnV0ZXMgc2Vjb25kcyBtaWxsaXNlY29uZHMgZ2VuZXJhbFwiLnNwbGl0KFwiIFwiKTtcblxuICAgIHZhciBidWJibGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcInNlY29uZHNcIixcbiAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwibWludXRlc1wiLCB2YWx1ZTogNjAgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiaG91cnNcIiwgdmFsdWU6IDM2MDAgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiZGF5c1wiLCB2YWx1ZTogODY0MDAgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwid2Vla3NcIiwgdmFsdWU6IDYwNDgwMCB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJtb250aHNcIiwgdmFsdWU6IDI2Nzg0MDAgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwieWVhcnNcIiwgdmFsdWU6IDMxNTM2MDAwIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJtaW51dGVzXCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImhvdXJzXCIsIHZhbHVlOiA2MCB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJkYXlzXCIsIHZhbHVlOiAxNDQwIH0sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcIndlZWtzXCIsIHZhbHVlOiAxMDA4MCB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJtb250aHNcIiwgdmFsdWU6IDQ0NjQwIH0sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcInllYXJzXCIsIHZhbHVlOiA1MjU2MDAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImhvdXJzXCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImRheXNcIiwgdmFsdWU6IDI0IH0sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcIndlZWtzXCIsIHZhbHVlOiAxNjggfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwibW9udGhzXCIsIHZhbHVlOiA3NDQgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwieWVhcnNcIiwgdmFsdWU6IDg3NjAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImRheXNcIixcbiAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwid2Vla3NcIiwgdmFsdWU6IDcgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwibW9udGhzXCIsIHZhbHVlOiAzMSB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJ5ZWFyc1wiLCB2YWx1ZTogMzY1IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJtb250aHNcIixcbiAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwieWVhcnNcIiwgdmFsdWU6IDEyIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzdHJpbmdJbmNsdWRlc1xuICAgIGZ1bmN0aW9uIHN0cmluZ0luY2x1ZGVzKHN0ciwgc2VhcmNoKSB7XG4gICAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihzZWFyY2gpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvLyByZXBlYXRaZXJvKHF0eSlcbiAgICAvLyBSZXR1cm5zIFwiMFwiIHJlcGVhdGVkIGBxdHlgIHRpbWVzLlxuICAgIC8vIGBxdHlgIG11c3QgYmUgYSBpbnRlZ2VyID49IDAuXG4gICAgZnVuY3Rpb24gcmVwZWF0WmVybyhxdHkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG5cbiAgICAgICAgd2hpbGUgKHF0eSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiMFwiO1xuICAgICAgICAgICAgcXR5IC09IDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ1JvdW5kKGRpZ2l0cykge1xuICAgICAgICB2YXIgZGlnaXRzQXJyYXkgPSBkaWdpdHMuc3BsaXQoXCJcIikucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjYXJyeSA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKGNhcnJ5ICYmIGkgPCBkaWdpdHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0c0FycmF5W2ldID09PSBcIjlcIikge1xuICAgICAgICAgICAgICAgICAgICBkaWdpdHNBcnJheVtpXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZ2l0c0FycmF5W2ldID0gKHBhcnNlSW50KGRpZ2l0c0FycmF5W2ldLCAxMCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRpZ2l0c0FycmF5W2ldLCAxMCkgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGlnaXRzQXJyYXlbaV0gPSBcIjBcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcnJ5KSB7XG4gICAgICAgICAgICBkaWdpdHNBcnJheS5wdXNoKFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWdpdHNBcnJheS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtYXROdW1iZXJcbiAgICAvLyBGb3JtYXRzIGFueSBudW1iZXIgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8gdXNpbmcgdGhlc2Ugb3B0aW9uczpcbiAgICAvLyAtIHVzZXJMb2NhbGVcbiAgICAvLyAtIHVzZVRvTG9jYWxlU3RyaW5nXG4gICAgLy8gLSB1c2VHcm91cGluZ1xuICAgIC8vIC0gZ3JvdXBpbmdcbiAgICAvLyAtIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xuICAgIC8vIC0gbWluaW11bUludGVnZXJEaWdpdHNcbiAgICAvLyAtIGZyYWN0aW9uRGlnaXRzXG4gICAgLy8gLSBncm91cGluZ1NlcGFyYXRvclxuICAgIC8vIC0gZGVjaW1hbFNlcGFyYXRvclxuICAgIC8vXG4gICAgLy8gYHVzZVRvTG9jYWxlU3RyaW5nYCB3aWxsIHVzZSBgdG9Mb2NhbGVTdHJpbmdgIGZvciBmb3JtYXR0aW5nLlxuICAgIC8vIGB1c2VyTG9jYWxlYCBvcHRpb24gaXMgcGFzc2VkIHRocm91Z2ggdG8gYHRvTG9jYWxlU3RyaW5nYC5cbiAgICAvLyBgZnJhY3Rpb25EaWdpdHNgIGlzIHBhc3NlZCB0aHJvdWdoIHRvIGBtYXhpbXVtRnJhY3Rpb25EaWdpdHNgIGFuZCBgbWluaW11bUZyYWN0aW9uRGlnaXRzYFxuICAgIC8vIFVzaW5nIGBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNgIHdpbGwgb3ZlcnJpZGUgYG1pbmltdW1JbnRlZ2VyRGlnaXRzYCBhbmQgYGZyYWN0aW9uRGlnaXRzYC5cbiAgICBmdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBvcHRpb25zLCB1c2VyTG9jYWxlKSB7XG4gICAgICAgIHZhciB1c2VUb0xvY2FsZVN0cmluZyA9IG9wdGlvbnMudXNlVG9Mb2NhbGVTdHJpbmc7XG4gICAgICAgIHZhciB1c2VHcm91cGluZyA9IG9wdGlvbnMudXNlR3JvdXBpbmc7XG4gICAgICAgIHZhciBncm91cGluZyA9IHVzZUdyb3VwaW5nICYmIG9wdGlvbnMuZ3JvdXBpbmcuc2xpY2UoKTtcbiAgICAgICAgdmFyIG1heGltdW1TaWduaWZpY2FudERpZ2l0cyA9IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzO1xuICAgICAgICB2YXIgbWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzIHx8IDE7XG4gICAgICAgIHZhciBmcmFjdGlvbkRpZ2l0cyA9IG9wdGlvbnMuZnJhY3Rpb25EaWdpdHMgfHwgMDtcbiAgICAgICAgdmFyIGdyb3VwaW5nU2VwYXJhdG9yID0gb3B0aW9ucy5ncm91cGluZ1NlcGFyYXRvcjtcbiAgICAgICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBvcHRpb25zLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAgICAgaWYgKHVzZVRvTG9jYWxlU3RyaW5nICYmIHVzZXJMb2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGVTdHJpbmdPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBtaW5pbXVtSW50ZWdlckRpZ2l0cyxcbiAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogdXNlR3JvdXBpbmdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgICAgICAgICAgIGxvY2FsZVN0cmluZ09wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID0gZnJhY3Rpb25EaWdpdHM7XG4gICAgICAgICAgICAgICAgbG9jYWxlU3RyaW5nT3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBmcmFjdGlvbkRpZ2l0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdG9Mb2NhbGVTdHJpbmcgb3V0cHV0IGlzIFwiMC4wXCIgaW5zdGVhZCBvZiBcIjBcIiBmb3IgSFRDIGJyb3dzZXJzXG4gICAgICAgICAgICAvLyB3aGVuIG1heGltdW1TaWduaWZpY2FudERpZ2l0cyBpcyBzZXQuIFNlZSAjOTYuXG4gICAgICAgICAgICBpZiAobWF4aW11bVNpZ25pZmljYW50RGlnaXRzICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVTdHJpbmdPcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA9IG1heGltdW1TaWduaWZpY2FudERpZ2l0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0b0xvY2FsZVN0cmluZ1JvdW5kaW5nV29ya3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgcm91bmRpbmdPcHRpb25zID0gZXh0ZW5kKHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByb3VuZGluZ09wdGlvbnMudXNlR3JvdXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByb3VuZGluZ09wdGlvbnMuZGVjaW1hbFNlcGFyYXRvciA9IFwiLlwiO1xuICAgICAgICAgICAgICAgIG51bWJlciA9IHBhcnNlRmxvYXQoZm9ybWF0TnVtYmVyKG51bWJlciwgcm91bmRpbmdPcHRpb25zKSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyLnRvTG9jYWxlU3RyaW5nKHVzZXJMb2NhbGUsIGxvY2FsZVN0cmluZ09wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG51bWJlclN0cmluZztcblxuICAgICAgICAvLyBBZGQgMSB0byBkaWdpdCBvdXRwdXQgbGVuZ3RoIGZvciBmbG9hdGluZyBwb2ludCBlcnJvcnMgd29ya2Fyb3VuZC4gU2VlIGJlbG93LlxuICAgICAgICBpZiAobWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSB7XG4gICAgICAgICAgICBudW1iZXJTdHJpbmcgPSBudW1iZXIudG9QcmVjaXNpb24obWF4aW11bVNpZ25pZmljYW50RGlnaXRzICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXJTdHJpbmcgPSBudW1iZXIudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGludGVnZXJTdHJpbmc7XG4gICAgICAgIHZhciBmcmFjdGlvblN0cmluZztcbiAgICAgICAgdmFyIGV4cG9uZW50U3RyaW5nO1xuXG4gICAgICAgIHZhciB0ZW1wID0gbnVtYmVyU3RyaW5nLnNwbGl0KFwiZVwiKTtcblxuICAgICAgICBleHBvbmVudFN0cmluZyA9IHRlbXBbMV0gfHwgXCJcIjtcblxuICAgICAgICB0ZW1wID0gdGVtcFswXS5zcGxpdChcIi5cIik7XG5cbiAgICAgICAgZnJhY3Rpb25TdHJpbmcgPSB0ZW1wWzFdIHx8IFwiXCI7XG4gICAgICAgIGludGVnZXJTdHJpbmcgPSB0ZW1wWzBdIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgZmxvYXRpbmcgcG9pbnQgZXJyb3JzIGluIGB0b0ZpeGVkYCBhbmQgYHRvUHJlY2lzaW9uYC5cbiAgICAgICAgLy8gKDMuNTUpLnRvRml4ZWQoMSk7IC0tPiBcIjMuNVwiXG4gICAgICAgIC8vICgxMjMuNTUgLSAxMjApLnRvUHJlY2lzaW9uKDIpOyAtLT4gXCIzLjVcIlxuICAgICAgICAvLyAoMTIzLjU1IC0gMTIwKTsgLS0+IDMuNTQ5OTk5OTk5OTk5OTk3XG4gICAgICAgIC8vICgxMjMuNTUgLSAxMjApLnRvRml4ZWQoMik7IC0tPiBcIjMuNTVcIlxuICAgICAgICAvLyBSb3VuZCBieSBleGFtaW5nIHRoZSBzdHJpbmcgb3V0cHV0IG9mIHRoZSBuZXh0IGRpZ2l0LlxuXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKiBJbXBsZW1lbnQgU3RyaW5nIFJvdW5kaW5nIGhlcmUgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgLy8gQ2hlY2sgaW50ZWdlclN0cmluZyArIGZyYWN0aW9uU3RyaW5nIGxlbmd0aCBvZiB0b1ByZWNpc2lvbiBiZWZvcmUgcm91bmRpbmcuXG4gICAgICAgIC8vIENoZWNrIGxlbmd0aCBvZiBmcmFjdGlvblN0cmluZyBmcm9tIHRvRml4ZWQgb3V0cHV0IGJlZm9yZSByb3VuZGluZy5cbiAgICAgICAgdmFyIGludGVnZXJMZW5ndGggPSBpbnRlZ2VyU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGZyYWN0aW9uTGVuZ3RoID0gZnJhY3Rpb25TdHJpbmcubGVuZ3RoO1xuICAgICAgICB2YXIgZGlnaXRDb3VudCA9IGludGVnZXJMZW5ndGggKyBmcmFjdGlvbkxlbmd0aDtcbiAgICAgICAgdmFyIGRpZ2l0cyA9IGludGVnZXJTdHJpbmcgKyBmcmFjdGlvblN0cmluZztcblxuICAgICAgICBpZiAobWF4aW11bVNpZ25pZmljYW50RGlnaXRzICYmIGRpZ2l0Q291bnQgPT09IChtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgKyAxKSB8fCAhbWF4aW11bVNpZ25pZmljYW50RGlnaXRzICYmIGZyYWN0aW9uTGVuZ3RoID09PSAoZnJhY3Rpb25EaWdpdHMgKyAxKSkge1xuICAgICAgICAgICAgLy8gUm91bmQgZGlnaXRzLlxuICAgICAgICAgICAgZGlnaXRzID0gc3RyaW5nUm91bmQoZGlnaXRzKTtcblxuICAgICAgICAgICAgaWYgKGRpZ2l0cy5sZW5ndGggPT09IGRpZ2l0Q291bnQgKyAxKSB7XG4gICAgICAgICAgICAgICAgaW50ZWdlckxlbmd0aCA9IGludGVnZXJMZW5ndGggKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNjYXJkIGZpbmFsIGZyYWN0aW9uRGlnaXQuXG4gICAgICAgICAgICBpZiAoZnJhY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkaWdpdHMgPSBkaWdpdHMuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXBhcmF0ZSBpbnRlZ2VyIGFuZCBmcmFjdGlvbi5cbiAgICAgICAgICAgIGludGVnZXJTdHJpbmcgPSBkaWdpdHMuc2xpY2UoMCwgaW50ZWdlckxlbmd0aCk7XG4gICAgICAgICAgICBmcmFjdGlvblN0cmluZyA9IGRpZ2l0cy5zbGljZShpbnRlZ2VyTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaW0gdHJhaWxpbmcgemVyb2VzIGZyb20gZnJhY3Rpb25TdHJpbmcgYmVjYXVzZSB0b1ByZWNpc2lvbiBvdXRwdXRzXG4gICAgICAgIC8vIHByZWNpc2lvbiwgbm90IHNpZ25pZmljYW50IGRpZ2l0cy5cbiAgICAgICAgaWYgKG1heGltdW1TaWduaWZpY2FudERpZ2l0cykge1xuICAgICAgICAgICAgZnJhY3Rpb25TdHJpbmcgPSBmcmFjdGlvblN0cmluZy5yZXBsYWNlKC8wKiQvLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBleHBvbmVudC5cbiAgICAgICAgdmFyIGV4cG9uZW50ID0gcGFyc2VJbnQoZXhwb25lbnRTdHJpbmcsIDEwKTtcblxuICAgICAgICBpZiAoZXhwb25lbnQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhY3Rpb25TdHJpbmcubGVuZ3RoIDw9IGV4cG9uZW50KSB7XG4gICAgICAgICAgICAgICAgZnJhY3Rpb25TdHJpbmcgPSBmcmFjdGlvblN0cmluZyArIHJlcGVhdFplcm8oZXhwb25lbnQgLSBmcmFjdGlvblN0cmluZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgaW50ZWdlclN0cmluZyA9IGludGVnZXJTdHJpbmcgKyBmcmFjdGlvblN0cmluZztcbiAgICAgICAgICAgICAgICBmcmFjdGlvblN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGludGVnZXJTdHJpbmcgPSBpbnRlZ2VyU3RyaW5nICsgZnJhY3Rpb25TdHJpbmcuc2xpY2UoMCwgZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWN0aW9uU3RyaW5nID0gZnJhY3Rpb25TdHJpbmcuc2xpY2UoZXhwb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV4cG9uZW50IDwgMCkge1xuICAgICAgICAgICAgZnJhY3Rpb25TdHJpbmcgPSAocmVwZWF0WmVybyhNYXRoLmFicyhleHBvbmVudCkgLSBpbnRlZ2VyU3RyaW5nLmxlbmd0aCkgKyBpbnRlZ2VyU3RyaW5nICsgZnJhY3Rpb25TdHJpbmcpO1xuXG4gICAgICAgICAgICBpbnRlZ2VyU3RyaW5nID0gXCIwXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1heGltdW1TaWduaWZpY2FudERpZ2l0cykge1xuICAgICAgICAgICAgLy8gVHJpbSBvciBwYWQgZnJhY3Rpb24gd2hlbiBub3QgdXNpbmcgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzLlxuICAgICAgICAgICAgZnJhY3Rpb25TdHJpbmcgPSBmcmFjdGlvblN0cmluZy5zbGljZSgwLCBmcmFjdGlvbkRpZ2l0cyk7XG5cbiAgICAgICAgICAgIGlmIChmcmFjdGlvblN0cmluZy5sZW5ndGggPCBmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgICAgICAgICAgIGZyYWN0aW9uU3RyaW5nID0gZnJhY3Rpb25TdHJpbmcgKyByZXBlYXRaZXJvKGZyYWN0aW9uRGlnaXRzIC0gZnJhY3Rpb25TdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGFkIGludGVnZXIgd2hlbiB1c2luZyBtaW5pbXVtSW50ZWdlckRpZ2l0c1xuICAgICAgICAgICAgLy8gYW5kIG5vdCB1c2luZyBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMuXG4gICAgICAgICAgICBpZiAoaW50ZWdlclN0cmluZy5sZW5ndGggPCBtaW5pbXVtSW50ZWdlckRpZ2l0cykge1xuICAgICAgICAgICAgICAgIGludGVnZXJTdHJpbmcgPSByZXBlYXRaZXJvKG1pbmltdW1JbnRlZ2VyRGlnaXRzIC0gaW50ZWdlclN0cmluZy5sZW5ndGgpICsgaW50ZWdlclN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIC8vIEhhbmRsZSBncm91cGluZy5cbiAgICAgICAgaWYgKHVzZUdyb3VwaW5nKSB7XG4gICAgICAgICAgICB0ZW1wID0gaW50ZWdlclN0cmluZztcbiAgICAgICAgICAgIHZhciBncm91cDtcblxuICAgICAgICAgICAgd2hpbGUgKHRlbXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwaW5nLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSBncm91cGluZ1NlcGFyYXRvciArIGZvcm1hdHRlZFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0ZW1wLnNsaWNlKC1ncm91cCkgKyBmb3JtYXR0ZWRTdHJpbmc7XG5cbiAgICAgICAgICAgICAgICB0ZW1wID0gdGVtcC5zbGljZSgwLCAtZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gaW50ZWdlclN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBkZWNpbWFsU2VwYXJhdG9yIGFuZCBmcmFjdGlvbi5cbiAgICAgICAgaWYgKGZyYWN0aW9uU3RyaW5nKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSBmb3JtYXR0ZWRTdHJpbmcgKyBkZWNpbWFsU2VwYXJhdG9yICsgZnJhY3Rpb25TdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nO1xuICAgIH1cblxuICAgIC8vIGR1cmF0aW9uTGFiZWxDb21wYXJlXG4gICAgZnVuY3Rpb24gZHVyYXRpb25MYWJlbENvbXBhcmUoYSwgYikge1xuICAgICAgICBpZiAoYS5sYWJlbC5sZW5ndGggPiBiLmxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEubGFiZWwubGVuZ3RoIDwgYi5sYWJlbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gZHVyYXRpb25HZXRMYWJlbHNcbiAgICBmdW5jdGlvbiBkdXJhdGlvbkdldExhYmVscyh0b2tlbiwgbG9jYWxlRGF0YSkge1xuICAgICAgICB2YXIgbGFiZWxzID0gW107XG5cbiAgICAgICAgZWFjaChrZXlzKGxvY2FsZURhdGEpLCBmdW5jdGlvbiAobG9jYWxlRGF0YUtleSkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZURhdGFLZXkuc2xpY2UoMCwgMTUpICE9PSBcIl9kdXJhdGlvbkxhYmVsc1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFiZWxUeXBlID0gbG9jYWxlRGF0YUtleS5zbGljZSgxNSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgZWFjaChrZXlzKGxvY2FsZURhdGFbbG9jYWxlRGF0YUtleV0pLCBmdW5jdGlvbiAobGFiZWxLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWxLZXkuc2xpY2UoMCwgMSkgPT09IHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGxhYmVsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbGFiZWxLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbG9jYWxlRGF0YVtsb2NhbGVEYXRhS2V5XVtsYWJlbEtleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgLy8gZHVyYXRpb25QbHVyYWxLZXlcbiAgICBmdW5jdGlvbiBkdXJhdGlvblBsdXJhbEtleSh0b2tlbiwgaW50ZWdlclZhbHVlLCBkZWNpbWFsVmFsdWUpIHtcbiAgICAgICAgLy8gU2luZ3VsYXIgZm9yIGEgdmFsdWUgb2YgYDFgLCBidXQgbm90IGZvciBgMS4wYC5cbiAgICAgICAgaWYgKGludGVnZXJWYWx1ZSA9PT0gMSAmJiBkZWNpbWFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b2tlbiArIHRva2VuO1xuICAgIH1cblxuICAgIHZhciBlbmdMb2NhbGUgPSB7XG4gICAgICAgIGR1cmF0aW9uTGFiZWxzU3RhbmRhcmQ6IHtcbiAgICAgICAgICAgIFM6ICdtaWxsaXNlY29uZCcsXG4gICAgICAgICAgICBTUzogJ21pbGxpc2Vjb25kcycsXG4gICAgICAgICAgICBzOiAnc2Vjb25kJyxcbiAgICAgICAgICAgIHNzOiAnc2Vjb25kcycsXG4gICAgICAgICAgICBtOiAnbWludXRlJyxcbiAgICAgICAgICAgIG1tOiAnbWludXRlcycsXG4gICAgICAgICAgICBoOiAnaG91cicsXG4gICAgICAgICAgICBoaDogJ2hvdXJzJyxcbiAgICAgICAgICAgIGQ6ICdkYXknLFxuICAgICAgICAgICAgZGQ6ICdkYXlzJyxcbiAgICAgICAgICAgIHc6ICd3ZWVrJyxcbiAgICAgICAgICAgIHd3OiAnd2Vla3MnLFxuICAgICAgICAgICAgTTogJ21vbnRoJyxcbiAgICAgICAgICAgIE1NOiAnbW9udGhzJyxcbiAgICAgICAgICAgIHk6ICd5ZWFyJyxcbiAgICAgICAgICAgIHl5OiAneWVhcnMnXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uTGFiZWxzU2hvcnQ6IHtcbiAgICAgICAgICAgIFM6ICdtc2VjJyxcbiAgICAgICAgICAgIFNTOiAnbXNlY3MnLFxuICAgICAgICAgICAgczogJ3NlYycsXG4gICAgICAgICAgICBzczogJ3NlY3MnLFxuICAgICAgICAgICAgbTogJ21pbicsXG4gICAgICAgICAgICBtbTogJ21pbnMnLFxuICAgICAgICAgICAgaDogJ2hyJyxcbiAgICAgICAgICAgIGhoOiAnaHJzJyxcbiAgICAgICAgICAgIGQ6ICdkeScsXG4gICAgICAgICAgICBkZDogJ2R5cycsXG4gICAgICAgICAgICB3OiAnd2snLFxuICAgICAgICAgICAgd3c6ICd3a3MnLFxuICAgICAgICAgICAgTTogJ21vJyxcbiAgICAgICAgICAgIE1NOiAnbW9zJyxcbiAgICAgICAgICAgIHk6ICd5cicsXG4gICAgICAgICAgICB5eTogJ3lycydcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb25UaW1lVGVtcGxhdGVzOiB7XG4gICAgICAgICAgICBITVM6ICdoOm1tOnNzJyxcbiAgICAgICAgICAgIEhNOiAnaDptbScsXG4gICAgICAgICAgICBNUzogJ206c3MnXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uTGFiZWxUeXBlczogW1xuICAgICAgICAgICAgeyB0eXBlOiBcInN0YW5kYXJkXCIsIHN0cmluZzogXCJfX1wiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2hvcnRcIiwgc3RyaW5nOiBcIl9cIiB9XG4gICAgICAgIF0sXG4gICAgICAgIGR1cmF0aW9uUGx1cmFsS2V5OiBkdXJhdGlvblBsdXJhbEtleVxuICAgIH07XG5cbiAgICAvLyBpc0FycmF5XG4gICAgZnVuY3Rpb24gaXNBcnJheShhcnJheSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgIH1cblxuICAgIC8vIGlzT2JqZWN0XG4gICAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgICB9XG5cbiAgICAvLyBmaW5kTGFzdFxuICAgIGZ1bmN0aW9uIGZpbmRMYXN0KGFycmF5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IC09IDEpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0pKSB7IHJldHVybiBhcnJheVtpbmRleF07IH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbmRcbiAgICBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgIHZhciBtYXggPSBhcnJheSAmJiBhcnJheS5sZW5ndGggfHwgMDtcblxuICAgICAgICB2YXIgbWF0Y2g7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtYXRjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBtYXRjaDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBtYXgpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0pKSB7IHJldHVybiBhcnJheVtpbmRleF07IH1cbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlYWNoXG4gICAgZnVuY3Rpb24gZWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgIG1heCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbWF4KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCkgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hcFxuICAgIGZ1bmN0aW9uIG1hcChhcnJheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgIG1heCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHJldCA9IFtdO1xuXG4gICAgICAgIGlmICghYXJyYXkgfHwgIW1heCkgeyByZXR1cm4gcmV0OyB9XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbWF4KSB7XG4gICAgICAgICAgICByZXRbaW5kZXhdID0gY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCk7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvLyBwbHVja1xuICAgIGZ1bmN0aW9uIHBsdWNrKGFycmF5LCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtwcm9wXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcGFjdFxuICAgIGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSkgeyByZXQucHVzaChpdGVtKTsgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8vIHVuaXF1ZVxuICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmQocmV0LCBfYSkpIHsgcmV0LnB1c2goX2EpOyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLy8gaW50ZXJzZWN0aW9uXG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgIGVhY2goYSwgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBlYWNoKGIsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIGlmIChfYSA9PT0gX2IpIHsgcmV0LnB1c2goX2EpOyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVuaXF1ZShyZXQpO1xuICAgIH1cblxuICAgIC8vIHJlc3RcbiAgICBmdW5jdGlvbiByZXN0KGFycmF5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gYXJyYXkuc2xpY2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsXG4gICAgZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJldmVyc2VkID0gYXJyYXkuc2xpY2UoKS5yZXZlcnNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3QocmV2ZXJzZWQsIGNhbGxiYWNrKS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgLy8gZXh0ZW5kXG4gICAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHsgYVtrZXldID0gYltrZXldOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICAvLyBrZXlzXG4gICAgZnVuY3Rpb24ga2V5cyhhKSB7XG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkgeyByZXQucHVzaChrZXkpOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8vIGFueVxuICAgIGZ1bmN0aW9uIGFueShhcnJheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgIG1heCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbWF4KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCkgPT09IHRydWUpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZmxhdHRlblxuICAgIGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzTG9jYWxlcygpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBudW1iZXIudG9Mb2NhbGVTdHJpbmcoJ2knKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gJ1JhbmdlRXJyb3InO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZWF0dXJlVGVzdFRvTG9jYWxlU3RyaW5nUm91bmRpbmcoKSB7XG4gICAgICAgIHJldHVybiAoMy41NSkudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMSxcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMVxuICAgICAgICB9KSA9PT0gXCIzLjZcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZWF0dXJlVGVzdFRvTG9jYWxlU3RyaW5nKCkge1xuICAgICAgICB2YXIgcGFzc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBUZXN0IGxvY2FsZS5cbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmIHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNMb2NhbGVzKCk7XG4gICAgICAgIGlmICghcGFzc2VkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIC8vIFRlc3QgbWluaW11bUludGVnZXJEaWdpdHMuXG4gICAgICAgIHBhc3NlZCA9IHBhc3NlZCAmJiAoMSkudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7IG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAxIH0pID09PSBcIjFcIjtcbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmICgxKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWluaW11bUludGVnZXJEaWdpdHM6IDIgfSkgPT09IFwiMDFcIjtcbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmICgxKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWluaW11bUludGVnZXJEaWdpdHM6IDMgfSkgPT09IFwiMDAxXCI7XG4gICAgICAgIGlmICghcGFzc2VkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIC8vIFRlc3QgbWF4aW11bUZyYWN0aW9uRGlnaXRzIGFuZCBtaW5pbXVtRnJhY3Rpb25EaWdpdHMuXG4gICAgICAgIHBhc3NlZCA9IHBhc3NlZCAmJiAoOTkuOTkpLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KSA9PT0gXCIxMDBcIjtcbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmICg5OS45OSkudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pID09PSBcIjEwMC4wXCI7XG4gICAgICAgIHBhc3NlZCA9IHBhc3NlZCAmJiAoOTkuOTkpLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSA9PT0gXCI5OS45OVwiO1xuICAgICAgICBwYXNzZWQgPSBwYXNzZWQgJiYgKDk5Ljk5KS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAzLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDMgfSkgPT09IFwiOTkuOTkwXCI7XG4gICAgICAgIGlmICghcGFzc2VkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIC8vIFRlc3QgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzLlxuICAgICAgICBwYXNzZWQgPSBwYXNzZWQgJiYgKDk5Ljk5KS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiAxIH0pID09PSBcIjEwMFwiO1xuICAgICAgICBwYXNzZWQgPSBwYXNzZWQgJiYgKDk5Ljk5KS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiAyIH0pID09PSBcIjEwMFwiO1xuICAgICAgICBwYXNzZWQgPSBwYXNzZWQgJiYgKDk5Ljk5KS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiAzIH0pID09PSBcIjEwMFwiO1xuICAgICAgICBwYXNzZWQgPSBwYXNzZWQgJiYgKDk5Ljk5KS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiA0IH0pID09PSBcIjk5Ljk5XCI7XG4gICAgICAgIHBhc3NlZCA9IHBhc3NlZCAmJiAoOTkuOTkpLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwgeyBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IDUgfSkgPT09IFwiOTkuOTlcIjtcbiAgICAgICAgaWYgKCFwYXNzZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgLy8gVGVzdCBncm91cGluZy5cbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmICgxMDAwKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgdXNlR3JvdXBpbmc6IHRydWUgfSkgPT09IFwiMSwwMDBcIjtcbiAgICAgICAgcGFzc2VkID0gcGFzc2VkICYmICgxMDAwKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pID09PSBcIjEwMDBcIjtcbiAgICAgICAgaWYgKCFwYXNzZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZHVyYXRpb25zRm9ybWF0KGR1cmF0aW9ucyBbLCB0ZW1wbGF0ZV0gWywgcHJlY2lzaW9uXSBbLCBzZXR0aW5nc10pXG4gICAgZnVuY3Rpb24gZHVyYXRpb25zRm9ybWF0KCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHNldHRpbmdzID0ge307XG4gICAgICAgIHZhciBkdXJhdGlvbnM7XG5cbiAgICAgICAgLy8gUGFyc2UgYXJndW1lbnRzLlxuICAgICAgICBlYWNoKGFyZ3MsIGZ1bmN0aW9uIChhcmcsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJFeHBlY3RlZCBhcnJheSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gZHVyYXRpb25zRm9ybWF0LlwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGR1cmF0aW9ucyA9IGFyZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MudGVtcGxhdGUgPSBhcmc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnByZWNpc2lvbiA9IGFyZztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc09iamVjdChhcmcpKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHNldHRpbmdzLCBhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWR1cmF0aW9ucyB8fCAhZHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGluZ3MucmV0dXJuTW9tZW50VHlwZXMgPSB0cnVlO1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWREdXJhdGlvbnMgPSBtYXAoZHVyYXRpb25zLCBmdW5jdGlvbiAoZHVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVyLmZvcm1hdChzZXR0aW5ncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHRva2VuIHR5cGVzIGZyb20gYWxsIGR1cmF0aW9ucy5cbiAgICAgICAgdmFyIG91dHB1dFR5cGVzID0gaW50ZXJzZWN0aW9uKHR5cGVzLCB1bmlxdWUocGx1Y2soZmxhdHRlbihmb3JtYXR0ZWREdXJhdGlvbnMpLCBcInR5cGVcIikpKTtcblxuICAgICAgICB2YXIgbGFyZ2VzdCA9IHNldHRpbmdzLmxhcmdlc3Q7XG5cbiAgICAgICAgaWYgKGxhcmdlc3QpIHtcbiAgICAgICAgICAgIG91dHB1dFR5cGVzID0gb3V0cHV0VHlwZXMuc2xpY2UoMCwgbGFyZ2VzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0aW5ncy5yZXR1cm5Nb21lbnRUeXBlcyA9IGZhbHNlO1xuICAgICAgICBzZXR0aW5ncy5vdXRwdXRUeXBlcyA9IG91dHB1dFR5cGVzO1xuXG4gICAgICAgIHJldHVybiBtYXAoZHVyYXRpb25zLCBmdW5jdGlvbiAoZHVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVyLmZvcm1hdChzZXR0aW5ncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGR1cmF0aW9uRm9ybWF0KFt0ZW1wbGF0ZV0gWywgcHJlY2lzaW9uXSBbLCBzZXR0aW5nc10pXG4gICAgZnVuY3Rpb24gZHVyYXRpb25Gb3JtYXQoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IGV4dGVuZCh7fSwgdGhpcy5mb3JtYXQuZGVmYXVsdHMpO1xuXG4gICAgICAgIC8vIEtlZXAgYSBzaGFkb3cgY29weSBvZiB0aGlzIG1vbWVudCBmb3IgY2FsY3VsYXRpbmcgcmVtYWluZGVycy5cbiAgICAgICAgLy8gUGVyZm9ybSBhbGwgY2FsY3VsYXRpb25zIG9uIHBvc2l0aXZlIGR1cmF0aW9uIHZhbHVlLCBoYW5kbGUgbmVnYXRpdmVcbiAgICAgICAgLy8gc2lnbiBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgIHZhciBhc01pbGxpc2Vjb25kcyA9IHRoaXMuYXNNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgdmFyIGFzTW9udGhzID0gdGhpcy5hc01vbnRocygpO1xuXG4gICAgICAgIC8vIFRyZWF0IGludmFsaWQgZHVyYXRpb25zIGFzIGhhdmluZyBhIHZhbHVlIG9mIDAgbWlsbGlzZWNvbmRzLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaXNWYWxpZCA9PT0gXCJmdW5jdGlvblwiICYmIHRoaXMuaXNWYWxpZCgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYXNNaWxsaXNlY29uZHMgPSAwO1xuICAgICAgICAgICAgYXNNb250aHMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSBhc01pbGxpc2Vjb25kcyA8IDA7XG5cbiAgICAgICAgLy8gVHdvIHNoYWRvdyBjb3BpZXMgYXJlIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSB3YXkgbW9tZW50LmpzIGhhbmRsZXNcbiAgICAgICAgLy8gZHVyYXRpb24gYXJpdGhtZXRpYyBmb3IgeWVhcnMvbW9udGhzIGFuZCBmb3Igd2Vla3MvZGF5cy9ob3Vycy9taW51dGVzL3NlY29uZHMuXG4gICAgICAgIHZhciByZW1haW5kZXIgPSBtb21lbnQuZHVyYXRpb24oTWF0aC5hYnMoYXNNaWxsaXNlY29uZHMpLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgICAgICAgdmFyIHJlbWFpbmRlck1vbnRocyA9IG1vbWVudC5kdXJhdGlvbihNYXRoLmFicyhhc01vbnRocyksIFwibW9udGhzXCIpO1xuXG4gICAgICAgIC8vIFBhcnNlIGFyZ3VtZW50cy5cbiAgICAgICAgZWFjaChhcmdzLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYXJnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy50ZW1wbGF0ZSA9IGFyZztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucHJlY2lzaW9uID0gYXJnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgICAgICAgICBleHRlbmQoc2V0dGluZ3MsIGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtb21lbnRUb2tlbnMgPSB7XG4gICAgICAgICAgICB5ZWFyczogXCJ5XCIsXG4gICAgICAgICAgICBtb250aHM6IFwiTVwiLFxuICAgICAgICAgICAgd2Vla3M6IFwid1wiLFxuICAgICAgICAgICAgZGF5czogXCJkXCIsXG4gICAgICAgICAgICBob3VyczogXCJoXCIsXG4gICAgICAgICAgICBtaW51dGVzOiBcIm1cIixcbiAgICAgICAgICAgIHNlY29uZHM6IFwic1wiLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBcIlNcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0b2tlbkRlZnMgPSB7XG4gICAgICAgICAgICBlc2NhcGU6IC9cXFsoLis/KVxcXS8sXG4gICAgICAgICAgICB5ZWFyczogL1xcKj9bWXldKy8sXG4gICAgICAgICAgICBtb250aHM6IC9cXCo/TSsvLFxuICAgICAgICAgICAgd2Vla3M6IC9cXCo/W1d3XSsvLFxuICAgICAgICAgICAgZGF5czogL1xcKj9bRGRdKy8sXG4gICAgICAgICAgICBob3VyczogL1xcKj9bSGhdKy8sXG4gICAgICAgICAgICBtaW51dGVzOiAvXFwqP20rLyxcbiAgICAgICAgICAgIHNlY29uZHM6IC9cXCo/cysvLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiAvXFwqP1MrLyxcbiAgICAgICAgICAgIGdlbmVyYWw6IC8uKz8vXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVHlwZXMgYXJyYXkgaXMgYXZhaWxhYmxlIGluIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICAgICAgc2V0dGluZ3MudHlwZXMgPSB0eXBlcztcblxuICAgICAgICB2YXIgdHlwZU1hcCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmQodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuRGVmc1t0eXBlXS50ZXN0KHRva2VuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0b2tlbml6ZXIgPSBuZXcgUmVnRXhwKG1hcCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbkRlZnNbdHlwZV0uc291cmNlO1xuICAgICAgICB9KS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG4gICAgICAgIC8vIEN1cnJlbnQgZHVyYXRpb24gb2JqZWN0IGlzIGF2YWlsYWJsZSBpbiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gdGhpcztcblxuICAgICAgICAvLyBFdmFsIHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCBjYWNoZSB0ZW1wbGF0ZSBzdHJpbmcuXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHR5cGVvZiBzZXR0aW5ncy50ZW1wbGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0dGluZ3MudGVtcGxhdGUuYXBwbHkoc2V0dGluZ3MpIDogc2V0dGluZ3MudGVtcGxhdGU7XG5cbiAgICAgICAgLy8gb3V0cHV0VHlwZXMgYW5kIHJldHVybk1vbWVudFR5cGVzIGFyZSBzZXR0aW5ncyB0byBzdXBwb3J0IGR1cmF0aW9uc0Zvcm1hdCgpLlxuXG4gICAgICAgIC8vIG91dHB1dFR5cGVzIGlzIGFuIGFycmF5IG9mIG1vbWVudCB0b2tlbiB0eXBlcyB0aGF0IGRldGVybWluZXNcbiAgICAgICAgLy8gdGhlIHRva2VucyByZXR1cm5lZCBpbiBmb3JtYXR0ZWQgb3V0cHV0LiBUaGlzIG9wdGlvbiBvdmVycmlkZXNcbiAgICAgICAgLy8gdHJpbSwgbGFyZ2VzdCwgc3RvcFRyaW0sIGV0Yy5cbiAgICAgICAgdmFyIG91dHB1dFR5cGVzID0gc2V0dGluZ3Mub3V0cHV0VHlwZXM7XG5cbiAgICAgICAgLy8gcmV0dXJuTW9tZW50VHlwZXMgaXMgYSBib29sZWFuIHRoYXQgc2V0cyBkdXJhdGlvbkZvcm1hdCB0byByZXR1cm5cbiAgICAgICAgLy8gdGhlIHByb2Nlc3NlZCBtb21lbnRUeXBlcyBpbnN0ZWFkIG9mIGZvcm1hdHRlZCBvdXRwdXQuXG4gICAgICAgIHZhciByZXR1cm5Nb21lbnRUeXBlcyA9IHNldHRpbmdzLnJldHVybk1vbWVudFR5cGVzO1xuXG4gICAgICAgIHZhciBsYXJnZXN0ID0gc2V0dGluZ3MubGFyZ2VzdDtcblxuICAgICAgICAvLyBTZXR1cCBzdG9wVHJpbSBhcnJheSBvZiB0b2tlbiB0eXBlcy5cbiAgICAgICAgdmFyIHN0b3BUcmltID0gW107XG5cbiAgICAgICAgaWYgKCFvdXRwdXRUeXBlcykge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2V0dGluZ3Muc3RvcFRyaW0pKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Muc3RvcFRyaW0gPSBzZXR0aW5ncy5zdG9wVHJpbS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQYXJzZSBzdG9wVHJpbSBzdHJpbmcgdG8gY3JlYXRlIHRva2VuIHR5cGVzIGFycmF5LlxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnN0b3BUcmltKSB7XG4gICAgICAgICAgICAgICAgZWFjaChzZXR0aW5ncy5zdG9wVHJpbS5tYXRjaCh0b2tlbml6ZXIpLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlTWFwKHRva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcFRyaW0ucHVzaCh0eXBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhY2hlIG1vbWVudCdzIGxvY2FsZSBkYXRhLlxuICAgICAgICB2YXIgbG9jYWxlRGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKCk7XG5cbiAgICAgICAgaWYgKCFsb2NhbGVEYXRhKSB7XG4gICAgICAgICAgICBsb2NhbGVEYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGYWxsIGJhY2sgdG8gdGhpcyBwbHVnaW4ncyBgZW5nYCBleHRlbnNpb24uXG4gICAgICAgIGVhY2goa2V5cyhlbmdMb2NhbGUpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZ0xvY2FsZVtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVEYXRhW2tleV0gPSBlbmdMb2NhbGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbG9jYWxlRGF0YVtcIl9cIiArIGtleV0pIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVEYXRhW1wiX1wiICsga2V5XSA9IGVuZ0xvY2FsZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXBsYWNlIER1cmF0aW9uIFRpbWUgVGVtcGxhdGUgc3RyaW5ncy5cbiAgICAgICAgLy8gRm9yIGxvY2FsZSBgZW5nYDogYF9ITVNfYCwgYF9ITV9gLCBhbmQgYF9NU19gLlxuICAgICAgICBlYWNoKGtleXMobG9jYWxlRGF0YS5fZHVyYXRpb25UaW1lVGVtcGxhdGVzKSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShcIl9cIiArIGl0ZW0gKyBcIl9cIiwgbG9jYWxlRGF0YS5fZHVyYXRpb25UaW1lVGVtcGxhdGVzW2l0ZW1dKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHVzZXIncyBsb2NhbGUuXG4gICAgICAgIHZhciB1c2VyTG9jYWxlID0gc2V0dGluZ3MudXNlckxvY2FsZSB8fCBtb21lbnQubG9jYWxlKCk7XG5cbiAgICAgICAgdmFyIHVzZUxlZnRVbml0cyA9IHNldHRpbmdzLnVzZUxlZnRVbml0cztcbiAgICAgICAgdmFyIHVzZVBsdXJhbCA9IHNldHRpbmdzLnVzZVBsdXJhbDtcbiAgICAgICAgdmFyIHByZWNpc2lvbiA9IHNldHRpbmdzLnByZWNpc2lvbjtcbiAgICAgICAgdmFyIGZvcmNlTGVuZ3RoID0gc2V0dGluZ3MuZm9yY2VMZW5ndGg7XG4gICAgICAgIHZhciB1c2VHcm91cGluZyA9IHNldHRpbmdzLnVzZUdyb3VwaW5nO1xuICAgICAgICB2YXIgdHJ1bmMgPSBzZXR0aW5ncy50cnVuYztcblxuICAgICAgICAvLyBVc2Ugc2lnbmlmaWNhbnQgZGlnaXRzIG9ubHkgd2hlbiBwcmVjaXNpb24gaXMgZ3JlYXRlciB0aGFuIDAuXG4gICAgICAgIHZhciB1c2VTaWduaWZpY2FudERpZ2l0cyA9IHNldHRpbmdzLnVzZVNpZ25pZmljYW50RGlnaXRzICYmIHByZWNpc2lvbiA+IDA7XG4gICAgICAgIHZhciBzaWduaWZpY2FudERpZ2l0cyA9IHVzZVNpZ25pZmljYW50RGlnaXRzID8gc2V0dGluZ3MucHJlY2lzaW9uIDogMDtcbiAgICAgICAgdmFyIHNpZ25pZmljYW50RGlnaXRzQ2FjaGUgPSBzaWduaWZpY2FudERpZ2l0cztcblxuICAgICAgICB2YXIgbWluVmFsdWUgPSBzZXR0aW5ncy5taW5WYWx1ZTtcbiAgICAgICAgdmFyIGlzTWluVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWF4VmFsdWUgPSBzZXR0aW5ncy5tYXhWYWx1ZTtcbiAgICAgICAgdmFyIGlzTWF4VmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAvLyBmb3JtYXROdW1iZXIgZmFsbGJhY2sgb3B0aW9ucy5cbiAgICAgICAgdmFyIHVzZVRvTG9jYWxlU3RyaW5nID0gc2V0dGluZ3MudXNlVG9Mb2NhbGVTdHJpbmc7XG4gICAgICAgIHZhciBncm91cGluZ1NlcGFyYXRvciA9IHNldHRpbmdzLmdyb3VwaW5nU2VwYXJhdG9yO1xuICAgICAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHNldHRpbmdzLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgICAgIHZhciBncm91cGluZyA9IHNldHRpbmdzLmdyb3VwaW5nO1xuXG4gICAgICAgIHVzZVRvTG9jYWxlU3RyaW5nID0gdXNlVG9Mb2NhbGVTdHJpbmcgJiYgdG9Mb2NhbGVTdHJpbmdXb3JrcztcblxuICAgICAgICAvLyBUcmltIG9wdGlvbnMuXG4gICAgICAgIHZhciB0cmltID0gc2V0dGluZ3MudHJpbTtcblxuICAgICAgICBpZiAoaXNBcnJheSh0cmltKSkge1xuICAgICAgICAgICAgdHJpbSA9IHRyaW0uam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpbSA9PT0gbnVsbCAmJiAobGFyZ2VzdCB8fCBtYXhWYWx1ZSB8fCB1c2VTaWduaWZpY2FudERpZ2l0cykpIHtcbiAgICAgICAgICAgIHRyaW0gPSBcImFsbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaW0gPT09IG51bGwgfHwgdHJpbSA9PT0gdHJ1ZSB8fCB0cmltID09PSBcImxlZnRcIiB8fCB0cmltID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRyaW0gPSBcImxhcmdlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpbSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyaW0gPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyaW1JbmNsdWRlcyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50ZXN0KHRyaW0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByTGFyZ2UgPSAvbGFyZ2UvO1xuICAgICAgICB2YXIgclNtYWxsID0gL3NtYWxsLztcbiAgICAgICAgdmFyIHJCb3RoID0gL2JvdGgvO1xuICAgICAgICB2YXIgck1pZCA9IC9taWQvO1xuICAgICAgICB2YXIgckFsbCA9IC9eYWxsfFtec21dYWxsLztcbiAgICAgICAgdmFyIHJGaW5hbCA9IC9maW5hbC87XG5cbiAgICAgICAgdmFyIHRyaW1MYXJnZSA9IGxhcmdlc3QgPiAwIHx8IGFueShbckxhcmdlLCByQm90aCwgckFsbF0sIHRyaW1JbmNsdWRlcyk7XG4gICAgICAgIHZhciB0cmltU21hbGwgPSBhbnkoW3JTbWFsbCwgckJvdGgsIHJBbGxdLCB0cmltSW5jbHVkZXMpO1xuICAgICAgICB2YXIgdHJpbU1pZCA9IGFueShbck1pZCwgckFsbF0sIHRyaW1JbmNsdWRlcyk7XG4gICAgICAgIHZhciB0cmltRmluYWwgPSBhbnkoW3JGaW5hbCwgckFsbF0sIHRyaW1JbmNsdWRlcyk7XG5cbiAgICAgICAgLy8gUGFyc2UgZm9ybWF0IHN0cmluZyB0byBjcmVhdGUgcmF3IHRva2VucyBhcnJheS5cbiAgICAgICAgdmFyIHJhd1Rva2VucyA9IG1hcCh0ZW1wbGF0ZS5tYXRjaCh0b2tlbml6ZXIpLCBmdW5jdGlvbiAodG9rZW4sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVNYXAodG9rZW4pO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uc2xpY2UoMCwgMSkgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbi5zbGljZSgxKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSBcImVzY2FwZVwiICYmIHR5cGUgIT09IFwiZ2VuZXJhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BUcmltLnB1c2godHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHRva2VuLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBlc2NhcGVkIHRva2VucyB3aXRoIHRoZSBub24tZXNjYXBlZCB0b2tlbiB0ZXh0LlxuICAgICAgICAgICAgICAgIHRva2VuOiAodHlwZSA9PT0gXCJlc2NhcGVcIiA/IHRva2VuLnJlcGxhY2UodG9rZW5EZWZzLmVzY2FwZSwgXCIkMVwiKSA6IHRva2VuKSxcblxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0eXBlIG9uIG5vbi1tb21lbnQgdG9rZW5zLlxuICAgICAgICAgICAgICAgIHR5cGU6ICgodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikgPyBudWxsIDogdHlwZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFzc29jaWF0ZSB0ZXh0IHRva2VucyB3aXRoIG1vbWVudCB0b2tlbnMuXG4gICAgICAgIHZhciBjdXJyZW50VG9rZW4gPSB7XG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHRva2VuOiBcIlwiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdG9rZW5zID0gW107XG5cbiAgICAgICAgaWYgKHVzZUxlZnRVbml0cykge1xuICAgICAgICAgICAgcmF3VG9rZW5zLnJldmVyc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVhY2gocmF3VG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUb2tlbi50eXBlIHx8IGN1cnJlbnRUb2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGN1cnJlbnRUb2tlbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFRva2VuID0gdG9rZW47XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1c2VMZWZ0VW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9rZW4udGV4dCA9IHRva2VuLnRva2VuICsgY3VycmVudFRva2VuLnRleHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbi50ZXh0ICs9IHRva2VuLnRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgfHwgY3VycmVudFRva2VuLnRleHQpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKGN1cnJlbnRUb2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlTGVmdFVuaXRzKSB7XG4gICAgICAgICAgICB0b2tlbnMucmV2ZXJzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCB1bmlxdWUgbW9tZW50IHRva2VuIHR5cGVzIGluIHRoZSB0ZW1wbGF0ZSBpbiBvcmRlciBvZlxuICAgICAgICAvLyBkZXNjZW5kaW5nIG1hZ25pdHVkZS5cbiAgICAgICAgdmFyIG1vbWVudFR5cGVzID0gaW50ZXJzZWN0aW9uKHR5cGVzLCB1bmlxdWUoY29tcGFjdChwbHVjayh0b2tlbnMsIFwidHlwZVwiKSkpKTtcblxuICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIHRoZXJlIGFyZSBubyBtb21lbnQgdG9rZW4gdHlwZXMuXG4gICAgICAgIGlmICghbW9tZW50VHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGx1Y2sodG9rZW5zLCBcInRleHRcIikuam9pbihcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB2YWx1ZXMgZm9yIGVhY2ggbW9tZW50IHR5cGUgaW4gdGhlIHRlbXBsYXRlLlxuICAgICAgICAvLyBGb3IgcHJvY2Vzc2luZyB0aGUgc2V0dGluZ3MsIHZhbHVlcyBhcmUgYXNzb2NpYXRlZCB3aXRoIG1vbWVudCB0eXBlcy5cbiAgICAgICAgLy8gVmFsdWVzIHdpbGwgYmUgYXNzaWduZWQgdG8gdG9rZW5zIGF0IHRoZSBsYXN0IHN0ZXAgaW4gb3JkZXIgdG9cbiAgICAgICAgLy8gYXNzdW1lIG5vdGhpbmcgYWJvdXQgZnJlcXVlbmN5IG9yIG9yZGVyIG9mIHRva2VucyBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgIG1vbWVudFR5cGVzID0gbWFwKG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYXN0LW1hZ25pdHVkZSBtb21lbnQgdG9rZW4gZm91bmQ/XG4gICAgICAgICAgICB2YXIgaXNTbWFsbGVzdCA9ICgoaW5kZXggKyAxKSA9PT0gbW9tZW50VHlwZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gSXMgdGhpcyB0aGUgZ3JlYXRlc3QtbWFnbml0dWRlIG1vbWVudCB0b2tlbiBmb3VuZD9cbiAgICAgICAgICAgIHZhciBpc0xhcmdlc3QgPSAoIWluZGV4KTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSByYXcgdmFsdWUgaW4gdGhlIGN1cnJlbnQgdW5pdHMuXG4gICAgICAgICAgICB2YXIgcmF3VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChtb21lbnRUeXBlID09PSBcInllYXJzXCIgfHwgbW9tZW50VHlwZSA9PT0gXCJtb250aHNcIikge1xuICAgICAgICAgICAgICAgIHJhd1ZhbHVlID0gcmVtYWluZGVyTW9udGhzLmFzKG1vbWVudFR5cGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYXdWYWx1ZSA9IHJlbWFpbmRlci5hcyhtb21lbnRUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdob2xlVmFsdWUgPSBNYXRoLmZsb29yKHJhd1ZhbHVlKTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFsVmFsdWUgPSByYXdWYWx1ZSAtIHdob2xlVmFsdWU7XG5cbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGZpbmQodG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50VHlwZSA9PT0gdG9rZW4udHlwZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaXNMYXJnZXN0ICYmIG1heFZhbHVlICYmIHJhd1ZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc01heFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzU21hbGxlc3QgJiYgbWluVmFsdWUgJiYgTWF0aC5hYnMoc2V0dGluZ3MuZHVyYXRpb24uYXMobW9tZW50VHlwZSkpIDwgbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc01pblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm90ZSB0aGUgbGVuZ3RoIG9mIHRoZSBsYXJnZXN0LW1hZ25pdHVkZSBtb21lbnQgdG9rZW46XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBncmVhdGVyIHRoYW4gb25lIGFuZCBmb3JjZUxlbmd0aCBpcyBub3Qgc2V0LFxuICAgICAgICAgICAgLy8gdGhlbiBkZWZhdWx0IGZvcmNlTGVuZ3RoIHRvIGB0cnVlYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBSYXRpb25hbGUgaXMgdGhpczogSWYgdGhlIHRlbXBsYXRlIGlzIFwiaDptbTpzc1wiIGFuZCB0aGVcbiAgICAgICAgICAgIC8vIG1vbWVudCB2YWx1ZSBpcyA1IG1pbnV0ZXMsIHRoZSB1c2VyLWZyaWVuZGx5IG91dHB1dCBpc1xuICAgICAgICAgICAgLy8gXCI1OjAwXCIsIG5vdCBcIjA1OjAwXCIuIFdlIHNob3VsZG4ndCBwYWQgdGhlIGBtaW51dGVzYCB0b2tlblxuICAgICAgICAgICAgLy8gZXZlbiB0aG91Z2ggaXQgaGFzIGxlbmd0aCBvZiB0d28gaWYgdGhlIHRlbXBsYXRlIGlzIFwiaDptbTpzc1wiO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIElmIHRoZSBtaW51dGVzIG91dHB1dCBzaG91bGQgYWx3YXlzIGluY2x1ZGUgdGhlIGxlYWRpbmcgemVyb1xuICAgICAgICAgICAgLy8gZXZlbiB3aGVuIHRoZSBob3VyIGlzIHRyaW1tZWQgdGhlbiBzZXQgYHsgZm9yY2VMZW5ndGg6IHRydWUgfWBcbiAgICAgICAgICAgIC8vIHRvIG91dHB1dCBcIjA1OjAwXCIuIElmIHRoZSB0ZW1wbGF0ZSBpcyBcImhoOm1tOnNzXCIsIHRoZSB1c2VyXG4gICAgICAgICAgICAvLyBjbGVhcmx5IHdhbnRlZCBldmVyeXRoaW5nIHBhZGRlZCBzbyB3ZSBzaG91bGQgb3V0cHV0IFwiMDU6MDBcIjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciB3YW50cyB0aGUgZnVsbCBwYWRkZWQgb3V0cHV0LCB0aGV5IGNhbiB1c2VcbiAgICAgICAgICAgIC8vIHRlbXBsYXRlIFwiaGg6bW06c3NcIiBhbmQgc2V0IGB7IHRyaW06IGZhbHNlIH1gIHRvIG91dHB1dFxuICAgICAgICAgICAgLy8gXCIwMDowNTowMFwiLlxuICAgICAgICAgICAgaWYgKGlzTGFyZ2VzdCAmJiBmb3JjZUxlbmd0aCA9PT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VMZW5ndGggPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcmVtYWluZGVyLlxuICAgICAgICAgICAgcmVtYWluZGVyLnN1YnRyYWN0KHdob2xlVmFsdWUsIG1vbWVudFR5cGUpO1xuICAgICAgICAgICAgcmVtYWluZGVyTW9udGhzLnN1YnRyYWN0KHdob2xlVmFsdWUsIG1vbWVudFR5cGUpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhd1ZhbHVlOiByYXdWYWx1ZSxcbiAgICAgICAgICAgICAgICB3aG9sZVZhbHVlOiB3aG9sZVZhbHVlLFxuICAgICAgICAgICAgICAgIC8vIERlY2ltYWwgdmFsdWUgaXMgb25seSByZXRhaW5lZCBmb3IgdGhlIGxlYXN0LW1hZ25pdHVkZVxuICAgICAgICAgICAgICAgIC8vIG1vbWVudCB0eXBlIGluIHRoZSBmb3JtYXQgdGVtcGxhdGUuXG4gICAgICAgICAgICAgICAgZGVjaW1hbFZhbHVlOiBpc1NtYWxsZXN0ID8gZGVjaW1hbFZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBpc1NtYWxsZXN0OiBpc1NtYWxsZXN0LFxuICAgICAgICAgICAgICAgIGlzTGFyZ2VzdDogaXNMYXJnZXN0LFxuICAgICAgICAgICAgICAgIHR5cGU6IG1vbWVudFR5cGUsXG4gICAgICAgICAgICAgICAgLy8gVG9rZW5zIGNhbiBhcHBlYXIgbXVsdGlwbGUgdGltZXMgaW4gYSB0ZW1wbGF0ZSBzdHJpbmcsXG4gICAgICAgICAgICAgICAgLy8gYnV0IGFsbCBpbnN0YW5jZXMgbXVzdCBzaGFyZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICAgICAgICAgICAgdG9rZW5MZW5ndGg6IHRva2VuLmxlbmd0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRydW5jTWV0aG9kID0gdHJ1bmMgPyBNYXRoLmZsb29yIDogTWF0aC5yb3VuZDtcbiAgICAgICAgdmFyIHRydW5jYXRlID0gZnVuY3Rpb24gKHZhbHVlLCBwbGFjZXMpIHtcbiAgICAgICAgICAgIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgcGxhY2VzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVuY01ldGhvZCh2YWx1ZSAqIGZhY3RvcikgLyBmYWN0b3I7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdmFyIGJ1YmJsZWQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZm9ybWF0VmFsdWUgPSBmdW5jdGlvbiAobW9tZW50VHlwZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiB1c2VHcm91cGluZyxcbiAgICAgICAgICAgICAgICBncm91cGluZ1NlcGFyYXRvcjogZ3JvdXBpbmdTZXBhcmF0b3IsXG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICBncm91cGluZzogZ3JvdXBpbmcsXG4gICAgICAgICAgICAgICAgdXNlVG9Mb2NhbGVTdHJpbmc6IHVzZVRvTG9jYWxlU3RyaW5nXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodXNlU2lnbmlmaWNhbnREaWdpdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmlmaWNhbnREaWdpdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLnJhd1ZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS53aG9sZVZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS5kZWNpbWFsVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID0gc2lnbmlmaWNhbnREaWdpdHM7XG4gICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUuc2lnbmlmaWNhbnREaWdpdHMgPSBzaWduaWZpY2FudERpZ2l0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc01heFZhbHVlICYmICFidWJibGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vbWVudFR5cGUuaXNMYXJnZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUud2hvbGVWYWx1ZSA9IG1heFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLmRlY2ltYWxWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS53aG9sZVZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS5kZWNpbWFsVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTWluVmFsdWUgJiYgIWJ1YmJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9tZW50VHlwZS5pc1NtYWxsZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUud2hvbGVWYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLmRlY2ltYWxWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS53aG9sZVZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS5kZWNpbWFsVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vbWVudFR5cGUuaXNTbWFsbGVzdCB8fCBtb21lbnRUeXBlLnNpZ25pZmljYW50RGlnaXRzICYmIG1vbWVudFR5cGUuc2lnbmlmaWNhbnREaWdpdHMgLSBtb21lbnRUeXBlLndob2xlVmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHByZWNpc2lvbiB0byBsZWFzdCBzaWduaWZpY2FudCB0b2tlbiB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAocHJlY2lzaW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLnZhbHVlID0gdHJ1bmNhdGUobW9tZW50VHlwZS53aG9sZVZhbHVlLCBwcmVjaXNpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlY2lzaW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUudmFsdWUgPSB0cnVuY01ldGhvZChtb21lbnRUeXBlLndob2xlVmFsdWUgKyBtb21lbnRUeXBlLmRlY2ltYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcHJlY2lzaW9uID4gMFxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlU2lnbmlmaWNhbnREaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVuYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUudmFsdWUgPSB0cnVuY2F0ZShtb21lbnRUeXBlLnJhd1ZhbHVlLCBzaWduaWZpY2FudERpZ2l0cyAtIG1vbWVudFR5cGUud2hvbGVWYWx1ZS50b1N0cmluZygpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUudmFsdWUgPSBtb21lbnRUeXBlLnJhd1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50VHlwZS53aG9sZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnREaWdpdHMgLT0gbW9tZW50VHlwZS53aG9sZVZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0T3B0aW9ucy5mcmFjdGlvbkRpZ2l0cyA9IHByZWNpc2lvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50VHlwZS52YWx1ZSA9IG1vbWVudFR5cGUud2hvbGVWYWx1ZSArIHRydW5jYXRlKG1vbWVudFR5cGUuZGVjaW1hbFZhbHVlLCBwcmVjaXNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLnZhbHVlID0gbW9tZW50VHlwZS53aG9sZVZhbHVlICsgbW9tZW50VHlwZS5kZWNpbWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VTaWduaWZpY2FudERpZ2l0cyAmJiBtb21lbnRUeXBlLndob2xlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3V0ZXIgTWF0aC5yb3VuZCByZXF1aXJlZCBoZXJlIHRvIGhhbmRsZSBmbG9hdGluZyBwb2ludCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudFR5cGUudmFsdWUgPSBNYXRoLnJvdW5kKHRydW5jYXRlKG1vbWVudFR5cGUud2hvbGVWYWx1ZSwgbW9tZW50VHlwZS5zaWduaWZpY2FudERpZ2l0cyAtIG1vbWVudFR5cGUud2hvbGVWYWx1ZS50b1N0cmluZygpLmxlbmd0aCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50RGlnaXRzIC09IG1vbWVudFR5cGUud2hvbGVWYWx1ZS50b1N0cmluZygpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb21lbnRUeXBlLnZhbHVlID0gbW9tZW50VHlwZS53aG9sZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vbWVudFR5cGUudG9rZW5MZW5ndGggPiAxICYmIChmb3JjZUxlbmd0aCB8fCBmb3VuZEZpcnN0KSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMgPSBtb21lbnRUeXBlLnRva2VuTGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJ1YmJsZWQgJiYgZm9ybWF0T3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPCBtb21lbnRUeXBlLnRva2VuTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXRPcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZm91bmRGaXJzdCAmJiAobW9tZW50VHlwZS52YWx1ZSA+IDAgfHwgdHJpbSA9PT0gXCJcIiAvKiB0cmltOiBmYWxzZSAqLyB8fCBmaW5kKHN0b3BUcmltLCBtb21lbnRUeXBlLnR5cGUpIHx8IGZpbmQob3V0cHV0VHlwZXMsIG1vbWVudFR5cGUudHlwZSkpKSB7XG4gICAgICAgICAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXROdW1iZXIobW9tZW50VHlwZS52YWx1ZSwgZm9ybWF0T3B0aW9ucywgdXNlckxvY2FsZSk7XG5cbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMudXNlR3JvdXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMuZGVjaW1hbFNlcGFyYXRvciA9IFwiLlwiO1xuICAgICAgICAgICAgbW9tZW50VHlwZS5mb3JtYXR0ZWRWYWx1ZUVuID0gZm9ybWF0TnVtYmVyKG1vbWVudFR5cGUudmFsdWUsIGZvcm1hdE9wdGlvbnMsIFwiZW5cIik7XG5cbiAgICAgICAgICAgIGlmIChtb21lbnRUeXBlLnRva2VuTGVuZ3RoID09PSAyICYmIG1vbWVudFR5cGUudHlwZSA9PT0gXCJtaWxsaXNlY29uZHNcIikge1xuICAgICAgICAgICAgICAgIG1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWVNUyA9IGZvcm1hdE51bWJlcihtb21lbnRUeXBlLnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAzLFxuICAgICAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCBcImVuXCIpLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50VHlwZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgZm9ybWF0dGVkIHZhbHVlcy5cbiAgICAgICAgbW9tZW50VHlwZXMgPSBtYXAobW9tZW50VHlwZXMsIGZvcm1hdFZhbHVlKTtcbiAgICAgICAgbW9tZW50VHlwZXMgPSBjb21wYWN0KG1vbWVudFR5cGVzKTtcblxuICAgICAgICAvLyBCdWJibGUgcm91bmRlZCB2YWx1ZXMuXG4gICAgICAgIGlmIChtb21lbnRUeXBlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgZmluZFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kKG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50VHlwZS50eXBlID09PSB0eXBlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGJ1YmJsZVR5cGVzID0gZnVuY3Rpb24gKGJ1YmJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBidWJibGVNb21lbnRUeXBlID0gZmluZFR5cGUoYnViYmxlLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFidWJibGVNb21lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlYWNoKGJ1YmJsZS50YXJnZXRzLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRNb21lbnRUeXBlID0gZmluZFR5cGUodGFyZ2V0LnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0TW9tZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGJ1YmJsZU1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWVFbiwgMTApID09PSB0YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZU1vbWVudFR5cGUucmF3VmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlTW9tZW50VHlwZS53aG9sZVZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZU1vbWVudFR5cGUuZGVjaW1hbFZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1vbWVudFR5cGUucmF3VmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1vbWVudFR5cGUud2hvbGVWYWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TW9tZW50VHlwZS5kZWNpbWFsVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TW9tZW50VHlwZS5mb3JtYXR0ZWRWYWx1ZUVuID0gdGFyZ2V0TW9tZW50VHlwZS53aG9sZVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZWFjaChidWJibGVzLCBidWJibGVUeXBlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSBmb3JtYXR0ZWQgdmFsdWVzLlxuICAgICAgICBpZiAoYnViYmxlZCkge1xuICAgICAgICAgICAgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2lnbmlmaWNhbnREaWdpdHMgPSBzaWduaWZpY2FudERpZ2l0c0NhY2hlO1xuICAgICAgICAgICAgbW9tZW50VHlwZXMgPSBtYXAobW9tZW50VHlwZXMsIGZvcm1hdFZhbHVlKTtcbiAgICAgICAgICAgIG1vbWVudFR5cGVzID0gY29tcGFjdChtb21lbnRUeXBlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0cHV0VHlwZXMgJiYgIShpc01heFZhbHVlICYmICFzZXR0aW5ncy50cmltKSkge1xuICAgICAgICAgICAgbW9tZW50VHlwZXMgPSBtYXAobW9tZW50VHlwZXMsIGZ1bmN0aW9uIChtb21lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmQob3V0cHV0VHlwZXMsIGZ1bmN0aW9uIChvdXRwdXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnRUeXBlLnR5cGUgPT09IG91dHB1dFR5cGU7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbW9tZW50VHlwZXMgPSBjb21wYWN0KG1vbWVudFR5cGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRyaW0gTGFyZ2UuXG4gICAgICAgICAgICBpZiAodHJpbUxhcmdlKSB7XG4gICAgICAgICAgICAgICAgbW9tZW50VHlwZXMgPSByZXN0KG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRyaW1taW5nIG9uOlxuICAgICAgICAgICAgICAgICAgICAvLyAtIHRoZSBzbWFsbGVzdCBtb21lbnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAvLyAtIGEgdHlwZSBtYXJrZWQgZm9yIHN0b3BUcmltXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gYSB0eXBlIHRoYXQgaGFzIGEgd2hvbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFtb21lbnRUeXBlLmlzU21hbGxlc3QgJiYgIW1vbWVudFR5cGUud2hvbGVWYWx1ZSAmJiAhZmluZChzdG9wVHJpbSwgbW9tZW50VHlwZS50eXBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTGFyZ2VzdC5cbiAgICAgICAgICAgIGlmIChsYXJnZXN0ICYmIG1vbWVudFR5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1vbWVudFR5cGVzID0gbW9tZW50VHlwZXMuc2xpY2UoMCwgbGFyZ2VzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyaW0gU21hbGwuXG4gICAgICAgICAgICBpZiAodHJpbVNtYWxsICYmIG1vbWVudFR5cGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb21lbnRUeXBlcyA9IGluaXRpYWwobW9tZW50VHlwZXMsIGZ1bmN0aW9uIChtb21lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdHJpbW1pbmcgb246XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gYSB0eXBlIG1hcmtlZCBmb3Igc3RvcFRyaW1cbiAgICAgICAgICAgICAgICAgICAgLy8gLSBhIHR5cGUgdGhhdCBoYXMgYSB3aG9sZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyAtIHRoZSBsYXJnZXN0IG1vbWVudFR5cGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFtb21lbnRUeXBlLndob2xlVmFsdWUgJiYgIWZpbmQoc3RvcFRyaW0sIG1vbWVudFR5cGUudHlwZSkgJiYgIW1vbWVudFR5cGUuaXNMYXJnZXN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcmltIE1pZC5cbiAgICAgICAgICAgIGlmICh0cmltTWlkKSB7XG4gICAgICAgICAgICAgICAgbW9tZW50VHlwZXMgPSBtYXAobW9tZW50VHlwZXMsIGZ1bmN0aW9uIChtb21lbnRUeXBlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgbW9tZW50VHlwZXMubGVuZ3RoIC0gMSAmJiAhbW9tZW50VHlwZS53aG9sZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnRUeXBlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbW9tZW50VHlwZXMgPSBjb21wYWN0KG1vbWVudFR5cGVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJpbSBGaW5hbC5cbiAgICAgICAgICAgIGlmICh0cmltRmluYWwgJiYgbW9tZW50VHlwZXMubGVuZ3RoID09PSAxICYmICFtb21lbnRUeXBlc1swXS53aG9sZVZhbHVlICYmICEoIXRydW5jICYmIG1vbWVudFR5cGVzWzBdLmlzU21hbGxlc3QgJiYgbW9tZW50VHlwZXNbMF0ucmF3VmFsdWUgPCBtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtb21lbnRUeXBlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybk1vbWVudFR5cGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50VHlwZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2NhbGl6ZSBhbmQgcGx1cmFsaXplIHVuaXQgbGFiZWxzLlxuICAgICAgICBlYWNoKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbW9tZW50VG9rZW5zW3Rva2VuLnR5cGVdO1xuXG4gICAgICAgICAgICB2YXIgbW9tZW50VHlwZSA9IGZpbmQobW9tZW50VHlwZXMsIGZ1bmN0aW9uIChtb21lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudFR5cGUudHlwZSA9PT0gdG9rZW4udHlwZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWtleSB8fCAhbW9tZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IG1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWVFbi5zcGxpdChcIi5cIik7XG5cbiAgICAgICAgICAgIHZhbHVlc1swXSA9IHBhcnNlSW50KHZhbHVlc1swXSwgMTApO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVzWzFdKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gcGFyc2VGbG9hdChcIjAuXCIgKyB2YWx1ZXNbMV0sIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBsdXJhbEtleSA9IGxvY2FsZURhdGEuZHVyYXRpb25QbHVyYWxLZXkoa2V5LCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSk7XG5cbiAgICAgICAgICAgIHZhciBsYWJlbHMgPSBkdXJhdGlvbkdldExhYmVscyhrZXksIGxvY2FsZURhdGEpO1xuXG4gICAgICAgICAgICB2YXIgYXV0b0xvY2FsaXplZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcGx1cmFsaXplZExhYmVscyA9IHt9O1xuXG4gICAgICAgICAgICAvLyBBdXRvLUxvY2FsaXplZCB1bml0IGxhYmVscy5cbiAgICAgICAgICAgIGVhY2gobG9jYWxlRGF0YS5fZHVyYXRpb25MYWJlbFR5cGVzLCBmdW5jdGlvbiAobGFiZWxUeXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZmluZChsYWJlbHMsIGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwudHlwZSA9PT0gbGFiZWxUeXBlLnR5cGUgJiYgbGFiZWwua2V5ID09PSBwbHVyYWxLZXk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cmFsaXplZExhYmVsc1tsYWJlbC50eXBlXSA9IGxhYmVsLmxhYmVsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdJbmNsdWRlcyh0b2tlbi50ZXh0LCBsYWJlbFR5cGUuc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4udGV4dCA9IHRva2VuLnRleHQucmVwbGFjZShsYWJlbFR5cGUuc3RyaW5nLCBsYWJlbC5sYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvTG9jYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBdXRvLXBsdXJhbGl6ZWQgdW5pdCBsYWJlbHMuXG4gICAgICAgICAgICBpZiAodXNlUGx1cmFsICYmICFhdXRvTG9jYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzLnNvcnQoZHVyYXRpb25MYWJlbENvbXBhcmUpO1xuXG4gICAgICAgICAgICAgICAgZWFjaChsYWJlbHMsIGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGx1cmFsaXplZExhYmVsc1tsYWJlbC50eXBlXSA9PT0gbGFiZWwubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdJbmNsdWRlcyh0b2tlbi50ZXh0LCBsYWJlbC5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGNoZWNraW5nIHRoaXMgdG9rZW4gaWYgaXRzIGxhYmVsIGlzIGFscmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3JyZWN0bHkgcGx1cmFsaXplZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhpcyBsYWJlbCBpZiBpdCBpcyBjb3JyZWN0LCBidXQgbm90IHByZXNlbnQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0b2tlbidzIHRleHQuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nSW5jbHVkZXModG9rZW4udGV4dCwgbGFiZWwubGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsZWNlIHRoaXMgdG9rZW4ncyBsYWJlbCBhbmQgc3RvcCBjaGVja2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLnRleHQgPSB0b2tlbi50ZXh0LnJlcGxhY2UobGFiZWwubGFiZWwsIHBsdXJhbGl6ZWRMYWJlbHNbbGFiZWwudHlwZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkIG91cHR1dC5cbiAgICAgICAgdG9rZW5zID0gbWFwKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICBpZiAoIXRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1vbWVudFR5cGUgPSBmaW5kKG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnRUeXBlLnR5cGUgPT09IHRva2VuLnR5cGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFtb21lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvdXQgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAodXNlTGVmdFVuaXRzKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05lZ2F0aXZlICYmIGlzTWF4VmFsdWUgfHwgIWlzTmVnYXRpdmUgJiYgaXNNaW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjwgXCI7XG4gICAgICAgICAgICAgICAgaXNNYXhWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzTWluVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmVnYXRpdmUgJiYgaXNNaW5WYWx1ZSB8fCAhaXNOZWdhdGl2ZSAmJiBpc01heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPiBcIjtcbiAgICAgICAgICAgICAgICBpc01heFZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNNaW5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOZWdhdGl2ZSAmJiAobW9tZW50VHlwZS52YWx1ZSA+IDAgfHwgdHJpbSA9PT0gXCJcIiB8fCBmaW5kKHN0b3BUcmltLCBtb21lbnRUeXBlLnR5cGUpIHx8IGZpbmQob3V0cHV0VHlwZXMsIG1vbWVudFR5cGUudHlwZSkpKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiLVwiO1xuICAgICAgICAgICAgICAgIGlzTmVnYXRpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09IFwibWlsbGlzZWNvbmRzXCIgJiYgbW9tZW50VHlwZS5mb3JtYXR0ZWRWYWx1ZU1TKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IG1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWVNUztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IG1vbWVudFR5cGUuZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXNlTGVmdFVuaXRzKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRyaW0gbGVhZGluZyBhbmQgdHJhaWxpbmcgY29tbWEsIHNwYWNlLCBjb2xvbiwgYW5kIGRvdC5cbiAgICAgICAgcmV0dXJuIHRva2Vucy5qb2luKFwiXCIpLnJlcGxhY2UoLygsfCB8OnxcXC4pKiQvLCBcIlwiKS5yZXBsYWNlKC9eKCx8IHw6fFxcLikqLywgXCJcIik7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdEZvcm1hdFRlbXBsYXRlXG4gICAgZnVuY3Rpb24gZGVmYXVsdEZvcm1hdFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZHVyID0gdGhpcy5kdXJhdGlvbjtcblxuICAgICAgICB2YXIgZmluZFR5cGUgPSBmdW5jdGlvbiBmaW5kVHlwZSh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVyLl9kYXRhW3R5cGVdO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBmaXJzdFR5cGUgPSBmaW5kKHRoaXMudHlwZXMsIGZpbmRUeXBlKTtcblxuICAgICAgICB2YXIgbGFzdFR5cGUgPSBmaW5kTGFzdCh0aGlzLnR5cGVzLCBmaW5kVHlwZSk7XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0ZW1wbGF0ZSBzdHJpbmdzIGZvciBlYWNoIGR1cmF0aW9uIGRpbWVuc2lvbiB0eXBlLlxuICAgICAgICBzd2l0Y2ggKGZpcnN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm1pbGxpc2Vjb25kc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlMgX19cIjtcbiAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRzXCI6IC8vIEZhbGx0aHJvdWdoLlxuICAgICAgICAgICAgY2FzZSBcIm1pbnV0ZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIqX01TX1wiO1xuICAgICAgICAgICAgY2FzZSBcImhvdXJzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiX0hNU19cIjtcbiAgICAgICAgICAgIGNhc2UgXCJkYXlzXCI6IC8vIFBvc3NpYmxlIEZhbGx0aHJvdWdoLlxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFR5cGUgPT09IGxhc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImQgX19cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RUeXBlID09PSBsYXN0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ3IF9fXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaW0gPSBcImJvdGhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3IF9fLCBkIF9fLCBoIF9fXCI7XG4gICAgICAgICAgICBjYXNlIFwibW9udGhzXCI6IC8vIFBvc3NpYmxlIEZhbGx0aHJvdWdoLlxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFR5cGUgPT09IGxhc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk0gX19cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwieWVhcnNcIjpcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RUeXBlID09PSBsYXN0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ5IF9fXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaW0gPSBcImJvdGhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ5IF9fLCBNIF9fLCBkIF9fXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmltID0gXCJib3RoXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwieSBfXywgZCBfXywgaCBfXywgbSBfXywgcyBfX1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5pdFxuICAgIGZ1bmN0aW9uIGluaXQoY29udGV4dCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIHRocm93IFwiTW9tZW50IER1cmF0aW9uIEZvcm1hdCBpbml0IGNhbm5vdCBmaW5kIG1vbWVudCBpbnN0YW5jZS5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuZHVyYXRpb24uZm9ybWF0ID0gZHVyYXRpb25zRm9ybWF0O1xuICAgICAgICBjb250ZXh0LmR1cmF0aW9uLmZuLmZvcm1hdCA9IGR1cmF0aW9uRm9ybWF0O1xuXG4gICAgICAgIGNvbnRleHQuZHVyYXRpb24uZm4uZm9ybWF0LmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgLy8gTWFueSBvcHRpb25zIGFyZSBkZWZhdWx0ZWQgdG8gYG51bGxgIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgICAgICAgICAgIC8vICdub3Qgc2V0JyBhbmQgJ3NldCB0byBgZmFsc2VgJ1xuXG4gICAgICAgICAgICAvLyB0cmltXG4gICAgICAgICAgICAvLyBDYW4gYmUgYSBzdHJpbmcsIGEgZGVsaW1pdGVkIGxpc3Qgb2Ygc3RyaW5ncywgYW4gYXJyYXkgb2Ygc3RyaW5ncyxcbiAgICAgICAgICAgIC8vIG9yIGEgYm9vbGVhbi5cbiAgICAgICAgICAgIC8vIFwibGFyZ2VcIiAtIHdpbGwgdHJpbSBsYXJnZXN0LW1hZ25pdHVkZSB6ZXJvLXZhbHVlIHRva2VucyB1bnRpbFxuICAgICAgICAgICAgLy8gZmluZGluZyBhIHRva2VuIHdpdGggYSB2YWx1ZSwgYSB0b2tlbiBpZGVudGlmaWVkIGFzICdzdG9wVHJpbScsIG9yXG4gICAgICAgICAgICAvLyB0aGUgZmluYWwgdG9rZW4gb2YgdGhlIGZvcm1hdCBzdHJpbmcuXG4gICAgICAgICAgICAvLyBcInNtYWxsXCIgLSB3aWxsIHRyaW0gc21hbGxlc3QtbWFnbml0dWRlIHplcm8tdmFsdWUgdG9rZW5zIHVudGlsXG4gICAgICAgICAgICAvLyBmaW5kaW5nIGEgdG9rZW4gd2l0aCBhIHZhbHVlLCBhIHRva2VuIGlkZW50aWZpZWQgYXMgJ3N0b3BUcmltJywgb3JcbiAgICAgICAgICAgIC8vIHRoZSBmaW5hbCB0b2tlbiBvZiB0aGUgZm9ybWF0IHN0cmluZy5cbiAgICAgICAgICAgIC8vIFwiYm90aFwiIC0gd2lsbCBleGVjdXRlIFwibGFyZ2VcIiB0cmltIHRoZW4gXCJzbWFsbFwiIHRyaW0uXG4gICAgICAgICAgICAvLyBcIm1pZFwiIC0gd2lsbCB0cmltIGFueSB6ZXJvLXZhbHVlIHRva2VucyB0aGF0IGFyZSBub3QgdGhlIGZpcnN0IG9yXG4gICAgICAgICAgICAvLyBsYXN0IHRva2Vucy4gVXN1YWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggXCJsYXJnZVwiIG9yIFwiYm90aFwiLlxuICAgICAgICAgICAgLy8gZS5nLiBcImxhcmdlIG1pZFwiIG9yIFwiYm90aCBtaWRcIi5cbiAgICAgICAgICAgIC8vIFwiZmluYWxcIiAtIHdpbGwgdHJpbSB0aGUgZmluYWwgdG9rZW4gaWYgaXQgaXMgemVyby12YWx1ZS4gVXNlIHRoaXNcbiAgICAgICAgICAgIC8vIG9wdGlvbiB3aXRoIFwibGFyZ2VcIiBvciBcImJvdGhcIiB0byBvdXRwdXQgYW4gZW1wdHkgc3RyaW5nIHdoZW5cbiAgICAgICAgICAgIC8vIGZvcm1hdHRpbmcgYSB6ZXJvLXZhbHVlIGR1cmF0aW9uLiBlLmcuIFwibGFyZ2UgZmluYWxcIiBvciBcImJvdGggZmluYWxcIi5cbiAgICAgICAgICAgIC8vIFwiYWxsXCIgLSBXaWxsIHRyaW0gYWxsIHplcm8tdmFsdWUgdG9rZW5zLiBTaG9ydGhhbmQgZm9yIFwiYm90aCBtaWQgZmluYWxcIi5cbiAgICAgICAgICAgIC8vIFwibGVmdFwiIC0gbWFwcyB0byBcImxhcmdlXCIgdG8gc3VwcG9ydCBwbHVnaW4ncyB2ZXJzaW9uIDEgQVBJLlxuICAgICAgICAgICAgLy8gXCJyaWdodFwiIC0gbWFwcyB0byBcImxhcmdlXCIgdG8gc3VwcG9ydCBwbHVnaW4ncyB2ZXJzaW9uIDEgQVBJLlxuICAgICAgICAgICAgLy8gYGZhbHNlYCAtIHRlbXBsYXRlIHRva2VucyBhcmUgbm90IHRyaW1tZWQuXG4gICAgICAgICAgICAvLyBgdHJ1ZWAgLSB0cmVhdGVkIGFzIFwibGFyZ2VcIi5cbiAgICAgICAgICAgIC8vIGBudWxsYCAtIHRyZWF0ZWQgYXMgXCJsYXJnZVwiLlxuICAgICAgICAgICAgdHJpbTogbnVsbCxcblxuICAgICAgICAgICAgLy8gc3RvcFRyaW1cbiAgICAgICAgICAgIC8vIEEgbW9tZW50IHRva2VuIHN0cmluZywgYSBkZWxpbWl0ZWQgc2V0IG9mIG1vbWVudCB0b2tlbiBzdHJpbmdzLFxuICAgICAgICAgICAgLy8gb3IgYW4gYXJyYXkgb2YgbW9tZW50IHRva2VuIHN0cmluZ3MuIFRyaW1taW5nIHdpbGwgc3RvcCB3aGVuIGEgdG9rZW5cbiAgICAgICAgICAgIC8vIGxpc3RlZCBpbiB0aGlzIG9wdGlvbiBpcyByZWFjaGVkLiBBIFwiKlwiIGNoYXJhY3RlciBpbiB0aGUgZm9ybWF0XG4gICAgICAgICAgICAvLyB0ZW1wbGF0ZSBzdHJpbmcgd2lsbCBhbHNvIG1hcmsgYSBtb21lbnQgdG9rZW4gYXMgc3RvcFRyaW0uXG4gICAgICAgICAgICAvLyBlLmcuIFwiZCBbZGF5c10gKmg6bW06c3NcIiB3aWxsIGFsd2F5cyBzdG9wIHRyaW1taW5nIGF0IHRoZSAnaG91cnMnIHRva2VuLlxuICAgICAgICAgICAgc3RvcFRyaW06IG51bGwsXG5cbiAgICAgICAgICAgIC8vIGxhcmdlc3RcbiAgICAgICAgICAgIC8vIFNldCB0byBhIHBvc2l0aXZlIGludGVnZXIgdG8gb3V0cHV0IG9ubHkgdGhlIFwiblwiIGxhcmdlc3QtbWFnbml0dWRlXG4gICAgICAgICAgICAvLyBtb21lbnQgdG9rZW5zIHRoYXQgaGF2ZSBhIHZhbHVlLiBBbGwgbGVzc2VyLW1hZ25pdHVkZSBtb21lbnQgdG9rZW5zXG4gICAgICAgICAgICAvLyB3aWxsIGJlIGlnbm9yZWQuIFRoaXMgb3B0aW9uIHRha2VzIGVmZmVjdCBldmVuIGlmIGB0cmltYCBpcyBzZXRcbiAgICAgICAgICAgIC8vIHRvIGBmYWxzZWAuXG4gICAgICAgICAgICBsYXJnZXN0OiBudWxsLFxuXG4gICAgICAgICAgICAvLyBtYXhWYWx1ZVxuICAgICAgICAgICAgLy8gVXNlIGBtYXhWYWx1ZWAgdG8gcmVuZGVyIGdlbmVyYWxpemVkIG91dHB1dCBmb3IgbGFyZ2UgZHVyYXRpb24gdmFsdWVzLFxuICAgICAgICAgICAgLy8gZS5nLiBgXCI+IDYwIGRheXNcImAuIGBtYXhWYWx1ZWAgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIgYW5kIGlzXG4gICAgICAgICAgICAvLy8gYXBwbGllZCB0byB0aGUgZ3JlYXRlc3QtbWFnbml0dWRlIG1vbWVudCB0b2tlbiBpbiB0aGUgZm9ybWF0IHRlbXBsYXRlLlxuICAgICAgICAgICAgbWF4VmFsdWU6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIG1pblZhbHVlXG4gICAgICAgICAgICAvLyBVc2UgYG1pblZhbHVlYCB0byByZW5kZXIgZ2VuZXJhbGl6ZWQgb3V0cHV0IGZvciBzbWFsbCBkdXJhdGlvbiB2YWx1ZXMsXG4gICAgICAgICAgICAvLyBlLmcuIGBcIjwgNSBtaW51dGVzXCJgLiBgbWluVmFsdWVgIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGFuZCBpc1xuICAgICAgICAgICAgLy8gYXBwbGllZCB0byB0aGUgbGVhc3QtbWFnbml0dWRlIG1vbWVudCB0b2tlbiBpbiB0aGUgZm9ybWF0IHRlbXBsYXRlLlxuICAgICAgICAgICAgbWluVmFsdWU6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIHByZWNpc2lvblxuICAgICAgICAgICAgLy8gSWYgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBudW1iZXIgb2YgZGVjaW1hbCBmcmFjdGlvbiBkaWdpdHMgdG8gcmVuZGVyLlxuICAgICAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSBpbnRlZ2VyLCBudW1iZXIgb2YgaW50ZWdlciBwbGFjZSBkaWdpdHMgdG8gdHJ1bmNhdGUgdG8gMC5cbiAgICAgICAgICAgIC8vIElmIGB1c2VTaWduaWZpY2FudERpZ2l0c2AgaXMgc2V0IHRvIGB0cnVlYCBhbmQgYHByZWNpc2lvbmAgaXMgYSBwb3NpdGl2ZVxuICAgICAgICAgICAgLy8gaW50ZWdlciwgc2V0cyB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzIHVzZWQgaW4gdGhlXG4gICAgICAgICAgICAvLyBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgICAgICAgICAgcHJlY2lzaW9uOiAwLFxuXG4gICAgICAgICAgICAvLyB0cnVuY1xuICAgICAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvciByb3VuZHMgZmluYWwgdG9rZW4gdmFsdWUuIFNldCB0byBgdHJ1ZWAgdG9cbiAgICAgICAgICAgIC8vIHRydW5jYXRlIGZpbmFsIHRva2VuIHZhbHVlLCB3aGljaCB3YXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaW5cbiAgICAgICAgICAgIC8vIHZlcnNpb24gMSBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgICAgIHRydW5jOiBmYWxzZSxcblxuICAgICAgICAgICAgLy8gZm9yY2VMZW5ndGhcbiAgICAgICAgICAgIC8vIEZvcmNlIGZpcnN0IG1vbWVudCB0b2tlbiB3aXRoIGEgdmFsdWUgdG8gcmVuZGVyIGF0IGZ1bGwgbGVuZ3RoXG4gICAgICAgICAgICAvLyBldmVuIHdoZW4gdGVtcGxhdGUgaXMgdHJpbW1lZCBhbmQgZmlyc3QgbW9tZW50IHRva2VuIGhhcyBsZW5ndGggb2YgMS5cbiAgICAgICAgICAgIGZvcmNlTGVuZ3RoOiBudWxsLFxuXG4gICAgICAgICAgICAvLyB1c2VyTG9jYWxlXG4gICAgICAgICAgICAvLyBGb3JtYXR0ZWQgbnVtZXJpY2FsIG91dHB1dCBpcyByZW5kZXJlZCB1c2luZyBgdG9Mb2NhbGVTdHJpbmdgXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGxvY2FsZSBvZiB0aGUgdXNlcidzIGVudmlyb25tZW50LiBTZXQgdGhpcyBvcHRpb24gdG8gcmVuZGVyXG4gICAgICAgICAgICAvLyBudW1lcmljYWwgb3V0cHV0IHVzaW5nIGEgZGlmZmVyZW50IGxvY2FsZS4gVW5pdCBuYW1lcyBhcmUgcmVuZGVyZWRcbiAgICAgICAgICAgIC8vIGFuZCBkZXRlY3RlZCB1c2luZyB0aGUgbG9jYWxlIHNldCBpbiBtb21lbnQuanMsIHdoaWNoIGNhbiBiZSBkaWZmZXJlbnRcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGxvY2FsZSBvZiB1c2VyJ3MgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICB1c2VyTG9jYWxlOiBudWxsLFxuXG4gICAgICAgICAgICAvLyB1c2VQbHVyYWxcbiAgICAgICAgICAgIC8vIFdpbGwgYXV0b21hdGljYWxseSBzaW5ndWxhcml6ZSBvciBwbHVyYWxpemUgdW5pdCBuYW1lcyB3aGVuIHRoZXlcbiAgICAgICAgICAgIC8vIGFwcGVhciBpbiB0aGUgdGV4dCBhc3NvY2lhdGVkIHdpdGggZWFjaCBtb21lbnQgdG9rZW4uIFN0YW5kYXJkIGFuZFxuICAgICAgICAgICAgLy8gc2hvcnQgdW5pdCBsYWJlbHMgYXJlIHNpbmd1bGFyaXplZCBhbmQgcGx1cmFsaXplZCwgYmFzZWQgb24gbG9jYWxlLlxuICAgICAgICAgICAgLy8gZS5nLiBpbiBlbmdsaXNoLCBcIjEgc2Vjb25kXCIgb3IgXCIxIHNlY1wiIHdvdWxkIGJlIHJlbmRlcmVkIGluc3RlYWRcbiAgICAgICAgICAgIC8vIG9mIFwiMSBzZWNvbmRzXCIgb3IgXCIxIHNlY3NcIi4gVGhlIGRlZmF1bHQgcGx1cmFsaXphdGlvbiBmdW5jdGlvblxuICAgICAgICAgICAgLy8gcmVuZGVycyBhIHBsdXJhbCBsYWJlbCBmb3IgYSB2YWx1ZSB3aXRoIGRlY2ltYWwgcHJlY2lzaW9uLlxuICAgICAgICAgICAgLy8gZS5nLiBcIjEuMCBzZWNvbmRzXCIgaXMgbmV2ZXIgcmVuZGVyZWQgYXMgXCIxLjAgc2Vjb25kXCIuXG4gICAgICAgICAgICAvLyBMYWJlbCB0eXBlcyBhbmQgcGx1cmFsaXphdGlvbiBmdW5jdGlvbiBhcmUgY29uZmlndXJhYmxlIGluIHRoZVxuICAgICAgICAgICAgLy8gbG9jYWxlRGF0YSBleHRlbnNpb25zLlxuICAgICAgICAgICAgdXNlUGx1cmFsOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyB1c2VMZWZ0VW5pdHNcbiAgICAgICAgICAgIC8vIFRoZSB0ZXh0IHRvIHRoZSByaWdodCBvZiBlYWNoIG1vbWVudCB0b2tlbiBpbiBhIGZvcm1hdCBzdHJpbmdcbiAgICAgICAgICAgIC8vIGlzIHRyZWF0ZWQgYXMgdGhhdCB0b2tlbidzIHVuaXRzIGZvciB0aGUgcHVycG9zZXMgb2YgdHJpbW1pbmcsXG4gICAgICAgICAgICAvLyBzaW5ndWxhcml6aW5nLCBhbmQgYXV0by1sb2NhbGl6aW5nLlxuICAgICAgICAgICAgLy8gZS5nLiBcImggW2hvdXJzXSwgbSBbbWludXRlc10sIHMgW3NlY29uZHNdXCIuXG4gICAgICAgICAgICAvLyBUbyBwcm9wZXJseSBzaW5ndWxhcml6ZSBvciBsb2NhbGl6ZSBhIGZvcm1hdCBzdHJpbmcgc3VjaCBhc1xuICAgICAgICAgICAgLy8gXCJbaG91cnNdIGgsIFttaW51dGVzXSBtLCBbc2Vjb25kc10gc1wiLCB3aGVyZSB0aGUgdW5pdHMgYXBwZWFyXG4gICAgICAgICAgICAvLyB0byB0aGUgbGVmdCBvZiBlYWNoIG1vbWVudCB0b2tlbiwgc2V0IHVzZUxlZnRVbml0cyB0byBgdHJ1ZWAuXG4gICAgICAgICAgICAvLyBUaGlzIHBsdWdpbiBpcyBub3QgdGVzdGVkIGluIHRoZSBjb250ZXh0IG9mIHJ0bCB0ZXh0LlxuICAgICAgICAgICAgdXNlTGVmdFVuaXRzOiBmYWxzZSxcblxuICAgICAgICAgICAgLy8gdXNlR3JvdXBpbmdcbiAgICAgICAgICAgIC8vIEVuYWJsZXMgbG9jYWxlLWJhc2VkIGRpZ2l0IGdyb3VwaW5nIGluIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL3RvTG9jYWxlU3RyaW5nXG4gICAgICAgICAgICB1c2VHcm91cGluZzogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gdXNlU2lnbmlmaWNhbnREaWdpdHNcbiAgICAgICAgICAgIC8vIFRyZWF0IHRoZSBgcHJlY2lzaW9uYCBvcHRpb24gYXMgdGhlIG1heGltdW0gc2lnbmlmaWNhbnQgZGlnaXRzXG4gICAgICAgICAgICAvLyB0byBiZSByZW5kZXJlZC4gUHJlY2lzaW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLiBTaWduaWZpY2FudFxuICAgICAgICAgICAgLy8gZGlnaXRzIGV4dGVuZCBhY3Jvc3MgdW5pdCB0eXBlcyxcbiAgICAgICAgICAgIC8vIGUuZy4gXCI2IGhvdXJzIDM3LjUgbWludXRlc1wiIHJlcHJlc2VudHMgNCBzaWduaWZpY2FudCBkaWdpdHMuXG4gICAgICAgICAgICAvLyBFbmFibGluZyB0aGlzIG9wdGlvbiBjYXVzZXMgdG9rZW4gbGVuZ3RoIHRvIGJlIGlnbm9yZWQuIFNlZSAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL3RvTG9jYWxlU3RyaW5nXG4gICAgICAgICAgICB1c2VTaWduaWZpY2FudERpZ2l0czogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyBUaGUgdGVtcGxhdGUgc3RyaW5nIHVzZWQgdG8gZm9ybWF0IHRoZSBkdXJhdGlvbi4gTWF5IGJlIGEgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIG9yIGEgc3RyaW5nLiBUZW1wbGF0ZSBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nXG4gICAgICAgICAgICAvLyBvZiB0aGUgc2V0dGluZ3Mgb2JqZWN0IHNvIHRoYXQgdGVtcGxhdGUgc3RyaW5ncyBtYXkgYmUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgZHVyYXRpb24gb2JqZWN0IChhY2Nlc3NpYmxlIHZpYSBgdGhpcy5kdXJhdGlvbmApXG4gICAgICAgICAgICAvLyBvciBhbnkgb2YgdGhlIG90aGVyIHNldHRpbmdzLiBMZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZSwgY29tbWEsXG4gICAgICAgICAgICAvLyBwZXJpb2QsIGFuZCBjb2xvbiBjaGFyYWN0ZXJzIGFyZSB0cmltbWVkIGZyb20gdGhlIHJlc3VsdGluZyBzdHJpbmcuXG4gICAgICAgICAgICB0ZW1wbGF0ZTogZGVmYXVsdEZvcm1hdFRlbXBsYXRlLFxuXG4gICAgICAgICAgICAvLyB1c2VUb0xvY2FsZVN0cmluZ1xuICAgICAgICAgICAgLy8gU2V0IHRoaXMgb3B0aW9uIHRvIGBmYWxzZWAgdG8gaWdub3JlIHRoZSBgdG9Mb2NhbGVTdHJpbmdgIGZlYXR1cmVcbiAgICAgICAgICAgIC8vIHRlc3QgYW5kIGZvcmNlIHRoZSB1c2Ugb2YgdGhlIGBmb3JtYXROdW1iZXJgIGZhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBpbmNsdWRlZCBpbiB0aGlzIHBsdWdpbi5cbiAgICAgICAgICAgIHVzZVRvTG9jYWxlU3RyaW5nOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBmb3JtYXROdW1iZXIgZmFsbGJhY2sgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vIFdoZW4gYHRvTG9jYWxlU3RyaW5nYCBpcyBkZXRlY3RlZCBhbmQgcGFzc2VzIHRoZSBmZWF0dXJlIHRlc3QsIHRoZVxuICAgICAgICAgICAgLy8gZm9sbG93aW5nIG9wdGlvbnMgd2lsbCBoYXZlIG5vIGVmZmVjdDogYHRvTG9jYWxlU3RyaW5nYCB3aWxsIGJlIHVzZWRcbiAgICAgICAgICAgIC8vIGZvciBmb3JtYXR0aW5nIGFuZCB0aGUgZ3JvdXBpbmcgc2VwYXJhdG9yLCBkZWNpbWFsIHNlcGFyYXRvciwgYW5kXG4gICAgICAgICAgICAvLyBpbnRlZ2VyIGRpZ2l0IGdyb3VwaW5nIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUgdXNlciBsb2NhbGUuXG5cbiAgICAgICAgICAgIC8vIGdyb3VwaW5nU2VwYXJhdG9yXG4gICAgICAgICAgICAvLyBUaGUgaW50ZWdlciBkaWdpdCBncm91cGluZyBzZXBhcmF0b3IgdXNlZCB3aGVuIHVzaW5nIHRoZSBmYWxsYmFja1xuICAgICAgICAgICAgLy8gZm9ybWF0TnVtYmVyIGZ1bmN0aW9uLlxuICAgICAgICAgICAgZ3JvdXBpbmdTZXBhcmF0b3I6IFwiLFwiLFxuXG4gICAgICAgICAgICAvLyBkZWNpbWFsU2VwYXJhdG9yXG4gICAgICAgICAgICAvLyBUaGUgZGVjaW1hbCBzZXBhcmF0b3IgdXNlZCB3aGVuIHVzaW5nIHRoZSBmYWxsYmFjayBmb3JtYXROdW1iZXJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLlxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogXCIuXCIsXG5cbiAgICAgICAgICAgIC8vIGdyb3VwaW5nXG4gICAgICAgICAgICAvLyBUaGUgaW50ZWdlciBkaWdpdCBncm91cGluZyB1c2VkIHdoZW4gdXNpbmcgdGhlIGZhbGxiYWNrIGZvcm1hdE51bWJlclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24uIE11c3QgYmUgYW4gYXJyYXkuIFRoZSBkZWZhdWx0IHZhbHVlIG9mIGBbM11gIGdpdmVzIHRoZVxuICAgICAgICAgICAgLy8gc3RhbmRhcmQgMy1kaWdpdCB0aG91c2FuZC9taWxsaW9uL2JpbGxpb24gZGlnaXQgZ3JvdXBpbmdzIGZvciB0aGVcbiAgICAgICAgICAgIC8vIFwiZW5cIiBsb2NhbGUuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gYFszLCAyXWAgd291bGQgZ2VuZXJhdGUgdGhlXG4gICAgICAgICAgICAvLyB0aG91c2FuZC9sYWtoL2Nyb3JlIGRpZ2l0IGdyb3VwaW5ncyB1c2VkIGluIHRoZSBcImVuLUlOXCIgbG9jYWxlLlxuICAgICAgICAgICAgZ3JvdXBpbmc6IFszXVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRleHQudXBkYXRlTG9jYWxlKCdlbicsIGVuZ0xvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gUnVuIGZlYXR1cmUgdGVzdHMgZm9yIGBOdW1iZXIjdG9Mb2NhbGVTdHJpbmdgLlxuICAgIHRvTG9jYWxlU3RyaW5nV29ya3MgPSBmZWF0dXJlVGVzdFRvTG9jYWxlU3RyaW5nKCk7XG4gICAgdG9Mb2NhbGVTdHJpbmdSb3VuZGluZ1dvcmtzID0gdG9Mb2NhbGVTdHJpbmdXb3JrcyAmJiBmZWF0dXJlVGVzdFRvTG9jYWxlU3RyaW5nUm91bmRpbmcoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZHVyYXRpb24gZm9ybWF0IG9uIHRoZSBnbG9iYWwgbW9tZW50IGluc3RhbmNlLlxuICAgIGluaXQobW9tZW50KTtcblxuICAgIC8vIFJldHVybiB0aGUgaW5pdCBmdW5jdGlvbiBzbyB0aGF0IGR1cmF0aW9uIGZvcm1hdCBjYW4gYmVcbiAgICAvLyBpbml0aWFsaXplZCBvbiBvdGhlciBtb21lbnQgaW5zdGFuY2VzLlxuICAgIHJldHVybiBpbml0O1xufSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJlZWpzXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZWVqc1wiXVtcImhlbHBlcnNcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJlZWpzXCJdW1widmFsaWRhdG9yc1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIndwXCJdW1wiaXNTaGFsbG93RXF1YWxcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2Rhc2hcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJtb21lbnRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJlZWpzXCJdW1widmVuZG9yXCJdW1wibW9tZW50XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=