/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 //$("#main").append("Aaron Klein");
 
 var SoL = 299792458;
 var MtoC = 100;
 var nanoSec = 1.0/1000000000;
 var speed = SoL * MtoC * nanoSec;
 
 //$("#main").append(speed);
 
 var awesomeThoughts = "I am Aaron and I am AWESOME!";
 
 console.log(awesomeThoughts);
 
 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 
 //$("#main").append(funThoughts);
 
 var formattedName = HTMLheaderName.replace("%data%","Aaron Klein");
 
 var formattedRole = HTMLheaderRole.replace("%data%","Full-Stack Web Dev");
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);