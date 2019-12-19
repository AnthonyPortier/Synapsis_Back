const path = require('path')
const multer = require('multer')
const express = require('express')
const models = require('../models')

module.exports =  app => {
    
    //Connect view front

    //Public Folder
    app.use(express.static('public'))
    app.use('/uploads', express.static(__dirname+'/uploads'));

    // Set Storage Engine
    const storage = multer.diskStorage({
        destination: './public/uploads',
        filename: function(req,file,cb){
            cb(null,file.fieldname + '_' + Date.now()+ path.extname(file.originalname));
        }
    })

    // Init Upload
    const upload = multer({
        storage: storage
    }).single('file')

    app.put('/users/imgupload/:id',(req,res) =>{
        upload(req,res,(err) => {
            console.log('injectioon image')
            if(err){
                res.send('index',{msg:err})
            }else{
                
            models
            .User
            .update({ profil_pic: `http://localhost:5000/uploads/${req.file.filename}` },
            {where: {
                id: req.params.id
            }})
                console.log(req.file)
                res.send(req.file);


            }
        })
    })


}