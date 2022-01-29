import User from "../models/user.model";
import db from "../routes/db";



class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username FROM applicatio_user
        `;

        const { rows } = await db.query<User>(query);
        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        const query = `
            SELECT uuid, username
            FROM applicatio_user
            WHERE uuid = $1
        `;
        const values = [uuid];
        const { rows } = await db.query<User>(query, values);
        const [ user ] = rows;

        return user;
    }

    async create(user: User): Promise<string> {
        const script = `
            INSERT INTO applicatio_user (
                username,
                password
            )
            VALUES($1, CRYPT($2, 'my_salt'))
            RETURNING uuid
        `;

        const values = [user.username, user.password];

        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
    }
}

export default new UserRepository();