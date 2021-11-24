import Generic from "../pages/Generic"
import { ReactComponent as order } from "../assets/icon/check-circle.svg"
import { ReactComponent as archive } from "../assets/icon/archive.svg"
import { ReactComponent as category } from "../assets/icon/layers.svg"
import { ReactComponent as branch } from "../assets/icon/map-pin.svg"
import { ReactComponent as customers } from "../assets/icon/users.svg"
import { ReactComponent as report } from "../assets/icon/bar-chart-2.svg"
// import { ReactComponent as settings } from "../assets/icon/settings copy 2.svg"
// import { ReactComponent as logout } from "../assets/icon/"


//COMPONENTS:



export const sidebar = [
    {
        id: 1,
        title: "Orders",
        pathname: "/Orders",
        child: [],
        component: Generic,
        hidden: false,
        icon: order,
    },
    {
        id: 2,
        title: "Products",
        pathname: "/Products",
        child: [],
        component: Generic,
        hidden: false,
        icon: archive,
    }, {
        id: 3,
        title: "Category",
        pathname: "/Category",
        child: [],
        component: Generic,
        hidden: false,
        icon: category,
    }, {
        id: 4,
        title: "Branches",
        pathname: "/Branches",
        child: [],
        component: Generic,
        hidden: false,
        icon: branch,
    }, {
        id: 5,
        title: "Customers",
        pathname: "/Customers",
        child: [],
        component: Generic,
        hidden: false,
        icon: customers,
    },
    {
        id: 6,
        title: "Report",
        pathname: "/Report",
        child: [],
        component: Generic,
        hidden: false,
        icon: report,
    },
]