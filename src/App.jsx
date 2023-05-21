import { Profile } from "component/profile/profile";
import { Statistics } from "component/statistics/statistics";
import user from "./component/profile/user.json";
import data from "./component/statistics/data.json";

function App() {
  return (
    <>
      <div className="App">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <Statistics 
      title="Upload stats" 
      statistics={data} 
      />
    </>
  );
}

export default App;
