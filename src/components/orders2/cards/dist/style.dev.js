"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Column = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmargin-left:38px;\nwidth:234px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\noverflow:hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Column = _styledComponents["default"].div(_templateObject2()); // Container.col2 = styled.div`
// margin-left:14px;
// width:234px;
// display:flex;
// flex-direction:column;
// justify-content:flex-start;
// `
// Container.col3 = styled.div`
// width:234px;
// margin-left:14px;
// display:flex;
// flex-direction:column;
// justify-content:flex-start;
// `
// Container.col4 = styled.div`
// width:234px;
// margin-left:14px;
// display:flex;
// flex-direction:column;
// justify-content:flex-start;
// `


exports.Column = Column;

var Wrapper = _styledComponents["default"].div(_templateObject3());

exports.Wrapper = Wrapper;