export default {
  install: function(Vue,options){
    Vue.prototype.test=function(){
      alert(1);
    }
  }
}