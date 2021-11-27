"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  .addnews {\n  width: 205px !important;\n  height: 80px !important;\n  margin: 0 2px 20px 2px !important;\n\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  background-color: white !important;\n}\n.myplus {\n  width: 36px;\n  height: 36px;\n  border: 1px solid;\n  border-radius: 50%;\n  background-color: #20d472;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 30px;\n  margin-left: 36px;\n\n  /* margin-right: 14px; */\n  /* margin: 22px; */\n}\n.myplus:hover {\n  cursor: pointer;\n}\n.addnews p {\n  width: fit-content;\n  position: relative !important;\n  margin: 0;\n  right: -14px !important;\n  /* margin-left: 14px; */\n  width:100px;\n}\n.togglebar {\n  width: 686px;\n  height: 80px;\n  background: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.sorts {\n  width: 591px;\n  height: 48px;\n  background-color: #edeff3;\n  border-radius: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.item { \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex:1;\n  font-size: 14px;\n  color: #2d3a45;\n  opacity: 40%;\n  border:none;\n}\n.item:hover {\n  background-color: white;\n  width: 150px;\n  height: 36px;\n  border-radius: 18px;\n  opacity: unset;\n  color: black;\n  cursor: pointer;\n}\n.twosomeplace {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 169px;\n  height: 80px;\n  background-color: white;\n  margin-left: 2px;\n}\n.inside {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 77px;\n  height: 48px;\n  border-radius: 30px;\n  padding-left: 6px;\n  padding-right: 6px;\n  background-color: #edeff3;\n}\n.first {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  cursor: pointer;\n}\n.vert1 {\n  width: 14px;\n  height: 6px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n}\n.background-white {\n  background-color: white;\n}\n.first:hover {\n  background-color: white;\n}\n.first:hover .vert1 {\n  background-color: #8d9ba8;\n}\n.background-black {\n  background-color: #8d9ba8;\n}\n.marg {\n  margin-bottom: 2px;\n}\n.second {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  cursor: pointer;\n}\n.hor1 {\n  width: 6px;\n  height: 14px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n}\n.hor2 {\n  width: 6px;\n  height: 10px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n  margin-left: 2px;\n  position: relative;\n  top: -2px;\n}\n.second:hover {\n  background-color: white;\n}\n\n.second:hover .hor1 {\n  background-color: #8d9ba8;\n}\n.second:hover .hor2 {\n  background-color: #8d9ba8;\n}\n\n.activeMe-true {\n  background-color: white;\n  width: 150px;\n  height: 36px;\n  border-radius: 18px;\n  opacity: unset;\n  color: black;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBody = _styledComponents["default"].div(_templateObject());

exports.NavBody = NavBody;