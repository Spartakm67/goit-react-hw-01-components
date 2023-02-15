
import user from '../data/user.json';
import Profile from './Profile/UserProfile';

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
     <Profile user={user}/>
    </div>
    
    
      
  );
};

/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */