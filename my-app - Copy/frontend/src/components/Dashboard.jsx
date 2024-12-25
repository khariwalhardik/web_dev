import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { counterContext } from "../context/context";
import "./Dashboard.css";

// Sample data
const recentRequests = [
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" },
];

const userProfiles = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

const upcomingAdvice = [
  {
    username: "User1",
    gender: "Female",
    age: 18,
    tags: ["Tag1", "Tag2"],
    date: "19th Dec 2024",
  },
  {
    username: "User2",
    gender: "Male",
    age: 18,
    tags: ["Tag1", "Tag2"],
    date: "19th Dec 2024",
  },
  {
    username: "User3",
    gender: "Female",
    age: 21,
    tags: ["Tag1", "Tag2"],
    date: "19th Dec 2024",
  },
];

// Function to render recent requests cards
const RecentRequestsCard = ({ problemImage, username }) => (
  <div className="card">
    <img src={problemImage} alt="Problem" />
    <p>{username}</p>
  </div>
);

// Function to render user profile circles
const UserProfileCircle = ({ username }) => <div className="circle">{username}</div>;

// Function to render upcoming advice cards
const UpcomingAdviceCard = ({ username, gender, age, tags, date }) => (
  <div className="advice-card">
    <p>
      <strong>{username}</strong> - {gender}, {age} years
    </p>
    <div className="tags">
      {tags.map((tag, i) => (
        <span key={i} className="tag">
          {tag}
        </span>
      ))}
    </div>
    <p>{date}</p>
  </div>
);

const Dashboard = () => {
  const { otpSessionId,setOtpSessionId } = useContext(counterContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setOtpSessionId(""); // Clear session
    navigate("/");
  };

  // useEffect(() => {
  //   if (!otpSessionId) {
  //     navigate("/");
  //   }
  // }, [otpSessionId, navigate]);
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="navbar-right">
          <span>Your Dashboard</span>
          <div className="profile-menu">
            <span>My Profile</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-content">
        <section className="branding">
          <h1>Greetings Expert!</h1>
          <p>
            You can download our App from the Google Play Store or Apple Store.
            Download soon for a smoother experience!
          </p>
          <div className="download-buttons">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </section>

        {/* Recently Shared Section */}
        <section className="recently-shared">
          <h2>Recently Shared</h2>
          <div className="cards">
            {recentRequests.map((req, index) => (
              <RecentRequestsCard
                key={index}
                problemImage={req.problemImage}
                username={req.username}
              />
            ))}
          </div>
        </section>

        {/* User Profiles */}
        <section className="user-profiles">
          <h2>Your User Profiles</h2>
          <div className="profile-circles">
            {userProfiles.map((user, index) => (
              <UserProfileCircle key={index} username={user} />
            ))}
          </div>
        </section>

        {/* Upcoming Advice */}
        <section className="upcoming-advice">
          <h2>Upcoming Advice</h2>
          <div className="advice-cards">
            {upcomingAdvice.map((advice, index) => (
              <UpcomingAdviceCard
                key={index}
                username={advice.username}
                gender={advice.gender}
                age={advice.age}
                tags={advice.tags}
                date={advice.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
