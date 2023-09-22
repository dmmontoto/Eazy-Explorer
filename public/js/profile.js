const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#trip-name').value.trim();
    const trip_destination = document.querySelector('#trip-destination').value.trim();
    const trip_desc = document.querySelector('#trip-desc').value.trim();
  
    if (name && trip_destination && trip_desc) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, trip_destination, trip_desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-trip-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.trip-list')
    .addEventListener('click', delButtonHandler)