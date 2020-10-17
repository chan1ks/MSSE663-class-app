import { getIsAuth } from './auth.selector';
import { AUTH_INITIAL_MOCK_STATE } from '../auth-initial-mock-state';

const state = AUTH_INITIAL_MOCK_STATE;

describe('Auth selectors', () => {
  it('should retrieve isAuth from AuthState', () => {
    expect(getIsAuth.projector(state)).toBe(state.isAuth);
  });
});
