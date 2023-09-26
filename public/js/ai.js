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
        content: `Give me three ideas of things to do in ${location} on the dates of ${dates}. Please make each idea a short sentence and start each sentence with *.`,
        role: 'user'
      }
    ])
  };

  try {
    const response = await fetch('https://chatgpt-api8.p.rapidapi.com/', baseOptions);
    const data = await response.json();
    console.log(data);



    return data;
  } catch (error) {
    throw error;
  }
}

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', fetchIdeas);

// fetchIdeas("France", "August 10-12");

// Export function
// module.exports = fetchIdeas;
