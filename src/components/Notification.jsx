import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notifications = () => {
  const { currentColor } = useStateContext();
  
  return (
    <div>Notifications</div>
  )
}

export default Notifications;