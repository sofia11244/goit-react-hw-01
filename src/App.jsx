import './App.css'
import Profile from './components/Profile/Profile.jsx';
import userData from './data/userData.json';

<Profile propName="propValue" />

const App=()=>{
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  )
};

export default App;
