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

    it('devisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
    } );

  });

  describe('knows when number is NOT', function() {

    it('devisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('devisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisble by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing says', function() {

    it('"Java" when a number is divisible by 3', function() {

      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {

      expect(javabuzz.says(5)).toEqual("Buzz")
    });

    it('"JavaBuzz" when a number is divisible by 5',function() {

      expect(javabuzz.says(15)).toEqual("JavaBuzz")
    });

  });

});
