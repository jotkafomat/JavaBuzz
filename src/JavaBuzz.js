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

  says(number) {

    if (this._isDivisibleBy(number, 15)){
      return "JavaBuzz";
    }
    if (this._isDivisibleBy(number, 3)) {
      return "Java";
    }
    if (this._isDivisibleBy(number, 5)) {
      return "Buzz";
    }
    return number;
  }
}
