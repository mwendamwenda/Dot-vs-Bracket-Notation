// console.log('commit to your vows');
const jonas = {
    firstName : 'jonas',
    lastName : 'schmedtman',
    age : 2037 -1991,
    job : 'teacher',
    friends : ['mwenda','makena','schola']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas['friends']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

jonas.location = 'portugal';
jonas['twiter'] = '@jonassschmedtman';
console.log(jonas);

//challenge 
//wrtite the following setence : jonas has 3 friends and his best frind is mwenda;

console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and  his best friend is ${jonas.friends[0]}`);