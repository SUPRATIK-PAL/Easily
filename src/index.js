import express from "express";
import path from "path";
import jobController from "./controllers/jobController.js";
import UserController from "./controllers/userController.js";
import { checkLogin } from "./controllers/userController.js";

const app = express();
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(path.resolve(),"src",'views')); 
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) =>{
//     res.send("agniva chutiya");
// });

// Route for the dashboard

const jobControl = new jobController();
const userControl = new UserController();

app.get("/jobs", jobControl.getJobList);
app.get("/jobs/:id", jobControl.getJobDetails);
// app.get("/register", jobControl.getlogin);

app.get("/register", userControl.getRegister);
app.post("/register", userControl.registerUser);
app.get("/login", userControl.getLogin);
app.post("/login", userControl.postLoginUser);


app.get("/jobCreate", jobControl.getCreateJob);
app.post("/jobCreate", jobControl.create);

app.get("/", (req, res) => {
    if(checkLogin){
        res.render('homePage', { isLoggedIn : true });
      }else{
        res.render('homePage', { isLoggedIn : false });
      }
})


app.listen(5000, () => {
    console.log("server is listening");
});
