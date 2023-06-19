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
