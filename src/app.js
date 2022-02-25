require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/main');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const Service = require('./models/Service');

//middlewares
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use('/static',express.static('public'));
app.use('',routes);

//template engine setup
app.set('view engine','hbs');
app.set('views','views');
hbs.registerPartials('views/partials');
// mongodb 
const URL = process.env.DB_URL;
mongoose.connect(URL,
    ()=>{
    console.log('db connect');


    // Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'We provide courses that helps our student in learning and in placement',
    //         linkText:'https://github.com/kalanaveen',
    //         link:'check'
    //     }
    // ])
    // Slider.create([
    //     {
    //         title:'Communications technologies',
    //         subTitle:'Today, email, SMS, and various chat software tools have become the principal modes of business communication',
    //         url:'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/social_media__2_-770x1125.jpg?efUZaB0ndfmCsd16TfwoykNKF4w0DDTl',
    //         class:'active'
    //     }
    // ])
    // Detail.create({
    //     brandName:"InfoTech Solutions",
    //     brandIconUrl:"https://yt3.ggpht.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s88-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About Us",
    //             url:"/about-us"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },
    //     ]
    // })
});


//server
app.listen(process.env.PORT | 5500,()=>{
    console.log('server started');
})