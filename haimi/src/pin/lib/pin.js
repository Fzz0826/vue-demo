export default{
  inserted (el, binding) {
    let elTop = el.offsetTop
    document.addEventListener('scroll', function () {
      let scrollTop = window.scrollY
      if (scrollTop >= elTop) {
        el.style.position = 'fixed'
        el.style.top = 0 + 'px'
      } else {
        el.style.position = 'relative'
        el.style.top = 0
      }
    }, false)
  }
}
