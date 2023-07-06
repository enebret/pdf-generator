const { Console } = require("console");
const fs = require("fs");
const Logger = new Console({
  stdout: fs.createWriteStream("normalStdout.txt", { flags: 'a' }),
  stderr: fs.createWriteStream("errStdErr.txt"),
});
const rawData = `1. Title : Mr,
  2. Surname: Osondu,
  3. First name : Eleazar,
  4. Middle name : Chinonyerem,
  5. Phone no : 08148837474/08066574737,
  6. Email: osondueleazar@gmail.com,
  7. Address : 6 Simon Onu street Behind Amazing Grace Plaza New world Estate, Oba,
  8. Education : BSc, Computer Science, University of Maidugri Borno State, 2016,
  9. Work Experience, 
  10. Name of organization: Niger Insurance. Role: Accountant. Year of Employment: 2010-present. Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones,
Breeding productive relationships to create a pool of prospective clients from various sources by networking cold calling using referrals etc,
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria; 
11. Name of organization: Techbuild Africa. Role: Sales Associate. Year of Employment: Jan 2020 – Dec 2020. Duties: Actively hunted and closed online media deals and transactions on behalf of the company,
I drove traffic to the website through well-thought and search-engine optimized blog posts which
translated into sales and brand visibility,
Interacted and maintained relationships with high-network professionals and companies with tech tools
and communication mediums that led to increased conversion and customer satisfaction
  12. Volunteer Activity : nil,
  13. Awards/Certifications: nil,
  14. Skills: ,
  15. References available on request`;

function parseRawData(rawdata) {
  const dataObj = {};
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

const dataObject = parseRawData(rawData);
Logger.log(dataObject)
console.log(dataObject);
