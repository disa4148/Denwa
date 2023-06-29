const db = require('../db')

module.exports = {
    getAll: async(req: any, res: any) => {
        try {
            const allCategories = await db.query('SELECT * FROM categories')
            res.json(allCategories.rows)
        } catch (error: any) {
            throw new Error(error);
        }

    },
    getById: async(req: any, res: any) => {
        try {
            const idCategory: number = req.params.id
            const categoryById = await db.query('SELECT categoryname FROM categories WHERE categoryid = $1', [idCategory])
            res.json(categoryById.rows[0])
        } catch (error: any) {
            throw new Error(error); 
        }
    },
    addCategory: async(req: any, res: any) => {
        try {
            const {categoryname} = req.body
            if (categoryname != null) {
                // Сделать отдельные файлы и папку для запросов
                const newCategory = await db.query('INSERT INTO categories (categoryname) values ($1) RETURNING *', [categoryname])
                res.json({
                    message: "Категория успешно добавлена"
                })
            }
            else {
                res.json({
                    message: "Значение категории пустое"
                })
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    deleteById: async(req: any, res: any) => {
        try {
                const idCateogory: number = req.params.id
                const categoryById = await db.query('DELETE FROM categories where categoryid = $1', [idCateogory])
                res.json({
                    message: "Категория успешно удалена"
                })
        } catch (error: any) {
            throw new Error(error);   
        }
 
    }
}