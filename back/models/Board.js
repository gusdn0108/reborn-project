module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // autoIncrement: true
        },
    }, {
        timestamps: true,
        tableName: 'Board',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        freezeTableName: true,
    })

    return Board
}