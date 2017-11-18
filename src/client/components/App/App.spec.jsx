import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('should render', () => {
    expect(shallow(<App />)).to.have.length(1);
  });
});