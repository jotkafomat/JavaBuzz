class JavaBuzz {

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number){
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisior){
    return (number % divisior === 0);
  }
}
