module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define('Auth',{
        email:{
            type:DataTypes.STRING(400),
            allowNull: true,
        },
        username:{
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        birth:{
            type:DataTypes.STRING,
            allowNull,
        }
    },{
        timestamps: true,
        tableName: 'Auth',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        freezeTableName: true,
    })

    return Auth
}