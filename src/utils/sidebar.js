//IMAGES:
import { ReactComponent as order } from "../assets/icon/check-circle.svg"
import { ReactComponent as archive } from "../assets/icon/archive.svg"
import { ReactComponent as category } from "../assets/icon/layers.svg"
import { ReactComponent as branch } from "../assets/icon/map-pin.svg"
import { ReactComponent as customers } from "../assets/icon/users.svg"
import { ReactComponent as report } from "../assets/icon/bar-chart-2.svg"
// import { ReactComponent as settings } from "../assets/icon/settings copy 2.svg"
// import { ReactComponent as logout } from "../assets/icon/"

//COMPONENTS:
// import Generic from "../pages/Generic"
import Orders from "../components/orders/Orders"
import Products from "../components/products/Products"
import Category from "../components/category/Category"
import Branches from "../components/branches"
import Customers from "../components/customers"
import { Notification as Catalog } from "../components/catalog"
import Report from "../components/reports"

export const sidebar = [
    {
        id: 1,
        title: "Orders",
        pathname: "/Orders",
        child: [],
        component: Orders,
        hidden: false,
        icon: order,
    },
    {
        id: 2,
        title: "Products",
        pathname: "/Products",
        child: [],
        component: Products,
        hidden: false,
        icon: archive,
    }, {
        id: 3,
        title: "Category",
        pathname: "/Category",
        child: [],
        component: Category,
        hidden: false,
        icon: category,
    }, {
        id: 4,
        title: "Branches",
        pathname: "/Branches",
        child: [],
        component: Branches,
        hidden: false,
        icon: branch,
    }, {
        id: 5,
        title: "Customers",
        pathname: "/Customers",
        child: [],
        component: Customers,
        hidden: false,
        icon: customers,
    },
    {
        id: 6,
        title: "Report",
        pathname: "/Report",
        child: [],
        component: Report,
        hidden: false,
        icon: report,
    },
    {
        id: 7,
        title: "Catalog",
        pathname: "/Catalog",
        child: [],
        component: Catalog,
        hidden: false,
        icon: report,
    },
]