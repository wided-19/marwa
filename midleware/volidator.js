const {body , validationResult} = require('express-validator');

const registerRules=()=>[
    body('first_name', 'first_nameis required').notEmpty(),
    body('last_name','last_name is required').notEmpty(),
    body('dateofBrith','dateofBrith is required').notEmpty(),
    body('email','email should be email').isEmail(),
    body('password','password most contain 5 car').isLength({
        min : 5 ,
        max:20
    }),
    body('phone','phone is required').notEmpty(),
  
]
// login Rules

const loginRules = ()=>[
    body('email','email should be email').isEmail(),
    body('password','password most contain 5 car').isLength({
        min : 5 ,
        max:20
    }),
]
const validator = (req , res , next)=>{
    const errors = validationResult (req)
    if (!errors.isEmpty()){
        res.status(400).send({errors: errors.array()})
    }
    next ()
}

module.exports = {validator , registerRules , loginRules}