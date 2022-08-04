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
