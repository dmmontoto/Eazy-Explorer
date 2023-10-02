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

  document
    .querySelector(".new-comment-form")
    .addEventListener('submit', addCommentHandler);