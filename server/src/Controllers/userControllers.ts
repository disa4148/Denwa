import db from "../db";


module.exports = {
    getAll: async(req: any, res: any) => {
        const allCategories = await db.query('SELECT * FROM users')
        res.json(allCategories.rows)
    },
    getById: async(req: any, res: any) => {
        try {
            
        } catch (error: any) {
            throw new Error(error);
        }
    },
    createUser: async(req: any, res: any) => {
        try {
            
        } catch (error: any) {
            throw new Error(error);
        }
    },
    updateUser: async(req: any, res: any) => {
        try {
            
        } catch (error: any) {
            throw new Error(error);
        }
    },
    deleteUser: async(req: any, res: any) => {
        try {
            
        } catch (error: any) {
            throw new Error(error);
        }
    }
}