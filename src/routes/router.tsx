import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants';
import App from '../App';
import { ChatRoom, HOME } from '../pages';

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <HOME />,
      },
      {
        path: PATH.CHAT_ROOM,
        element: <ChatRoom />,
      },
    ],
  },
]);

export default router;
