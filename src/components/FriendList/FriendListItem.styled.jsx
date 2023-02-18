import styled from '@emotion/styled';

const FriendAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  border: 1px solid #a4a6a8;
  padding: 5px
  `;

const FriendName = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px
`;

const StatusOnline = styled.span`
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
  `;

export {FriendAvatar, FriendName, StatusOnline};