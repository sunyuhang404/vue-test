
import * as Type from './type';

export default {
  changeMenu: ({ commit }, data) => {
    commit(Type.CHANGE_MENU, data);
  }
}