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