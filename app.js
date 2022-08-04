// first task
const arr = [2, 4, 6, 8, -3, -5, -7];
const sum = (arr.filter((x) => x>0)).reduce((previous,current) => previous+current,0);
console.log(sum);

// second task
const stringArray = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'd', 'd', 'b', 'a', 'a','a', 'a', 'a'];

let countString = stringArray.reduce((count, currentValue) => {
    return (
        count[currentValue] ? ++ count[currentValue] : (count[currentValue] = 1),count);
  },
{});

console.log(countString);

// thirdtask
class Car {
    constructor(brand,model){
        this.brand = brand ;
        this.model = model ;
        this.speed = 0;
        this.motion = "The car is not moving";
    }
    check_motion(speed) {
        this.speed = speed ;
        if (speed <=0){
            console.log(this.motion = "The car is stopped");
        } else {console.log(this.motion = "The car is moving")}
    }
    accelerate(speed) {
        this.speed += 25;
        console.log(this.speed);
    }
    brake (speed){
        this.speed -=20;
        if(this.speed<0) {this.speed = 0;}
        console.log (this.speed);
    }
    emergency_brake () {
        this.speed = 0;
        console.log(this.speed);
    };
    status () {
        this.check_motion();
        this.speed = 0 ;
        console.log(`${this.brand} ${this.model} is moving at ${this.speed} km/h and the status is: ${this.motion}`);
    }
}

let car = new Car("Toyota", "Camry");
car.check_motion(20);
car.accelerate();
car.brake();
car.accelerate();
car.emergency_brake();
car.status();
car.status();

