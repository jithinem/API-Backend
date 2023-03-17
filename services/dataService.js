//importing db.js
const db=require('./db');


//getting all Api details from db
const getAllApi=()=>{
    return db.Bug.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Api:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Api not found"
                }
            }
        }
    )
}

//getting details on edit click
const editDisplay=(_id)=>{
    return db.Bug.findOne({_id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Api:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Api not found"
                }
            }
        }
    )
}

//updating
const update=(_id,name,age,salary,post,date)=>{
    return db.Bug.findOne({_id}).then(
        result=>{
            if(result){
                result.name=name
                result.age=age
                result.salary=salary
                result.post=post
                result.date=date
                result.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"Updation successful",
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Incorrect user credentials"
        
                }
            }        
        }
    )
}

  //To delete api
  const deleteApi=(_id)=>{
    return db.Bug.deleteOne({_id}).then(
      result=>{
        if(result){
          return{
            status:true,
            statusCode:200,
            message:"APi deleted"
          }
        }
        else{
          return{
            status:false,
            statusCode:401,
            message:"Api not found"
          }
        }
      }
    )
  }


  //creating new
  const createNew=(name,age,salary,post,date)=>{
    return db.Bug.findOne({name,age,salary,post,date}).then(
      result=>{
        if(result){
          return{
            status:false,
            statusCode:401,
            message:"Api already exists"
          }
        }
        else{
          const newResult=new db.Bug({
            name:name,
            age:age,
            salary:salary,
            post:post,
            date:date
          })
          newResult.save();  //to save new data to mongodb
          return{
            status:true,
            statusCode:200,
            message:"Registered successfully"       
          }
        }
      }
    )
  }





// const getAllApiBug=()=>{
//     return db.Bug.find({nos:null}).then(
//         (result)=>{
//             if(result){
//                     return{
//                         status:true,
//                         statusCode:200,
//                         APi:result
//                     }
                
//             }
//             else{
//                 return{
//                     status:false,
//                     statusCode:401,
//                     message:"Bugs not found"
//                 }
//             }
//         }
//     )
// }


module.exports={
    getAllApi,
    editDisplay,
    update,
    deleteApi,
    createNew
    // getAllApiBug
}

