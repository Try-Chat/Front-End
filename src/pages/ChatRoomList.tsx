import { ChatRoomListItem } from '../components';
import defaultImg from '../assets/images/defaultImg.jpg';
import { Link } from 'react-router-dom';

const ChatRoomList = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/chatroom">
            <ChatRoomListItem
              chatRoomName="테오의 프론트엔드"
              chatRoomImage={defaultImg}
              lastMessage="레이아웃 작업중"
              lastMessageTime="12m"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ChatRoomList;
