const { Console } = require("console");
const fs = require("fs");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output3.pdf'));
const Logger = new Console({
  stdout: fs.createWriteStream("normalStdout.txt", { flags: 'a' }),
  stderr: fs.createWriteStream("errStdErr.txt"),
});

const rawData = `1. Title : Mr,
  2. Surname: Osondu,
  3. First name : Eleazar,
  5. Phone no : 08148837474/08066574737,
  6. Email: osondueleazar@gmail.com,
  7. Address : 6 Simon Onu street Behind Amazing Grace Plaza New world Estate Oba,
  8. Education : BSc, Computer Science, University of Maidugri Borno State, 2016,
  9. Work Experience, 
  10. Name of organization: Niger Insurance. Role: Accountant. Year of Employment: 2010-present. Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones,
Breeding productive relationships to create a pool of prospective clients from various sources by networking cold calling using referrals etc,
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria; 
11. Name of organization: Techbuild Africa. Role: Sales Associate. Year of Employment: Jan 2020 – Dec 2020. Duties: Actively hunted and closed online media deals and transactions on behalf of the company,
I drove traffic to the website through well-thought and search-engine optimized blog posts which translated into sales and brand visibility,
Interacted and maintained relationships with high-network professionals and companies with tech tools and communication mediums that led to increased conversion and customer satisfaction
  12. Volunteer Activity : machine learning tutor, campus leaders africa. co-organizer, digital summit, oou. head coach, faculty of engineering, oou
  13. Awards/Certifications: mtn foundation scholarship award 2019, dean's honour award 2021, michael taiwo scholarship winner 2022
  14. Skills: ,
  15. References available on request`;

function parseRawData(rawdata) {
  const rawdata_array = rawdata.split('\n');
  for (const element of rawdata_array) {
    if (element.includes('Work Experience')){
      var indexofelement_thatcontainsthewordsWorkExperience = rawdata_array.indexOf(element);
      //console.log(q)
    }
     if (element.includes('Volunteer Activity')){
      var indexofelement_thatcontainsthewordsVolunteerActivity = rawdata_array.indexOf(element)
       //console.log(r)
    }
    
  }
  let lengthoftherawdata_array = rawdata_array.length
  const firstcloneoftherawdata_array = [...rawdata_array];
  const secondcloneoftherawdata_array = [...rawdata_array];
  const thirdcloneoftherawdata_array = [...rawdata_array];
  let firstsplitpartoftherawdata_array = firstcloneoftherawdata_array.slice(0,indexofelement_thatcontainsthewordsWorkExperience)
  let secondsplitpartoftherawdata_arraythatcontainsWorkExperience = secondcloneoftherawdata_array.slice(indexofelement_thatcontainsthewordsWorkExperience+1, indexofelement_thatcontainsthewordsVolunteerActivity)
 
 
  let  workExperienceArraySplit = secondsplitpartoftherawdata_arraythatcontainsWorkExperience.toString().split(';');
  function split (x) {
    var returnArray = [];
    x.forEach(element => {
        let splitOfFirstElementOfworkExperienceArrayThasHasAlreadyBeenSplit = element.toString().split('.').slice(1);
        var newWorkExperienceArrayThatDoesNotHaveColon = [];
        splitOfFirstElementOfworkExperienceArrayThasHasAlreadyBeenSplit.forEach(element => {
          let elementsplit = element.split('');
          var colonindex;
          elementsplit.forEach(es=>{
            if(es == ':'){
              colonindex = elementsplit.indexOf(es)
            };
          })
          var reducedElement = element.substring (colonindex+1, element.length);
          newWorkExperienceArrayThatDoesNotHaveColon.push(reducedElement)
        });
       var extractDuties = newWorkExperienceArrayThatDoesNotHaveColon.pop()
       var extractDutiesArray = extractDuties.toString().split(',').filter(e =>  e);
       var experienceObject = {
        otherExperienceTitles: newWorkExperienceArrayThatDoesNotHaveColon,
        Duties: extractDutiesArray
       };
       returnArray.push(experienceObject)
    });
    return returnArray
};
let recovery = split(workExperienceArraySplit);
 return recovery             
}

function personalInfo(rd) {
  const rd_array = rd.split('\n');
  var educationIndex;
  rd_array.forEach(rawDataElement=>{
      if(rawDataElement.includes('Education')){
          educationIndex = rd_array.indexOf(rawDataElement);
      }
  });
  var personalInfoArray = rd_array.slice(0, educationIndex);
  var personalInfoArrayThatDoesNotHaveColonSection = [];
  personalInfoArray.forEach(personalInfoElement=>{
      let personalInfoElementArray = personalInfoElement.split('');
      var colonIndex;
      personalInfoElementArray.forEach(personalInfoElementArrayComponent => {
          if(personalInfoElementArrayComponent==':'){
              colonIndex = personalInfoElementArray.indexOf(personalInfoElementArrayComponent);
          }
      });
      let splitString = personalInfoElement.substring(colonIndex+1, personalInfoElement.length-1);
      personalInfoArrayThatDoesNotHaveColonSection.push(splitString)
  });
  return personalInfoArrayThatDoesNotHaveColonSection

};
function educationData(rawdata) {
  splitRawData = rawdata.split('\n');
  var educationIndex;
  splitRawData.forEach(individualrawdata => {
      if(individualrawdata.includes('Education')) {
          educationIndex = splitRawData.indexOf(individualrawdata)
      }
  });
  var extractedEducation = splitRawData.slice(educationIndex, educationIndex+1);
  let extractedEducationSplit = extractedEducation.toString().split('');
  var colonIndex;
  extractedEducationSplit.forEach(extractedEducationIndividualComponents => {
      if (extractedEducationIndividualComponents==':') {
          colonIndex = extractedEducationSplit.indexOf(extractedEducationIndividualComponents)
      }
  })
  let educationColonSplit = extractedEducation.toString().slice(colonIndex+1, extractedEducationSplit.length);
  return educationColonSplit.split(',').filter(e=>e);
};

function volunteerData(rawdata) {
  const splitRD = rawdata.split('\n');
  var volunteerIndex;
  splitRD.forEach(individualrawdata => {
      if(individualrawdata.includes('Volunteer')) {
          volunteerIndex= splitRD.indexOf(individualrawdata)
      }
  });
  var extractedVolunteer = splitRD.slice(volunteerIndex, volunteerIndex+1);
  let extractedVolunteerSplit = extractedVolunteer.toString().split('');
  var colonIndex;
  extractedVolunteerSplit.forEach(extractedVolunteerIndividualComponents => {
      if (extractedVolunteerIndividualComponents ==':') {
          colonIndex = extractedVolunteerSplit.indexOf(extractedVolunteerIndividualComponents)
      }
  })
  let volunteerColonSplit = extractedVolunteer.toString().slice(colonIndex+1, extractedVolunteerSplit.length);
  return volunteerColonSplit.split('.').filter(e=>e);
};
function awardsData(rawdata) {
  const splitRD = rawdata.split('\n');
  var awardsIndex;
  splitRD.forEach(individualrawdata => {
      if(individualrawdata.includes('Awards')) {
          awardsIndex= splitRD.indexOf(individualrawdata)
      }
  });
  var extractedAward = splitRD.slice(awardsIndex, awardsIndex+1);
  let extractedAwardSplit = extractedAward.toString().split('');
  var colonIndex;
  extractedAwardSplit.forEach(extractedAwardIndividualComponents => {
      if (extractedAwardIndividualComponents ==':') {
          colonIndex = extractedAwardSplit.indexOf(extractedAwardIndividualComponents)
      }
  })
  let awardColonSplit = extractedAward.toString().slice(colonIndex+1, extractedAwardSplit.length);
  return awardColonSplit.split(',').filter(e=>e);
}
const awardArray = awardsData (rawData);
const volunteerArray = volunteerData (rawData);
const education = educationData (rawData)
const personalInfoMain = personalInfo(rawData);
const workExprienceMain = parseRawData(rawData);

//console.log(personalInfoMain);
const fullName = personalInfoMain.slice(1,3).toString().replace(',', '').toUpperCase();
const phoneNumber = personalInfoMain.slice(3,4).toString()+('');
const email = personalInfoMain.slice(4,5).toString();
const address = personalInfoMain.slice(5,personalInfoMain.length).toString();
const pageWidth = doc.page.width;
doc.font('Times-Bold').text(`${fullName}`, {
  align: 'center',
  fontSize: 16
}).moveDown(0.3);
doc.font('Times-Roman').text(`${address}`, {
  align: 'center',
  fontSize: 13
}).moveDown(0.4);
doc.font('Times-Roman').text(`Phone: ${phoneNumber}`, {
  fontSize: 13,
  align: 'left',
  continued: true
}).text(`Email: ${email}`, {
  fontSize: 13,
  align: 'right'
}).moveDown(0.5);
let professionalSummaryHeading = 'PROFESSIONAL SUMMARY';
let professionalSummaryText = 'A BNSc Holder and highly experienced Nurse with excellent healthcare skills. Highly proficient in administering medications, carrying out wound dressing, catheterisation, cardiotocgraphy(CTG), checking vital signs and has good basic life support skills. Able to manage and care for elderly and physically challenged individuals. Has good interpersonal relationships and communication skills'
doc.font('Times-Bold').text(`${professionalSummaryHeading}`, {
  align: 'left',
  fontSize: 13
}).moveTo(doc.page.margins.left, doc.y)
.lineTo(pageWidth - doc.page.margins.right, doc.y)
.stroke().moveDown(0.2);
doc.font('Times-Roman').text(`${professionalSummaryText}`, {
  align: 'justify',
  fontSize: 13
}).moveDown(0.3);
let researchExp
const degree = education.slice(0,1).toString();
const course = education.slice(1,2).toString();
const university = education.slice(2,3).toString();
const year = education.slice(3,4).toString();
let educationTitle = 'EDUCATIONAL QUALIFICATION';
doc.font('Times-Bold').text(`${educationTitle}`, {
  align: 'left',
  fontSize: 13
}).moveTo(doc.page.margins.left, doc.y)
.lineTo(pageWidth - doc.page.margins.right, doc.y)
.stroke().moveDown(0.3);
doc.font('Times-Bold').text(`${degree+','+''+course}`, {
  align: 'left',
  fontSize: 13
}).moveDown(0.2);
doc.font('Times-Roman').text(`${university}`, {
  align: 'left',
  continued: true
}).text(`${year}`, {
  align: 'right',
  fontSize: 13
}).moveDown(0.3);
let workExperienceSection = 'WORK EXPERIENCE';
doc.font('Times-Bold').text(`${workExperienceSection}`, {
  align: 'left',
  fontSize: 13
}).moveTo(doc.page.margins.left, doc.y)
.lineTo(pageWidth - doc.page.margins.right, doc.y)
.stroke().moveDown(0.2);
workExprienceMain.forEach(x=>{
  let experienceTitles = x.otherExperienceTitles;
  let [nameOfCompany, position, yearOfEmployment] = experienceTitles;
  doc.font('Times-Bold').text(`${position}`, {
    align: 'left',
    fontSize: 13
  }).moveDown(0.2);
  doc.font('Times-Roman').text(`${nameOfCompany}`, {
    align: 'left',
    fontSize: 13,
    continued: true
  }).text(`${yearOfEmployment}`, {
    align: 'right',
    fontSize: 13
  }).moveDown(0.2);
  doc.font('Times-Roman').list(x.Duties, {
    fontSize: 13,
    indent: 10
  });
  doc.moveDown(0.3)
  });
let certificationsSection = 'AWARDS AND CERTIFICATIONS';
doc.font('Times-Bold').text(`${certificationsSection}`, {
  align: 'left',
  fontSize: 13
}).moveTo(doc.page.margins.left, doc.y)
.lineTo(pageWidth - doc.page.margins.right, doc.y)
.stroke().moveDown(0.5);
doc.font('Times-Roman').list(awardArray, {
  fontSize: 13,
  indent: 10
}).moveDown(0.5);
let volunteerSection = 'VOLUNTEER EXPERIENCE';
doc.font('Times-Bold').text(`${volunteerSection}`, {
  align: 'left',
  fontSize: 13
}).moveTo(doc.page.margins.left, doc.y)
.lineTo(pageWidth - doc.page.margins.right, doc.y)
.stroke().moveDown(0.5);
doc.font('Times-Roman').list(volunteerArray, {
  fontSize: 13,
  indent: 10
}).moveDown(0.5);
let references = 'References are available on request';
doc.font('Times-Bold').text(`${references}`, {
  align: 'justify',
  fontSize: 13
});
doc.end();
console.log('printed pdf')