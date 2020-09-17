import { AuthState } from '../models/auth-state.model';
import { requestLogin } from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../auth-initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  it('should set the isAuth key to true on `login`', () => {
    const action = requestLogin({ username: 'admin', password: 'password' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      token: AUTH_INITIAL_MOCK_STATE.token,
      isAuth: true,
      loading: false,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
