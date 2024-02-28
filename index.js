let box = document.getElementById("box")
let content = document.getElementById("content")
let heading = document.getElementById("home-heading")
let paragraph = document.getElementById("home-paragraph")
let platformbuttons = document.getElementById("platform-buttons")

function homeButton() {
	box.style.display = "grid";
	platformbuttons.style.display = "none";
	paragraph.textContent = "unknownLauncher is a launcher for Minecraft: Java Edition with separate installation support";
	heading.textContent = "About";
}

function downloadButton() {
	platformbuttons.style.display = "unset";
	box.style.display = "none";
	paragraph.textContent = "Download unknownLauncher";
	heading.textContent = "Download";
}

function faqButton() {
	box.style.display = "none";
	platformbuttons.style.display = "none";
	paragraph.textContent = "This part of the site is under construction.";
	heading.textContent = "Frequently asked questions";
}

function githubButton() {
	window.open('https://github.com/fdesc/unknownlauncher',"_blank");
}

function getVersion() {
	const version = document.getElementById("version");
	fetch('https://raw.githubusercontent.com/fdesc/unknownlauncher/main/latestVersion').then((resp) => {
		resp.text().then((text) => {
			version.textContent = version.textContent.replace("$v",text);
		}).catch((err) => {
			console.log(err);
		})
	});
}
getVersion();
