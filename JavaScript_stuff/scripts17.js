var quest = [
    ['what is 10 + 2', 12],
    ['what is the namae of the grey wizard in Lord of the Rings?', 'gandalf'],
    ['trick question, good or bad?', 'Both']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];


function print(message) {
    document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
        for (var i = 0; i < arr.length; i += 1) {
            listHTML += '<li>' + arr[i] + '</li>';           
        }
        listHTML += '</ol>';
        return listHTML;
}

for (var i = 0; i < quest.length; i += 1) {
    question = quest[i][0];
    answer = quest[i][1];
    response = parseInt(prompt(quest));
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = "you got " + correctAnswers + " question(s) correct."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += "<h2>You got these questions incorrect:</h2>";
html += buildList(wrong);
print(html);