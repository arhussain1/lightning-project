// import { LightningElement, api, track, wire } from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';
// import SKILLS_FIELD from '@salesforce/schema/OpportunityLineItem.Skills__c';

// function searchSkills(input, options) {
//     const regex = new RegExp(input, 'i')  
//     const matchingResults = options.filter(skill => {
//       return regex.test(skill.label)
//     })
//     return matchingResults
//   } 
// function formatSkills(skills) {
//     skills.map(skill => {
//         {
//             label: skill;
//             value: skill;
//             checked: false;
//         }

//     })
// }
// export default class OpportunityProductSkillsManager extends LightningElement {
//     @api recordId;
//     @track selectedSkills = [];
//     dummySkills = ['Azure skill 1', 'Azure skill 2', "JavaScript", "HTML", "CSS", "Python", "Java", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript", "SQL", "R", "MATLAB", "Go", "Rust", "Scala", "Perl", "Shell Scripting", "Objective-C", "Groovy", "Bash", "VB.NET", "Ruby on Rails", "Angular", "React", "Vue.js", "Node.js", "Django", "Flask", "Laravel", "Spring Boot", "Express.js", "ASP.NET", "TensorFlow", "PyTorch", "Kubernetes", "Docker", "Apache Spark", "Apache Kafka", "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Oracle Database"]
//     formattedSkills = formatSkills(this.dummySkills)
//     searchValue
//     filteredSkills = !this.searchValue && this.formattedSkills

//     @wire(getRecord, { recordId: '$recordId', fields: [SKILLS_FIELD] })
//     opportunityProduct;

//     get skills() {
//         if (this.opportunityProduct.data && this.opportunityProduct.data.fields.Skills__c.value) {
//             return this.opportunityProduct.data.fields.Skills__c.value.split(', ');
//         }
//         return [];
//     }


//     get skillOptions() {
//         return this.formattedSkills
//       }

//       handleCheckboxChange(event) {
//         this.selectedSkills = event.detail.value;
//     }

//     // handleCheckboxChange(event)

//     handleInputChange(event) {
//         const inputValue = event.target.value;
//         this.filteredSkills = searchSkills(inputValue, this.formattedSkills)

//         this.searchValue = inputValue
//         console.log('Input Field Value:', this.searchValue);
//     }
// }


import { LightningElement, track } from 'lwc';
// import { LightningElement, api, track, wire } from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';
// import SKILLS_FIELD from '@salesforce/schema/OpportunityLineItem.Skills__c';

function formatSkills(skills) {
  return skills.map(skill => ({
    label: skill,
    value: skill,
    checked: false,
  }));
}

const checkSkills = (allSkills, selectedSkills) => {
    // we can make the assumption that selectedSkills must be in allSkills

    // so we can just iterate through selected skills and find() the skill in 
    // allSkills and modify its checked to true
    selectedSkills.forEach(selectedSkill => {
        
    });

}

export default class OpportunityProductSkillsManager extends LightningElement {
    // @api recordId;

    @track dummySkills = [
    'Azure skill 1',
    'Azure skill 2',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'PHP',
    'Swift',
    'Kotlin',
    'TypeScript',
    'SQL',
    'R',
    'MATLAB',
    'Go',
    'Rust',
    'Scala',
    'Perl',
    'Shell Scripting',
    'Objective-C',
    'Groovy',
    'Bash',
    'VB.NET',
    'Ruby on Rails',
    'Angular',
    'React',
    'Vue.js',
    'Node.js',
    'Django',
    'Flask',
    'Laravel',
    'Spring Boot',
    'Express.js',
    'ASP.NET',
    'TensorFlow',
    'PyTorch',
    'Kubernetes',
    'Docker',
    'Apache Spark',
    'Apache Kafka',
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'Firebase',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Oracle Database',
  ];

  @track skillOptions = [];
  @track filteredSkills = [];
  @track selectedSkills =[];
  connectedCallback() {
    const formattedSkills = formatSkills(this.dummySkills);
    const skillsAlreadyChecked = checkSkills(formattedSkills, this.selectedSkills)
    this.filteredSkills = this.skillOptions;
  }

  handleCheckboxChange(event) {
    const selectedValue = event.target.value;
    this.skillOptions = this.skillOptions.map(skill => {
      if (skill.value === selectedValue) {
        return { ...skill, checked: event.target.checked };
      }
      return skill;
    });
  }

  handleInputChange(event) {
    const searchValue = event.target.value.toLowerCase();
    this.filteredSkills = this.skillOptions.filter(skill =>
      skill.label.toLowerCase().includes(searchValue)
    );
  }
}