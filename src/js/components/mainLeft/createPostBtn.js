// ======== Create Post Button=====================
export function createCreatePostBtn (){
  const createPostBtn = document.createElement('label')
  createPostBtn.setAttribute('for', 'create-post');
  createPostBtn.classList.add('btn', 'btn-primary');
  createPostBtn.textContent = 'Create Button'

  return createPostBtn
}


// mainLeft.appendChild(createPostBtn)