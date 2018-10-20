module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holiday', {
    dateno: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    weekday: {
      type: DataTypes.INTEGER
    },
    is_holiday: {
      type: DataTypes.STRING,
      defaultValue: 'Y'
    },
    reg_dtime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    upd_dtime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'TB_WITHDRAWAL_LIMIT_HOLIDAY_DATE',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // Inventory.belongsTo(models.Product);
        // Inventory.belongsTo(models.Store);
      }
    }
  });

};