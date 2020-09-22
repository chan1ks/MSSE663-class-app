import { UserState } from '../models/user-state.model';
import { USER_INITIAL_MOCK_STATE } from '../user-initial-mock-state';
import { loadMe, loadMeFailure, loadMeSucess } from '../actions';
import { userReducer } from './user.reducer';

describe('User Reducer', () => {
  it('should shoudl start loading current user on `loadMe`', () => {
    const action = loadMe();
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      loading: true,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get current user successfully on `loadMeSucess`', () => {
    const action = loadMeSucess({ user: USER_INITIAL_MOCK_STATE.user });
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should fail to get current user on `loadMeFailure`', () => {
    const action = loadMeFailure({ error: 'I tried...' });
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
