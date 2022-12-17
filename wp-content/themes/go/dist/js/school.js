const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  // Toggle the light and dark classes on the body and form elements
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
  form.classList.toggle('light');
  form.classList.toggle('dark');
  selectElement.classList.toggle('light');
  selectElement.classList.toggle('dark');

  // Change the SVG icon on the button
  if (toggleButton.innerHTML.includes('sun')) {
    // If the current icon is the sun icon, replace it with the moon icon
    toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Z"/></svg>';
  } else {
    // If the current icon is not the sun icon, assume it is the moon icon and replace it with the sun icon
    toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Z"/></svg>';
  }
});


// define the schoolData array
let schoolData = [];

// define a variable to hold the pie chart object
let pieChart = undefined;

async function fetchData() {
  // set the URL of the API
  let labeling = ['Black', 'Asian', 'White', 'Latino'];
  let API_URL = "https://data.cityofnewyork.us/resource/c7ru-d68s.json";

  // get the selected school name from the form
  let select = document.getElementById('school-name');
  let schoolName = select.value.replace(/&amp;/g, '&');

  // do not attempt to fetch data if no school name has been selected
  if (!schoolName) {
    return;
  }

  // create the query string for the API
  let query = `Year=2020-21&school_name=${encodeURIComponent(schoolName)}`;

  // clear the schoolData array
  schoolData.length = 0;

  try {
    // fetch the data from the API
    const response = await fetch(`${API_URL}?${query}`);
    const data = await response.json();

    // find the selected school's data in the array of data
    let item = data.find(i => i.school_name === schoolName);
    let schoolData = [];
    data.forEach(item => {
      schoolData.push(item.black);
      schoolData.push(item.asian);
      schoolData.push(item.white);
      schoolData.push(item.hispanic);
    });

    // check if a pie chart with the specified canvas element already exists
    if (typeof pieChart !== 'undefined') {
      // clear the canvas and destroy the old pie chart
      pieChart.clear();
      pieChart.destroy();
    }

    function createPieChart(schoolData) {
      const ctx = document.getElementById('myPieChart').getContext('2d');
      // get the myPieChart element
      let myPieChart = document.getElementById('myPieChart');

      // modify the element's style attribute to set its opacity and top properties
      myPieChart.style.setProperty('opacity', 1);
      myPieChart.style.setProperty('top', 0);

      pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: schoolData,
            backgroundColor: [
              '#B20966',
              '#691FE0',
              '#B792F1',
              '#1C1A36'
            ],
            borderColor: [
              '#B20966',
              '#691FE0',
              '#B792F1',
              '#1C1A36'
            ]
          }],
          labels: labeling
        },
        options: {
          responsive: true,
          aspectRatio: 1,
          legend: false,
          title: {
            display: false,
            text: 'My Pie Chart'
          }
        }
      });
    }

    window.scrollTo({
      top: 450,
      left: 0,
    behavior: 'smooth',
    duration: 9000 // 3 seconds in milliseconds
    });



    // call the createPieChart() function using the schoolData array as an argument
    createPieChart(schoolData);
    }
    catch (error) {
        // handle the error here
        console.error(error)};
    }
    