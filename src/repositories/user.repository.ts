import User from "../models/user.model";
import db from "../routes/db";



class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username FROM applicatio_user
        `;

        const result = await db.query<User>(query);
        const rows = result.rows;
        return rows || [];
    }
}

export default new UserRepository();