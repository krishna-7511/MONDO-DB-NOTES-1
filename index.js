const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee",userSchema);

//Insert into mongoose (Single insertion)
const user3 = new User({
    name:"Keshav",
    email: "keshav@yahoo.com",
    age: 20,
});
user3.save().then((res)=>{
    console.log(res);
})
.catch((err)=>console.log(err));

//InsertMany method
User.insertMany([
  { name: "Anivesh", email: "anivesh@gmail.com", age: 20 },
  {
    name: "Aman",
    email: "aman@gmail.com",
    age: 18,
  },
  {
    name: "Saurabh",
    email: "saurabh@gmail.com",
    age: 18,
  },
]).then((res) => console.log(res));

//Find in Mongoose
User.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//With Operators
User.findOne({age: {$lte:18}})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//With ID Method : findById()
User.findById("657c359267cb6d701fca374c")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Update in Mongoose
User.updateOne({ name: "Aman" }, { age: 49 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


User.findOneAndUpdate( {name: "Bruce"}, {age: 42}, {new: true})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

//FINDANDUPDATE
User.findByIdAndUpdate('657c359267cb6d701fca374c', { age: 20 },{new: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete in Mongoose
User.findOneAndDelete({
  name:"Adam"
}).then((res)=>{
  console.log(res);
})
.catch((err)=>console.log(err));


User.findByIdAndDelete("65040698f22ac2f568521388")
.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});


/*  chatgpt code 
    const mongoose = require("mongoose");

// Step 1: Establish MongoDB Connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("✅ MongoDB connection established successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
main();

// Step 2: Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Step 3: Create Models (User and Employee share the same schema)
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema); // Optional if you're using both collections

// ------------------------ CRUD OPERATIONS ------------------------ //

// ✅ Step 4: Insert One Document
const user1 = new User({
  name: "Keshav",
  email: "keshav@yahoo.com",
  age: 20,
});
user1.save()
  .then(res => console.log("Inserted one user:", res))
  .catch(err => console.log("Insert One Error:", err));

// ✅ Step 5: Insert Multiple Documents
User.insertMany([
  { name: "Anivesh", email: "anivesh@gmail.com", age: 20 },
  { name: "Aman", email: "aman@gmail.com", age: 18 },
  { name: "Saurabh", email: "saurabh@gmail.com", age: 18 },
])
  .then(res => console.log("Inserted multiple users:", res))
  .catch(err => console.log("InsertMany Error:", err));

// ✅ Step 6: Find All Documents
User.find({})
  .then(data => console.log("All users:", data))
  .catch(err => console.log("Find All Error:", err));

// ✅ Step 7: Find One Document with Operator
User.findOne({ age: { $lte: 18 } })
  .then(data => console.log("User with age <= 18:", data))
  .catch(err => console.log("FindOne with operator error:", err));

// ✅ Step 8: Find by ID
User.findById("657c359267cb6d701fca374c")
  .then(data => console.log("Find by ID result:", data))
  .catch(err => console.log("FindById Error:", err));

// ✅ Step 9: Update One Document
User.updateOne({ name: "Aman" }, { age: 49 })
  .then(res => console.log("UpdateOne Result:", res))
  .catch(err => console.log("UpdateOne Error:", err));

// ✅ Step 10: Find One and Update (Returns updated document)
User.findOneAndUpdate(
  { name: "Bruce" },
  { age: 42 },
  { new: true } // Return the updated document
)
  .then(res => console.log("FindOneAndUpdate Result:", res))
  .catch(err => console.log("FindOneAndUpdate Error:", err));

// ✅ Step 11: Find by ID and Update
User.findByIdAndUpdate(
  "657c359267cb6d701fca374c",
  { age: 20 },
  { new: true } // Return updated document
)
  .then(res => console.log("FindByIdAndUpdate Result:", res))
  .catch(err => console.log("FindByIdAndUpdate Error:", err));

// ✅ Step 12: Delete One Document by Condition
User.findOneAndDelete({ name: "Adam" })
  .then(res => console.log("FindOneAndDelete Result:", res))
  .catch(err => console.log("FindOneAndDelete Error:", err));

// ✅ Step 13: Delete One Document by ID
User.findByIdAndDelete("65040698f22ac2f568521388")
  .then(res => console.log("FindByIdAndDelete Result:", res))
  .catch(err => console.log("FindByIdAndDelete Error:", err));


*/