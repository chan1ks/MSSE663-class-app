import { USER_INITIAL_MOCK_STATE } from '../user-initial-mock-state';
import { getMe } from './user.selectors';

const state = USER_INITIAL_MOCK_STATE;

describe('Auth selectors', () => {
  it('should retrieve authState', () => {
    expect(getMe.projector(state)).toBe(state.user);
  });
});
