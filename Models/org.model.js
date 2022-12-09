import { sequelize } from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class OrgModel extends Model {}

OrgModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false
	},
	zipcode: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false
	},
	country: {
		type: DataTypes.STRING,
		allowNull: false
	}
},{
	sequelize,
	modelName: 'org',
	freezeTableName: true,
	underscored: true
})

export default OrgModel