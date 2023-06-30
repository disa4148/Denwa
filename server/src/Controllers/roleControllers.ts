import db from '../db'

module.exports = {
    getAll: async(req: any, res: any) => {
        try {
            const allRoles = await db.query('SELECT * FROM roles')
            res.json(allRoles.rows)
        } catch (error: any) {
            throw new Error(error);
        }
    },
    getbyId: async(req: any, res: any) => {
        try {
            const idRole = req.params.id
            const roleById = await db.query('SELECT * FROM roles WHERE roleid = $1', [idRole])
            res.json(roleById.rows[0])
        } catch (error: any) {
            throw new Error(error);
        }
    },
    createRole: async(req: any, res: any) => {
        try {
            const { rolename } = req.body
            if (rolename != null) {
                const createRole = await db.query('INSERT INTO roles (rolename) values ($1) RETURNING *', [rolename])
                res.json({
                    message: "Роль успешно создана"
                })
            } else {
                res.json({
                    message: "Значение роли пустое"
                })
            }
        } catch (error: any) {
            throw new Error(error);
        }
    },
    deleteRole: async(req: any, res: any) => {
        try {
            const roleId = req.params.id
            const deleteRole = await db.query('DELETE FROM roles WHERE roleid = $1', [roleId])
            res.json({
                message: "Роль успешно удалена"
            })
        } catch (error: any) {
            throw new Error(error);
        }
    }
}