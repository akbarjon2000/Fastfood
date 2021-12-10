"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Close = exports.Container = exports.Shadow = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nbackground-color:white;\ncolor:black;\nwidth:80px;\nheight:40px;\ntop:10px;\nz-index:-1;\nborder-radius:18px;\ndisplay:flex;\nalign-items:center;\npadding-left:15px;\nleft:", ";\ncursor: pointer;\ntransition:all 0.6s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nwidth: ", ";\nright:", ";\nheight:100vh;\nbackground-color:white;\nz-index:999;\ntransition: all 0.5s;\nborder:1px solid red;\nmargin:0;\n/* padding:40px; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nwidth: 100%;\nright:", ";\nheight:100vh;\nbackground-color:black;\nz-index:999;\nopacity:0.5;\ndisplay:", ";\noverflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Shadow = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var open = _ref.open,
      width = _ref.width;
  return open ? "0" : "-".concat(width);
}, function (_ref2) {
  var open = _ref2.open;
  return open ? "flex" : "none";
});

exports.Shadow = Shadow;

var Container = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var width = _ref3.width;
  return width ? "".concat(width) : "400px";
}, function (_ref4) {
  var open = _ref4.open,
      width = _ref4.width;
  return open ? "0" : "-".concat(width);
});

exports.Container = Container;

var Close = _styledComponents["default"].div(_templateObject3(), function (_ref5) {
  var open = _ref5.open;
  return open ? "-40px" : "0";
});

exports.Close = Close;