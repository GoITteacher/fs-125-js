export class Admin {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }
  showInfo() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
    console.log(this.country);
  }
}
