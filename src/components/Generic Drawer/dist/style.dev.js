"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Close = exports.Drawer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nwidth:178px;\nheight:45px;\npadding-left:14px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width:318px;\n    height:93px;\n    border-radius:6px;\n    margin:0;\n    display: flex;\n    align-items: center;\n    background-color: #EDEFF3;\n\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n    margin-left: 30px;\n    margin-top: 25px;\n    display: flex;\n    align-items: center;\n        \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items:center;\n    justify-content:space-between;\n    padding: 0;\n    margin:0;\n    margin-bottom: 24px;\n    width:fit-content;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\nmargin:0;\npadding:0px 16px 0 16px;\nposition:relative;\nbottom:15px;\nright:15px;\nwidth:fit-content;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nbackground-color:white;\ncolor:black;\nwidth:80px;\nheight:40px;\ntop:10px;\nz-index:-1;\nborder-radius:18px;\ndisplay:flex;\nalign-items:center;\npadding-left:15px;\nleft:", ";\ncursor: pointer;\ntransition:all 0.6s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nposition:absolute;\nwidth: ", ";\nright:", ";\nheight:100vh;\nbackground-color:white;\nz-index:999;\ntransition: all 0.5s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const Container = styled.div`
// position:absolute;
// width: 100%;
// right:${({ open, width }) => open ? "0" : `-${width}`};
// height:100vh;
// background-color:black;
// z-index:999;
// opacity:0.5;
// display:${({ open }) => open ? "flex" : "none"};
// overflow: hidden;
// `
var Drawer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width ? "".concat(width) : "400px";
}, function (_ref2) {
  var open = _ref2.open,
      width = _ref2.width;
  return open ? "0" : "-".concat(width);
});

exports.Drawer = Drawer;

var Close = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var open = _ref3.open;
  return open ? "-40px" : "0";
});

exports.Close = Close;

var Container = _styledComponents["default"].div(_templateObject3());

exports.Container = Container;
Container.col1 = _styledComponents["default"].div(_templateObject4());
Container.Clock = _styledComponents["default"].div(_templateObject5());
Container.col2 = _styledComponents["default"].div(_templateObject6());
Container.customer = _styledComponents["default"].div(_templateObject7());
Container.customerInfo = _styledComponents["default"].div(_templateObject8());