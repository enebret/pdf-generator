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
//the arrangement of the grammar of the array that will be passed to the function must be in the format below; pay close attention to the position of the fullstops, commas, and colons.
var testArray = [
    '  10. Name of organization: Niger Insurance. Role: Accountant. Year of Employment: 2010-present. Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones,,Breeding productive relationships to create a pool of prospective clients from various sources by networking cold calling using referrals etc,,Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria',
    ' ,11. Name of organization: Techbuild Africa. Role: Sales Associate. Year of Employment: Jan 2020 – Dec 2020. Duties: Actively hunted and closed online media deals and transactions on behalf of the company,,I drove traffic to the website through well-thought and search-engine optimized blog posts which,translated into sales and brand visibility,,Interacted and maintained relationships with high-network professionals and companies with tech tools,and communication mediums that led to increased conversion and customer satisfaction'
  ];

  let recovery = split(testArray);
  console.log(recovery)
