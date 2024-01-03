const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const LoginModel = require('./models/Loginauth');
const UpdateDetails = require("./models/UpdateDetails");
const Admin = require ("./models/Admin");
const bcrypt = require("bcrypt");

const DeepakPgReview = require("./models/DeepakReview");
const SuvidhaReview = require("./models/SuvidhaReview");
const ChauhanReview = require("./models/ChauhanReview");
const SharmaReview = require("./models/SharmaReview");
const ShivShaktiReview = require("./models/ShivShaktiReview");
const ThakurReview = require("./models/ThakurReview");
const CdReview = require("./models/CdReview");
const ParvatiReview = require("./models/ParvatiReview");
const Loginauth = require("./models/Loginauth");
const SaraswatiReview = require("./models/SaraswatiReview");
const KdReview = require("./models/KdReview");
const GreenReview = require("./models/GreenReview");
const WhiteReview = require("./models/WhiteReview");
const PinkReview = require("./models/PinkReview");
const UmarReview = require("./models/UmarReview");
const KeperateReview = require("./models/Keperate");
const IbydeneReview = require("./models/Ibydene");

require("dotenv").config();


const app = express();
app.use(express.json());
const bcryptSalt = bcrypt.genSaltSync(10);

//-------------------------------------------------------USING CORS MIDDLEWARE TO CONNECT FRONTEND AND BACKEND----------------------
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

//-----------------------------------------------------MONGGOOSE CONNECTION----------------------------------------------------------

mongoose
  .connect("mongodb+srv://ankitsh474:anshu474abvgiet07@cluster0.vc9gvqt.mongodb.net/")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

  app.get("/test", (req, res) => {
    res.json("test ok");
  });
//------------------------------------------------------------------------------------------------
  app.post('/login',async(req,res)=>{
     const {name,email} = req.body;
        const userDoc = await LoginModel.create({
          name,email
        });
        console.log("heleo")
        res.json("printed");
      // res.json(userDoc);
  })
//------------------------------------------------------------------------------------------------
 app.get("/logindata",async(req,res)=>{
  // const isEmail = req.body;
  // console.log(isEmail);
  const count = await LoginModel.countDocuments();
   const data = await LoginModel.find({});
   res.json({ success: true, data: data ,count});
 })

//------------------------------------------------------------------------------------------------
// app.get("/getusers",async(req,res)=>{
//   const data = await Loginauth.find({});
//   res.json(data);
// });
//------------------------------------------------------------------------------------------------
//       for ankit sharma to add rent firstly  and can also be done by pg owners
 app.post('/adddetails',async(req,res)=>{
       const {rentG,rentB,rooms,vacant,email,accomodation} = req.body;
       const userDoc = await UpdateDetails.create({
         rentG,
         rentB,
         rooms,
         vacant,
         email,
         accomodation,
       });
       res.json("added succesfully");
 })


//------------------------------------------------------------------------------------------------
// for admin of pgs to update the rent 
app.put('/updatedetails',async(req,res)=>{
       const {email,rentG,rentB,rooms,vacant,accomodation} = req.body;
       const _id = await UpdateDetails.find({email:email});
       console.log(_id + "  "+ rentG+ "  "+rentB + "  "+ rooms + "  "+ vacant);
       const data = await UpdateDetails.updateOne(
         { _id: _id },
         { rentG,rentB, rooms, vacant ,accomodation}
       );
       res.send({ success: true, message: "data updated successfully", data: data });
});










//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
/// used in admin folder UpdateForm.js file to login to get details of all admin emails 
app.get('/alldetialsofaccomodation',async(req,res)=>{
  const data = await UpdateDetails.find({});
  res.json({success:true,data:data});
})
















//------------------------------------------------------------------------------------------------
// ------------------=====================registering admins   (inside admin folder)-------------------------------------
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await Admin.create({
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});
 //------------------------------------------------------------------------------------------------
// ------------------=====================login admins   (inside admin folder)-------------------------------------
app.post("/loginadmin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email+" "+ password);
  const userDoc = await Admin.findOne({ email: email });
  console.log(userDoc);

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
       res.status(200).json({
         message: "Login Successfully",
         email:email,
       });
  } else {
            return res
              .status(400)
              .json({ message: "please enter correct password" });
  }
}else{
  return res.status(400).json({ message: "please enter correct email" });
}
});



//-------------------------++++++++++++++  ACCOMODATION DETAILS   (RENT,ROOMS,VACANT)  -----------------------------------------------------------------------    
//------------------------------------------------------------------------------------------------
app.get("/dataofdeepakpg",async(req,res)=>{
  const data1 = await UpdateDetails.find({accomodation : "Deepak PG"});
  console.log(data1);
  // const data = await UpdateDetails.find({});
  // console.log(data);
  res.json({ success: true, data: data1 });
})

//------------------------------------------------------------------------------------------------
app.get("/dataofsuvidhapg", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Suvidha PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});

//------------------------------------------------------------------------------------------------
app.get("/dataofsharmapg", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Sharma PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofchauhanpg", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Chauhan PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofshivshaktipg", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "ShivShakti PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofthakurpg", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Thakur PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofkeperate", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Keperate PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofibydene", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Ibydene PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofcd", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "CD" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofkd", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "KD" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofgreen", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Green Building" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofwhite", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "White Building" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofpink", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Pink Building" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofumar", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Umar Cottage" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofkeperate", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Keperate PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofibydene", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Ibydene PG" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//---
//------------------------------------------------------------------------------------------------
app.get("/dataofparvati", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Parvati Hostel" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});
//------------------------------------------------------------------------------------------------
app.get("/dataofsaraswati", async (req, res) => {
  const data1 = await UpdateDetails.find({ accomodation: "Saraswati Hostel" });
  console.log(data1);
  res.json({ success: true, data: data1 });
});

//        REVIEWS RELATED APIS

//------------------------------------------------------------------------------------------------
//---------------------fetching data of all pgs for reviews ---------------------------------------

// deepak 
  app.get("/", async (req, res) => {
    const data = await DeepakPgReview.find({});
    res.json({ success: true, data: data });
  });
//------------------------------------------------------------------------------------------------
    app.get("/suvidha", async (req, res) => {
      const data = await SuvidhaReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------
 //------------------------------------------------------------------------------------------------
    app.get("/chauhan", async (req, res) => {
      const data = await ChauhanReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/sharma", async (req, res) => {
      const data = await SharmaReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------
 
 //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/shivshakti", async (req, res) => {
      const data = await ShivShaktiReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/thakur", async (req, res) => {
      const data = await ThakurReview.find({});
      res.json({ success: true, data: data });
    });
    //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/keperate", async (req, res) => {
      const data = await KeperateReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/cd", async (req, res) => {
      const data = await CdReview.find({});
      res.json({ success: true, data: data });
    });
//------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/parvati", async (req, res) => {
      const data = await ParvatiReview.find({});
      res.json({ success: true, data: data });
    });
    //------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/saraswati", async (req, res) => {
      const data = await SaraswatiReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------
//  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/kd", async (req, res) => {
      const data = await KdReview.find({});
      res.json({ success: true, data: data });
    });
    //  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/ibydene", async (req, res) => {
      const data = await IbydeneReview.find({});
      res.json({ success: true, data: data });
    });
//  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/green", async (req, res) => {
      const data = await GreenReview.find({});
      res.json({ success: true, data: data });
    });
//  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/white", async (req, res) => {
      const data = await WhiteReview.find({});
      res.json({ success: true, data: data });
    });

    //  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/pink", async (req, res) => {
      const data = await PinkReview.find({});
      res.json({ success: true, data: data });
    });
        //  ------------------------------------------------------------------------------------------------//------------------------------------------------------------------------------------------------
    app.get("/umar", async (req, res) => {
      const data = await UmarReview.find({});
      res.json({ success: true, data: data });
    });
 //------------------------------------------------------------------------------------------------
 //------------------------------Reviews of pg (POST)------------------------------------------------------------------
  app.post("/deepakpgreview", async (req, res) => {
    const { comment, rating, name } = req.body;
    const userDoc = await DeepakPgReview.create({
      comment,
      rating,
      name,
    });
    res.json("added successfully");
  });
 //------------------------------------------------------------------------------------------------
   app.post("/suvidhapgreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await SuvidhaReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
 //------------------------------------------------------------------------------------------------
 //------------------------------------------------------------------------------------------------
   app.post("/chauhanpgreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await ChauhanReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
 //------------------------------------------------------------------------------------------------ //------------------------------------------------------------------------------------------------
   app.post("/sharmapgreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await SharmaReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
    //------------------------------------------------------------------------------------------------
   app.post("/shivshaktipgreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await ShivShaktiReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
      //------------------------------------------------------------------------------------------------
   app.post("/thakurpgreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await ThakurReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
    //------------------------------------------------------------------------------------------------
   app.post("/keperatereview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await KeperateReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
       //------------------------------------------------------------------------------------------------
   app.post("/ibydenereview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await IbydeneReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
//------------------------------------------------------------------------------------------------
   app.post("/cdreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await CdReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
   //------------------------------------------------------------------------------------------------
   app.post("/kdreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await KdReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
      //------------------------------------------------------------------------------------------------
   app.post("/greenreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await GreenReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
      //------------------------------------------------------------------------------------------------
   app.post("/whitereview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await WhiteReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
      //------------------------------------------------------------------------------------------------
   app.post("/pinkreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await PinkReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
      //------------------------------------------------------------------------------------------------
   app.post("/umarreview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await UmarReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
//------------------------------------------------------------------------------------------------
   app.post("/parvatireview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await ParvatiReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
   //------------------------------------------------------------------------------------------------
   app.post("/saraswatireview", async (req, res) => {
     const { comment, rating, name } = req.body;
     const userDoc = await SaraswatiReview.create({
       comment,
       rating,
       name,
     });
     res.json("added successfully");
   });
 //------------------------------------------------------------------------------------------------
app.listen(4000);
