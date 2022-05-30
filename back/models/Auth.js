module.exports = (sequelize, DataTypes) => {

    const Auth = sequelize.define('Auth', {
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {

        timestamps: true,
        tableName: 'Auth',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        freezeTableName: true,
    })

    return Auth
}