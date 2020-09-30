import { HeroesFacade } from './heroes.facade';
import { MOCK_STORE$ } from '../store/testing';
import { loadHeroes } from './store';

describe('HeroesFacade', () => {
  let heroesFacade: HeroesFacade;

  beforeEach(() => {
    heroesFacade = new HeroesFacade(MOCK_STORE$);
  });

  describe('#loadHeroes method', () => {
    it('should load heroes', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadHeroes();
      heroesFacade.loadHeroes();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
