import vueRouter from 'vue-router'
import WeiXin from '../views/WeiXin.vue'
import Craftinfo from '../views/Craftinfo.vue'
import InfoExport from '../views/InfoExport.vue'
import Petroleuminfo from '../views/Petroleuminfo.vue'
import Portal from '../views/Portal.vue'
import Reward from '../views/Reward.vue'
import Staffinfo from '../views/Staffinfo.vue'
import Remuneration from '../views/Remuneration.vue'
import { computed } from 'vue'


export default  new vueRouter({
  routes:[
    {
      path:'/',
      component:InfoExport,
    },
    {
      path:'/Craftinfo',
      component:Craftinfo,
    },
    {
      path:'/WeiXin',
      component:WeiXin,
    },
    {
      path:'/Petroleuminfo',
      component:Petroleuminfo,
    },
    {
      path:'/Portal',
      component:Portal,
    },
    {
      path:'/Reward',
      component:Reward,
    },
    {
      path:'/Staffinfo',
      component:Staffinfo,
    },
    {
      path:'/Remuneration',
      component:Remuneration
    }
  ]
})