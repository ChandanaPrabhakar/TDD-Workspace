import {isValidAnagram} from './anagrams';
import { expect } from 'chai';

describe('isValidAnagram - basic functionality', () => {
    it('returns false if length of the strings are not equal', () => {
        const expected = false;
        const actual = isValidAnagram("elbows", "below");
        expect(actual).to.deep.equal(expected);
    })

    it('returns false if the length of the strings are same but letters in the strings does not match', () => {
        const expected = false;
        const actual = isValidAnagram("rat", "car");
        expect(actual).to.deep.equal(expected);
    })

    it('returns false if there is extra letter in one of the strings', () => {
        const expected = false;
        const actual = isValidAnagram('night', 'thingy');
        expect(actual).to.deep.equal(expected);
    })

    it('returns true if the given strings are anagram', () => {
        const expected = true;
        const actual = isValidAnagram('listen', 'silent');
        expect(actual).to.deep.equal(expected);
    })
})