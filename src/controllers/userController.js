// controllers/userController.js

import UserModel from "../models/userModels.js";
import jobModel from "../models/jobModels.js";


let checkLogin = false;


export default class UserController {
  // Register a new user

  getRegister(req, res){
    res.render("register");
  }
registerUser(req, res) {
    const { name, email, password } = req.body;

    // Check if user already exists with the email
    const user = UserModel.findUserByEmail(email);
    if (user) {
       
      return res.render('register', { errorMessage : "user is already registered" });
    }

    // Add the user
    const newUser = UserModel.addUser(name, email, password);
    if(newUser){
        return res.render("login");
    }
  }

  // Login a user

  getLogin(req, res){
    res.render("login");
  }

  postLoginUser(req, res) {
    const { email, password } = req.body;

    // Find the user by email
    const user = UserModel.findUserByEmail(email);

    // Check if the user exists and password matches
    if (!user || user.password !== password) {
      return res.render("error");
    }

    const jobs = jobModel.getAllJob();

    checkLogin = true;
    // req.session.userId = user.id;
    res.render("jobList", {jobs, isLoggedIn : true });
  }

  // Logout a user
  static logoutUser(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to logout' });
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.status(200).json({ message: 'Logged out successfully' });
    });
  }
}


export {checkLogin};