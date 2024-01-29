//JESUS' WORK
//Configuration for the comparison menu
//All the elements are independent there is no problem if the user miss one or some of them
// From Year: Box
// To Year: Box
// From Magnitude: BOx
// To Magnitude: Box
// Country: dropdown
// ID: Box
// const url = "http://127.0.0.1:5000/getData?minMagnitude=5&maxYear=1700";
// let data; // Declare data as a global variable


const countriesUrl = 'http://127.0.0.1:5000/getCountries';

let base_url = "http://127.0.0.1:5000/getData";

// // Promise Pending
const dataPromise = d3.json(base_url);
console.log("Data Promise: ", dataPromise);

// SET 1: Initialization function that populates dropdown, calls other chart functions, and initializes demographic info
function initCountries(){
  // API endpoint to get the list of countries
  
  // Fetching countries data
  d3.json(countriesUrl).then(function(countries) {
    for (i=0; i<countries.length; i++){
      console.log(countries[i])
      d3.select("#countryDropdown").append("option").text(countries[i]);
      d3.select("#countryDropdown2").append("option").text(countries[i]);
    }
  });
}



//Running the funcitions to get countries for the two sets of data
initCountries();

var meanDeaths1;
var meanDeaths2;
var meanMagnitude1;
var meanMagnitude2;
var totalCount1;
var totalCount2;

//Getting the data of the first set 
function getData() {

  // Get Dataset1
  url = base_url
  
  var selection = document.getElementById("countryDropdown");
  var country = selection.options[selection.selectedIndex].text;
  var minYear = parseFloat(document.getElementById("minYear").value);
  var maxYear = parseFloat(document.getElementById("maxYear").value);
  var fromMagnitude = parseFloat(document.getElementById("fromMagnitude").value);
  var toMagnitude = parseFloat(document.getElementById("toMagnitude").value);
  var eq_id = parseInt(document.getElementById("id").value);
 
  
  firstValue = true;

  if (country) {
    if (firstValue) {
      url = url + "?country=" + country;
      firstValue ^= true;
      }
    else
    {
      url = url + "&country=" + country;
    }
  }
  console.log(firstValue);

  if (minYear) {
    if (firstValue) {
      console.log("Here miniyear if");
      url = url + "?minYear=" + minYear;
      firstValue ^= true;
      }
    else
    {
      console.log("Here miniyear else:");
      url = url + "&minYear=" + minYear;
    }
  }

  if (maxYear) {
    if (firstValue) {
      url = url + "?maxYear=" + maxYear;
      firstValue ^= true;
      }
    else
      {
      url = url + "&maxYear=" + minYear;
      }
    }
    
    if (fromMagnitude) {
      if (firstValue) {
        url = url + "?minMagnitude=" + fromMagnitude;
        firstValue ^= true;
        }
      else
        {
        url = url + "&minMagnitude=" + fromMagnitude;
        }
      }

      if (toMagnitude) {
        if (firstValue) {
          url = url + "?maxMagnitude=" + toMagnitude;
          firstValue ^= true;
          }
        else
          {
          url = url + "&maxMagnitude=" + toMagnitude;
          }
        }

        if (eq_id) {
          if (firstValue) {
            url = url + "?id=" + eq_id;
            firstValue ^= true;
            }
          else
            {
            url = url + "&id=" + eq_id;
            }
          }

      // Make a request to the Flask server using D3
      //d3.json("http://127.0.0.1:5000/getData?minYear=" + minYear + "&maxYear=" + maxYear)
      d3.json(url).then(function(data) {    
                    //createPieChart(data);
                    //createPieChart(data, 'Pie Chart Set 1');
                    meanDeaths1 = d3.mean(data, d => d.deaths);
                    meanMagnitude1 = d3.mean(data, d => d.eq_primary);
                    if (!meanDeaths1) {meanDeaths1 = 0}
                    if (!meanMagnitude1) {meanMagnitude1 = 0}
                    totalCount1 = data.length
                    getData2();
                })       
          .catch(function(error) {
              console.error("Error fetching data:", error);
          });

        };

      // Get Dataset2
  function getData2() {
      url = base_url
  
      var selection = document.getElementById("countryDropdown2");
      var country = selection.options[selection.selectedIndex].text;
      var minYear = parseFloat(document.getElementById("minYear2").value);
      var maxYear = parseFloat(document.getElementById("maxYear2").value);
      var fromMagnitude = parseFloat(document.getElementById("fromMagnitude2").value);
      var toMagnitude = parseFloat(document.getElementById("toMagnitude2").value);
      var eq_id = parseInt(document.getElementById("id2").value);
     
      
      firstValue = true;
    
      if (country) {
        if (firstValue) {
          url = url + "?country=" + country;
          firstValue ^= true;
          }
        else
        {
          url = url + "&country=" + country;
        }
      }
      console.log(firstValue);
    
      if (minYear) {
        if (firstValue) {
          console.log("Here miniyear if");
          url = url + "?minYear=" + minYear;
          firstValue ^= true;
          }
        else
        {
          console.log("Here miniyear else:");
          url = url + "&minYear=" + minYear;
        }
      }
    
      if (maxYear) {
        if (firstValue) {
          url = url + "?maxYear=" + maxYear;
          firstValue ^= true;
          }
        else
          {
          url = url + "&maxYear=" + minYear;
          }
        }
        
        if (fromMagnitude) {
          if (firstValue) {
            url = url + "?minMagnitude=" + fromMagnitude;
            firstValue ^= true;
            }
          else
            {
            url = url + "&minMagnitude=" + fromMagnitude;
            }
          }
    
          if (toMagnitude) {
            if (firstValue) {
              url = url + "?maxMagnitude=" + toMagnitude;
              firstValue ^= true;
              }
            else
              {
              url = url + "&maxMagnitude=" + toMagnitude;
              }
            }
    
            if (eq_id) {
              if (firstValue) {
                url = url + "?id=" + eq_id;
                firstValue ^= true;
                }
              else
                {
                url = url + "&id=" + eq_id;
                }
              }
    
      // Make a request to the Flask server using D3
      d3.json(url).then(function(data) {
        //Creation and update of the Piechart   
                    //createPieChart(data);
                    //createPieChart(data, 'Pie Chart Set 2');
                    //createTimeSeriesChart(data, 'time-series-chart2',minYear,maxYear);
                    meanDeaths2 = d3.mean(data, d => d.deaths);
                    meanMagnitude2 = d3.mean(data, d => d.eq_primary);
                    if (!meanDeaths2) {meanDeaths2 = 0}
                    if (!meanMagnitude2) {meanMagnitude2 = 0}
                    totalCount2 = data.length

                    let summaryline1 = document.getElementById("summaryline1");
                    let summaryline2 = document.getElementById("summaryline2");
                    let summaryline3 = document.getElementById("summaryline3");

                    summaryline1.textContent = `Set 1 -- Number of earthquares: ${totalCount1} - Mean # of Deaths: ${meanDeaths1.toFixed(0)} - Mean Magnitude: ${meanMagnitude1.toFixed(2)}.`;
                    summaryline2.textContent = `Set 2 -- Number of earthquares: ${totalCount2} - Mean # of Deaths: ${meanDeaths2.toFixed(0)} - Mean Magnitude: ${meanMagnitude2.toFixed(2)}.`;
                    
                    createPieChart(meanDeaths1, meanDeaths2, 'Deaths');
                    createPieChart(meanMagnitude1, meanMagnitude2, 'Magnitudes');
                })       
          .catch(function(error) {
              console.error("Error fetching data:", error);
          });

        


        }//end of getData()




        //Creation of a Piechart
  
    function createPieChart(value1, value2, compElement) {
      
      targetElementId = `Pie Chart ${compElement}`

      // Create data for Plotly pie chart
      const pieData = [{
          values: [value1, value2],
          labels: ['Set 1', 'Set 2'],
          marker:
          {colors: ["blue", "orange"]},
          type: 'pie'
      }];
  
      // Define layout for Plotly chart
      const layout = {
          height: 400,
          width: 400,
          title: `Mean ${compElement} in Set 1 vs. Set 2`,
          font: {
            size: 8,
          bold: true,}   // Adjust the font size as needed 
        };

  
      // Plot the pie chart using Plotly
      Plotly.react(targetElementId, pieData, layout);
  }
  
