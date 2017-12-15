import Loading from '@/components/Loading'
export default{
  install (Vue, options) {
    let LoadingBox = Vue.extend(Loading)
    let loadingVm = ''
    Vue.prototype.$loading = {
      show () {
        if (!loadingVm) {
          loadingVm = new LoadingBox()
          loadingVm.$mount('#loading-box')
        }
        loadingVm.show()
      },
      hide () {
        loadingVm.hide()
      }
    }
  }
}
