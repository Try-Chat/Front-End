import instance from '../instance';

export const getMyProfile = async (
  userId: string,
): Promise<ProfileDataType> => {
  const { data } = await instance.get<ProfileDataType>(
    `/users/${userId}/profile`,
  );

  return data;
};

export const getSearchFriend = async (
  friendKakaoId: string,
): Promise<ProfileDataType> => {
  const { data } = await instance.get<ProfileDataType>(
    `/users/profile?uniqueName=${friendKakaoId}`,
  );

  return data;
};

export const getFriends = async (
  userId: string,
): Promise<ProfileDataType[]> => {
  const { data } = await instance.get<ProfileDataType[]>(
    `/users/${userId}/friends`,
  );
  return data;
};
