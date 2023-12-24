// models/User.js

// Dummy in-memory storage for users
let users = [];

export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Function to add a new user
  static addUser(name, email, password) {
    const newUser = new UserModel(users.length + 1, name, email, password);
    users.push(newUser);
    return newUser;
  }

  // Function to find a user by email (for login)
  static findUserByEmail(email) {
     return users.find(user => user.email === email);
  }

  // Function to find a user by ID
  static findUserById(id) {
    return users.find(user => user.id === id);
  }
}

