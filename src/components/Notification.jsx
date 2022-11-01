import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notifications = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div>
        <div>
          <p>Notifications</p>
          <button> 5 New</button>
        </div>
        <Button 
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
        />
      </div>
      <div>
        {chatData.map((item, index) => (
          <div>
            <img 
              src={item.image}
              alt={item.message}
            />
            <div>
              <p>{item.message}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        <div>
          <Button 
            color='white'
            bgColor={currentColor}
            text='See all notifications'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  )
}

export default Notifications;