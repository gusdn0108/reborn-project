module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "Comment",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      freezeTableName: true,
    }
  );

  return Comment;
};
