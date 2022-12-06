console.log('Please start the exam')
// Exam marks
const studentScore = 60

// Exam marks exercise 

if (studentScore >= 80) {
    console.log('You got an A');
}else if (studentScore >= 70) {
    console.log('You got a B')
} else if (studentScore >= 60) {
    console.log('C');
} else if (studentScore >= 50) {
    console.log('YpuD')
}
  else {
    console.log('Retake the exam');
}

console.log('Pens down, exam has finished');

// Pizza/Pasta Exercise
console.log("User answers what food they like")

foodResponse = prompt("What food would you like to eat?")
console.log(foodResponse) 
// check if reponse is pizza (if pizza console.log('yay pizza!!'))
// if it isnt pizza check if its pasta (console.log('ohh I love pasta!!'))
// nneither 'brussel sprouts for you'

if (foodResponse === 'pizza') {
    console.log('yay pizza!!')
} else if (foodResponse === 'pasta'){
    console.log('ooh I love pasta!!')
} else {
    console.log('brussel sprouts for you');
} 

console.log(`Reponse based on what the user has said food resposne:  (${foodResponse})`)

// bouncer 1 
console.log('bouncer 1 program')
const age = 33

if (age>21){
    console.log('Come on in!')
} else if (age > 18 && age < 21) {
    console.log('Come on in (but no drinking)!')
} else if (age < 18) {
    console.log("You're too young to be in here!" )
}else if (age > 75) {
    console.log('Are you sure you want to be here?')
}

// bouncer 2 
console.log('bouncer 2 program')
const id = false 
if(id === true){
if (age>21){
    console.log('Come on in!')
} else if (age > 18 && age < 21) {
    console.log('Come on in (but no drinking)!')
} else if (age < 18) {
    console.log("You're too young to be in here!" )
}else if (age > 75) {
    console.log('Are you sure you want to be here?')
}
} else  {
    console.log('No ID, no entry')
}