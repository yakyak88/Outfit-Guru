# Outfit-Guru

## Description

Outfit-Guru is a web application that helps users create personalized outfits
from a curated selection of clothing items, using an innovative recommendation
algorithm

## Setup and Installation

1. Clone this repository:

git clone https://github.com/yakyak88/Outfit-Guru.git

2. Install dependencies:

npm install

3. Start the application:

npm start

# Outfit-Guru recommendation algorithm explanation

The recommendation algorithm in Outfit-Guru is designed to generate personalized outfits by assessing compatibility between clothing items based on two factors: color matching and size matching.

Color Matching
Color matching uses a predefined object colorMatchRates, where each key represents a color and the value is an object representing match rates with other colors (0-100). A function getColorRecommendation(item1, item2) calculates the color match rate between two clothing items.For example, the color "pink" matches perfectly with itself (100), quite well with "blue" and "white" (80), not so well with "black" (60), and poorly with "red" and "green" (10).

Size Matching
Size matching uses a sizeMatchRates object, representing compatibility between different sizes of various clothing items. The function getSizeRecommendation(item1, item2) calculates the size match rate between two clothing items.

Recommendation Score Calculation
A pair of clothing items gets a recommendation score by averaging the color and size match rates via getPairRecommendation(item1, item2). For three items, the function getTripleRecommendation(item1, item2, item3) calculates the average of the scores of all possible pairs.

Through this algorithm, Outfit-Guru estimates the compatibility between different clothing items, creating a personalized outfit recommendation system.

# Why I Chose React Context API for State Management?

I adopted React Context API because it's simple, scalable, and seamlessly integrates with React. It's a part of React itself, so we didn't need extra libraries. It handles my state needs without complicating the codebase. Plus, the use of useContext hook makes state consumption a breeze in function components.

# Navigation Menu

The NavigationMenu component represents a flexible and responsive approach to managing site navigation. Using React's useState hook, it dynamically updates the menu's state based on user interactions. This empowers a seamless transition between open and closed states. The use of the Link component from react-router-dom provides a user-friendly navigation experience without refreshing the page, enhancing the overall performance and feel of the application. The decision to include a "closeMenu" function when each navigation link is clicked ensures that the menu won't stay open after a user has selected their destination, reducing visual clutter and focusing user attention. This choice reflects our commitment to a clean, intuitive user experience.

# Saved Sets Screen

The SavedSetsScreen displays a list of saved clothing sets, allowing users to delete them as needed. I use React's Context API to manage the state of these sets. The useContext hook provides direct access to the completedSets and deleteSet functions from our Context, facilitating efficient state management.
