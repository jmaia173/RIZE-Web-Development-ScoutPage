// Function that encapsulates the match-scoring logic
const calculateMatchScore = (playerTagsStr, teamNeedsStr) => {
    const playerTags = new Set(
        playerTagsStr.split(",").map(tag => tag.trim().toLowerCase()).filter(Boolean)
    );
    const teamNeeds = new Set(
        teamNeedsStr.split(",").map(tag => tag.trim().toLowerCase()).filter(Boolean)
    );

    const matches = [...playerTags].filter(tag => teamNeeds.has(tag));
    return { score: matches.length, matchedTags: matches };
};

// Event listener 1: form submission
const form = document.getElementById("scout-form");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const playerName = document.getElementById("player-name").value;
    const playerTags = document.getElementById("player-tags").value;
    const teamNeeds = document.getElementById("team-needs").value;

    const { score, matchedTags } = calculateMatchScore(playerTags, teamNeeds);

    if (score === 0) {
        resultEl.textContent = `${playerName} has no matching tags with the team's needs.`;
        resultEl.style.color = "#c0392b";
    } else {
        resultEl.textContent = `${playerName} matches ${score} tag(s): ${matchedTags.join(", ")}`;
        resultEl.style.color = "#3fae8a";
    }
});

// Event listener 2: hover effect on the nav links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.textShadow = "0 0 6px rgba(78, 204, 163, 0.8)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.textShadow = "none";
    });
});