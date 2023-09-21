const axios = require('axios');

// Define the asynchronous function with parameters
async function fetchIdeas(city, dates) {
  // Define the baseOptions inside the function
  const baseOptions = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '74a73f418emsh8c325d7f91bb73bp128dcajsn3884fc5f12c2',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    }
  };

  // Construct the data object based on the city and dates
  const data = [
    {
      content: `Give me three ideas of things to do in ${city} on the dates of ${dates}. Please make each idea a short sentence and start each sentence with *.`,
      role: 'user'
    }
  ];

  // Merge the base options with the data
  const options = {
    ...baseOptions,
    data
  };

  try {
    const response = await axios.request(options);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}

// fetchIdeas("Antartica", "August 10-12");

// Export function
module.exports = fetchIdeas;
