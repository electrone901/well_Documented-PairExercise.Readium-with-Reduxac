const db = require('./db')
const Author = require('./Author')
const Comment = require('./Comment')
const Story = require('./Story')

  //  One - To - Many relationship exists between Author and Story, with the foreign key being defined in the target model(Story).
Author.hasMany(Story)
// One - To - One relationship, one Story has one Author with the foreign key being defined in the source model(Story) this means that Story table will have authorID
Story.belongsTo(Author)


Author.hasMany(Comment)
Comment.belongsTo(Author)

Story.hasMany(Comment)
Comment.belongsTo(Story)

module.exports = {
  db,
  Author,
  Comment,
  Story
}
