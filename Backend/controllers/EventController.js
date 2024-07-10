const Event = require('../models/Event');

class EventController {
  async createEvent(req, res) {
    const { name } = req.body;
    const eventTime = new Date();
    eventTime.setHours(eventTime.getHours() + 3);
    const event = new Event({ name, time: eventTime });
    try {
      await event.save();
      res.status(201).send({ message: 'Event created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error creating event' });
    }
  }

  async getEvents(req, res) {
    try {
      const events = await Event.find().sort({ time: 1 });
      res.send(events);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching events' });
    }
  }
}

module.exports = EventController;