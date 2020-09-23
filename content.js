/* TODO
 * 1. Cutting off the extra text in the intro and reorganised as paragraphs for lisibility.
 * 2. Adding a 3D book image to make it look more appealing.
 * 3. Add a cookie Banner to be compliant with the EU regulation.
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

	// 1. Modify the text for lisibility
	text.innerHTML =
		"Circularise utilises a combination of blockchain, peer-to-peer technology and cryptographic techniques like Zero-Knowledge Proofs (ZKPs) to build a decentralised information storage and communication platform.<br><br>The goal is to allow information exchange between participants in value chains while allowing them to remain anonymous and fine-tune the amount of information they want to disclose, and who can access it.";

	// 2. Adding a 3D book image to make it look more appealing.

	container.classList.add("beautiful-new-container");

	var infoContainer = document.createElement("div");
	infoContainer.classList.add("info-container");
	infoContainer.append(title, text);

	var coverContainer = document.createElement("div");
	coverContainer.classList.add("cover-container");
	coverContainer.innerHTML = `<a 
		class="book-container"
		href="https://theoutstanding.dev/"
		target="_blank"
		rel="noreferrer noopener"
	>
		<div class="book">
			<img
				alt="The Outstanding Developer by Sebastien Castiel"
				src="https://3d-book-css.netlify.app/book-cover.76b99e5d.png"
				/>
		</div>
	</a>`;

	container.innerHTML = "";
	container.insertBefore(infoContainer, container.firstChild);
	container.insertBefore(coverContainer, container.firstChild);
}
