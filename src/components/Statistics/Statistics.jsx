import PropTypes from 'prop-types';
import { UserProfile, UserStats, UserStatsLi, UserData } from 'components/Profile/UserProfile.styled';
import { Title } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {

// const { id, label, percentage } = stats;

return (
    <UserProfile>
  {title && <Title>{title}</Title>}

  <UserStats>
    {stats.map(stat => {
    return ( 
    <UserStatsLi key={stat.id}>
      <UserData>{stat.label}</UserData>
      <UserData>{stat.percentage}</UserData>
    </UserStatsLi>)
    })}
  </UserStats>
</UserProfile>
)
};
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
export default Statistics;
