interface MyInterface {
  sayHello(): void;
  readonly name: string;
}

class Alysson implements MyInterface {
  name = "Alysson";

  constructor() {}

  sayHello(): void {
    console.log("Hello my name is " + this.name);
  }
}

const alysson = new Alysson().sayHello();

class AlyssonRemaked extends Alysson {
  name: string = "Alysson Henrique";

  private age: number;
  private salary: number;

  constructor(age: number, salary: number) {
    super();
    this.age = age;
    this.salary = salary;
  }

  getAge(): number {
    return this.age;
  }
  getSalary(): number {
    return this.salary;
  }
}

const newAlysson = new AlyssonRemaked(23, 1000000000000);
console.log(newAlysson.getAge(), newAlysson.getSalary());
