interface MyProfileDataType {
  id: number;
  nickname: string;
  role: string;
  greetings: string;
  profileImg: string;
  backgroundImg: string;
  profileImgPath: string;
}

interface FriendProfileDataType {
  id: number;
  friendId: number;
  friendNickname: string;
  friendProfileImg: string;
  friendBackgroundImg: string;
  friendProfileImgPath: string;
  friendStatus: string;
}
