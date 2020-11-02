describe('JavaBuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when number is', function(){

    it('devisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('devisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when number is NOT', function() {

    it('devisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('devisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

});
