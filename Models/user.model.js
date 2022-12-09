import { sequelize } from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'
import bcrypt from 'bcrypt'

class UserModel extends Model{}

UserModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	firstname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	org_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},	
	is_active: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, {
	sequelize,
	modelName: 'user',
	freezeTableName: true,
	underscored: true,
	hooks: {
		beforeCreate: async(user, options) => {
			user.password = await createHash(user.password)
		},
		beforeUpdate: async(user, options) => {
			user.password = await createHash(user.password)
		},
	}
})

const createHash = async string => {
	const salt = await bcrypt.genSalt(10)
	const hashed_string = await bcrypt.hash(string, salt)
	return hashed_string
}

export default UserModel