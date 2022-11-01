import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div>
        <div>
          <p>Messages</p>
          <button>
            5 New
          </button>
        </div>
        <Button 
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          closeMenu='chat'
        />
      </div>
    </div>
  )
}

export default Chat;