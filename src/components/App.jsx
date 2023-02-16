
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

import Profile from './Profile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Profile user={user} />
     <Statistics title="Upload stats" stats={data} />
     <Statistics title="" stats={data} />
     <FriendList friends={friends} />
     
    </div>
    
    
      
  );
};
/* <Statistics title="Upload stats" stats={data} /> */
/* <Statistics stats={data} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} /> */