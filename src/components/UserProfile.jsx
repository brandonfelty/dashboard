import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div>
        <p>User Profile</p>
        <Button 
          icon={<MdOutlineCancel/>}
          color='rbg(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
        />
      </div>
      <div>
        <img 
          src={avatar}
          alt='user-profile'
        />
        <div>
          <p> Micheal Roberts </p>
          <p> Administrator </p>
          <p> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index}>
            <button>
              {item.icon}
            </button>
            <div>
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <Button 
          color='white'
          bgColor={currentColor}
          text='Logout'
          borderRadius='10px'
          width='full'
        />
      </div>
    </div>

  )
}

export default UserProfile;