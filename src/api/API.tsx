const searchGithub = async () => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const response = await fetch(
      `https://api.github.com/search/users?q=location:us&type:user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github.v3+json'
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error('API Error:', data);
      throw new Error('API response error');
    }
    return data;
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
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
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