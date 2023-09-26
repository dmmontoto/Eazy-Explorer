async function fetchIdeas() {

  const location = document.querySelector('#trip-destination').value.trim();
  const start_date = document.querySelector('#date_start').value;
  const end_date = document.querySelector('#date_end').value;

  const dates = start_date + " to " + end_date;

  // Define the baseOptions inside the function
  const baseOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '74a73f418emsh8c325d7f91bb73bp128dcajsn3884fc5f12c2',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    body: JSON.stringify([
      {
        content: `Can you please give me an image link I can add to my handlebars page that shows ${location}. ALso, give me five ideas of fun activies and things to do in ${location} specifically on the dates of ${dates}. Please make each idea a short sentence and start each sentence with *.`,
        role: 'user'
      }
    ])
  };

  try {
    const response = await fetch('https://chatgpt-api8.p.rapidapi.com/', baseOptions);
    const data = await response.json();
    console.log(data);

    const responseData = data[0].content;

    // Split the response into lines using the '*' as a delimiter
    const lines = responseData.split('*').filter(line => line.trim() !== '');

    // The first line is the image link, and the rest are activity descriptions
    const tripImage = lines[0].trim();
    const activityDescriptions = lines.slice(1).map(description => description.trim());

    // Log the image and descriptions
    console.log('Trip Image:', tripImage);
    console.log('Activity Descriptions:', activityDescriptions);

    // Add the image link to your HTML
    const tripImageElement = document.querySelector('#trip-image');
    if (tripImageElement) {
      tripImageElement.src = tripImage;
    }

    // Add the activity descriptions with line breaks to the 'trip-desc' element
    const tripDescElement = document.querySelector('#trip-desc');
    if (tripDescElement) {
      tripDescElement.textContent = activityDescriptions.join('\n');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', fetchIdeas);

// Export function
// module.exports = fetchIdeas;
