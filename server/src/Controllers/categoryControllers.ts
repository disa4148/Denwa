import db from '../db';

module.exports = {
    getAll: async(req: any, res: any) => {
        try {
            const allCategories = await db.query('SELECT * FROM categories')
            res.json(allCategories.rows)
        } catch (error: any) {
            console.log(error)
            res.json({
                message: "Ошибка при поиске всех категорий"
            })
        }

    },
    getById: async(req: any, res: any) => {
        try {
            const idCategory: number = req.params.id
            const categoryById = await db.query('SELECT categoryname FROM categories WHERE categoryid = $1', [idCategory])
            res.json(categoryById.rows[0])
        } catch (error: any) {
            console.log(error)
            res.json({
                message: "Ошибка при поиске категории по id"
            })
        }
    },
    addCategory: async(req: any, res: any) => {
        try {
            const {categoryname} = req.body
                // Сделать отдельные файлы и папку для запросов
                const newCategory = await db.query('INSERT INTO categories (categoryname) values ($1) RETURNING *', [categoryname])
                res.json({
                    message: "Категория успешно добавлена"
                })
                res.json({
                    message: "Значение категории пустое"
                })
        } catch (error: any) {
            console.log(error)
            res.json({
                message: "Ошибка при добавлении категории"
            })
        }
    },
    deleteCategory: async(req: any, res: any) => {
        try {
                const idCateogory: number = req.params.id
                const categoryById = await db.query('DELETE FROM categories where categoryid = $1', [idCateogory])
                res.json({
                    message: "Категория успешно удалена"
                })
            } catch (error: any) {
                console.log(error)
                res.json({
                    message: "Ошибка при удалении категории"
                })
            }
    }
}