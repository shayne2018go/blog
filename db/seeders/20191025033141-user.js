'use strict';
const bcrypt = require('../../utils/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
    const len = 50;
    let users = []
    for (let i = 1; i <= len; i++) {
      let user = {
        username: `user${i}`,
        password: bcrypt.encrypt(`testing${i}`),
        email: `user${i}@qq.com`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      users.push(user)
    }
    console.info('user表数据填充完成')
    return queryInterface.bulkInsert('users', users, {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    console.info('user表数据清除完成')
    return queryInterface.bulkDelete('users', null, {});
  }
};
