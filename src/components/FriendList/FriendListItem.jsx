import PropTypes from 'prop-types';

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
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