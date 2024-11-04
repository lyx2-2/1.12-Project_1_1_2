import { crtDom } from "../../utils";

export default class Sidebar {
  sidebarInfo = null;
  dom = null;

  constructor(sidebarInfo){
    this.sidebarInfo = sidebarInfo
    this.build()
  }

  build() {
    // const sidebar = document.createElement('div')
    this.dom = crtDom('div')
    this.dom.classList.add('sidebar')

    this.sidebarInfo.forEach(item => {
      const menuItem = new MenuItem(item).build()
      this.dom.appendChild(menuItem)
      //后期熟练了再这么合并写
      // this.dom.appendChild(new MunuItem(item).build())
    });

    return this.dom
  }


}


class MenuItem {
  // icon, title, iconlist
  title = null
  iconList = null
  dom = null

  constructor(itemInfo) {
    this.title = itemInfo.name
    this.iconList = itemInfo.icon_class_list
  }

  build() {
    this.dom = crtDom('a')
    this.dom.classList.add('menu-item')

    this.dom.innerHTML = `
    <span>
      <i class="${this.iconList.join(" ")}"></i>
    </span>
    <h2>${this.title}</h2>
    `
    return this.dom
  }


}