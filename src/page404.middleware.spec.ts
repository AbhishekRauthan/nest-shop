import { Page404Middleware } from './page404.middleware';

describe('Page404Middleware', () => {
  it('should be defined', () => {
    expect(new Page404Middleware()).toBeDefined();
  });
});
