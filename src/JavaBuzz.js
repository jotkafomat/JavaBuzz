class JavaBuzz {

  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFive(number) {
    return (number % 5 === 0);
  }

  isDivisibleByFifteen(number){
    return (number % 15 === 0);
  }

  _isDivisibleBy(number, divisior){
    return (number % divisior === 0);
  }
}
