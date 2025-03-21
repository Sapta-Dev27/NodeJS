const mongoose = require('mongoose');

//connecting the database //
mongoose.connect("mongodb+srv://saptadev27:saptadev27@cluster0.dyblg.mongodb.net/")
  .then(() => {
    console.log(" Database Connection is succesfull");
  }).catch((e) => {
    console.log(e)
  });

//creating the schema//
const UserSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  useAge: Number,
  userIsActive: Boolean,
  role: [String],
  createAt: { type: Date, default: Date.now }
})

//creating the model //
const user = mongoose.model("User", UserSchema);


//

async function databaseQuaries() {
  try {

    //creating a new user //
    const newUser = await user.create({
      userName: "anuska biswas",
      userEmail: "anuskabiswas@gmail.com",
      useAge: 20,
      userIsActive: true,
      role: "backend developer",

    })
    console.log(newUser);
    console.log("User created succesfully");

    //searching for a user by some particulars//
    const getUserbyRole = await user.find({
      role: "developer",
      userIsActive: true,
    })

    console.log(getUserbyRole);

    if (getUserbyRole) {
      console.log("User found succesfully");
    }
    else {
      console.log("Not Found ")
    }

    //selecting some users by some particulars //

    const getUserBySelect = await user.find().select("userName userEmail  -_id")
    console.log(getUserBySelect)

    const getUserBySelect2 = await user.find().select("userIsActive useAge -_id")
    console.log(getUserBySelect2)

    //sorting the users in ascending or descending order //
    const getUsersBySorted = await user.find().sort( {
      useAge : 1
    })
    console.log(getUsersBySorted);//in ascending order//

    const getUsersBySorted2 = await user.find().sort({
      useAge : -1 
    })
    console.log(getUsersBySorted2)// in descending order //
  }
  catch (e) {
    console.log("Error is : ", e);
  }
  finally {
    await mongoose.connection.close();
  }
}

databaseQuaries()