const router = require('express').Router()
const { Story, Author, Comment } = require('../db')

// GET /api/stories
router.get('/', async (req, res, next) => {
  console.log(" req.query88", req.query)
  try {
    // req.query is the query string sent to the server, example / page ? test = 1, req.param is the parameters passed to the handler. in this case we are not passing any string
    const stories = await Story.findAll({
      where: req.query,
      attributes: ['id', 'title'],
      include: [Author]
    })
    res.json(stories)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/stories/:storyId
// will return parameters in the matched route.If your route is / stories /: id and you make a request to / stories / 1
router.get('/:storyId', async (req, res, next) => {
  try {
    // first we search for the story by id then we include Author model as well as the Comment model but we also want to  include the Comment's author
    const story = await Story.findById(req.params.storyId, {
      include: [Author, { model: Comment, include: Author }]
    })
    res.json(story)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
