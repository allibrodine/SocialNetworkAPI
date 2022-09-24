const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thought
router
    .route('/')
    .get(getAllThoughts);

// /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById);

// /api/thought/<userid>
router
    .route('/:userId')
    .post(addThought);

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought);

// /api/thought/<thoughtId>/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thought/<userId>/<thoughtId>/<reactionId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);
    

module.exports = router;