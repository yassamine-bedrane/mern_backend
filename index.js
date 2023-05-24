const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const app = express();

const restaurant = require('./models/Restaurant');

const cityController = require('./controllers/CityController');
const zoneController = require('./controllers/ZoneController');
const restauController = require('./controllers/RestauController');
const specialiteController = require('./controllers/SpecialiteController');

mongoose.connect('mongodb+srv://bouchra00:azerty00@location.jtgz6s3.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/api/cities', cityController);
app.use('/api/zones', zoneController);
app.use('/api/specialite', specialiteController);
app.use('/api/restaurant', restauController);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
