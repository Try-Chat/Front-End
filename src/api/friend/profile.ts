import instance from '../instance';

export const getMyProfile = async (userId: string | number) => {
  const { data } = await instance.get<ProfileDataType>(
    `/users/${userId}/profile`,
  );

  return data;
};

export const getSearchFriend = async (friendKakaoId: string) => {
  const { data } = await instance.get<ProfileDataType>(
    `/users/profile?username=${friendKakaoId}`,
  );

  return data;
};

export const getFriends = async (userId: string | number) => {
  const { data } = await instance.get<ProfileDataType[]>(
    `/users/${userId}/friends`,
  );
  return data;
};
