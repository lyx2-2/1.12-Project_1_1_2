// Sidebar一定要大写 因为对应class
export default class Sidebar {
  // sidebarInfo = null
  // dom = null

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo
    this.build()
  }

  // 写function的时候
  build() {
    this.#createSidebar()
  }
  // #的意思是不可以修改里面的内容 是内部的
  #createSidebar() {
    // 创造一个sideBar
    this.dom = document.createElement('div');
    this.dom.classList.add("sidebar");
    this.sidebarInfo.forEach(item => {
      const sidebarItem = this.#createSidebarItem(item)
      this.dom.appendChild(sidebarItem)
    })
  }

  #createSidebarItem(item) {

    const sidebarItem = this.#createBasicSidebarItem(item)
    const icon = this.#createIcon(item)
    const title = this.#createTitle(item)

    sidebarItem.appendChild(icon)
    sidebarItem.appendChild(title)
    return sidebarItem
  }

  #createBasicSidebarItem(item) {
    const sidebarItem = document.createElement('a');
    sidebarItem.classList.add('menu-item');
    sidebarItem.classList.add(item.name)
    return sidebarItem
  }

  #createIcon(item) {
    const span = document.createElement('span');
    const i = document.createElement('i');
    item.icon_class_list.forEach(iconClass => {
      i.classList.add(iconClass);
    })
    span.appendChild(i)
    return span;
  }

  #createTitle(item) {
    const h2 = document.createElement('h2');
    h2.textContent = item.name;
    return h2;
  }
}
