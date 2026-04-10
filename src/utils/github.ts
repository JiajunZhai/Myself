export async function getTopProjects(limit: number = 6) {
  const GITHUB_USERNAME = import.meta.env.GITHUB_USERNAME;
  if (!GITHUB_USERNAME) return [];
  
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stargazers_count&per_page=${limit}`);
    if (response.ok) {
      const repos = await response.json();
      return repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description || 'No description provided.',
        stars: repo.stargazers_count,
        language: repo.language || 'Markdown',
        url: repo.html_url
      }));
    }
  } catch (e) {
    console.error("Failed to fetch GitHub repos", e);
  }
  return [];
}
