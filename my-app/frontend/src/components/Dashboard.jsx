import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { counterContext } from "../context/context";
import "./Dashboard.css";
const recentRequests = [
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" }, { problemImage: "https://via.placeholder.com/150", username: "User4" },
  { problemImage: "https://via.placeholder.com/150", username: "User1" },
  { problemImage: "https://via.placeholder.com/150", username: "User2" },
  { problemImage: "https://via.placeholder.com/150", username: "User3" },
  { problemImage: "https://via.placeholder.com/150", username: "User4" },
];

// const userProfiles = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

// const upcomingAdvice = [
//   { username: "User1", gender: "Female", age: 18, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
//   { username: "User2", gender: "Male", age: 18, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
//   { username: "User3", gender: "Female", age: 21, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
// ];

const RecentRequestsCard = ({ problemImage, username, onClick }) => (
  <button className="card" onClick={onClick}>
    <img src={problemImage} alt="Problem" />
    <p>{username}</p>
  </button>
);

const UserProfileCircle = ({ username, onClick }) => (
  <button className="circle" onClick={onClick}>
    {username}
  </button>
);

const UpcomingAdviceCard = ({ username, gender, age, tags, date, onClick }) => (
  <button className="advice-card" onClick={onClick}>
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
  </button>
);

const Dashboard = () => {
  const { otpSessionId, setOtpSessionId } = useContext(counterContext);
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);


  const [userProfilesUser, setUserProfilesUser] = useState([]);
  const [visibleCountUser, setVisibleCountUser] = useState(5);
  const [loadingUser, setLoadingUser] = useState(false);
  const [searchQueryUser, setSearchQueryUser] = useState('');

  // Simulate an API call to fetch user profiles
  useEffect(() => {
    setTimeout(() => {
      setUserProfilesUser([
        { username: "user1", uid: "uid1" },
        { username: "user2", uid: "uid2" },
        { username: "user3", uid: "uid3" },
        { username: "user4", uid: "uid4" },
        { username: "user5", uid: "uid5" },
        { username: "user6", uid: "uid6" },
        { username: "user7", uid: "uid7" },
        { username: "user8", uid: "uid8" },
        { username: "user9", uid: "uid9" },
        { username: "user10", uid: "uid10" },
        { username: "user11", uid: "uid11" },
        { username: "user12", uid: "uid12" },
        { username: "user13", uid: "uid13" },
        { username: "user14", uid: "uid14" },
        { username: "user15", uid: "uid15" }
      ]);
    }, 1000);  // Simulating a loading delay
  }, []);

  // Handle show all profiles with loading time
  const handleShowAllUser = () => {
    setLoadingUser(true);
    setTimeout(() => {
      setVisibleCountUser(userProfilesUser.length);
      setLoadingUser(false);
    }, 3000); // 3 seconds delay
  };

  // Filter profiles based on search query
  const filteredProfilesUser = userProfilesUser.filter(user =>
    user.username.toLowerCase().includes(searchQueryUser.toLowerCase())
  );





  const handleLogout = () => {
    setOtpSessionId("");
    navigate("/");
  };
  const handleShowAll = () => {
    console.log("show all button pressed")
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(recentRequests.length); // Show all requests after 3 seconds
      setLoading(false);
    }, 3000); // 3 seconds buffer time
  };
  // useEffect(() => {
  //   if (!otpSessionId) navigate("/");
  // }, [otpSessionId, navigate]);



  const [upcomingAdvice, setUpcomingAdvice] = useState([]);
  const [visibleAdviceCount, setVisibleAdviceCount] = useState(5);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [searchAdviceQuery, setSearchAdviceQuery] = useState('');
  const [filterAdviceType, setFilterAdviceType] = useState('username'); // or 'tags'

  // Example data for upcoming advice (replace this with actual data)
  useEffect(() => {
    setTimeout(() => {
      const upcomingAdvice = [
        { username: "User1", gender: "Female", age: 18, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
        { username: "User2", gender: "Male", age: 18, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
        { username: "User3", gender: "Female", age: 21, tags: ["Tag1", "Tag2"], date: "19th Dec 2024" },
        { username: "User4", gender: "Male", age: 22, tags: ["Tag3", "Tag4"], date: "20th Dec 2024" },
        { username: "User5", gender: "Female", age: 24, tags: ["Tag1", "Tag5"], date: "21st Dec 2024" },
        { username: "User6", gender: "Male", age: 19, tags: ["Tag2", "Tag3"], date: "22nd Dec 2024" },
        { username: "User7", gender: "Female", age: 23, tags: ["Tag4", "Tag6"], date: "23rd Dec 2024" },
        { username: "User8", gender: "Male", age: 25, tags: ["Tag1", "Tag7"], date: "24th Dec 2024" },
        { username: "User9", gender: "Female", age: 26, tags: ["Tag8", "Tag5"], date: "25th Dec 2024" },
        { username: "User10", gender: "Male", age: 27, tags: ["Tag2", "Tag9"], date: "26th Dec 2024" },
        { username: "User11", gender: "Female", age: 20, tags: ["Tag3", "Tag10"], date: "27th Dec 2024" },
        { username: "User12", gender: "Male", age: 28, tags: ["Tag4", "Tag8"], date: "28th Dec 2024" },
        { username: "User13", gender: "Female", age: 22, tags: ["Tag1", "Tag9"], date: "29th Dec 2024" },
        { username: "User14", gender: "Male", age: 30, tags: ["Tag5", "Tag6"], date: "30th Dec 2024" },
        { username: "User15", gender: "Female", age: 19, tags: ["Tag7", "Tag2"], date: "31st Dec 2024" },
        { username: "User16", gender: "Male", age: 21, tags: ["Tag3", "Tag1"], date: "1st Jan 2025" },
        { username: "User17", gender: "Female", age: 23, tags: ["Tag4", "Tag2"], date: "2nd Jan 2025" },
        { username: "User18", gender: "Male", age: 26, tags: ["Tag5", "Tag8"], date: "3rd Jan 2025" },
        { username: "User19", gender: "Female", age: 27, tags: ["Tag6", "Tag9"], date: "4th Jan 2025" },
        { username: "User20", gender: "Male", age: 25, tags: ["Tag1", "Tag4"], date: "5th Jan 2025" },
      ];

      setUpcomingAdvice(upcomingAdvice);
    }, 1000); // Simulating loading delay
  }, []);

  const handleShowAllAdvice = () => {
    setLoadingAdvice(true);
    setTimeout(() => {
      setVisibleAdviceCount(upcomingAdvice.length);
      setLoadingAdvice(false);
    }, 3000); // 3 seconds delay
  };

  const filteredAdvice = upcomingAdvice.filter(advice => {
    if (filterAdviceType === 'username') {
      return advice.username.toLowerCase().includes(searchAdviceQuery.toLowerCase());
    } else if (filterAdviceType === 'tags') {
      return advice.tags.some(tag => tag.toLowerCase().includes(searchAdviceQuery.toLowerCase()));
    }
    return true;
  });
  const handleUserProfileClick = (userId) => {
    navigate(`/user-profile/${userId}`); // Navigate to the new page with the user ID
  };

  return (
    <div className="dashboard-container">
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

      <main className="main-content">
        <section className="branding">
          <h1>Greetings Expert!</h1>
          <p>Download our App from the Google Play Store or Apple Store for a smoother experience!</p>
          <div className="download-buttons">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </section>

        {/* <section className="recently-shared">
          <h2>Recently Shared</h2>
          <div className="cards">
            {recentRequests.slice(0, isExpanded ? recentRequests.length : 5).map((req, index) => (
              <RecentRequestsCard
                key={index}
                problemImage={req.problemImage}
                username={req.username}
                onClick={() => alert(`Opening ${req.username}'s request`)}
              />
            ))}
          </div>
          {recentRequests.length > 5 && (
            <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? '▲ Show Less' : '▼ Show More'}
            </button>
          )}
        </section> */}
        {/* <section className="recently-shared">
          <h2>Recently Shared</h2>
          <div className="cards">
            {recentRequests.slice(0, visibleCount).map((req, index) => (
              <RecentRequestsCard
                key={index}
                problemImage={req.problemImage}
                username={req.username}
                onClick={() => alert(`Opening ${req.username}'s request`)}
              />
            ))}
          </div>
          {visibleCount < recentRequests.length && (
            <button
              className="expand-button"
              onClick={() => setVisibleCount((prev) => prev + 5)}
            >
              Show More
            </button>
          )}
        </section> */}
        <section className="recently-shared">
          <h2>Recently Shared</h2>
          <div className="cards">
            {recentRequests.slice(0, visibleCount).map((req, index) => (
              <RecentRequestsCard
                key={index}
                problemImage={req.problemImage}
                username={req.username}
                onClick={() => alert(`Opening ${req.username}'s request`)}
              />
            ))}
          </div>

          <div className="buttons">
            {visibleCount < recentRequests.length && !loading && (
              <button
                className="expand-button"
                onClick={() => setVisibleCount((prev) => prev + 5)}
              >
                Show More
              </button>
            )}
            {visibleCount > 5 && !loading && (
              <button
                className="hide-button"
                onClick={() => setVisibleCount(5)}
              >
                Hide All
              </button>
            )}
            {visibleCount < recentRequests.length && !loading && (
              <button
                className="show-all-button"
                onClick={handleShowAll}
              >
                Show All
              </button>
            )}
            {/* {loading && <div className="loading">Loading...</div>} */}
            {loading && <div className="loading"></div>}

          </div>
        </section>

        {/* 
        <section className="user-profiles">
          <h2>Your User Profiles</h2>
          <div className="profile-circles">
            {userProfiles.map((user, index) => (
              <UserProfileCircle
                key={index}
                username={user}
                onClick={() => alert(`Opening profile of ${user}`)}
              />
            ))}
          </div>
        </section> */}
        <section className="user-profiles-user">
          <h2>Your User Profiles</h2>

          {/* Search Bar */}
          <div className="search-container-user">
            <input
              type="text"
              className="search-bar-user"
              placeholder="Search for users..."
              value={searchQueryUser}
              onChange={(e) => setSearchQueryUser(e.target.value)}
            />
          </div>

          {/* Loading Animation */}
          {loadingUser && <div className="loading-user"></div>}

          <div className="profile-circles-user">
            {/* Display filtered user profiles based on search query */}
            {filteredProfilesUser.slice(0, visibleCountUser).map((user, index) => (
              <div
                key={index}
                className="user-profile-circle-user"
                // onClick={() => alert(`Opening profile of ${user.username}`)}
                onClick={() => handleUserProfileClick(user.uid)} 
              >
                {user.username}
              </div>
            ))}
          </div>

          {/* Buttons for Show All and Hide */}
          <div className="buttons-user">
            {visibleCountUser < filteredProfilesUser.length && !loadingUser && (
              <button className="expand-button-user" onClick={() => setVisibleCountUser((prev) => prev + 5)}>
                Show More
              </button>
            )}
            {visibleCountUser > 5 && !loadingUser && (
              <button className="hide-button-user" onClick={() => setVisibleCountUser(5)}>
                Hide All
              </button>
            )}
            {visibleCountUser < filteredProfilesUser.length && !loadingUser && (
              <button className="show-all-button-user" onClick={handleShowAllUser}>
                Show All
              </button>
            )}
          </div>
        </section>








        {/* 
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
                onClick={() => alert(`Opening advice for ${advice.username}`)}
              />
            ))}
          </div>
        </section> */}




        <section className="upcoming-advice">
          <h2>Upcoming Advice</h2>

          {/* Search Bar */}
          <div className="search-advice-container">
            <input
              type="text"
              className="search-advice-bar"
              placeholder={`Search by ${filterAdviceType}...`}
              value={searchAdviceQuery}
              onChange={(e) => setSearchAdviceQuery(e.target.value)}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="advice-dropdown">
            <select
              value={filterAdviceType}
              onChange={(e) => setFilterAdviceType(e.target.value)}
              className="filter-advice-dropdown"
            >
              <option value="username">Search by Username</option>
              <option value="tags">Search by Tag</option>
            </select>
          </div>

          {/* Loading Animation */}
          {loadingAdvice && <div className="loading-advice"></div>}

          {/* Display filtered advice cards */}
          <div className="advice-cards">
            {filteredAdvice.slice(0, visibleAdviceCount).map((advice, index) => (
              <div
                key={index}
                className="advice-card"
                onClick={() => alert(`Opening advice for ${advice.username}`)}
              >
                <div>{advice.username}</div>
                <div>{advice.gender}</div>
                <div>{advice.age} years old</div>
                <div>{advice.date}</div>
                <div className="tags">
                  {advice.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* Buttons for Show More, Show All, Hide */}
          <div className="advice-buttons">
            {visibleAdviceCount < filteredAdvice.length && !loadingAdvice && (
              <button className="expand-advice-button" onClick={() => setVisibleAdviceCount((prev) => prev + 5)}>
                Show More
              </button>
            )}
            {visibleAdviceCount > 5 && !loadingAdvice && (
              <button className="hide-advice-button" onClick={() => setVisibleAdviceCount(5)}>
                Hide All
              </button>
            )}
            {visibleAdviceCount < filteredAdvice.length && !loadingAdvice && (
              <button className="show-all-advice-button" onClick={handleShowAllAdvice}>
                Show All
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
