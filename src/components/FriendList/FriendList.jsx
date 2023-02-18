import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendUl, FriendUlLi} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(friend => (
        <FriendUlLi key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendUlLi>
      ))}
    </FriendUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;