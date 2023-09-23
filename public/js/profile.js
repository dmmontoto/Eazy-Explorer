const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#trip-name').value.trim();
    const location = document.querySelector('#trip-destination').value.trim();
    const description = document.querySelector('#trip-desc').value.trim();
  
    if (name && location && description) {
      const response = await fetch(`/api/plans`, {
        method: 'POST',
        body: JSON.stringify({ name, location, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create trip');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/plans/${id}`, {
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
  
  /* document
    .querySelector('.trip-list')
    .addEventListener('click', delButtonHandler);
*/