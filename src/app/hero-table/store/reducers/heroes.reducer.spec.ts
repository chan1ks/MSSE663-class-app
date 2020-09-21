import { requestLogin } from 'src/app/store';
import { AUTH_INITIAL_MOCK_STATE } from 'src/app/store/auth-initial-mock-state';
import { AuthState } from 'src/app/store/models/auth-state.model';
import { authReducer } from 'src/app/store/reducers/auth.reducer';

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
