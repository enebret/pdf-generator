const PDFDocument = require('pdfkit');
const fs = require('fs');

const rawData = `1. Title : Mr,
  2. Surname: Osondu,
  3. First name : Eleazar,
  4. Middle name : Chinonyerem,
  5. Phone no : 08148837474/08066574737,
  6. Email: osondueleazar@gmail.com,
  7. Address : 6 Simon Onu street Behind Amazing Grace Plaza New world Estate, Oba,
  8. Education : BSc, Computer Science, University of Maidugri Borno State, 2016,
  9. Work Experience : Name of organization: Niger Insurance; Role: Accountant; Year of Employment: 2010-present; Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones
Breeding productive relationships to create a pool of prospective clients from various sources by networking, cold calling, using referrals etc.
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria; Name of organization: Techbuild Africa, Role: Sales Associate; Year of Employment: Jan 2020 – Dec 2020; Duties: Actively hunted and closed online media deals and transactions on behalf of the company.
I drove traffic to the website through well-thought and search-engine optimized blog posts which
translated into sales and brand visibility.
Interacted and maintained relationships with high-network professionals and companies with tech tools
and communication mediums that led to increased conversion and customer satisfaction.
,
  10. Volunteer Activity : nil,
   11. Awards/Certifications: nil,
   12. Skills: ,
   13. References available on request`;

function parseRawData(rawData) {
  const dataObj = {};

  const lines = rawData.split('\n');

  for (const line of lines) {
    const [key, value] = line.split(':');
    if (key && value) {
      dataObj[key.trim()] = value.trim();
    }
  }

  // Parse work experience section, put in array
  const workExperienceSection = dataObj['9. Work Experience'];
  if (workExperienceSection) {
    const workExperienceItems = workExperienceSection.split(';');
    const workExperienceList = workExperienceItems.map((item) => item.trim());
    dataObj['9. Work Experience'] = workExperienceList;
  } else {
    dataObj['9. Work Experience'] = [];
  }

  return dataObj;
}

const dataObject = parseRawData(rawData);

console.log(dataObject);




/** const doc = new PDFDocument();

// Set up the output file
const outputFilename = 'cv.pdf';
doc.pipe(fs.createWriteStream(outputFilename));

// Function to draw a line from margin to margin
const drawLine = () => {
  const pageWidth = doc.page.width;
  doc
    .moveTo(doc.page.margins.left, doc.y)
    .lineTo(pageWidth - doc.page.margins.right, doc.y)
    .stroke();
};

// Raw data
const rawData = {
  title: 'Mr',
  surname: 'Osondu',
  firstName: 'Eleazar',
  middleName: 'Chinonyerem',
  phoneNumber: '08148837474/08066574737',
  email: 'osondueleazar@gmail.com',
  address: '6 Simon Onu street Behind Amazing Grace Plaza New world Estate, Oba',
  education: [
    {
      institution: 'University of Maidugri',
      certificate: 'BSc',
      fieldOfStudy: 'Computer Science',
      year: '2016',
    },
  ],
  workExperience: [
    {
      organization: 'Niger Insurance',
      role: 'Accountant',
      year: '2010-present',
      duties: [
        'Developing marketing strategies and promoting all types of new insurance contracts or suggesting additions/changes to existing ones',
        'Breeding productive relationships to create a pool of prospective clients from various sources by networking, cold calling, using referrals, etc.',
        'Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria',
      ],
    },
    {
      organization: 'Techbuild Africa',
      role: 'Sales Associate',
      year: 'Jan 2020 – Dec 2020',
      duties: [
        'Actively hunting and closing online media deals and transactions on behalf of the company',
        'Driving traffic to the website through well-thought and search-engine optimized blog posts which translated into sales and brand visibility',
        'Interacting and maintaining relationships with high-network professionals and companies with tech tools and communication mediums that led to increased conversion and customer satisfaction',
      ],
    },
  ],
  volunteerActivity: 'nil',
  awardsCertifications: 'nil',
  skills: 'Leadership, Communication, Problem Solving',
  professionalSummary:
    'Highly motivated professional with a strong background in accountancy and sales. Experienced in developing marketing strategies, building relationships, and driving business growth. Skilled in communication, problem-solving, and leadership.',
};

// Function to check if a value is nil
const isNil = (value) => value === 'nil';

// Function to generate a section with line and content
const generateSection = (title, content) => {
  if (!isNil(content)) {
    doc.fontSize(14).text(title, { align: 'left' });
    drawLine();
    doc.moveDown();
    doc.fontSize(13).text(content, { align: 'left' });
    doc.moveDown(2);
  }
};

// Personal Information
doc.fontSize(14).text(rawData.title, { align: 'center' });
doc.moveDown().fontSize(14).text(rawData.surname, { align: 'center' });
doc.moveDown().fontSize(14).text(rawData.firstName, { align: 'center' });
doc.moveDown().fontSize(14).text(rawData.middleName, { align: 'center' });
doc.moveDown().fontSize(13).text(`Phone no: ${rawData.phoneNumber}`, { align: 'center' });
doc.moveDown().fontSize(13).text(`Email: ${rawData.email}`, { align: 'center' });
doc.moveDown(2).fontSize(13).text(rawData.address, { align: 'center' });
doc.moveDown(2);

// Professional Summary
generateSection('Professional Summary', rawData.professionalSummary);

// Education
generateSection(
  'Education',
  rawData.education
    .map((edu) => `${edu.institution}, ${edu.certificate}, ${edu.fieldOfStudy}, ${edu.year}`)
    .join('\n')
);

// Work Experience
generateSection(
  'Work Experience',
  rawData.workExperience
    .map(
      (work) =>
        `${work.organization}, ${work.role}, ${work.year}\n- ${work.duties.join('\n- ')}\n\n`
    )
    .join('')
);

// Volunteer Activity
generateSection('Volunteer Activity', rawData.volunteerActivity);

// Awards/Certifications
generateSection('Awards/Certifications', rawData.awardsCertifications);

// Skills
generateSection('Skills', rawData.skills);

// References available on request
doc.fontSize(13).text('References available on request', { align: 'left' });

// Finalize and save the PDF
doc.end();
console.log('CV generated successfully.'); */

/** 1. Title : 
2. Surname:
3. First name : 
4. Middle name :
5. Phone no : 
6. Email: 
7. Address:
8. Education: (Name of Institution, certificate awarded, field of study, and year awarded), if more than one, duplicate for other institutions 
9. Work Experience (Name of organization, role, year of employment and duties/functions
10. Awards/certifications (Name of award, year awarded)
11. Volunteer activity (Name of organization, duties/activities) 
12. skills
13. References available on request
**let the AI generate the professional summary, which should come before education, the AI should also populate the skills section
 */

/*1. Title : Mr,
  2. Surname: Osondu,
  3. First name : Eleazar,
  4. Middle name : Chinonyerem,
  5. Phone no : 08148837474/08066574737,
  6. Email: osondueleazar@gmail.com,
  7. Address : 6 Simon Onu street Behind Amazing Grace Plaza New world Estate, Oba,
  8. Education : BSc, Computer Science, University of Maidugri Borno State, 2016,
  9. Work Experience :first work experience - Name of organization: Niger Insurance; Role: Accountant; Year of Employment: 2010-present; Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones
Breeding productive relationships to create a pool of prospective clients from various sources by networking, cold calling, using referrals etc.
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria;second work experience - Name of organization: Techbuild Africa, Role: Sales Associate; Year of Employment: Jan 2020 – Dec 2020; Duties: Actively hunted and closed online media deals and transactions on behalf of the company.
I drove traffic to the website through well-thought and search-engine optimized blog posts which
translated into sales and brand visibility.
Interacted and maintained relationships with high-network professionals and companies with tech tools
and communication mediums that led to increased conversion and customer satisfaction.
,
  10. Volunteer Activity : nil,
   11. Awards/Certifications: nil,
   12. Skills: ,
   13. References available on request
   
   ' */
