const prompt = require('prompt-sync')();
// gets salary and benefits as input
let salary = prompt("Please enter your salary");
let benefits = prompt ("Please enter your benefits");
// calculating gross salary
let grossSalary = parseInt(salary) + parseInt(benefits);
console.log ("Gross Pay:" ,grossSalary);
//calculating NSSF
 let nssf = grossSalary * 0.06;
 //NSSf should not be more than 1080
 if (nssf > 1080){
    nssf = 1080;
 }else{
     nssf = grossSalary * 0.06;
 }
 console.log("NSSF:", nssf);
// calculating paye
//if gross salary is up to 24000
if (grossSalary <= 24000){
      paye = grossSalary * 0.1;
     //if gross salary is between 24001 - 32333
} else if (24,000 < grossSalary <= 32,333){
    paye1 = 24000 * 0.1;
    paye2 = (grossSalary - 24000) * 0.25;
    paye = paye1 + paye2 ;
    // if gross salary is more than 32333
} else {
    paye1 = 24000 * 0.1;
    paye2 = (32333 - 24001) * 0.25;
    paye3 = (grossSalary - 32333) * 0.3;
    paye = paye1 + paye2 + paye3;
}

// deducting the personal relief which is 2400
 if (paye < 2400){
    paye = 0
 }else {
    paye = paye - 2400
 }
 console.log ("PAYE:" , paye);

 // calculating NHIF
 if (grossSalary < 6000){
    nhif = 150;
 }else if (6000 <= grossSalary <= 7999){
    nhif = 300;
 }else if (8000<= grossSalary <= 11999){
    nhif = 400;
 }else if (12000<= grossSalary <= 19999){
    nhif = 500;
 }else if (15000<= grossSalary <= 11999){
    nhif = 600;
 }else if (20000<= grossSalary <= 24999){
    nhif = 750;
 }else if (25000<= grossSalary <= 29999){
    nhif = 850;
 }else if (30000<= grossSalary <= 34999){
    nhif = 900;
 }else if (35000<= grossSalary <= 39999){
    nhif = 950;
 }else if (40000<= grossSalary <= 44999){
    nhif = 1000;
 }else if (45000<= grossSalary <= 49999){
    nhif = 1100;
 }else if (50000<= grossSalary <= 59999){
    nhif = 1200;
 }else if (60000<= grossSalary <= 69999){
    nhif = 1300;
 }else if (70000<= grossSalary <= 79999){
    nhif = 1400;
 }else if (80000<= grossSalary <= 89999){
    nhif = 1500;
 }else if (90000<= grossSalary <= 99999){
    nhif = 400;
 }else {
    nhif = 1700;
 }

 console.log("NHIF:" , nhif);
 let netsalary = grossSalary - paye - nssf - nhif ;
 console.log ("Net Salary:" , netsalary);









