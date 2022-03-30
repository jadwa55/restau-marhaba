/* -------------------------------------------------------------------------- */
/*                               User Model                              */
/* -------------------------------------------------------------------------- */

module.exports = (db , type) => {
    // Define Table
    return db.define('users',{ // Table name
        // Attributes , Type
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        password: {
            type: type.STRING
        },
        tele: {
            type: type.NUMBER
        },
        role: {
            type: type.BOOLEAN
        }
    })
}