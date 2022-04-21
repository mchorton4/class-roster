// My Scripts


// Data source from Webflow
const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data.items[0].image.url);

    // get container for data
    const gallery = document.querySelector(".gallery");

    //
    data.items.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>Student</figcaption>
            <img src="${student.image.url}" alt="Placeholder" />
          </figure>
       `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });
