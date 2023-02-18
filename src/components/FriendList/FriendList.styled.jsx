import styled from '@emotion/styled';

const FriendUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const FriendUlLi = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: #ffff;
  margin-top: 10px;
  padding: 10px 30px 10px 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px #a4a6a8;
  border: 1px solid #a4a6a8;
`;

export {FriendUl, FriendUlLi};