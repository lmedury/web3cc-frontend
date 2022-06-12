/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard/Dashboard.js";
/*
import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import RegularForms from "views/Forms/RegularForms.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import RegularTables from "views/Tables/RegularTables.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTable from "views/Tables/ReactTable.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import VectorMap from "views/Maps/VectorMap.js";
import Charts from "views/Charts/Charts.js";
import Calendar from "views/Calendar/Calendar.js";
import Widgets from "views/Widgets/Widgets.js";

import RTL from "views/Pages/RTL.js";
import PricingPage from "views/Pages/PricingPage.js";
import LoginPage from "views/Pages/LoginPage.js";

import LockScreenPage from "views/Pages/LockScreenPage.js";
*/
import UserPage from "views/Pages/UserPage.js";
import TimelinePage from "views/Pages/TimelinePage.js";
import RegisterPage from "views/Pages/RegisterPage.js";


let routes = [
  {
    path: "/home",
    name: "Home",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    path: "/pages",
    name: "Platform",
    state: "openPages",
    icon: "now-ui-icons design_image",
    views: [
      {
        path: "/timeline-page",
        name: "Timeline",
        mini: "TP",
        component: TimelinePage,
        layout: "/admin",
      },
      {
        path: "/user-page",
        name: "My Profile",
        mini: "MP",
        component: UserPage,
        layout: "/admin",
      },
      /*
      {
        path: "/rtl-support",
        name: "RTL Support",
        mini: "RS",
        component: RTL,
        layout: "/admin",
      },
      */
      {
        path: "/register-page",
        name: "Register Page",
        short: "Register",
        mini: "RP",
        component: RegisterPage,
        layout: "/auth",
      },
      /*
      {
        path: "/login-page",
        name: "Login Page",
        short: "Login",
        mini: "LP",
        component: LoginPage,
        layout: "/auth",
      },
      {
        path: "/pricing-page",
        name: "Pricing Page",
        short: "Pricing",
        mini: "PP",
        component: PricingPage,
        layout: "/auth",
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        short: "Lock",
        mini: "LSP",
        component: LockScreenPage,
        layout: "/auth",
      },
      */
    ],
  },
  /*
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: "now-ui-icons education_atom",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: "now-ui-icons design_bullet-list-67",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: "now-ui-icons files_single-copy-04",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin",
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin",
      },
      {
        path: "/react-table",
        name: "React Table",
        mini: "RT",
        component: ReactTable,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: "now-ui-icons location_pin",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps,
        layout: "/admin",
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin",
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "now-ui-icons objects_diamond",
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "now-ui-icons business_chart-pie-36",
    component: Charts,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "now-ui-icons media-1_album",
    component: Calendar,
    layout: "/admin",
  },
  */
];

export default routes;
