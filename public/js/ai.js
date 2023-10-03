async function fetchIdeas() {
  const location = document.querySelector('#trip-destination').value.trim();
  const start_date = document.querySelector('#date_start').value;
  const end_date = document.querySelector('#date_end').value;

  const dates = start_date + " to " + end_date;

  const baseOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '74a73f418emsh8c325d7f91bb73bp128dcajsn3884fc5f12c2',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    body: JSON.stringify([
      {
        content: `Give me five ideas of fun activities and things to do in ${location} specifically on the dates of ${dates}. Please make each idea a short sentence and separate them using an asterisk (*). If this location is not real, please return "This is not a real location" (Example: Narnia)`,
        role: 'user'
      }
    ])
  };

  try {
    const response = await fetch('https://chatgpt-api8.p.rapidapi.com/', baseOptions);
    const data = await response.json();

    const responseData = data.text; 

    const lines = responseData.split('*').filter(line => line.trim() !== '');

    const tripDesc = lines[0].trim();

    const tripDescTextarea = document.querySelector('#trip-desc');
    tripDescTextarea.value = tripDesc;
    
    return data;
  } catch (error) {
    throw error;
  }
}

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', fetchIdeas);

// API KEYS
// 74a73f418emsh8c325d7f91bb73bp128dcajsn3884fc5f12c2
// cb55d331c2msheffcf3623997c3bp1fc0f2jsn2b8f997e3c9f
// 2778a8bb70mshdc89ff7dadfe79ap15ae15jsna4aa1dcf4d98