const petsController = require('../controllers/pets');

module.exports = app => {
    app.get('/api/pets', petsController.index);

    // create
    app.post('/api/pets', petsController.create);

    // get one
    app.get('/api/pets/:id', petsController.getOne);

    // update
    app.put('/api/pets/:id', petsController.update);

    // delete
    app.delete('/api/pets/:id', petsController.delete);




}