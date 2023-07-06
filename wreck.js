const rawData = `1. Title : Mr,
  2. Surname: Osondu,
  3. First name : Eleazar,
  4. Middle name : Chinonyerem,
  5. Phone no : 08148837474/08066574737,
  6. Email: osondueleazar@gmail.com,
  7. Address : 6 Simon Onu street Behind Amazing Grace Plaza New world Estate, Oba,
  8. Education : BSc, Computer Science, University of Maidugri Borno State, 2016,
  9. Work Experience, 
  10. Name of organization: Niger Insurance; Role: Accountant; Year of Employment: 2010-present; Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones
Breeding productive relationships to create a pool of prospective clients from various sources by networking, cold calling, using referrals etc.
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria; 
11. Name of organization: Techbuild Africa, Role: Sales Associate; Year of Employment: Jan 2020 – Dec 2020; Duties: Actively hunted and closed online media deals and transactions on behalf of the company.
I drove traffic to the website through well-thought and search-engine optimized blog posts which
translated into sales and brand visibility.
Interacted and maintained relationships with high-network professionals and companies with tech tools
and communication mediums that led to increased conversion and customer satisfaction.
,
  12. Volunteer Activity : nil,
  13. Awards/Certifications: nil,
  14 . Skills: ,
  15. References available on request`;

function parseRawData(rawData) {
  const dataObj = {};

  const lines = rawData.split('\n');

  for (const line of lines) {
    const [key, value] = line.split(':');
    if (key && value) {
      dataObj[key.trim()] = value.trim();
    }
  }

  return dataObj;
}

const dataObject = parseRawData(rawData);

console.log(dataObject);