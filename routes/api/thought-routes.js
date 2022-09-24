const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
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

module.exports = router;