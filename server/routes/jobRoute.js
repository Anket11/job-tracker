const express = require('express');
const app = express();
router = express.Router()
job = require('../controllers/jobController')

router.get('/api',job.allJobLists);
router.post('/api',job.addJobList);

router.put('/api/:l_id',job.updateJobList);
router.delete('/api/:l_id',job.deleteJobList);

router.post('/api/:l_id',job.addCard);
router.delete('/api/:l_id/:c_id',job.deleteCard);

module.exports = router