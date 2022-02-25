const express = require('express');
const {route} = require('express/lib/application');
const Contact = require('../models/Contact');
const Detail = require('../models/Detail');
const Service = require('../models/Service');
const Slider = require('../models/Slider');
const routes = express.Router();

routes.get('/',async (req,res)=>{
    const detail = await Detail.findOne({"_id":"6216226f1b3fd28545b85a05"});
    const slider = await Slider.find();
    const service = await Service.find();
    res.render('index',{detail,slider,service});
});

routes.get('/gallery',(req,res)=>{
    res.render('gallery');
});

routes.post('/process-contact-form',async (req,res)=>{
    try {
        const data = Contact.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.redirect('/');
    }
})
module.exports = routes;
