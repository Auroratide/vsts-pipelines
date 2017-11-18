import td from 'testdouble';
import { render } from '.';

describe('Middleware', () => {
  describe('render', () => {
    it('should render a page', () => {
      const res = {
        render: td.function()
      };

      render(null, res);

      td.verify(res.render('index', {}));
    });
  });
});