

/* ------------------------------------- 
        for..in loops in practice
   -------------------------------------
*/

var person = {
    name: 'Mark Ronson',
    dob:  '12,05,1988',
    occupation: 'accountant',
    gender: 'male',
    skills: ['tradecraft', 'weapons', 'night ops', 'charisma'],
    smart: true
};

for (prop in person) {
    console.log(prop, ': ', person[prop]);
}


/* ------------------------------------- 
    Using arrays to store objects
   -------------------------------------
*/

var questions = [
  {
      question: 'How many states are in the United States?',
      answer: 50
  },
  {
      question: 'How many continents are there?',
      answer: 7
  },
  {
      question: 'How many legs does an insect have?',
      answer: 6
  }
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);

/* ------------------------------------- 
alternative look for arrays holding objects
   -------------------------------------
*/

var objects = [
  {chapter: 1, title: 'the maw of madness'},
  {chapter: 2, title: 'red letter day'},
  {chapter: 3, title: 'the accretion disk'}
];

/* ------------------------------------- 
            Example of JSON Data
   -------------------------------------
*/

{
name: "Yusif Elawawdeh",
profile_name: "yusifelawawdeh",
profile_url: "https://teamtreehouse.com/yusifelawawdeh",
gravatar_url: "https://secure.gravatar.com/avatar/80be2517e6f73ff60dee1368d693a80e?s=400&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-d5ee029fdb4c0604d314eb946dbf8e6a.png&r=pg",
gravatar_hash: "80be2517e6f73ff60dee1368d693a80e",
badges: [
{
id: 49,
name: "Newbie",
url: "https://teamtreehouse.com/yusifelawawdeh",
icon_url: "https://achievement-images.teamtreehouse.com/Generic_Newbie.png",
earned_date: "2017-03-13T05:25:34.000Z",
courses: [ ]
},
{
id: 2122,
name: "Introducing JavaScript",
url: "https://teamtreehouse.com/library/javascript-basics/introducing-javascript",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png",
earned_date: "2017-03-13T12:48:32.000Z",
courses: [
{
title: "JavaScript Basics",
url: "https://teamtreehouse.com/library/javascript-basics",
badge_count: 1
},
{
title: "Introducing JavaScript",
url: "https://teamtreehouse.com/library/javascript-basics/introducing-javascript",
badge_count: 1
}
]
},
{
id: 2132,
name: "JavaScript Variables",
url: "https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage2.png",
earned_date: "2017-03-14T17:38:12.000Z",
courses: [
{
title: "JavaScript Basics",
url: "https://teamtreehouse.com/library/javascript-basics",
badge_count: 1
},
{
title: "Storing and Tracking Information with Variables",
url: "https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables",
badge_count: 1
}
]
},
{
id: 3182,
name: "JavaScript Numbers",
url: "https://teamtreehouse.com/library/javascript-basics/working-with-numbers",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage0-34.png",
earned_date: "2017-03-14T20:17:27.000Z",
courses: [
{
title: "JavaScript Basics",
url: "https://teamtreehouse.com/library/javascript-basics",
badge_count: 1
},
{
title: "Working With Numbers",
url: "https://teamtreehouse.com/library/javascript-basics/working-with-numbers",
badge_count: 1
}
]
},
{
id: 2142,
name: "JavaScript Conditional Statements",
url: "https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage3.png",
earned_date: "2017-03-16T23:48:25.000Z",
courses: [
{
title: "JavaScript Basics",
url: "https://teamtreehouse.com/library/javascript-basics",
badge_count: 1
},
{
title: "Making Decisions with Conditional Statements",
url: "https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements",
badge_count: 1
}
]
},
{
id: 2152,
name: "JavaScript Functions",
url: "https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage4B.png",
earned_date: "2017-03-21T20:31:35.000Z",
courses: [
{
title: "JavaScript Basics",
url: "https://teamtreehouse.com/library/javascript-basics",
badge_count: 1
},
{
title: "Creating Reusable Code with Functions",
url: "https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions",
badge_count: 1
}
]
},
{
id: 2222,
name: "JavaScript Loops",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage6.png",
earned_date: "2017-03-22T20:49:25.000Z",
courses: [
{
title: "JavaScript Loops, Arrays and Objects",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects",
badge_count: 1
},
{
title: "Simplify Repetitive Tasks with Loops",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops",
badge_count: 1
}
]
},
{
id: 2162,
name: "JavaScript Arrays",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-multiple-items-with-arrays",
icon_url: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
earned_date: "2017-03-23T19:15:58.000Z",
courses: [
{
title: "JavaScript Loops, Arrays and Objects",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects",
badge_count: 1
},
{
title: "Tracking Multiple Items with Arrays ",
url: "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-multiple-items-with-arrays",
badge_count: 1
}
]
}
],
points: {
total: 1028,
HTML: 0,
CSS: 0,
Design: 0,
JavaScript: 998,
Ruby: 0,
PHP: 0,
WordPress: 0,
iOS: 0,
Android: 0,
Development Tools: 0,
Business: 0,
Python: 0,
Java: 0,
Digital Literacy: 0,
Game Development: 0,
C#: 0,
Databases: 0,
Virtual Reality: 0
}
}

/* ------------------------------------- 
            AJAX & JSON 
   -------------------------------------
*/


