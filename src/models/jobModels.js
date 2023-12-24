

export default class jobModel{
    constructor(id, companyName, jobLocation, jobDesignation, salary, skillsRequired, numberOfOpenings) {
        this.id = id;
        this.companyName = companyName;
        this.jobLocation = jobLocation;
        this.jobDesignation = jobDesignation;
        this.salary = salary;
        this.skillsRequired = Array.isArray(skillsRequired) ? skillsRequired : [];
        this.numberOfOpenings = numberOfOpenings;
    }
        static getAllJob(){
            return jobs;
        };
    
        static getJobById(id){
            return jobs.find((job) => job.id == id);
        };
    
        static createJob(jobData){
            const id = jobs.length + 1;
            const newJob = new jobModel(id, ...jobData);
            jobs.push(newJob);
            return newJob;
        };
}

var jobs = [
    new jobModel(
        1,
        'Coding Ninjas',
        'Bangalore IND',
        'SDE Intern',
        '14-20Lpa',
        ['ReactJS', 'JS', 'Express'],
        '2'
      ),
      new jobModel(
        2,
        'Amazon',
        'Hydrabad',
        'SDE 1',
        '35Lpa',
        ['ReactJS', 'Backend', 'Express', 'Nodejs'],
        '5',
      ),
];