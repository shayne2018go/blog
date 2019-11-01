'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const len = 50;
    let articles = []
    for (let i = 1; i <= len; i++) {
      let article = {
        name: `文章标题${i}`,
        author: i,
        desc: `文章描述文章描述文章描述${i}`,
        content: `文章内容${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      articles.push(article)
    }
    console.info('articles表数据填充完成')
    return queryInterface.bulkInsert('articles', articles, {});
  },

  down: (queryInterface, Sequelize) => {
    console.info('articles表数据清除完成')
    return queryInterface.bulkDelete('articles', null, {});
  }
};
