const workExperienceSection = `Name of organization: Niger Insurance; Role: Accountant; Year of Employment: 2010-present; Duties: Developing marketing strategies and promote all types of new insurance contracts or suggest additions/changes to existing ones
Breeding productive relationships to create a pool of prospective clients from various sources by networking, cold calling, using referrals etc.
Evaluating business or individual customers’ needs and financial status and proposing protection plans that meet their criteria; Name of organization: Techbuild Africa, Role: Sales Associate; Year of Employment: Jan 2020 – Dec 2020; Duties: Actively hunted and closed online media deals and transactions on behalf of the company.
I drove traffic to the website through well-thought and search-engine optimized blog posts which
translated into sales and brand visibility.
Interacted and maintained relationships with high-network professionals and companies with tech tools
and communication mediums that led to increased conversion and customer satisfaction.`;

const extractWorkExperience = (workExperienceSection) => {
  const workExperienceArray = [];
  const entries = workExperienceSection.split('Name of organization:').slice(1);

  for (const entry of entries) {
    const lines = entry.trim().split('\n').map((line) => line.trim());
    const organization = lines[0].split(';')[0].trim();
    const role = lines[0].split(';')[1].trim();
    const yearOfEmployment = lines[0].split(';')[2].trim();
    const duties = lines.slice(1).join('\n');

    workExperienceArray.push({ organization, role, yearOfEmployment, duties });
  }

  return workExperienceArray;
};

const workExperienceArray = extractWorkExperience(workExperienceSection);

console.log(workExperienceArray);
