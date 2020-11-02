class JavaBuzz {

  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleByThree(number, 15);
  }
}
