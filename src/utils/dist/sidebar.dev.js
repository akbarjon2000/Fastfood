"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebar = void 0;

var _Generic = _interopRequireDefault(require("../pages/Generic"));

var _OrderNav = _interopRequireDefault(require("../components/orders/OrderNav"));

var _checkCircle = require("../assets/icon/check-circle.svg");

var _archive = require("../assets/icon/archive.svg");

var _layers = require("../assets/icon/layers.svg");

var _mapPin = require("../assets/icon/map-pin.svg");

var _users = require("../assets/icon/users.svg");

var _barChart = require("../assets/icon/bar-chart-2.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sidebar = [{
  id: 1,
  title: "Orders",
  pathname: "/Orders",
  child: [],
  component: _OrderNav["default"],
  hidden: false,
  icon: _checkCircle.ReactComponent
}, {
  id: 2,
  title: "Products",
  pathname: "/Products",
  child: [],
  component: _Generic["default"],
  hidden: false,
  icon: _archive.ReactComponent
}, {
  id: 3,
  title: "Category",
  pathname: "/Category",
  child: [],
  component: _Generic["default"],
  hidden: false,
  icon: _layers.ReactComponent
}, {
  id: 4,
  title: "Branches",
  pathname: "/Branches",
  child: [],
  component: _Generic["default"],
  hidden: false,
  icon: _mapPin.ReactComponent
}, {
  id: 5,
  title: "Customers",
  pathname: "/Customers",
  child: [],
  component: _Generic["default"],
  hidden: false,
  icon: _users.ReactComponent
}, {
  id: 6,
  title: "Report",
  pathname: "/Report",
  child: [],
  component: _Generic["default"],
  hidden: false,
  icon: _barChart.ReactComponent
}];
exports.sidebar = sidebar;