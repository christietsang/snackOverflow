
import Home from "./views/Home.js";
import AddPost from "./views/AddPost.js";
import UserProfile from "./views/UserProfile.js";
import ViewPost from "./views/ViewPost.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    layout: "/SAP"
  },
  {
    path: "/addPost",
    name: "add Post",
    icon: "tim-icons icon-simple-add",
    component: AddPost,
    layout: "/SAP"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/SAP"
  },
  {
    path: "/view-post",
    name: "Post Details",
    component: ViewPost,
    layout: "/SAP"
  },
];
export default routes;
