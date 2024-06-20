const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `
    SELECT * FROM item;
  `;
  pool.query(sqlText)
  .then(dbRes => {
    console.log('GET worked in /api/shelf!', dbRes.rows);
    res.send(dbRes.rows);
  })
  .catch(dbErr => {
    console.log('Error in /api/shelf ', dbErr);
    res.sendStatus(500);
  })
});
/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality

  const id = req.params.id
  const sqlText = `
    DELETE FROM item 
    WHERE id = $1
    AND user_id = $2;
  `;

  let toSend = [id, user.id]
  pool.query(sqlText, toSend)
  .then(dbRes => {
    console.log('DELETE worked in /api/shelf!');
    res.sendStatus(201)
  })
  .catch(dbErr => {
    console.log('Error in /api/shelf ', error);
    res.sendStatus(500);
  })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
