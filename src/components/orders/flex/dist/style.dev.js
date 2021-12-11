"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container2 = exports.Wrapper = exports.Column = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nwidth:12px;\nheight:12px;\nborder-radius:50%;\nmargin-right: 10px;\nbackground: #14E5E4;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nwidth: 318px;\nheight: 120px;\nbackground: #EDEFF3;\nopacity: 0.5;\nborder-radius: 6px;\nmargin: 0 auto;\nmargin-top:50px;\ndisplay:flex;\nflex-direction:row;\njustify-content:space-around;\npadding-top:25px;\npadding-left:20px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction: column;\nwidth:1005;\nheight:fit-content;\nmargin-top:100px;\npadding-left:50px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nwidth:100%;\nheight:35px;\npadding-left:50px;\nposition: absolute;\nbackground-color: #F9FAFB;\nbox-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);\ndisplay:flex;\nflex-direction: row;\nalign-items:center;\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nalign-items:center;\njustify-content:space-between;\nmargin-top:30px;\nfont-size:20px;\nborder-bottom:1px solid rgb(230,230,230);\nmargin-left:40px;\nmargin-right:40px;\npadding-bottom:25px;\nmargin-bottom:45px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\nalign-items:start;\nmargin-left:15px;\n\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width:318px;\n    height:93px;\n    border-radius:6px;\n    margin:0 auto;\n    display: flex;\n    align-items: center;\n    background-color: #EDEFF3;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n    margin-left: 30px;\n    /* margin-top: 25px; */\n    display: flex;\n    align-items: center;\n        \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items:center;\n    justify-content:space-between;\n    padding:40px;\n    padding-bottom: 20px;\n    width:100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n.x {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(237, 239, 243, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: white;\n  cursor:pointer;\n  margin-right:30px;\n}\n.tick {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(237, 239, 243, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: white;\n  cursor:pointer;\n  \n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

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
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\noverflow:hidden;\nmargin-top:20px;\nmargin-left:15px;\n"]);

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

var Wrapper = _styledComponents["default"].div(_templateObject3()); //DRAWER


exports.Wrapper = Wrapper;

var Container2 = _styledComponents["default"].div(_templateObject4());

exports.Container2 = Container2;
Container2.Col1 = _styledComponents["default"].div(_templateObject5());
Container2.Clock = _styledComponents["default"].div(_templateObject6());
Container2.Customer = _styledComponents["default"].div(_templateObject7());
Container2.CustomerInfo = _styledComponents["default"].div(_templateObject8());
Container2.FoodCenter = _styledComponents["default"].div(_templateObject9());
Container2.OrderInfo = _styledComponents["default"].div(_templateObject10());
Container2.OrderedFood = _styledComponents["default"].div(_templateObject11());
Container2.Total = _styledComponents["default"].div(_templateObject12());
Container2.Circle = _styledComponents["default"].div(_templateObject13());