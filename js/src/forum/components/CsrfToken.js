

export async function fetchCsrfToken() {
  let url =app.forum.attribute('apiUrl');;

    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        credentials: 'include', // Include cookies
      });

      const csrfToken = response.headers.get('X-CSRF-Token');

      if (!csrfToken) {
        throw new Error('CSRF token not found');
      }

      return csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  }
