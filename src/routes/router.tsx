import { createBrowserRouter, redirect } from 'react-router-dom';
import { PATH } from './constants';
import App from '../App';
import { ChatRoom, ChatRoomList, Friend, Login } from '../pages';

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: PATH.Friend,
        element: <Friend />,
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
