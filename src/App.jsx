import { Profile } from './Component/Profile/Profile';
import { Statistics } from './Component/Statistics/Statistics';
import { FriendList } from './Component/FriendList/FriendList';
import { TransactionHistory } from './Component/TransactionHistory/TransactionHistory';
import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from 'Data/transactions.json';

function App() {
  return (
    <>
      <div className="App">
        <h2>----------------- Tack 1 -----------------</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <h2>----------------- Tack 2 -----------------</h2>
      <Statistics title="Upload stats" statistics={data} />
      <h2>----------------- Tack 3 -----------------</h2>
      <FriendList friends={friends} />
      <h2>----------------- Tack 4 -----------------</h2>
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
