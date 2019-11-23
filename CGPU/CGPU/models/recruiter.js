module.exports = (sequelize, DataTypes) => {
	const Recruiter=sequelize.define('recruiter',{
		rec_id:{ type: DataTypes.STRING, primaryKey: true ,allowNull:false},
		// rec_id:{ type: DataTypes.STRING},
        people_id:{type: DataTypes.STRING,allowNull:false,unique:true},
        rec_name:{type:DataTypes.STRING,allowNull:false,unique:true},
        rec_package:{type:DataTypes.STRING,allowNull:false,unique:true }
	})

	Recruiter.associate = (models) => {
		Recruiter.belongsTo(models.people, {
			foreignKey: 'people_id'
		})
	}

	return Recruiter
}