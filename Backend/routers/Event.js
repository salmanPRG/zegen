// const express = require('express');
// const router = express.Router();
// const EventController = require('../controllers/EventController');

// router.post('/', EventController.createEvent);
// router.get('/', EventController.getEvents);

// module.exports = router;

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});


router.post('/', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.event = event;
  next();
}

module.exports = router;
