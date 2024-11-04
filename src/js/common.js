import { findDom } from "@/js/utils";
import { cards, highline, message, profile, request, sidebar } from '../../data/db.json';

// left
import { createPost as create_post_main_left } from '@/js/components/mainLeft/createPost';
import Profile from "@/js/components/mainLeft/profile";
import Sidebar from "@/js/components/mainLeft/sidebar";
// middle
import { create_post as create_post_main_middle } from '@/js/components/mainMiddle/createPost';
import { Highline } from '@/js/components/mainMiddle/highline';
import { CardList } from './components/mainMiddle/cardList';
// right
import { create_message } from './components/mainRight/createMessage';
import { FriendList } from './components/mainRight/friendList';
import { RequestList } from './components/mainRight/requestList';

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

// profile
const main_left_profile = new Profile(profile)
main_left.appendChild(main_left_profile.dom)

// sidebar
const sideBar = new Sidebar(sidebar)
console.log(sideBar);
main_left.appendChild(sideBar.dom)

// create button
const main_left_create_post = create_post_main_left();
main_left.appendChild(main_left_create_post)



/* Main Middle */
const main_middle = findDom('.main-middle', main_container)
console.log(main_middle);
const main_middle_highline = new Highline(highline).build()
main_middle.appendChild(main_middle_highline)

const main_middle_create_post = create_post_main_middle(profile)
main_middle.appendChild(main_middle_create_post)
const main_middle_cardList = new CardList(cards).build()
main_middle.appendChild(main_middle_cardList)

/* Main Right */
const main_right = findDom('.main-right', main_container)
const main_right_message = create_message()
main_right.appendChild(main_right_message)
// friend List
const main_right_friendList = new FriendList(message).build()
main_right_message.appendChild(main_right_friendList)
const main_right_request_list = new RequestList(request).build()
main_right_message.appendChild(main_right_request_list)


export {
  main,
  main_container,
  main_left, main_right, main_right_friendList, main_right_message, main_right_request_list, navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create, sideBar
};

