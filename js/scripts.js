// My Scripts


// Data source from AirTable API
// Note: We're using NoCode API to make connecting to AirTable easier
const url = "https://v1.nocodeapi.com/pmanikoth/airtable/rsqhQzAAKcMyyPPW?tableName=Roster";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data.records);
    console.log(data.records[0].fields);
    console.log(data.records[0].fields.Name);
    console.log(data.records[0].fields.Emoji);
    console.log(data.records[0].fields.Color);
    console.log(data.records[0].fields.Image[0].url);

    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.records.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>${student.fields.Name}</figcaption>
            <p>${student.fields.Emoji}</p>
            <img src="${student.fields.Image[0].url}" alt="${student.fields.Name}">
          </figure>
       `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });
