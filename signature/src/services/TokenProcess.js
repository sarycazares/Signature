import {AxiosConfig as axios} from "./AxiosConfig"
const express = require("express");
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
const port = 3000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add router in express
app.use("/", router);

//POST route
router.post("/post", async (req, res) => {
//Destructuring response token from request body
    const {token} = req.body;

//sends secret key and response token to google
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcbXRojAAAAABf80rZplZkBO92ig5T6AIc-P-ly&response=${token}`
      );

//check response status and send back to the client-side
      if (res.status(200)) {
        res.send("Human 👨 👩");
    }else{
      res.send("Robot 🤖");
    }
});

app.listen(port, () =>{
    console.log(`server is running on ${port}`);
});