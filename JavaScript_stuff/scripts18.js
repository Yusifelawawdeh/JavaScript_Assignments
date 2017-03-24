// learning objects

var person = {
  name : "Dave",
  grade : [80, 90, 20, 30],
  cool : true,
  country : "USA",
  age : 24,
  skills : ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'Photoshop', 'Illustrator', 'Expirience Design'] 
};

// method of accessing things inside of objects 

alert(person['name']);

// easier way is dot notation 

alert(person.name);

// change the value in an object 

person.name = 'bobby';

// adding things to the object 

person.gamer = true;

// learning to use objects with functions

function print(message) {
    var div = document.getElementById('Data');
    div.innerHTML = message;
}

var message = '<p> Hello ! My name is ' + person.name + ' </p>';
message += '<p> I live in the ' + person.country + ' </p>';
person.name = 'tyrion lanister';
message += '<p>Although somtimes i would prefer to be know as ' + person.name + ' </p>';
person.age += 1;
message += '<p> My age is now ' + person.age + ' </p>';
message += '<p> I also have ' + person.skills.length + ' skills ';
message += person.skills.join(', ') + ' </p>';
print(message);

// learning for...in loops for Objects

var student = {
  name: "douglas",
  cool: true
};

// basic example

for ( var key in student) {
    console.log(key);
}

 // better wording

for (var propName in student) {
  console.log(propName);
}
//----------------------------------------------------------------------
// dot notation does not work in for...in loops on []
// ---------------------------------------------------------------------
//example dont work

for (var propName in student) {
    console.log(student.propName);
}

// example works

for (var propName in student) {
    console.log(student[propName]);
}