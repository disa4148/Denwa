import db from '../db'

module.exports = {
    getAll: async(req: any, res: any) => {
        try {
            const allStatuses = await db.query('SELECT * FROM statuses')
            res.json(allStatuses.rows)
        } catch (error: any) {
            throw new Error(error);
        }
    },
    getById: async(req: any, res: any) => {
        try {
            const idStatus = req.params.id
            const statusById = await db.query('SELECT * FROM statuses WHERE statusid = $1', [idStatus])
            res.json(statusById.rows[0])
        } catch (error: any) {
            throw new Error(error);
        }
    },
    createStatus: async(req: any, res: any) => {
        try {
            const { statusname } = req.body
            if (statusname != null) {
                const createStatus = await db.query('INSERT INTO statuses (statusname) values ($1) RETURNING *', [statusname])
                res.json({
                    message: "Статус успешно создан"
                })
            } else {
                res.json({
                    message: "Значение статуса пустое"
                })
            }
        } catch (error: any) {
            throw new Error(error);
            
        }
    },
    deleteStatus: async(req: any, res: any) => {
        try {
            const idStatus = req.params.id
            const deleteStatus = await db.query('DELETE FROM statuses WHERE statusid = $1', [idStatus])
            res.json({
                message: "Статус успешно удалён"
            })
        } catch (error: any) {
            throw new Error(error);
            
        }
    }
}