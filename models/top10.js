'use strict';
module.exports = (sequelize, DataTypes) => {
  const Top10s = sequelize.define('Top10s', {
    position: DataTypes.INTEGER,
    initials: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Top10s.associate = function(models) {
    // associations can be defined here
  };
  return Top10s;
};
