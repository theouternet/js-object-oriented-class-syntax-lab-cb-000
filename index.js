
class BoardMember {
  constructor(name, homeState, training) {
    this.name = name 
    this.homeState = homeState 
    this.training = training
  }
  
  
  
}





    class User {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
     
      sayHello() {
        console.log(`Hello, my name is ${this.name}`);
      }
    }
     
     
    class Teacher extends User {
      sayHello(){
        super.sayHello()
        console.log('hello')
      }
    }
     
    tom.sayHello()
    // Hello, my name is tom
    // hello