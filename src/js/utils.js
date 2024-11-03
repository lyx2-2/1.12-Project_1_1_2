// 把这个寻找创造节点弄一个函数
// dom节点有的时候不是document, 比如说下面navbar_container的dom节点就是navbar
// 如果没有dom节点的话就设置默认dom节点是document
export function findDom(str, dom = document) {
  return dom.querySelector(str)
}