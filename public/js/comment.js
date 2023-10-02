const addCommentHandler = async (event) => {
    event.preventDefault();

    const plan_id = document.querySelector('#plan-id').value.trim();
    const description = document.querySelector('#new-comment-description').value;
    console.log(plan_id);
    if (plan_id && description) {
        const response = await fetch(`/api/comments`, { 
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
  
  document.addEventListener('DOMContentLoaded', () => {
    const deleteComment = document.querySelectorAll('.delete-comment');
    deleteComment.forEach(button => {
      button.addEventListener('click', async () => {
        const dataId = button.getAttribute('data-id');
        try {
          // Send a DELETE request to your server endpoint
          const response = await fetch(`/api/comments/${dataId}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            document.location.replace(`/comments/${dataId}`);
            document.location.reload();
          } else {
            console.error('Failed to delete comment');
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  });

  /* const deleteCommentHandler = async (event) => {
    event.preventDefault();
    const plan_id = document.querySelector('#plan-id').value.trim();
    const description = document.querySelector('#comment').value;
    const data_id = document.querySelector('data-id').value;
    if (plan_id && description && data_id) {
  
       const response = await fetch('/api/comments/:id', {
         method: 'DELETE',
         body: JSON.stringify({ description, plan_id, data_id }), 
            headers: {
              'Content-Type': 'application/json',
            },
            
       });
    
       if (response.ok) {
        document.location.reload();
       } else {
         alert('Failed to delete comment');
       }
      }
     };
  
  
  
    document
    .querySelector(".comment")
    .addEventListener('click', deleteComments);

      */
  document
    .querySelector(".new-comment-form")
    .addEventListener('submit', addCommentHandler);