const fetch = require('node-fetch');

const getRepos = (url) => {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data.map((repo) => repo.name);
		});
};

describe('getRepos', () => {
  it('should check if sd-01-week4-5-project-todo-list is on the list of repos', async (done) => {
    const endpoint = 'https://api.github.com/users/tryber/repos';
    expect.assertions(1);
    await expect(getRepos(endpoint)).resolves.toContain('sd-01-week4-5-project-todo-list');
    done();
  });

  it('should check if sd-01-week4-5-project-meme-generator is on the list of repos', async (done) => {
    const endpoint = 'https://api.github.com/users/tryber/repos';
    expect.assertions(1);
    await expect(getRepos(endpoint)).resolves.toContain('sd-01-week4-5-project-meme-generator');
    done();
  });
});