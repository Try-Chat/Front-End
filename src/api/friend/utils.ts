import instance from '../instance';

export const addFriend = async (friendKakaoId: string) => {
  const { data } = await instance.post<FriendProfileDataType[]>(
    '/friends/add',
    {
      username: friendKakaoId,
    },
  );
  return data;
};
