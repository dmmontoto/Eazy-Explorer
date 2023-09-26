const addCommentHandler = async (event) => {
    event.preventDefault();

    const plan_id = document.querySelector('#plan-id').value.trim();
    const description = document.querySelector('#new-comment-description').value;
    console.log(plan_id);
    if (plan_id && description) {
        const response = await fetch(`/api/plan/${ plan_id }`, { 
          method: 'POST',
          body: JSON.stringify({ description, plan_id }), 
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

document
  .querySelector(".new-comment-form")
  .addEventListener('submit', addCommentHandler);

// Function to handle comment delete button click
// const deleteCommentHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/comments/${id}`, {
//       method: 'DELETE',
//     });
  
//     if (response.ok) {
//       document.location.reload(); 
//     } else {
//       alert('Failed to delete comment');
//     }
//   }
// };