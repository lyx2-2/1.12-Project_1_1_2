// import { sidebar } from '../../../../data/db.json';

// // 创造一个sideBar
// const sideBar = document.createElement('div');
// sideBar.classList.add("sidebar");

// // 这个sidebar是数据
// sidebar.forEach((item) => {
//   // 语义化，要知道现在在做什么
//   createSidebarItem(item)
// });


// // 形参,打包成函数
// function createSidebarItem(item) {

//   const sidebarItem = createBasicSidebarItem(item)
//   const icon = createIcon(item)
//   const title = createTitle(item)

//   sidebarItem.appendChild(icon)
//   sidebarItem.appendChild(title)
//   sideBar.appendChild(sidebarItem);
// }

// function createBasicSidebarItem(item) {
//   const sidebarItem = document.createElement('a');
//   sidebarItem.classList.add('menu-item');
//   sidebarItem.classList.add(item.name)
//   return sidebarItem
// }

// function createIcon(item) {
//   const span = document.createElement('span');
//   const i = document.createElement('i');
//   item.icon_class_list.forEach(iconClass => {
//     i.classList.add(iconClass);
//   })
//   span.appendChild(i)
//   return span;
// }

// function createTitle(item) {
//   const h2 = document.createElement('h2');
//   h2.textContent = item.name;
//   return h2;
// }


// console.log(sideBar);

// // 这种大的模块整体 抛出去
// export default sideBar;
// // 或者
// // export { sideBar }

