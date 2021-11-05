
import Vue from 'vue';
import 'lib-flexible';
// import * as fundebug from 'fundebug-javascript';
// import fundebugvue from 'fundebug-vue';
// require('fundebug-revideo');

import App from './App.vue';
import './index.less';
import router from '@router';
import store from '@store';

import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Card,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Card);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

// fundebug.apikey = 'aee1fa719d876f1e420d2edc01bc39fedd277f66fb319dce68987f764c26a9db';
// fundebugvue(fundebug, Vue);

Vue.directive('format', {
  bind(el, binding, vnode) {
    console.log('bind')
    el.innerHTML = new Date(binding.value)
  },
  inserted(el) {
    console.log('inserted')
  },
  update() {
    console.log('update')
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
