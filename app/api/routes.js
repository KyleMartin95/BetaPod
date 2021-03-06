var express = require('express');
var router = express.Router();

router
  .route('/')
  .get(function(req, res){
    res.render('main_pages/index', {layout: 'layout.hbs', title: 'BetaPod', condition: false, css: ['index.css']})
  });

router
  .route('/login')
  .get(function(req, res){
    res.render('main_pages/login', {title: 'Login to BetaPod', condition: false, css: ['login.css']})
  });

router
  .route('/products')
  .get(function(req, res){
    res.render('main_pages/products-homepage', {title: 'BetaPod Products', condition: false, css: ['products-homepage.css']})
  });

router
  .route('/help')
  .get(function(req, res){
    res.render('main_pages/help', {title: 'BetaPod Help', condition: false})
  });

router
  .route('/products/fitbit')
  .get(function(req, res){
    res.render('products/fitbit', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/fitbit.png', product_title: 'Fitbit Flex', product_description: '', stock: 'In Stock', product_info: 'Make fitness a lifestyle with Fitbit Flex—a slim, stylish device that tracks all-day activity like steps, distance, calories burned and active minutes. See how every day stacks up with LEDs that light up like a scoreboard as you get closer to your goal. Then wear it at night to measure your sleep quality and wake with a silent, vibrating alarm. Day or night, Flex fits comfortably around your wrist, is water-resistant, and has a 5-day battery life. It also syncs to computers and 150+ leading smartphones, so you can access your stats anywhere and see your progress in charts and graphs.'})
  });

router
  .route('/products/echo')
  .get(function(req, res){
    res.render('products/echo', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/echodot.jpg', product_title: 'Echo Dot', product_description: '', stock: 'In Stock', product_info: 'Echo Dot (2nd Generation) is a hands-free, voice-controlled device that uses Alexa to play music, control smart home devices, provide information, read the news, set alarms, and more. Connects to speakers or headphones through Bluetooth or 3.5 mm stereo cable to play music from Amazon Music, Spotify, Pandora, iHeartRadio, and TuneIn'})
  });

router
  .route('/products/drone')
  .get(function(req, res){
    res.render('products/drone', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/drone.jpg', product_title: 'Drone', product_description: '', stock: 'In Stock', product_info: 'Main Features: 6-axis Gyro stabilization system makes the helicopter more stable and flexible when flying. Wind resistant and can be flown indoors or outdoors Modular design structure is applied, more simple for assembly and convenient for maintenance 360 degree Eversion and throwing flight function. Equipped with HD Camera Left / Right hand throttle mode can be changeable by the transmitter (2 in 1) Includes: 1 x Syma X5C RC Quad Copter 1 x 2.4G Remote Controller (does not include 1.5v AA batteries) 1 x USB charging cable 4 x Rotating blade 4 x Protection frames 2 x Landing skids 1 x Screwdriver 1 x 3.7V 500mAh LiPO battery 1 x User Manual.'})
  });

router
  .route('/products/snapchat_glasses')
  .get(function(req, res){
    res.render('products/snapchat_glasses', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/snapchat_glasses.jpg', product_title: 'Snapchat Glasses', product_description: '', stock: 'In Stock', product_info: 'We believe memories are everything. The first date, epic road trip,100th birthday, whatever precious events life gives you. These events make up our life and turn into our legacy, but memories can fade with time. But video lasts forever. Snapchat Spectacle Sunglasses allow you to capture important memories on the go. Never letting valuable moments slip by. Just look, tap, and snap. Then share with your friends. Plus they come in several colors to match your lifestyle: black, teal, or coral. You pick. Snapchat Spectacles. Dont let another memory fade away.'})
  });

router
  .route('/products/leap_motion')
  .get(function(req, res){
    res.render('products/leap_motion', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/leap_motion.jpg', product_title: 'Leap Motion', product_description: '', stock: 'In Stock', product_info: 'The Leap Motion Controller captures the movement of your hands and fingers so you can interact with your computer in a whole new way. Swipe, pinch or grab in the air and magically see your actions on your screen. With hundreds of apps in the Leap Motion App Store, there is something for everyone. To get you started, the Leap Motion Controller comes with a free set of apps.'})
  });

router
  .route('/products/360_camera')
  .get(function(req, res){
    res.render('products/360_camera', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/360_camera.jpg', product_title: 'LG G5 360 Degree Camera', product_description: '', stock: 'In Stock', product_info: 'Capture the world around you in all directions with the LG 360 CAM Spherical Camera. This camera uses two 13MP sensors along with two 200° wide-angle lenses to capture photos and 2K video in 360°. Three microphones record 5.1-channel surround sound. Media recorded with the 360 CAM can be uploaded to Google Street View and YouTube360, and are also viewable on the LG 360 VR as well as smartphones and other devices capable of displaying 360° content. It stores pictures and video on 4GB of internal memory, which can be augmented with a microSD card. The 1200mAh battery lets it run without a power source.'})
  });

router
  .route('/products/3-d_pen')
  .get(function(req, res){
    res.render('products/3-D_pen', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/3-d_pen.jpg', product_title: 'Soyan 3-D Pen', product_description: '', stock: 'In Stock', product_info: 'Draw vertically. Draw horizontally. Lift your imagination off the page! The 3D printing pen extrudes heated plastic which instantly hardens, allowing you to literally draw in 3D, freehand or on paper. Change colors quickly and easily. The possibilities are endless'})
  });

router
  .route('/products/rocketbook_notebook')
  .get(function(req, res){
    res.render('products/notebook', {layout: 'product.hbs', title: 'BetaPod', condition: false, css: ['products.css'], product_image: '/images/products/rocketbook_wave.jpg', product_title: 'Rocketbook Smart Notebook', product_description: '', stock: 'In Stock', product_info: 'Introducing the world’s first microwave-to-erase smart notebook. The Rocketbook Wave provides the freedom of a traditional pen and paper notebook, while instantly blasting your notes into the cloud using your smartphone. And when you use Pilot FriXion pens with the Wave notebook, you can erase your notes using your microwave oven and reuse your notebook. Go ahead and re-read that last sentence.'})
  });

module.exports = router
