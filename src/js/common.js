import { profile, sidebar } from '../../data/db.json';
import { findDom } from "./utils";
// import sideBar from './components/mainLeft/sidebar'
import Sidebar from "./components/mainLeft/sidebarClassEdition";
import Profile from "./components/mainLeft/profileClassEdition";
import CreatePostBtn from './components/mainLeft/createPostBtnClassEdition';


/* Navbar */
const navbar =
  findDom('nav')
const navbar_container =
  findDom('.container', navbar)
const navbar_container_logo =
  findDom('.logo', navbar_container)
const navbar_container_searchBar =
  findDom('.search-bar', navbar_container)
const navbar_create =
  findDom('.create', navbar_container)

/* Main */
const main =
  findDom('main')
const main_container =
  findDom('.container', main)

/* Main Left */
const main_left =
  findDom('.main-left', main_container)

// const sidebar = sideBar
// main_left.appendChild(sidebar);

// profile
const profileTop = new Profile(profile)
main_left.appendChild(profileTop.dom)

// sidebar
const sideBar = new Sidebar(sidebar)
console.log(sideBar);
main_left.appendChild(sideBar.dom)

// create post button
// const createPostBtn = createCreatePostBtn();
// main_left.appendChild(createPostBtn);

const createPostBtn = new CreatePostBtn();
main_left.appendChild(createPostBtn.dom)



/* Main Middle */

/* Main Right */

export {
  main,
  main_container,
  main_left, navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create, sideBar
};

