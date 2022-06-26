const userProfile = document.querySelector(".profile");

class UserInterface {
	constructor() {
		this.profile = userProfile;
	}

	displayProfile(user) {
		this.profile.innerHTML = `
            <div class="profile-container">
                  <div class="profile-details">
                        <div class="profile-header">
                              <img class="profile-image" src="${user.avatar_url}" alt="user's image">
                              <p class="bio"><strong>Bio</strong>: ${user.bio}</p>
                        </div>

                        <div class="profile-info">
                              <div class="links">
                                    <span class="link" id="link-1">Public Repositories: ${user.public_repos}</span>
                                    <span class="link" id="link-2">Public Gists: ${user.public_gists}</span>
                                    <span class="link" id="link-3">Followers: ${user.followers}</span>
                                    <span class="link" id="link-4">Following: ${user.following}</span>
                              </div>
                              <ul class="list-groups">
                                    <li class="lists">Name: ${user.name}</li>
                                    <li class="lists">Company: ${user.company}</li>
                                    <li class="lists">Website/Blog: ${user.blog}</li>
                                    <li class="lists">Location: ${user.location}</li>
                                    <li class="lists">Member since: ${user.creater_at}</li>
                              </ul>
                        </div>
                  </div>
                  <a class="profile-link" href="${user.html_url}">Go to Github Profile</a>
            </div>

           
            <h3 class="latest-repos">Recent Repositories</h3>
                  <div class="repos"></div>
            `;
	}

	displayRepos(repos) {
		const recentRepos = document.querySelector(".repos");
		if (repos) {
			let displayed = "";

			repos.forEach(function (repo) {
				displayed += `
                  <div class="repo-container">
                        <div>
                              <a class="repo-name" href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div>
                              <span class="linked" id="link-1">Stars: ${repo.stargazers_count}</span>
                              <span class="linked" id="link-3">Watchers: ${repo.watchers_count}</span>
                              <span class="linked" id="link-4">Forks: ${repo.forms_count}</span>
                        </div>
                  </div>`;
			});
			recentRepos.innerHTML = displayed;
		}
	}

	displayAlert() {
		this.removeAlert();
		const alert = document.createElement("div");
		alert.className = "warning-message";
		alert.appendChild(document.createTextNode("User not Found"));
		const main = document.querySelector(".main");
		main.insertAdjacentElement("beforebegin", alert);
		this.clearProfile();

		setTimeout(() => {
			this.removeAlert();
		}, 2000);
	}

	removeAlert() {
		const alertMsg = document.querySelector(".warning-message");
		if (alertMsg) {
			alertMsg.remove();
		}
	}

	clearProfile() {
		this.profile.innerHTML = "";
	}

	enterProfile() {
		this.removeEnterProfile();
		const enter = document.createElement("div");
		enter.className = "warning-message";
		enter.appendChild(document.createTextNode("Enter a Username"));
		const main = document.querySelector(".main");
		main.insertAdjacentElement("beforebegin", enter);

		setTimeout(() => {
			this.removeEnterProfile();
		}, 1000);
	}

	removeEnterProfile() {
		const enterMsg = document.querySelector(".warning-message");
		if (enterMsg) {
			enterMsg.remove();
		}
	}
}
