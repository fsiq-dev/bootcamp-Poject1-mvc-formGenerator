import fs from 'fs';
import ejs from 'ejs';
import {typeModel} from '../models/type-model.js'
import {categoryModel} from '../models/category-model.js'
import htmlToPdf from 'html-pdf-node'

export const formCtrl = {
    get: (req,res) => {
        //typeModel
        const resultadoModel = typeModel.getAll();
        const typeItensViewModel = resultadoModel.map((item) => {
        return {
            value: item.id,
            label: item.descricao
        }
    });

    //CategoryModel
    const resultadoCategoryModel = categoryModel.getAll();
    const CategoryViewModel = resultadoCategoryModel.map ((item) => {
        return {
            value: item.id,
            options: `${item.descricao}`
          }
      });

    const getViewModel = {
        type: typeItensViewModel,
        category: CategoryViewModel
    }
    res.render('formulario', getViewModel);
    },

    post: (req,res) => {
        console.log(req.body);
        const body = req.body;
        
        // view model para render formulario
        const typeResultado = typeModel.getById(body.type)
        const categoryResultado = categoryModel.getById(body.category)
        //  VIEW MODEL
        const viewModel = {
            name: body.name,
            email: body.email,
            cpf: body.cpf,
            phone: body.phone,
            order: body.order,
            type: typeResultado.descricao,
            category: categoryResultado.descricao,
            textarea: body.textarea,
            img: body.file
        };
        
        //TEMPLATE
        let htmlText = fs.readFileSync('./views/formulario-pdf.ejs','utf8');
        let htmlRenderized = ejs.render(htmlText, viewModel);

        //TRANSFORMAR EM PDF
        let file = { content: htmlRenderized};
        let options = {format: 'A4'};
    
        htmlToPdf.generatePdf(file, options)
        .then(pdfBuffer => {
        res.contentType("application/pdf");
        res.send(pdfBuffer);
        });
    } 
}