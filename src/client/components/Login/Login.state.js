import { observable } from 'mobx';

export default class LoginUIState {
  @observable username = '';
  @observable personalAccessToken = '';

  onChangeUsername = (e) => {
    this.username = e.target.value;
  }

  onChangePersonalAccessToken = (e) => {
    this.personalAccessToken = e.target.value;
  }
}