const express =require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.get('',(req,res)=>{
    res.render('index');
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.post('/contact',[
    check('name').exists().withMessage('You must input the name').isLength({min:3}).withMessage('Name must be atleast 3 characters long'),
    check('email').exists().withMessage('Please input your email').isEmail().normalizeEmail()
],(req,res)=>{
  const errors = validationResult(req);
 

  if(!errors.isEmpty()){
     const alert = errors.array();
      res.status(422).render('contact',{
        alert,
      })
  }else{
    const {name,email} = req.body;

    res.status(200).render('success',{
        name,email
    })
  }
})


app.listen(port, () => console.log(`Server listening to port ${port}...`))

