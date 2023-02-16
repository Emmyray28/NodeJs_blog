const express = require('express');
let  blogs = require('./db.json');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));




app.get('/getblogs',(req,res) =>{
    res.render('blogs', {blogs})
})


app.get('/blog',(req,res)=>{
    const id = req.query.id;

    let blog = null;

blog = blogs.filter(blog => blog.id == id)[0];
    res.render('blog', {blog})
})

app.post('/addblog',(req,res)=>{
    
})

app.delete('/deleteblog',(req,res) =>{
     const id = Number.parseInt(req.query.id);
     blogs = blogs.filter(blog => blog.id !== id);
     res.status(200).json({});
})

app.patch('updateblog',(req,res)=>{

})



app.listen(3000,()=>{
  console.log('app is live a http://localhost:3000')
})