
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


// 문자열 타입에 대한 정의인데 utf8mb4로 정한다.
//  가장 큰 이유는 실무를 예로 들면 Emoji 타입을
//   디비에 넣을 수 있는 타입이기 때문이다. 
// 그냥 utf8 이런걸로 하면 Emoji 저장 제대로 안되니까 주의하자.