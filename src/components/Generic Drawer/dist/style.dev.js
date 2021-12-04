"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nbackground-color:red;\ncolor:white;\nwidth:80px;\nheight:40px;\ntop:10px;\n/* z-index:999; */\nborder-radius:18px;\ndisplay:flex;\nalign-items:center;\npadding-left:15px;\nleft:-40px;\nright:-40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nwidth: ", ";\nright:", ";\nheight:100vh;\nbackground-color:red;\nz-index:999;\ntransition: all 0.5s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width ? "".concat(width) : "400px";
}, function (_ref2) {
  var isOpen = _ref2.isOpen,
      width = _ref2.width;
  return isOpen ? "0" : "-".concat(width);
});

exports.Container = Container;

var Button = _styledComponents["default"].div(_templateObject2());

exports.Button = Button;