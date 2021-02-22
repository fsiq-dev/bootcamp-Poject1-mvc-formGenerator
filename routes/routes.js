import express from 'express'
const router = express.Router();
import { formCtrl } from '../controllers/formCtrl.js';


const {get, post} = formCtrl;

router.get('/', (req,res) => {
    res.render('index')
})
router.get('/formulario', get);
router.post('/formulario', post);
router.get('/sobre',(req,res)=>{
    res.render('sobre')
})

export default router;