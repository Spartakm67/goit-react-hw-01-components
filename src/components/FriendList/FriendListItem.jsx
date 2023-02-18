import PropTypes from 'prop-types';
import { FriendAvatar, FriendName, StatusOnline } from './FriendListItem.styled';


const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <>
        <StatusOnline>{isOnline}</StatusOnline>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
        </>    
            );
          };
    
  
          FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
  };

  export default FriendListItem;

//   <span className={
  

















