const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);


// db불러오는곳 예제 코드

const Auth = require('./Auth')(sequelize, DataTypes)
const Board = require('./Board')(sequelize, DataTypes)
const Comment = require('./Comment')(sequelize, DataTypes)

Auth.hasMany(Board)
Board.belongsTo(Auth)



const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 시퀄은 객체형태로 나오기때문에 위에 db= {} 선언한거에 우리는 db내용을 담는다 
db.Auth = Auth
db.Board = Board
db.Comment = Comment





module.exports = db;