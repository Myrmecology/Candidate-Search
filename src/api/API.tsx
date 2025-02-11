const searchGithub = async () => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    // Generate a random offset
    const since = Math.floor(Math.random() * 1000000);
    
    const response = await fetch(
      `https://api.github.com/users?since=${since}&per_page=1`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json'
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error('API Error:', data);
      throw new Error('API response error');
    }
    return { items: data }; // Wrap the response to match the expected format
  } catch (err) {
    console.error('Search error:', err);
    return { items: [] };
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json'
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error('User API Error:', data);
      throw new Error('API response error');
    }
    return data;
  } catch (err) {
    console.error('User search error:', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };