class Github {
	constructor() {
		this.clientID = "3f26bd93130941e2f964";
		this.secret = "a8aea2b855c45fb3a60d93b33c6e0f4485ed4932";
		this.repos = 5;
		this.sorted_repos = "created: asc";
	}

	async getProfile(profile) {
		const response = await fetch(
			`https://api.github.com/users/${profile}?client_id=${this.clientID}&client_secret=${this.secret}`,
		);

		const reposResponse = await fetch(
			`https://api.github.com/users/${profile}/repos?per_page=${this.repos}&sort=${this.sorted_repos}&client_id=${this.clientID}&client_secret=${this.secret}`,
		);

		const data = await response.json();
		const repos = await reposResponse.json();

		return {
			data,
			repos,
		};
	}
}
