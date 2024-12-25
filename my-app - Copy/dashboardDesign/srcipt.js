// Dummy data for now (you can fetch this from your backend later)
const recentRequests = [
    { problem: "How to optimize my neural network?", username: "User1" },
    { problem: "Best practices for image preprocessing", username: "User2" },
    { problem: "Help with machine learning algorithms", username: "User3" }
];

const upcomingAdvice = [
    { username: "User1", gender: "Male", age: 25, tags: ["AI", "Deep Learning"] },
    { username: "User2", gender: "Female", age: 30, tags: ["Data Science", "Python"] }
];

// Function to render recent requests
function renderRecentRequests() {
    const cardContainer = document.querySelector('.recent-requests .card-container');
    recentRequests.forEach(request => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${request.username}</h3>
            <p>${request.problem}</p>
        `;
        cardContainer.appendChild(card);
    });
}

// Function to render upcoming advice
function renderUpcomingAdvice() {
    const cardContainer = document.querySelector('.upcoming-advice .card-container');
    upcomingAdvice.forEach(advice => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${advice.username}</h3>
            <p>Gender: ${advice.gender}</p>
            <p>Age: ${advice.age}</p>
            <div class="tags">${advice.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
        `;
        cardContainer.appendChild(card);
    });
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderRecentRequests();
    renderUpcomingAdvice();
});
