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