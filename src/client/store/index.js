import Session from './session-store';

class RootStore {
  constructor() {
    this.session = new Session(this);
  }
}

export default new RootStore();