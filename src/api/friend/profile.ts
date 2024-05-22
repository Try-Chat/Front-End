import instance from '../instance';

export const getMyProfile = async (userId: string) => {
  const res = await instance.get<MyProfileData>(`/users/${userId}/profile`);
  return res.data;
};
