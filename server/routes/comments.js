const { Router } = require('express')
const Comment = require('../models/comment')
const router = Router()

router.get('/get-comments', async (req, res) => {
    const comments = await Comment.find({})
    res.send(comments)
})

router.post('/create-comment', async (req, res) => {
    res.json(req.body)
    const comment = new Comment(req.body)
    await comment.save()
})

module.exports = router