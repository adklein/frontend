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
 
 var formattedRole = HTMLheaderRole.replace("%data%","Full-Stack Data Scientist");
 
 var contactInfo = {"email" : "adklein (at) umich (dot) edu", "phone" : "604-767-6996"};
 
 var pictureURL = "NaN";
 
 var welcome = "Welcome to my Website!";
 
 var skills = ["Python","JavaScript","Matlab","R","SQL"];
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var bio = {"name": "Aaron Klein", 
	"role": "Full Stack Data Scientist", 
	"contactinfo" : contactInfo, 
	"picture" : pictureURL, 
	"welcomeMessage" : welcome, 
	"skills" : skills
};
 
 $("#main").append(bio.name);
 $("#main").append(bio.role);
 $("#main").append(bio.contactinfo.email);
 
 var work = {};
 var education = {};
 
 education.name = "Imperial College London";
 education.Degree = "Masters of Science";
 education.Year = 2015;
 education.City = "London";
 
 work.position = "Analyst/Researcher";
 work.employer = "Klein Lawyers";
 work.Year = 2015;
 work.City = "Vancouver";
 
 $("#main").append(work.position);
 $("#main").append(education.name);
 
 
 
 