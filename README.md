# Earthquake Data Visualization and Processing

## Group Members
- Jesús Hernández
- Kamal Farran
- Mahsa Nafei
- Qianchen Ai

## Overview

This repository combines two components for earthquake data management and visualization. The project includes a Flask-based web application for visualizing earthquake data and a data processing script using PyMongo for cleaning and preparing the data.

### Earthquake Visualization Web App

#### Code Structure

- **app.py:** The main Python script defining the Flask application, including routes for different pages and functionalities related to earthquake data.

#### Endpoints

1. **Home Page**
   - URL: [http://localhost:5000/](http://localhost:5000/)
   - Description: Displays a simple homepage.

2. **Historical Earthquakes**
   - URL: [http://localhost:5000/historical.html](http://localhost:5000/historical.html)
   - Description: Provides visualizations of historical earthquake data.

3. **Latest Earthquakes**
   - URL: [http://localhost:5000/latest.html](http://localhost:5000/latest.html)
   - Description: Displays information about the latest earthquakes.

4. **Comparison**
   - URL: [http://localhost:5000/comparison.html](http://localhost:5000/comparison.html)
   - Description: Allows users to compare earthquake data.

5. **Get News**
   - URL: [http://localhost:5000/getNews](http://localhost:5000/getNews)
   - Description: Fetches earthquake-related news from [ABC News](https://abcnews.go.com/alerts/earthquakes).

6. **Get Countries**
   - URL: [http://localhost:5000/getCountries](http://localhost:5000/getCountries)
   - Description: Retrieves a list of countries with earthquake data.

7. **Get Data**
   - URL: [http://localhost:5000/getData](http://localhost:5000/getData)
   - Description: Retrieves earthquake data based on specified parameters.

8. **Get Latest Earthquakes**
   - URL: [http://localhost:5000/getLatestEarthquakes](http://localhost:5000/getLatestEarthquakes)
   - Description: Fetches information about the latest earthquakes from the USGS API.

### Earthquake Data Processing

#### Code Structure

- **cleanData.ipynb:** Responsible for connecting to the MongoDB database, removing unwanted columns, and deleting rows with incomplete data.

#### Data Processing

The script performs the following data processing tasks:

1. **Connect to the Database:**
   - Establishes a connection to the MongoDB database named 'earthquakes' on port 27017.

2. **Remove Unwanted Columns:**
   - Updates the 'hist_quakes' collection to remove specified columns considered unnecessary for the visualization dashboard.

3. **Delete Rows with Incomplete Data:**
   - Deletes rows from the 'hist_quakes' collection where either the 'coordinates' or 'eq_primary' fields are missing.

### HTML Content

- **homepage.html:** Serves as the main landing page for the website. Includes sections on earthquake information, safety tips, and quick links.

- **latest.html:** Focuses on the exploration of the latest earthquakes. Users can choose a time frame and minimum magnitude to analyze seismic activity globally. The page includes dropdowns for selection, a button to fetch earthquake data, and a map for visualization. A news ticker showcases the latest earthquake news.

- **historical.html:** Provides tools for exploring historical earthquake data. Users can select a country, set minimum and maximum years, and choose earthquake strength. Buttons for fetching earthquake data and capturing a screenshot are provided. Visualizations include a map and various charts.

- **comparison.html:** Allows users to compare earthquake histories. Presents two sets of earthquake data filters for customization, exploring average deaths and magnitude. The page includes observations and inferences sections, encouraging K-12 students to engage with the earthquake data.

### JavaScript Code Explanations

#### Latest Earthquakes Exploration Page

The JavaScript code on the "latest.html" page handles dynamic visualization of the latest earthquakes. Key components include variable initialization, DOM element retrieval, event listeners for data fetching, data fetching using Fetch API, a BarChart function for creating/updating horizontal bar charts, and layers for tectonic plates.


##### Fetching and Displaying News

1. **Fetching News Data:**
   - Fetches earthquake-related news from the server using the provided `newsurl`.

2. **Displaying News in Ticker:**
   - Appends retrieved news data as list items to the ticker box.

3. **Starting the Ticker Animation:**
   - Calls the `startTicker` function in the news-ticker.js library with custom speed and delay parameters to initiate the news ticker animation.


#### Historical Earthquake Activitys Page

The JavaScript code on the "historical.html" page is responsible for facilitating the exploration of historical earthquake data. The key functionalities and components include functions for fetching historical earthquake data, creating custom marker icons, initializing the page, zooming to the selected country, toggling between death counts and magnitudes, and updating vertical and horizontal bar charts based on user interactions. The code also handles the creation of custom markers on the map and capturing a screenshot of the page.

#### Compare Earthquake Histories Page

The JavaScript code on the "comparison.html" page initializes two datasets, fetches data using D3, and calculates summary statistics such as mean deaths, mean magnitudes, and total counts for both sets. It dynamically populates dropdowns with countries, fetches earthquake data based on user-selected parameters, and updates the page with a summary of the comparison. The code also includes functions for creating and updating pie charts comparing mean deaths and mean magnitudes between the two datasets. Additionally, the code includes functions for styling and extending objects that are used in the news ticker animation from news-ticker.js

### Running the Application

To run the web application and explore earthquake data visualizations, follow these steps:

1. **Install Dependencies:**
   - Ensure you have Python, Flask and PyMongo installed. 
   - Create an access_token and save it as `config.js` in the `js` folder. You can obtain your access token from [Mapbox](https://www.mapbox.com/) or contact us to provide our own key for you.

2. **Run the Application:**

    - Run the following command on shell:
    mongoimport --type json -d earthquakes -c hist_quakes --drop --jsonArray significant-earthquake-database.json

    - Run the Jupyter Notebook file:
    cleanData.ipynb

3. **Access the Web App:**
    - Navigate to the project directory and run the following command on shell:
    python app.py -m http.server --bind 127.0.0.1 5000  

4. **Explore Different Pages:**
   - Use the navigation links to explore historical earthquake data, view the latest earthquakes, and compare earthquake histories.

### Data Sources:

**Latest Earthquakes:**
- URL: [https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

**Historical Major Earthquakes:**
- URL: [https://public.opendatasoft.com/explore/dataset/significant-earthquake-database/table/](https://public.opendatasoft.com/explore/dataset/significant-earthquake-database/table/)

**Earthquake News (Web Scraping):**
- URL: [https://abcnews.go.com/alerts/earthquakes](https://abcnews.go.com/alerts/earthquakes)

**News Ticker:** Phppot - A Javascript library that displays a news ticker used in the "Latest" page, to display the ABC News headlines.
- URL: [https://phppot.com/javascript/javascript-news-ticker/](https://phppot.com/javascript/javascript-news-ticker/)



