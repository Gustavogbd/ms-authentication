import { Pool } from "pg";

const connectionString = 'postgres://slkeebei:V4FMfGLCLOdykYip3IGvLRX1hXeqv0JJ@kesavan.db.elephantsql.com/slkeebei';

const db = new Pool({ connectionString });

export default db;