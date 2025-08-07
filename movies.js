const mongoose = require('mongoose');


main()
  .then(() => {
    console.log("connection is successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coldstar');
}


const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //title is mandatory now - SQL NOT NULL
    maxLength: 20,
  },
  Actor: {
    type: String,
  },
  Director: {
    type: String,
  },
  price: {
    type: Number,
    default: 0, //or min : 1   or  min: [1 , "price is too low for box office"] - custom error
  },
  genre: {
    type: String,
    enum: ["sci-fi", "action", "comedy", "superhero", "romantic", "anime", "Racing"],
  },
  language: [String],
});


const Movie = mongoose.model("Movie", movieSchema);

// Movie.findByIdAndUpdate("688b9c1d0b11e43452c8544e",  {runValidators: true} )  // runValidators ensures Mongoose applies schema rules when updating documents
// .then((res) => {
//   console.log(res);
// })
//   .catch((err) => {
//     console.log(err.errors.price.properties.message);
//   });


// let movie1 = new Movie({
//   title: "Pathaan",
//   Actor: "Shah Rukh Khan",
//   Director: "Sid Anand",
//   price: 450,
// });

// let movie1 = new Movie({
//   title: "Jawan",
//   Actor: "Shah Rukh Khan",
//   Director: "Atlee",
//   price: 550,
// });


// let movie1 = new Movie({
//   title: "F1 The Movie",
//   Actor: "Brad Pitt",
//   Director: "Joseph Kosinski",
//   price: 800,
//   category: "Racing",
//   // language: ["hindi", "english", "japanese"]
// });



// movie1.save().then((res) => {
//   console.log(res);
// })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.updateOne(
//   { _id: '688b9c1d0b11e43452c8544e' },
//   { $unset: { language: 1 } }
// )
// .then(() => console.log('language field deleted'))
// .catch(err => console.error(err));

