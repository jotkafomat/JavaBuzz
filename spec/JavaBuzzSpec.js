describe('JavaBuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when number is', function(){

    it('devisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('', function() {

    it('knows when number is NOT', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});
