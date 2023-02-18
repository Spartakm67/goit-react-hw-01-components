import styled from '@emotion/styled'

  const UserProfile = styled.div`
  border-radius: 5%;
  margin: auto;
  width: 600px;
  background-color: #3b8ba5;
  padding: 20px 40px;
  margin-bottom: 15px;
`;
  const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: linear-gradient(
    
    75deg, rgba(131,58,180,1) 0%, rgba(229,253,29,1) 27%, rgba(214,252,69,0.4682247899159664) 100%
  );
  border-radius: 25%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  background: #f1f1f1;
`;

const UserTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;    
`;

const UserData = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: grey;
  margin-bottom: 10px;
`;

const UserStats = styled.ul`
display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserStatsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
  width: calc(100% / 3);
  padding: 20px 20px;
  background-color: #f1f1f1;
`;

const UserStatsQ = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

export {UserProfile, Description, Avatar, UserTitle, UserData, UserStats, UserStatsLi, UserStatsQ};