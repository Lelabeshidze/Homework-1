// first task
const arr = [2, 4, 6, 8, -3, -5, -7];
let sum = (arr.filter((x) => x>0)).reduce((previous,current) => previous+current,0);
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
    accelerate  (speed)  {
        this.speed = speed + 25;
        if (this.speed <=0){
            console.log(this.motion = "The car is stopped");
        } else {console.log(this.motion = "The car is moving")}
        console.log(this.speed);
    }
    brake(speed) {
        this.speed = speed - 10;
        if (this.speed <=0){
            console.log(this.motion = "The car is stopped");
        } else {console.log(this.motion = "The car is moving")}
        console.log (this.speed);
    }
    emergency_brake(speed) {
        this.speed = speed = 0;
        if (this.speed <=0){
            console.log(this.motion = "The car is stopped");
        } else {console.log(this.motion = "The car is moving")}
        console.log(this.motion);
    };
    status() {
        console.log(`${this.brand} ${this.model} is moving at ${this.speed} km/h and the status is: ${this.motion}`);
    }
}

let car1 = new Car("Toyota", "Camry");
car1.accelerate(20);
car1.status()
car1.emergency_brake();
car1.status();
car1.brake(70);
car1.brake(10);
car1.status();
car1.accelerate(20);
car1.status();



// Fourth task

function addAsync(firstPar, secondPar) {
    new Promise ((resolve, reject) => {
        if ( typeof firstPar && typeof secondPar != undefined && typeof firstPar  ==="number" && typeof secondPar === "number"){
            resolve("success");
        }else {
            reject("failure");
        }
    }).then(resolve => console.log(resolve))
    .catch((error) => console.log(error));
};

addAsync(2,2);

addAsync("ll",9);
addAsync(30,"2");
addAsync(77,"0")
addAsync("0",0)