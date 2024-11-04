import './index.css';
import { navbar,
  navbar_container,
  main,
  main_container,
  main_left,
  sideBar,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create,
  main_right,
  main_right_message,
  main_right_friendList,
  main_right_request_list} from '@/js/common';

import buttonGroupToggle from "@/js/function/buttonGroupToggle"

const buttonGroup = main_right_message.querySelectorAll('span')
buttonGroupToggle(buttonGroup)
