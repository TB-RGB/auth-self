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
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const data = req.body.data;
  const user = req.user;
  const sqlText = `
  INSERT INTO item
  (description, image_url, user_id)
  VALUES ($1, $2, $3);
  `;
  pool.query(sqlText, [data.description, data.image_url, user.id])
  .then(response => {
    console.log('POST worked in /api/shelf!');
    res.sendStatus(201)
  })
  .catch(error => {
    console.log('Error in /api/shelf ', error);
    res.sendStatus(500);
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
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
