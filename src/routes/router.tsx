import { createBrowserRouter, redirect } from 'react-router-dom';
import { PATH } from './constants';
import App from '../App';
import { ChatRoom, ChatRoomList, Friend, Login, SignUp } from '../pages';

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
        path: PATH.FRIEND,
        element: <Friend />,
      },
      {
        path: PATH.SIGN_UP,
        element: <SignUp />,
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
