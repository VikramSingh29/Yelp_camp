YelCamp
YelCamp is a full-stack web application that allows users to browse and review campgrounds. Inspired by the functionality of Yelp, users can sign up, review campgrounds, and interact with other campers by rating and leaving feedback.

Features
User Authentication: Sign up and log in via username and password. Authentication ensures that only registered users can post reviews and rate campgrounds.
Campground Listings: Users can browse a collection of campgrounds with detailed descriptions, photos, and location information.
Campground Reviews: Users can write, edit, and delete their own reviews. Reviews include ratings and comments on the campground.
Dynamic Search: Filter campgrounds based on keywords, ratings, and other parameters.
Map Integration: Interactive maps displaying campground locations using services like Google Maps API (if integrated).
Responsive Design: Fully responsive web design that works across different devices including desktops, tablets, and smartphones.
Tech Stack
Backend: Node.js, Express
Frontend: HTML, CSS, JavaScript, Bootstrap (or another framework if used)
Database: MongoDB
Authentication: Passport.js
Map Integration: Google Maps API (or other geolocation services if applicable)
Installation
Prerequisites
Node.js
MongoDB
Clone the repository
bash
Copy code
git clone https://github.com/yourusername/yelcamp.git](https://github.com/VikramSingh29/Yelp_camp.git
cd yelcamp
Install dependencies
bash
Copy code
npm install
Environment Variables
Make sure you set up your .env file with the following:

bash
Copy code
MONGODB_URI=<your_mongodb_connection_string>
SECRET=<your_secret_key>
MAP_API_KEY=<your_google_maps_api_key>
Start the application
bash
Copy code
npm start
The server should be running on http://localhost:3000.

Usage
Sign Up: Create an account to start adding campgrounds and reviews.
Browse Campgrounds: View campgrounds added by other users, including descriptions and location data.
Add a Campground: Add a new campground with details such as name, price, location, and image.
Review a Campground: Share your experience by leaving reviews for the campgrounds you’ve visited.
Edit/Delete Reviews and Campgrounds: Manage the reviews and campgrounds you’ve created.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to Colt Steele's Web Development Bootcamp for the inspiration for this project.
Icons and imagery sourced from FontAwesome and Unsplash.
Special thanks to the community for testing and providing feedback.
