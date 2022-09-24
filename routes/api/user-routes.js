const router = require('express').Router();
//implement controller methods
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//set up GET and POST at /api/user
router  
    .route('/')
    .get(getAllUser)
    .post(createUser);

//set up GET one, PUT and DELETE at /api/user/:id
router  
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//add and remove friends /api/user/:userId/friends/:friendId
router  
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;