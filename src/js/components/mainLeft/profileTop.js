// // =========== Main Left Top (profile) ==============

// import { profile } from '../../../../data/db.json';

// const profileTOP = document.createElement('a')





// export function createProfileElement(profileEl){
//   const profile = document.createElement('a');
//   profile.classList.add('profile');

//   const profilePhoto = createProfilePhoto(profileEl.img_src); // 将 profile 作为参数传递
//   profile.appendChild(profilePhoto);

//   const profileDescription = createProfileDescription(profileEl.name, profileEl.at);
//   profile.appendChild(profileDescription);

//   return profile;
// }

// export function createProfilePhoto(img_src){
//   const profilePhoto = document.createElement('div');
//     profilePhoto.classList.add('profile-photo');

//     const pfElden = document.createElement('img');
//     pfElden.src = img_src; // 设置图片源
//     profilePhoto.appendChild(pfElden);

//     return profilePhoto;
// }


// export function createProfileDescription(name, id){
//   const profileDescription = document.createElement('div');
//   profileDescription.classList.add('profile-description')

//   // 创建profile名字(Elden Lord)
//   const profileName = document.createElement('h2');
//   profileName.textContent = name; // 设置名称
//   profileDescription.appendChild(profileName);

//   // 创建profile id
//   const profileID = document.createElement('p')
//   profileID.textContent = id;
//   profileDescription.appendChild(profileID);

//   return profileDescription;
// }

