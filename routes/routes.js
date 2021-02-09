import express from 'express'
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/formulario', (req,res) => {
    res.render('formulario')
})
export default router;