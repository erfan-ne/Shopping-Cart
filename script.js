var age = prompt("How old are you?")
var gender = prompt("What is your gender? male or female")

if (age < 18 || gender == "female") {
    alert("Not Ok")
} else if (age >= 18 & gender == "male") {
    alert ("ok")
} else {
    alert ("The information entered is not correct")
}