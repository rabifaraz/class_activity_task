// Chapter no 1 Alerts

// q1
// alert("Welcome User!")

// q2
// alert("Error! Please enter a valid password");

// q3
// alert("Welcome to JS land.. \nHappy Coding!");

// q4
// alert("Welcome to JS Land...");
// alert("Happy Coding! \n Prevent this page from creating additional dailogs");

// q5
// console.log("Hello... I can run JS through my web browser's console");

// q6 - q7
// done




// Chapter no 2 Variable for strings

// q1
// var username;

// q2
// var myName = "Rabi Faraz Abbasi";

// q3
// var message;
// message = "Hello World";
// alert (message);

// q4
// var person = prompt("Please enter your name");
// var age = prompt("Please enter your age");
// var bio = prompt("Please enter your Bio");

// alert(person + "  " + age + "  " + bio);

// Q5
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// q6
// var email = prompt("Please enter your email address.");
// alert ("Your email address is " + email);

// q7
// var book = "A Smarter way to learn JavaScript";
// alert (book);

// q8
// document.write ("Yah! I can write HTML content through JavaScript.");

// q9
// var mydata = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(mydata);
// document.write(mydata);





// Chapter no 3 Variable for Numbers

// q1
// var age = 44;
// alert("My age is " + age);

// q2
// var visitcount = 5;
// alert("You have visited this site " + visitcount);

// q3
// var birthYear = 1979;
// document.write("My birth year is " + birthYear); 
// document.write("Data type of my declared variable is number");

// q4
// var visitorname = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write(visitorname + " ordered " + quantity + productTitle + " on XYZ clothing store")




// Chapter no 4 legal & Illegal

// q1
// var first, second, third;

// q2
// var $legalNames = "Legal Names: name \n Name \n Name12 \n $name \n my_name \n";
// var $illegalNames = "Legal Names: 1name \n #Name \n @Name \n var \n alert";
// alert($legalNames + $illegalNames);

// q3
// document.write("Varaible names can only contain alphabets, numbers, $ sign and _ sign For example $my_1stVariable <br>");
// document.write("Variables must begin with a alphabets, $ sign and _ sign For example $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS Keywords");




// Chapter no 5 Math Expressions

// q1
// var firstNum = 13;
// var secondNum = 3;
// var myMath = firstNum + secondNum;
// document.write("Sum of " + firstNum + " and " + secondNum + " is " + myMath);


// q2
// var firstNum = 13;
// var secondNum = 3;
// var myMath = firstNum - secondNum;
// document.write("Minus of " + firstNum + " and " + secondNum + " is " + myMath);

// var firstNum = 13;
// var secondNum = 3;
// var myMath = firstNum * secondNum;
// document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + myMath);

// var firstNum = 13;
// var secondNum = 3;
// var myMath = firstNum % secondNum;
// document.write("Remainder of " + firstNum + " and " + secondNum + " is " + myMath);


// q3
// var mynumber;
// document.write("Value after declaration is: " + mynumber);
// mynumber = 10;
// document.write("<br>Initial Value: " + mynumber);
// mynumber++;
// document.write("<br>Value after increment: " + mynumber);
// mynumber = mynumber + 7;
// document.write("<br>Value after adding 7 is: " + mynumber);
// mynumber--;
// document.write("<br>Value after decrement is: " + mynumber);
// mynumber = mynumber % 3;
// document.write("<br>the remainder after dividing by 3 is: " + mynumber);

// q4
// var ticketCost = 600;
// var quantity = prompt("One ticket is 600 PKR\nHow many tickets do you want to buy?");
// document.write("Total cost of " + quantity + " tickets will be " + ticketCost * quantity + " PKR");

// q5
// var tableDigit = prompt("Please enter your no 1 to 20 to generate table");
// document.write(tableDigit + "  X  1  =  " + tableDigit*1 + "<br>");
// document.write(tableDigit + "  X  2  =  " + tableDigit*2 + "<br>");
// document.write(tableDigit + "  X  3  =  " + tableDigit*3 + "<br>");
// document.write(tableDigit + "  X  4  =  " + tableDigit*4 + "<br>");
// document.write(tableDigit + "  X  5  =  " + tableDigit*5 + "<br>");
// document.write(tableDigit + "  X  6  =  " + tableDigit*6 + "<br>");
// document.write(tableDigit + "  X  7  =  " + tableDigit*7 + "<br>");
// document.write(tableDigit + "  X  8  =  " + tableDigit*8 + "<br>");
// document.write(tableDigit + "  X  9  =  " + tableDigit*9 + "<br>");
// document.write(tableDigit + "  X  10  =  " + tableDigit*10 + "<br>");


// q6
// var celsius_temprature = 28;
// var fahrenheit = (celsius_temprature * 9 / 5) + 32;
// document.write(celsius_temprature + "<sup>o</sup>C is equalant to " + fahrenheit + "<sup>o</sup>F<br>");

// var fahrenheit_temprature = 90;
// var celsius = (fahrenheit_temprature - 32) * 5 / 9;
// document.write(fahrenheit_temprature + "<sup>o</sup>F is equalant to " + celsius + "<sup>o</sup>C");

// q7
// document.write ("<h1>Shopping Cart</h1>");
// var price;
// var itemQuantity;
// var shipping;
// price = 600, itemQuantity = 3;
// var cost1 = price * itemQuantity;
// document.write("Price of Item1 is " + price + "<br>");
// document.write("Quantity of Item1 you ordered is " + itemQuantity + "<br>");
// document.write("Item1 total cost is " + cost1 + "<br><br>");
// price = 140, itemQuantity = 7;
// var cost2 = price * itemQuantity;
// document.write("Price of Item2 is " + price + "<br>");
// document.write("Quantity of Item2 you ordered is " + itemQuantity + "<br>");
// document.write("Item2 total cost is " + cost2 + "<br><br>");
// shipping = 150;
// document.write("Shipping Charges " + shipping + "<br><br><br>");

// document.write("This order's <b>GRAND TOTAL</b> is " + (cost1 + cost2 + shipping) + " Thank you!");

// q8
// var totalMarks = 950;
// var marksObtained = prompt("Total Marks are 950 \nPlease enter your obtained marks...");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + marksObtained * 100 / totalMarks + "%");

// q9
// document.write ("<h1>Currency in PKR</h1>");
// var dollarQuantity = prompt("How many dollar do you want to change ");
// var riyalQuantity = prompt("How many Saudi Riyals do you want to change ");
// var dollarChange = 104.80;
// var riyalChange = 28;
// document.write("Dollar exchange Rate is " + dollarChange + " PKR<br>" + "Riyal exchange Rate is " + riyalChange + " PKR<br>");
// document.write("Total Currency in PKR: " + ((dollarQuantity * dollarChange) + (riyalQuantity * riyalChange)) + " PKR");

// q10
// var mynumber = 7;
// document.write("My number is 7... <br>" + (((mynumber + 5) * 10) / 2));

// q11
// document.write ("<h1>Age Calculator</h1>");
// var birthYear = prompt("Age Calculator \nPlease Enter your birth year");
// var currentYear = 2023;
// document.write("Current Year is " + currentYear + "<br>Your Birth Year is " + birthYear + "<br>");
// document.write("Your age is either " + (currentYear-birthYear) + " or " + (currentYear-birthYear-1));

// q12
// document.write ("<h1>The Geometrizer</h1>");
// var radius = prompt("Enter Radius of the Circle here");
// var pieValue = 3.142;
// document.write("Circumference of the circle: " + (pieValue * 2 * radius) + "<br>");
// document.write("Area of the circle: " + (pieValue * radius * radius));

// q13
document.write ("<h1>The Life Time Supply Calculator</h1>");
var favsnack = "lays";
var currentage = 15;
var estMaxAge = 70;
var snackPerDay = 2;
document.write("Favourite Snack: " + favsnack + "<br>Your current age is " + currentage + "<br>Your Estimated Maximum age is " + estMaxAge + "<br>Snacks Per Day: " + snackPerDay + "<br>You would need " + ((estMaxAge-currentage)*snackPerDay*365) + " " + favsnack + " " + "until the maximum age of " + estMaxAge);