const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.get('/event', function (req, res, next) { 
    db.query(
      'SELECT LastName, FirstName, HealthNumber, AvgBP, AvgHeartRate, AvgSteps FROM patient_data',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;