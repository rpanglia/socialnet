const router = require('express').Router();

const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// // /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/:reactionId')
    .post(addReaction)

// /api/thoughts/:thoughtId/reactions/<reactionId>
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router; 