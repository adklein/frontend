/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 //$("#main").append("Aaron Klein");
 
// var SoL = 299792458;
// var MtoC = 100;
// var nanoSec = 1.0/1000000000;
// var speed = SoL * MtoC * nanoSec;
 
 //$("#main").append(speed);
 
// var awesomeThoughts = "I am Aaron and I am AWESOME!";
 
// console.log(awesomeThoughts);
 
// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 
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
	"contacts" : contactInfo, 
	"picture" : pictureURL, 
	"welcomeMessage" : welcome, 
	"skills" : skills
};
 
 $("#main").append(bio.name);
 $("#main").append(bio.role);
 $("#main").append(bio.contacts.email);
 
 var work = {
	 "jobs": [
	 {
		"position" : "Analyst/Researcher",
		"employer" : "Klein Lawyers",
		"Year" : "2015",
		"City" : "Vancouver"
	 }
	 ]
 };
 var education = {
     "schools": [
     {
         "name": "University of Michigan",
         "city": "Ann Arbor, MI, USA",
         "degree": "BSc",
         "major": ["Aerospace Engineering"]
     },
     {
         "name": "Imperial College London",
         "city": "London, UK",
         "degree": "MSc",
         "major": ["Aeronautical Engineering"]
     }
    ]
 };
 
 //education.name = "Imperial College London";
 //education.Degree = "Masters of Science";
 //education.Year = 2015;
 //education.City = "London";

 
 var projects = {
     "project": [
     {
         "title": "First Project",
         "date": "Jan ____ to Dec ____",
         "description": "What was done",
         "images": ["website.URL"]
     }
    ]
 };
 
 //$("#main").append(work.position);
 //$("#main").append(education.name);
 
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkills);
	}
	
for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);
	$("#workExperience").append(HTMLworkDates);
	$("#workExperience").append(HTMLworkLocation);
	$("#workExperience").append(HTMLworkDescription);
	
	var formattedEmployers = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
	var formattedEmployTitle = formattedEmployers + formattedworkTitle;
	
	$(".work-entry:last").append(formattedEmployTitle);
}
 
 
 
 