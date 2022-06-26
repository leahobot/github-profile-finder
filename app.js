const github = new Github();
const userInterface = new UserInterface();

//Selectors
const submitBtn = document.querySelector(".submit");
const input = document.querySelector(".userName");

//Event Listeners
submitBtn.addEventListener("click", getProfile);

//Functions
function getProfile(event) {
	inputText = input.value;
	if (inputText !== "") {
		github.getProfile(inputText).then((data) => {
			if (data.data.message === "Not Found") {
				userInterface.displayAlert();
				userInterface.clearProfile();
				input.value = "";
			} else {
				userInterface.displayProfile(data.data);
				userInterface.displayRepos(data.repos);
				input.value = "";
			}
		});
	} else {
		// userInterface.clearProfile();
		userInterface.enterProfile();
	}
}
