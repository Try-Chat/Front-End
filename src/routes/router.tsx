import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants';
import App from '../App';
import { ChatRoom, ChatRoomList, Home } from '../pages';

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.CHAT_ROOM,
        element: <ChatRoom />,
      },
      {
        path: PATH.CHAT_ROOM_LIST,
        element: <ChatRoomList />,
      },
    ],
  },
]);

export default router;
