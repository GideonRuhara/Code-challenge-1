
//Creating a program to generate student grades
//A > 79
//B - 60 to 79
//C -  59 to 49
//D - 40 to 49
//E - less 40

 let grade = prompt ("Please enter your grade:")

if (grade >79 && grade <= 100){
    console.log("Grade A");
}
else if (grade >= 60 && grade <= 79){
    console.log("Grade B");
}
else if (grade > 49 && grade <= 59){
    console.log("Grade C");
}
else if (grade > 40 && grade < 49){
    console.log("Grade D");
}
else if (grade < 40 && grade >= 0){
    console.log("Grade E");
}
else {
    console.log("Invalid number");
}