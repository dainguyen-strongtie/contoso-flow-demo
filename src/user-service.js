class UserService {
  constructor(database) {
    this.db = database;
  }

  async getUser(id) {
    return this.db.query('SELECT * FROM users WHERE id = $1', [id]);
  }
}

module.exports = UserService;
