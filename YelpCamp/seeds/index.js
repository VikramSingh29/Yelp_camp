const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const { coordinates } = require('@maptiler/client');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '668dd80c0dea57351c370781',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
           
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates:[ 
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                 ]
            },
            images: [
                {
                  
                  url:   'https://res.cloudinary.com/dyfvhpsos/image/upload/v1722135065/YelpCamp/alukik6wi0nfvkek2l0r.webp',
                  filename: 'YelpCamp/tpllmjjjreajw6vcuurt'
                },
                {
        
                  url: 'https://res.cloudinary.com/dyfvhpsos/image/upload/v1722737169/YelpCamp/akgjw1kkrvv8sdtnphjv.webp',
                  filename: 'YelpCamp/zk1sspalqachnhict6ik'
                }
              ],
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})