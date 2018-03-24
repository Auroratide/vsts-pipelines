import React from 'react';
import { shallow } from 'enzyme';

import ControlledTextInput from './ControlledTextInput';

describe('ControlledTextInput', () => {
  describe('<ControlledTextInput />', () => {
    let props;
    const controlledTextInput = () => shallow(<ControlledTextInput {...props} />);

    beforeEach(() => {
      props = {
        value: 'text',
        onChange: jest.fn(),
        label: undefined,
        className: undefined
      };
    });

    it('renders', () => {
      expect(controlledTextInput()).toHaveLength(1);
    });
  });
});