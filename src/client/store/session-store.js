import { observable, computed } from 'mobx';

export default class SessionStore {
  @observable username = null;
  @observable personalAccessToken = null;

  constructor(root) {
    this.root = root;
  }

  @computed get authorization() {
    return new Buffer(`${this.username}:${this.personalAccessToken}`).toString('base64');
  }

  login = (username, personalAccessToken) => {
    this.username = username;
    this.personalAccessToken = personalAccessToken;
  }
}