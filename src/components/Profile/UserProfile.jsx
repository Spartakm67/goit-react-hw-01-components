import PropTypes from 'prop-types';
import { UserProfile, Description, Avatar, UserTitle, 
  UserData, UserStats, UserStatsLi, UserStatsQ } from './UserProfile.styled';

export const Profile = ({ user }) => {
const { avatar, username, tag, location, stats: { followers, views, likes } } = user;

    return (
    <UserProfile>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
      />
    <UserTitle>{username}</UserTitle>
    <UserData>@{tag}</UserData>
    <UserData>{location}</UserData>
  </Description>

  <UserStats>
    <UserStatsLi>
      <UserData>Followers</UserData>
      <UserStatsQ>{followers}</UserStatsQ>
    </UserStatsLi>
    <UserStatsLi>
      <UserData>Views</UserData>
      <UserStatsQ>{views}</UserStatsQ>
    </UserStatsLi>
    <UserStatsLi>
      <UserData>Likes</UserData>
      <UserStatsQ>{likes}</UserStatsQ>
    </UserStatsLi>
  </UserStats>
</UserProfile>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }),
  };

export default Profile;
