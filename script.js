//Create your own resume data in json format

let myResume={
    "Basics": {
      "name": "VIGNESH RAJASEKAR",
      "email": "rajasekarvignesh093@gamil.com",
      "phone": 8883331093,
      "degree": "B.E",
      "location": {
        "address": "5/176 Bharathinagar Kalkurichi",
        "postalCode": 626104,
        "city": "Virudhunagar",
        "state": "Tamilnadu",
        "country": "India"
      },
      "Profiles": [
        {
          "website": "https://www.linkedin.com/in/vignesh-rajasekar-a9943526a/",
          "github":"https://github.com/vichusekar"
        }
      ]
    },
    "Education": [
      {
        "institution": "Rathinam Technical Campus",
        "department": "Mechanical",
        "studyType": "fulltime",
        "batch start year": 2016,
        "batch end year": 2020,
        "cgpa": 6.45,
      }
    ],
    "Skills": [
      {
        "name": "Javascript",
        "level": "Beginner",
        "project": [
          "Gmail Clone"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "Interests": [
      {
        "name": "Skill Development",
      }
    ],
    "Habits": [
        {
          "name": "Reading Books, Riding Bike"
        }
      ]
  }
  console.log(myResume);


//For the given json iterate over all for loops (for for in for of foreach)

let json = [{
    "id": 1,
    "name": "vichu",
    "email": "rajasekarvignesh093@gmail.com",
    "mobile": 8883331093,
    "message": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",

}]

//for loop
for (var i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.mobile);
    console.log(obj.message);
}

//for Each
json.forEach(function (obj) {
    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.mobile);
    console.log(obj.message);
})

//for In
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        console.log(json[key].id);
        console.log(json[key].name);
        console.log(json[key].email);
        console.log(json[key].mobile);
        console.log(json[key].message)

    }
}


//Read about the difference between window, screen and document in javascript

//Window
"The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser window. The window object is supported by all browsers. All global JavaScript objects , functions, and variables automatically become members of the window object. The window is the first thing that gets loaded into the browser . This window object has the majority of the properties like length, inner Width, inner Height, name, if it has been closed, its parents, and more."


//Screen
"Screen is a small information object about physical screen dimensions . It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object. It can be written without window prefix."


//Document
"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page’s content, which is the DOM tree. When an HTML document is loaded into a web browser , it becomes a document object. It is the root node of the HTML document. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. HTML documents, served with the “text/html” content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface."
