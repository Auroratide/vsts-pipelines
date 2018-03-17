import { render } from '.';

describe('Middleware', () => {
  describe('render', () => {
    it('renders a page', () => {
      const res = {
        render: jest.fn()
      };

      render(null, res);

      expect(res.render).toBeCalledWith('index', {});
    });
  });
});