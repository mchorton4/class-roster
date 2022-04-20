// My Scripts


// Data source
const url = "https://picsum.photos/v2/list";

// Get data
fetch(url)
  .then( response => response.json() )
  .then( data  => {
    // check-check
    console.log(data);
    
    // Get Parent
    const container = document.querySelector('main');
     
    // Loop through each item
    data.forEach( ( item ) => {
      
     const template = `
     <figure>
        <img src=${item.src = item.download_url} />  
        <figcaption>${item.author}</figcaption>
     </figure>
     `
     // Dynamicaly insert into the DOM
      container.insertAdjacentHTML('afterbegin', template);

    });
  });
