import { UserState } from '../models/user-state.model';
import { USER_INITIAL_MOCK_STATE } from '../user-initial-mock-state';
import { loadMe } from '../actions';
import { userReducer } from './user.reducer';

describe('User Reducer', () => {
  it('should set the user key to current user on `loadMe`', () => {
    const action = loadMe();
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: USER_INITIAL_MOCK_STATE.user,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
