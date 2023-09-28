const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#trip-name').value.trim();
    const location = document.querySelector('#trip-destination').value.trim();
    const description = document.querySelector('#trip-desc').value.trim();
    const date_start = document.querySelector('#date_start').value;
    const date_end = document.querySelector('#date_end').value;
  
    if (name && location && description && date_start && date_end) {
      const response = await fetch('/api/plan', {
        method: 'POST',
        body: JSON.stringify({ name, location, description, date_start, date_end }),
        headers: {
          'Content-Type': 'application/json',
        },
       
      });
      console.log('second test');
      if (response.ok) {
        document.location.replace('/profile')
        console.log('third test');
      } else {
        const errorText = await response.text(); 
        console.error('Error:', errorText);
        alert('Failed to create trip');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/plan/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete plan');
      }
    }
  };
  
  document
    .querySelector('.new-trip-form')
    .addEventListener('submit', newFormHandler);
  
   document
    .querySelector('.trip-list')
    .addEventListener('click', delButtonHandler);
