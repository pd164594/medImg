'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 500
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    }, {
      underscored: true
  }); 
  User.associate = function(models) {
    models.user.hasMany(models.transaction);
  };

  return User;
}
