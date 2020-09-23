/* New features:
 * - Rework of the first section (of the Technology page)
 * - (TODO) Addition of a cookie Banner to be compliant with the EU regulation.
 */

document.addEventListener("DOMContentLoaded", fireContentLoadedEvent, false);

function fireContentLoadedEvent() {
	document.body.classList.add("content-loaded");

	// Accessing the different elements on the DOM
	var container = document.querySelector(
		".sqs-layout .sqs-row:nth-child(2) .sqs-col-10 .sqs-block-html"
	);
	var title = container.querySelector("h2");
	var text = container.querySelector("p");

	// Modify the text for lisibility
	text.innerHTML =
		"Circularise utilises a combination of blockchain, peer-to-peer technology and cryptographic techniques like Zero-Knowledge Proofs (ZKPs) to build a decentralised information storage and communication platform.<br><br>The goal is to allow information exchange between participants in value chains while allowing them to remain anonymous and fine-tune the amount of information they want to disclose, and who can access it.";

	// Adding a 3D book image to make it look more appealing.
	container.classList.add("beautiful-new-container");

	var infoContainer = document.createElement("div");
	infoContainer.classList.add("info-container");
	infoContainer.append(title, text);

	var coverContainer = document.createElement("div");
	coverContainer.classList.add("cover-container");

	coverContainer.innerHTML = `<a 
		class="book-container"
		href="/whitepaper"
	>
		<div class="book">
			<img
				alt="Read our whitepaper"
				src="${chrome.runtime.getURL("assets/cover.png")}"
				/>
		</div>
	</a>`;
	debugger;
	container.innerHTML = "";
	container.insertBefore(infoContainer, container.firstChild);
	container.insertBefore(coverContainer, container.firstChild);

	// Create button and remove the old one
	var buttonContainer = document.createElement("a");
	buttonContainer.href = "/whitepaper";
	buttonContainer.classList.add("button-container");
	var button = document.createElement("button");
	button.innerHTML = "Read Our Whitepaper";
	buttonContainer.append(button);
	infoContainer.append(buttonContainer);

	// Removing useless divs
	var oldSpacer = document.querySelector(".sqs-row");
	oldSpacer.remove();
	var oldButton = document.querySelector(".sqs-block-button");
	oldButton.remove();
}
