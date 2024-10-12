
  /*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.

however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"

if they are in their teens, then tell them they need to "grow up to 19" before they can drink

if they are between 19 to 50, then "drink away"

if they are over 50, then warn them about their "health"

if they are over 70, then ALSO warn them about their "life"
----
Define Input:
Question: What is your age?

Define Output Responses for Each Age Group:

if
1. age <13 too young leave

else if

2. age >=13 && < 19 You need to grow up to 19
3. age >= 19 && <=50 Drink away
4. age >50 && age <=70 Be careful of your health
5. age >70 Be careful of your life
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function checkyourid(age) {
    if (age < 13) {
        console.log("too young leave");
    } else if (age >= 13 && age < 19) {
        console.log("You need to grow up to 19");
    } else if (age >= 19 && age <= 50) {
        console.log("Drink away!");
    } else if (age > 50 && age <= 70) {
        console.log("Be careful of your health");
    } else if (age > 70) {
        console.log("Be careful of your life");
    }
}

function Startgame() {
    readline.question('What is your age? ', ageInput => {
        const age = Number(ageInput);
        checkyourid(age);
        readline.close();
    });
}

Startgame();