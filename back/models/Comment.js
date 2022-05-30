module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        tableName: 'Comment',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        freezeTableName: true,
    })

    return Comment
}