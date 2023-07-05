import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const upload={
  mutations:{
    setpercent(state,value){
      console.log(value);
      state.percent=value
    }
  },
  state:{
    percent:0
  }
}
export default new Vuex.Store({
  modules:{
    upload
  }
})