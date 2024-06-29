// // npm init : package.json - This is a node project (install node js file for the project)
// //npm i express : install express js package

// const express = require("express");
// const mongoose= require("mongoose");
// const JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// const AuthRoutes = require("./Routes/Auth");    
// const songRoutes = require("./Routes/song");
// require("dotenv").config();
// const passport = require("passport");
// const USer = require("./models/User");
// const app = express();
// const port = 8000;

// app.use(express.json());

// // connect mongodb to our node app.
// // mongoose.connect() takes 2 argunments : 1. which db to connect (using url), 2. Connection options
// mongoose.connect(
//     "mongodb+srv://MannShah:" +
//     process.env.MONGO_PASSWORD +
//     "@cluster0.w7gzuhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }    
// )
// .then((x) => {
//     console.log("Connected to MongoDB")
// })
// .catch((err) => {
//     console.log("Error while connecting to Mongo");
// });

// // SetUp Passport-JWT

// let opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = /*process.env.JWT_SECRET*/"thisKeyIsSupposedToBeSecret";
// passport.use
//     (new JwtStrategy(opts, function(jwt_payload, done) {
//         User.findOne({id: jwt_payload.sub}, function(err, user) {
//             // done(error, doesTheUSerExist)
//             if (err) {
//                 return done(err, false);
//             }
//             if (user) {
//                 return done(null, user);
//             } else {
//                 return done(null, false);   
//             // or you could create a new account
//         }
//     });
// }));

// //API : GET type : / : return text "Hello world"
// app.get("/", (req, res) =>{
//     // req contains all data for request
//     // res contains all data for response
//     res.send("Hello World");
// });

// app.use("/Auth", AuthRoutes); // For opening specific page and carry on pages
// app.use("/song", songRoutes)

// // Now we want to tell express that our server will run on localhost : 8000
// app.listen(port, () => {
//     console.log("App is running on port " + port);
// });



// npm init : package.json -- This is a node project.
// npm i express : expressJs package install hogya. -- project came to know that we are using express
// We finally use express

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const AuthRoutes = require("./Routes/Auth");
const songRoutes = require("./Routes/song");
const playlistRoutes = require("./Routes/playlist");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// connect mongodb to our node app.
// mongoose.connect() takes 2 arguments : 1. Which db to connect to (db url), 2. 2. Connection options
mongoose
    .connect(
        "mongodb+srv://MannShah:" +
        process.env.MONGO_PASSWORD +
        "@cluster0.w7gzuhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((x) => {
        console.log("Connected to Mongo!");
    })
    .catch((err) => {
        console.log("Error while connecting to Mongo");
    });

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({_id: jwt_payload.identifier});
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        } catch (err) {
            return done(err, false);
        }
    })
);
    

// API : GET type : / : return text "Hello world"
app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});
app.use("/Auth", AuthRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});