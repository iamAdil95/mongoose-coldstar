

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("connection is successful");
  })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

 const User = mongoose.model("User", userSchema); // 1st USER - MODEL AND 2ND IS A COLLECTION
// const Employee = mongoose.model("Employee", userSchema);

User.deleteOne({ name: "riruru" })
 .then((res) => {
  console.log(res);
 }).catch((err) => {
   console.log(err);
  });


// //if true, return the modified document rather than the original
// User.findOneAndUpdate({ name: "Peter" }, { age: 17 }, { new: true })  //Updated value will show in cmd and old 1st value in terminal cause of findONE
//  .then((res) => {
//   console.log(res);
//  }).catch((err) => {
//   console.log(err);
//  });


// User.updateOne({ name: "STEVE" }, { age: 95 })
//  .then((res) => {
//   console.log(res);
//  }).catch((err) => {
//   console.log(err);
//  });


// User.find({ age: { $gt: 47 } }) //User.findOne
//   .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// User.insertMany([
//   { name: "STEVE", email: "captainamerica1@gmail.com", age: 75 },
//   { name: "Peter", email: "spiderman3@gmail.com", age: 19 },
//   { name: "Odinson", email: "thor7@gmail.com", age: 5000 },
// ]).then((res) => {
//   console.log(res);
// });


// const user2 = new User({
//   name: "riruru",
//   email: "ruru1@gmail.com",
//   age: 17,
// });

// //user1.save(); // asynchronous method - it returns a promise
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


