module.exports = (sequelize, DataTypes) => {
	const Pic=sequelize.define('pic',{
		peopl_id:{type: DataTypes.STRING, primaryKey: true ,allowNull:false}
		idpic:{type: DataTypes.INTEGER},
		caption:{type: DataTypes.STRING(45)},
		img:{type:DataTypes.LONGBLOB}}
		)

	Pic.associate = (models) => {
		Pic.belongsTo(models.people, {
			foreignKey: 'people_id'
		})	
	}

		return People
}