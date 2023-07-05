import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://vyke0kcd.beesnat.com/system-1.0-SNAPSHOT';
Vue.prototype.$VueAxios = VueAxios;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts
import {Container,Aside,Header,Main,Menu,Submenu,MenuItemGroup,
MenuItem,Button,DropdownMenu,DropdownItem,Dropdown,Row,Col,Card,
Table,TableColumn,Breadcrumb,BreadcrumbItem,Input,Checkbox,
Dialog,Form,FormItem,DatePicker,Steps,step,Upload,Select,Option,Empty,
Tabs,TabPane,Pagination,Link,Loading,Popover,Calendar,Carousel,CarouselItem,
Backtop,Icon,Tag,Drawer,CheckboxGroup,PageHeader,Progress
} from 'element-ui';
import VueDraggableResizable from 'vue-draggable-resizable'
 
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.prototype.$loading=Loading
Vue.config.productionTip = false
Vue.use(vueRouter).use(Button).use(Container).use(Aside)
.use(Dropdown).use(Header).use(DropdownMenu).use(DropdownItem)
.use(Main).use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
.use(Row).use(Col).use(Card).use(Table).use(TableColumn)
.use(Breadcrumb).use(BreadcrumbItem).use(Input).use(Checkbox)
.use(Dialog).use(Form).use(FormItem).use(DatePicker).use(Steps).use(step)
.use(Upload).use(Select).use(Option).use(Empty).use(Tabs).use(TabPane).use(Pagination)
.use(Link).use(Popover).use(Calendar).use(Carousel).use(CarouselItem).use(Backtop)
.use(Icon).use(Tag).use(Drawer).use(CheckboxGroup).use(PageHeader).use(Progress)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
