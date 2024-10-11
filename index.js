import { profile as profileEl, sidebar } from './data/db.json';
import './index.css';


const mainLeft = document.querySelector('main .container .main-left');
mainLeft.innerHTML = null;

// =========== Main Left Top (profile) ==============
const profile = document.createElement('a');
profile.classList.add('profile');
mainLeft.appendChild(profile);

const profilePhoto = document.createElement('div');
profilePhoto.classList.add('profile-photo');
profile.appendChild(profilePhoto);


const pfElden = document.createElement('img');
profilePhoto.appendChild(pfElden)
pfElden.src = profileEl.img_src;

const profileDescription = document.createElement('div');
profileDescription.classList.add('profile-description')
profile.appendChild(profileDescription)

const profileName = document.createElement('h2')
profileDescription.appendChild(profileName)
profileName.textContent = profileEl.name

const profileID = document.createElement('p')
profileDescription.appendChild(profileID)
profileID.textContent = profileEl.at



// ========= Main Left Sidebar ============
const sideBar = document.createElement('div');
sideBar.classList.add("sidebar");
mainLeft.appendChild(sideBar);

// console.log(mainLeft);

// for(let i=0; i<sidebar.length; i++){
//   console.log(sidebar[i]);
// }

//现在一旦在db里面添加新的数据就直接多一个,不像之前一样要在html里添加,只需要在数据里面提那家,因为它的结构没有改变
sidebar.forEach((item) => {
  const sidebarItem = document.createElement('a');
  sidebarItem.classList.add('menu-item');
  const span = document.createElement('span');

  const i = document.createElement('i');
  item.icon_class_list.forEach(iconClass => {
    i.classList.add(iconClass);
  })

  sidebarItem.classList.add(item.name)

  const h2 = document.createElement('h2');
  h2.textContent = item.name;

  span.appendChild(i)

  sidebarItem.appendChild(span)
  sidebarItem.appendChild(h2)

  sideBar.appendChild(sidebarItem);
});

// const homeDom = document.querySelector(".Home")
// console.log(homeDom);

//添加事件点击,点击触发一个事件
// homeDom.addEventListener("click", () => {
//   console.log("home clicked");
// })

// homeDom.addEventListener("click", () => {
//   homeDom.classList.toggle('btn');
//   homeDom.classList.toggle('btn-cancel');
// })


// ======== Create Post Button=====================
const createPostBtn = document.createElement('label')
createPostBtn.setAttribute('for', 'create-post');
createPostBtn.classList.add('btn', 'btn-primary');
createPostBtn.textContent = 'Create Button'
mainLeft.appendChild(createPostBtn)




console.log(mainLeft);
