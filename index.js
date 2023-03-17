//importing express
const express = require('express');

//importing cors
const cors=require('cors')

//creating an app using express
const app=express();

//specifying the origin to the server by using cors
app.use(cors({
    origins:'http://localhost:4200'
}))


//connection between index and dataservice
const dataService=require('./services/dataService');

//for JSON to JS conversion
app.use(express.json());

//Creating a port number
app.listen(3000,()=>{
    console.log('listening on port 3000');
});

//API call to get Api
app.get('/allApi',(req,res)=>{
    dataService.getAllApi().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API call display details on edit click
app.post('/editDisplay',(req,res)=>{
    dataService.editDisplay(req.body.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API call to update
app.patch('/updateApi',(req,res)=>{
    dataService.update(req.body.id,req.body.name,req.body.age,req.body.salary,req.body.post,req.body.date).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.delete('/deleteApi/:id',(req,res)=>{
    dataService.deleteApi(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//API call to create new
app.post('/createNew',(req,res)=>{
    dataService.createNew(req.body.name,req.body.age,req.body.salary,req.body.post,req.body.date).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
    console.log(req.body.date);
})






// a=null;
// b=null;
// c=null;
// d=null;
// e=null;
// nos=null;

// //API call to get bug
// app.get('/allApiBug',(req,res)=>{
//     dataService.getAllApiBug().then(
//         result=>{
//             res.status(result.statusCode).json(result)
//         }
//     )
// })





