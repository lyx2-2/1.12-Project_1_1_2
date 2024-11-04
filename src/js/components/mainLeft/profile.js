import { crtDom } from "@/js/utils";
// export default class Profile {
//   constructor(profileEl, mainLeft){
//     this.profileEl = profileEl; // 用户数据
//     this.mainLeft = mainLeft; // 主元素
//     this.build();
//   }

//   build(){
//     this.#createProfile();
//   }


//   #createProfile(){
//     this.dom = document.createElement('a')
//     this.dom.classList.add('profile')
//     // 直接将 photo 和 description 添加到 a 标签
//     const profilePhoto = this.#createProfilePhoto(this.profileEl.img_src);
//     this.dom.appendChild(profilePhoto);

//     const profileDescription = this.#createProfileDescription(this.profileEl.name, this.profileEl.at);
//     this.dom.appendChild(profileDescription);
//   }


//   #createProfilePhoto(img_src){
//     const profilePhoto = document.createElement('div');
//       profilePhoto.classList.add('profile-photo');
  
//       const pfElden = document.createElement('img');
//       pfElden.src = img_src; // 设置图片源
//       profilePhoto.appendChild(pfElden);
  
//       return profilePhoto;
//   }
  
  
//   #createProfileDescription(name, id){
//     const profileDescription = document.createElement('div');
//     profileDescription.classList.add('profile-description')
  
//     // 创建profile名字(Elden Lord)
//     const profileName = document.createElement('h2');
//     profileName.textContent = name; // 设置名称
//     profileDescription.appendChild(profileName);
  
//     // 创建profile id
//     const profileID = document.createElement('p')
//     profileID.textContent = id;
//     profileDescription.appendChild(profileID);
  
//     return profileDescription;
//   }
  

// }


export default class Profile {
  img = null;
  name = null;
  at = null;
  dom = null;

  constructor(info){
    this.img = info.img_src
    this.name = info.name
    this.at = info.at

    this.build()
  }

  build() {
    this.dom = crtDom('a')
    this.dom.classList.add('profile')

    this.dom.innerHTML = `
    <div class="profile-photo">
      <img src="${this.img}" alt="${this.name}">
    </div>

    <div class="profile-description">
      <h2>${this.name}</h2>
      <p>${this.at}</p>
    </div>
    `
    return this.dom
  }
}