once installed to run this command in shell : mongosh

show dbs: showing all the dbs

use college :college name db created 

it is temporary database once data is inserted it will set up permanently

to check current database: enter db in shell 

show collections it will be empty 

once data is insreted it will show collections  

college>  db.student.insertOne( {name: "shradha", city: Delhi, marks: 88 })

college> db.student.find()

db.student.insertOne( {name: "krishna", age: 19, marks: 88 })

college> db.student.find()


two ids are formed:

college>  db.student.insertMany([ { name: "catlyn", marks:64, city:"Delhi"}, {name:"Donald",marks:58, city:"mumbai"} ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67dd238b161fafaee2b71238'),
    '1': ObjectId('67dd238b161fafaee2b71239')
  }
}
college>  db.student.find()

in shell enter : college> db.student.find( {city:"Delhi"})

in shell enter : college> db.student.findOne( {city:"Delhi"})

db.student.find({ marks: { $gt: 50 } })


upadte in mongogb search cgpt

nesting also

deleting also


Method	                         Description
updateOne()                      Updates the first document that matches the filter.
updateMany()	                 Updates all documents that match the filter.
replaceOne()	                 Replaces the entire document.
findOneAndUpdate()	             Finds and updates a document, returns the original or new document.


db.student.updateOne({ name: "krishna" },{ $set: { city: "kpd" } })

//updateMany():
db.student.updateMany(
  { marks: 88 },
  { $set: { city: "Bangalore" } }
)


//replaceOne():

db.student.replaceOne(
  { name: "Donald" },
  {
    name: "Donald",
    age: 30,
    marks: 90,
    city: "Delhi"
  }
)


Before:
{
  name: "Donald",
  marks: 58,
  city: "mumbai"
}

After:
{
  name: "Donald",
  age: 30,
  marks: 90,
  city: "Delhi"
}
//findOneAndUpdate()
db.student.findOneAndUpdate(
  { name: "krish" },
  { $set: { age: 60 } },
  { returnDocument: "after" }
)

// Returns:
{
  _id: ObjectId("683563f92db15731adb71239"),
  name: "krish",
  city: "Hyd",
  age: 60
}


 //Decide Nesting Format

 const nestedData = [
  {
    city: "Bangalore",
    people: [
      {
        _id: ObjectId("67dd20e7161fafaee2b71236"),
        name: "krishna",
        age: 19,
        marks: 88
      },
      {
        _id: ObjectId("67dd21ed161fafaee2b71237"),
        name: "shradha",
        marks: 88
      }
    ]
  },
  {
    city: "Delhi",
    people: [
      {
        _id: ObjectId("67dd238b161fafaee2b71238"),
        name: "catlyn",
        marks: 64
      },
      {
        _id: ObjectId("67dd238b161fafaee2b71239"),
        name: "Donald",
        age: 30,
        marks: 90
      }
    ]
  },
  {
    city: "Hyd",
    people: [
      {
        _id: ObjectId("683563f92db15731adb71239"),
        name: "krish",
        age: 60
      }
    ]
  },
  {
    city: "mum",
    people: [
      {
        _id: ObjectId("683563f92db15731adb7123a"),
        name: "kri",
        comapny: "cooler"
      }
    ]
  },
  {
    city: "Unknown",
    people: [
      {
        _id: ObjectId("6835620c2db15731adb71236"),
        name: "krishna",
        age: 25,
        marks: 100
      }
    ]
  }
];



// deleting concept

✅ Step 1: Delete a Single Document — deleteOne()
Let’s say we want to delete the first krishna document (age 19).

db.student.deleteOne({name: "krishna", age: 19})
Result:
{ acknowledged: true, deletedCount: 1 }

✅ Step 2: Delete All Matching Documents — deleteMany()
Let’s say you want to delete all students named "krishna":

db.student.deleteMany({name: "krishna"})
Result:
{ acknowledged: true, deletedCount: 2 }  // if 2 krishna records exist

✅ Step 3: Delete by ObjectId (Best Practice)
Each document has a unique _id. To delete a specific document:

db.student.deleteOne({_id: ObjectId("6835620c2db15731adb71236")})
Result:
{ acknowledged: true, deletedCount: 1 }

✅ Step 4: Delete All Documents (⚠️ DANGEROUS)
If you want to delete everything in the collection:

db.student.deleteMany({})
⚠️ Be careful — this will delete all students.

✅ Step 5: Check Remaining Documents
After deletion, you can verify with:


db.student.find().pretty()
❓ Bonus Tip: Use find() before delete
Before deleting, it’s good to verify which records match your condition:

db.student.find({name: "krishna"})
🧹 Recap
Goal	        Command                 Example
Delete one	    db.student.deleteOne({name: "krishna", age: 19})
Delete all      matching	db.student.deleteMany({name: "krishna"})
Delete by ID	db.student.deleteOne({_id: ObjectId("your_id_here")})
Delete all	    db.student.deleteMany({})

db.student.drop();
db.createCollection("student");