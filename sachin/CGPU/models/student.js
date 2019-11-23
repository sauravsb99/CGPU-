module.exports = (sequelize, DataTypes) => {
	const Student = sequelize.define('student',{
		people_id:{type: DataTypes.STRING, primaryKey: true ,allowNull:false},
		username:{type:DataTypes.STRING,primaryKey: true,allowNull:false},
		password:{type:DataTypes.STRING,allowNull:false},
		admission_no:{type: DataTypes.STRING, unique: true ,allowNull:false},
		department:{type:DataTypes.STRING,allowNull:false},
		date_of_join:{type:DataTypes.DATEONLY,allowNull:false},
        sex:{type:DataTypes.STRING,allowNull:false},
        place1:{type:DataTypes.STRING},
        place2:{type:DataTypes.STRING},
        place3:{type:DataTypes.STRING}

	})

	Student.associate = (models) => {
		Student.belongsTo(models.people, {
			foreignKey: 'people_id'
		})	
	}

	return Student
}