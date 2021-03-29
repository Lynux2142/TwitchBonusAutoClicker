window.addEventListener("load", () => {
	const button = document.getElementById("button");
	const range = document.getElementById("range");

	browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
		browser.tabs.sendMessage(tabs[0].id, {data: "getIsActive"}, (response) => {
			if (!browser.runtime.lastError) {
				button.textContent = response ? "Pause" : "Start";
			} else {
				button.textContent = "Start";
			}
		});
	});
	button.addEventListener("click", () => {
		browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {data: "switch"}, (response) => {
				if (!browser.runtime.lastError) {
					button.textContent = response ? "Pause" : "Start";
				} else {
					button.textContent = "Start";
				}
			});
		});
	});
});