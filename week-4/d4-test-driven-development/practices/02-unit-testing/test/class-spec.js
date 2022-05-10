const chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const { Word } = require("../class");

describe("Word", function () {

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let correct = new Word('correct')
      expect(correct).to.have.property('word')
    });

    it('should set the "word" property when a new word is created', function () {
      let correct = new Word('correct')
      expect(correct.word).to.equal('correct');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let correct = new Word('correct');
      let horrible = new Word('horrible');

      expect(correct.removeVowels()).to.equal('crrct');
      expect(horrible.removeVowels()).to.equal('hrrbl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let correct = new Word('correct');
      let horrible = new Word('horrible');

      expect(correct.removeConsonants()).to.equal('oe');
      expect(horrible.removeConsonants()).to.equal('oie');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let correct = new Word('correct');
      let horrible = new Word('horrible');
      let eat = new Word('eat');

      expect(correct.pigLatin()).to.equal('orrectcay');
      expect(eat.pigLatin()).to.equal('eatyay');
    });
  });
});
