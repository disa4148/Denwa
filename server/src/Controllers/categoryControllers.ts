const db = require('../db')

module.exports = {
    getAll: async(req: any, res: any) => {
        res.send("Hello World");
    },
    addCategory: async(req: any, res: any) => {
        const {categoryName} = req.body
        

        // Сделать отдельные файлы и папку для запросов
        const newCategory = await db.query('INSERT INTO categories (categoryname) values ($1) RETURNING *', [categoryName])
        res.json({
            message: newCategory
        })
    }
}