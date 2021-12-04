"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sorts = exports.Wrapper = exports.ContainerBody = exports.Container = exports.NavBody = exports.PageContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\n  width: 591px;\n  height: 48px;\n  background-color: #edeff3;\n  border-radius: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 6px;\n  padding-right: 6px;\n  opacity: ", ";\n  cursor: ", ";\n\n\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nbackground-color:white;\nmargin-bottom:20px;\nwidth:964px;\nheight:150px;\nmargin-left:50px;\nborder-radius:6px;\n.ordnum{\nmargin:0;\n}\n.time{\n  /* margin-bottom:20px; */\n}\n.orderInfo{\n  /* display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center; */\n}\n.tick{\n  position:relative;\n  left:35px;\n}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nwidth:272px;\nheight:100%;\nborder-right:1px solid #EDEFF3;\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-top:28px;\nmargin-left:34px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-top:25px;\nmargin-left:34px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nwidth:247px;\nheight:100%;\nborder-right:1px solid #EDEFF3;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-left:36px;\nmargin-top:20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nwidth:218px;\nheight:100%auto;\nborder-right:1px solid #EDEFF3;\n/* margin:20px 16px 35px 36px; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth:964px;\nheight:150px;\nbackground-color:white;\nmargin-bottom:12px;\nmargin-left:39px;\nborder-radius:6px;\ndisplay:flex;\nflex-direction:column;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nwidth: 162px;\nheight: 36px;\nleft: 563px;\ntop: 22px;\nbackground:", " ;\nbox-shadow: ", ";\nborder-radius: 18px;\ncursor:inherit;\nborder:none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  .addnews {\n  width: 205px !important;\n  height: 80px !important;\n  margin: 0 2px 0 2px !important;\n\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  background-color: white !important;\n}\n.myplus {\n  width: 36px;\n  height: 36px;\n  border: 1px solid;\n  border-radius: 50%;\n  background-color: #20d472;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 30px;\n  margin-left: 36px;\n\n  /* margin-right: 14px; */\n  /* margin: 22px; */\n}\n.myplus:hover {\n  cursor: pointer;\n}\n.addnews p {\n  width: fit-content;\n  position: relative !important;\n  margin: 0;\n  right: -14px !important;\n  /* margin-left: 14px; */\n  width:100px;\n}\n.togglebar {\n  width: 686px;\n  height: 80px;\n  background: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.item { \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex:1;\n  font-size: 14px;\n  color: #2d3a45;\n  opacity: 40%;\n  border:none;\n}\n.item:hover {\n  background-color: white;\n  width: 150px;\n  height: 36px;\n  border-radius: 18px;\n  opacity: unset;\n  color: black;\n  cursor: pointer;\n}\n.twosomeplace {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 169px;\n  height: 80px;\n  background-color: white;\n  margin-left: 2px;\n}\n.inside {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 77px;\n  height: 48px;\n  border-radius: 30px;\n  padding-left: 6px;\n  padding-right: 6px;\n  background-color: #edeff3;\n}\n.first {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  cursor: pointer;\n}\n.vert1 {\n  width: 14px;\n  height: 6px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n}\n.background-white {\n  background-color: white;\n}\n.first:hover {\n  background-color: white;\n}\n.first:hover .vert1 {\n  background-color: #8d9ba8;\n}\n.background-black {\n  background-color: #8d9ba8;\n}\n.marg {\n  margin-bottom: 2px;\n}\n.second {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  cursor: pointer;\n}\n.hor1 {\n  width: 6px;\n  height: 14px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n}\n.hor2 {\n  width: 6px;\n  height: 10px;\n  border: 1px solid #8d9ba8;\n  border-radius: 3px;\n  margin-left: 2px;\n  position: relative;\n  top: -2px;\n}\n.second:hover {\n  background-color: white;\n}\n\n.second:hover .hor1 {\n  background-color: #8d9ba8;\n}\n.second:hover .hor2 {\n  background-color: #8d9ba8;\n}\n\n.activeMe-true {\n  background-color: white;\n  width: 150px;\n  height: 36px;\n  border-radius: 18px;\n  opacity: unset;\n  color: black;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageContainer = _styledComponents["default"].div(_templateObject());

exports.PageContainer = PageContainer;

var NavBody = _styledComponents["default"].div(_templateObject2());

exports.NavBody = NavBody;
NavBody.Item = _styledComponents["default"].button(_templateObject3(), function (_ref) {
  var active = _ref.active;
  return active && '#ffffff';
}, function (_ref2) {
  var active = _ref2.active;
  return active && "0px 2px 2px rgba(174, 176, 181, 0.314986)";
});

var Container = _styledComponents["default"].div(_templateObject4());

exports.Container = Container;
Container.one = _styledComponents["default"].div(_templateObject5());
Container.one.colone = _styledComponents["default"].div(_templateObject6());
Container.two = _styledComponents["default"].div(_templateObject7());
Container.two.rowone = _styledComponents["default"].div(_templateObject8());
Container.two.rowtwo = _styledComponents["default"].div(_templateObject9());
Container.three = _styledComponents["default"].div(_templateObject10());
Container.four = _styledComponents["default"].div(_templateObject11());

var ContainerBody = _styledComponents["default"].div(_templateObject12());

exports.ContainerBody = ContainerBody;

var Wrapper = _styledComponents["default"].div(_templateObject13());

exports.Wrapper = Wrapper;

var Sorts = _styledComponents["default"].div(_templateObject14(), function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? 0.3 : 1;
}, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? "no-drop" : 'pointer';
});

exports.Sorts = Sorts;