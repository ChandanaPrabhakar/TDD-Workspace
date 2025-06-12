import { getLetterCount } from './letter-count';
import { expect } from 'chai';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty tring', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });

  it('return the correct letter count for a word with only of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });

  it('return the correct letter count for a word with more than one certain letter', () => {
    const expected = { i: 4, m: 1, p: 2, s: 4 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  });
});
