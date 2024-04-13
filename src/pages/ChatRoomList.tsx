import { ChatRoomListItem, Layout } from '../components';
import Header from '../components/common/Header';
import defaultImg from '../assets/images/defaultImg.jpg';
import { Link } from 'react-router-dom';

const ChatRoomList = () => {
  return (
    <Layout>
      <Header>메세지</Header>
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
    </Layout>
  );
};

export default ChatRoomList;
