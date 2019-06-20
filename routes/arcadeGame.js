// Our router module
const router = require('express').Router();

// Our controller
const ArcadeGamesController = require('../controllers/arcadeGamesController');

// Our routes
router.get('/', ArcadeGamessController.index);
router.get('/new', ArcadeGamessController.new);
router.get('/:id', ArcadeGamessController.show); 
router.get('/:id/edit', ArcadeGamessController.edit);

router.post('/', ArcadeGamessController.create);
router.post('/update', ArcadeGamessController.update);
router.post('/destroy', ArcadeGamessController.destroy);

// We have to export our changes
module.exports = router;

// Create/Repair the necessary routes to point to each controller action:

// index
// show
// new
// edit
// create
// update
// destroy