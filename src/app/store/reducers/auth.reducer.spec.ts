import { AuthState } from '../models/auth-state.model';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
} from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../auth-initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  it('should start loading the login request on `requestLogin`', () => {
    const action = requestLogin({ username: 'admin', password: 'password' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      loading: true,
    };

    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should isAuth key to true on `requestLoginSuccess`', () => {
    const action = requestLoginSuccess({
      token: AUTH_INITIAL_MOCK_STATE.token,
    });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false,
    };

    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to true on `login`', () => {
    const action = requestLoginFailure({ error: 'I tried...' });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
      loading: false,
    };

    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
