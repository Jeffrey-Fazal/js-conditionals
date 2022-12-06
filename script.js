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
// neither 'brussel sprouts for you'

if (foodResponse === 'pizza') {
    console.log('yay pizza!!')
} else if (foodResponse === 'pasta'){
    console.log('ooh I love pasta!!')
} else {
    console.log('brussel sprouts for you');
} 

console.log(`Reponse based on what the user has said food resposne:  (${foodResponse})`)

// Bouncer 1 
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

// Bouncer 2 
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

// Valentine's day plans

relationshipStatus = false
trueLove = false 

console.log("Are you in a realtionship?")

if (relationshipStatus === true) {
    console.log('Is it serious?')
} else if (trueLove === true){
    console.log('Romantic dinner for two')
} else if (trueLove === false) {
    console.log('Head to the closest bar')
}

else {
    console.log("Head to the closest bar")
}

// Sending a letter to Santa

goodChild = true
stampCollection = true

if ( goodChild === true) {
    console.log("Write your wishlist and letter to Santa. \n Address your envelope with \" I Candy Cane Lane. North Pole\" Fold and place your letter in your envelope. \n Do you have a stamp?"  )
} else if ( stampCollection === false){
    console.log("Get a stamp from a teacher. Place it on the envelope. \n You\' done! Let's mail your letter to Santa")
} else if (stampCollection === true) {
console.log("Place it on the envelope. \n You\' done! Let's mail your letter to Santa")
}

else {
    console.log("Do a good deed!")
}
