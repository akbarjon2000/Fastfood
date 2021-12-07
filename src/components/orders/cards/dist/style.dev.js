"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Column = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\n/* margin-bottom:100px; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmargin-left:20px;\nwidth:234px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\nmargin-bottom:15px;\n.littleCircle {\n  margin: 0;\n  width: 10px;\n  height: 10px;\n  background-color: rgba(20, 229, 228, 1);\n  border-radius: 50%;\n  margin-right: 8px;\n}\n.bigCircle {\n  margin: 0;\n  width: 14px;\n  height: 14px;\n  background-color: rgba(20, 229, 228, 1);\n  border-radius: 50%;\n  margin-right: 38px;\n  margin-left: 16px;\n}\n.ordnum {\n  margin-left: 16px;\n  margin-top: 18px;\n}\n.x {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(237, 239, 243, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-top: 20px;\n  position: relative;\n  background-color: white;\n  left: 88px;\n}\n.x:hover {\n  cursor: pointer;\n}\n.tick {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(237, 239, 243, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-top: 80px;\n  position: relative;\n  left: 25px;\n  background-color: white;\n}\n.tick:hover {\n  cursor: pointer;\n}\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\noverflow:hidden;\nmargin-top:20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Column = _styledComponents["default"].div(_templateObject2());

exports.Column = Column;

var Wrapper = _styledComponents["default"].div(_templateObject3());

exports.Wrapper = Wrapper;