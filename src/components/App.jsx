
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container
    >
     <Profile user={user} />
     <Statistics title="Upload stats" stats={data} />
     <Statistics title="" stats={data} />
     <FriendList friends={friends} />
     <TransactionHistory transactions={transactions} />
    </Container>
      
  );
};
 