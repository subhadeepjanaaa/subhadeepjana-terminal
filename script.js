const output = document.getElementById("output");
const commandInput = document.getElementById("command");

const GITHUB_USER = "subhadeepjanaaa";

function print(text) {
  output.innerHTML += `<div>${text}</div>`;
  output.scrollTop = output.scrollHeight;
}

async function loadGitHub() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
  return await res.json();
}

async function loadRepos() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`);
  return await res.json();
}

print("Type 'subhadeepjana' to start");

commandInput.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    const cmd = commandInput.value.trim();
    print(`$ ${cmd}`);
    commandInput.value = "";

    switch (cmd) {
      case "subhadeepjana":
        const data = await loadGitHub();
        print("Subhadeep Jana | Terminal Portfolio");
        print("----------------------------------");
        print(`GitHub: ${data.login}`);
        print(`Public Repos: ${data.public_repos}`);
        print(`Followers: ${data.followers}`);
        print("");
        print("Commands:");
        print("about");
        print("projects");
        print("contact");
        print("github");
        print("social");
        print("whatsapp");
        print("clear");
        break;

      case "about":
        print("Name: Subhadeep Jana");
        print("Role: Software Developer");
        print("Skills: Python, JavaScript, PowerShell");
        break;

      case "projects":
        const repos = await loadRepos();
        repos.forEach(r => {
          print(`<a href="${r.html_url}" target="_blank">${r.name}</a>`);
        });
        break;

      case "contact":
        print("Email: self.subhadeepjana@gmail.com");
        print("Phone: +91 8343902741");
        break;

      case "github":
        window.open("https://github.com/subhadeepjanaaa");
        break;

      case "social":
        window.open("https://facebook.com/subhadeep.jana.2006");
        window.open("https://instagram.com/subhadeep.jana.2006");
        break;

      case "whatsapp":
        window.open("https://wa.me/918343902741");
        break;

      case "clear":
        output.innerHTML = "";
        break;

      default:
        print("Command not found");
    }
  }
});
