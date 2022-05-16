import express from 'express';
import PeopleController from '../controllers/PeopleController.js';

const router = express.Router()

router.route('/').post( PeopleController.createPeople)
                 .get( PeopleController.getAllPeoples)

router.route('/:id').get( PeopleController.getPeopleByID)
                    .put( PeopleController.updatePeopleDetails)
                    .delete( PeopleController.deletePeopleDetails)

export default router;