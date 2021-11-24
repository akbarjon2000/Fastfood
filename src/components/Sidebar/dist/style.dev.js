"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Header = exports.Exit = exports.Title = exports.Item = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nborder-left:4px solid #FCB600;\nheight:fit-content;\npadding:0;\nmargin:0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%auto;\nheight:100px;\ndisplay:flex;\nalign-items:center;\n\npadding-top:28px;\npadding-left:24px;\nmargin-bottom:64px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nmargin-top:auto;\nmargin-bottom:30px;\ndisplay:flex;\nmargin-left:25px;\nalign-items:center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-family: SFProDisplay;\nfont-size: 15px;\nline-height: 18px;\nletter-spacing: 0px;\ntext-align: left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\n    /* margin:20px 9px 0 40px; */\n    align-items: center;\n    text-decoration:none;\n    margin-left:25px;\n \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\nwidth:300px;\nheight:100vh;\nbackground-color:white;\n.icon{\n    width:40px;\n    height:40px;\n    padding: 10px;\n    background-color:#F6F6F6;\n    border-radius:6px;\n    margin-right:10px;\n}\n.bitmap{\n    width:72px;\n    height:72px;\n    border-radius:50%;\n    margin-right:20px;\n}\n.fastfood{\n    font-family: SFProDisplay;\nfont-size: 16px;\nline-height: 19px;\nletter-spacing: 0px;\ntext-align: left;\nfont-weight:800;\n}\n.sale{\n    font-family: SFProDisplay;\nfont-size: 16px;\nline-height: 19px;\nletter-spacing: 0px;\ntext-align: left;\nopacity:50%;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Item = _styledComponents["default"].div(_templateObject2());

exports.Item = Item;

var Title = _styledComponents["default"].div(_templateObject3());

exports.Title = Title;

var Exit = _styledComponents["default"].div(_templateObject4());

exports.Exit = Exit;

var Header = _styledComponents["default"].div(_templateObject5());

exports.Header = Header;

var Wrapper = _styledComponents["default"].div(_templateObject6());

exports.Wrapper = Wrapper;