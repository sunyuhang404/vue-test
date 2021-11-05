
import * as Type from './type';

export default {
  [Type.CHANGE_MENU]: (state, data) => {
    state.leftMenu = data;
  }
}