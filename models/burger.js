module.exports = function(sequelize, DataTypes) {

    const Burger = sequelize.define("burger", {
        devour: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        type: DataTypes.STRING
    })
return Burger;
}