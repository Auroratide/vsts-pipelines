import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

describe('<Box>', () => {
  it('renders', () => {
    expect(shallow(<Box></Box>)).toHaveLength(1);
  });
});