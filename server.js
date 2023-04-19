const express = require('express');
const { db } = require('./firebase/firebase.config');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || email === '') {
      return res.status(401).json({
        message: 'Enter your email address.',
      });
    }
    const response = await db.collection('users').add({
      email,
    });
    if (response) {
      return res.status(201).json({
        message: 'Subscribed successfully.',
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
