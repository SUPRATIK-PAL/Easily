// controllers/dashboardController.js
import jobModel from "../models/jobModels.js"

import { checkLogin } from "./userController.js";
export default class jobController{

    getJobList(req, res){
        const jobs = jobModel.getAllJob();

        if(checkLogin){
          res.render('jobList', { jobs, isLoggedIn : true });
        }else{
          res.render('jobList', { jobs, isLoggedIn : false });
        }
      };
      
      getJobDetails(req, res){
        const jobId = req.params.id;
        const job = jobModel.getJobById(jobId);
        console.log(job);

        if(checkLogin){
          res.render('jobDetails', { job, isLoggedIn : true });
        }else{
          res.render('jobDetails', { job, isLoggedIn : false });
        }
      };

      getCreateJob(req, res){
        res.render("createJob");
      }

      getregister(req, res){
        res.render("register");
      }

      create(req, res){
        const { companyName, jobLocation, jobDesignation, salary, skillsRequired, numberOfOpenings } = req.body;

        const skillsArray = skillsRequired.split(',').map(skill => skill.trim());

        // Create a new job using the jobModel
        const newJob = jobModel.createJob([companyName, jobLocation, jobDesignation, salary, skillsArray, numberOfOpenings]);

        // Redirect or respond as needed
        const jobs = jobModel.getAllJob();
        res.render('jobList', {jobs}); 
      }
}


