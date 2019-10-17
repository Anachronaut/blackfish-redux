'use strict';

var topTen = [
  {
    "position":1,
    "initials":"AAA",
    "score":10
  },
  {
    "position":2,
    "initials":"BBB",
    "score":9
  },
  {
    "position":3,
    "initials":"CCC",
    "score":8
  },
  {
    "position":4,
    "initials":"DDD",
    "score":7
  },
  {
    "position":5,
    "initials":"EEE",
    "score":6
  },
  {
    "position":6,
    "initials":"FFF",
    "score":5
  },
  {
    "position":7,
    "initials":"GGG",
    "score":4
  },
  {
    "position":8,
    "initials":"HHH",
    "score":3
  },
  {
    "position":9,
    "initials":"III",
    "score":2
  },
  {
    "position":10,
    "initials":"JJJ",
    "score":1
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    var topTenLog = topTen.map(function(s) {
      s.createdAt = new Date(),
      s.updatedAt = new Date()
      return s
    })

      return queryInterface.bulkInsert('Top10s', topTenLog, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Top10s', null, {});
  }
};
