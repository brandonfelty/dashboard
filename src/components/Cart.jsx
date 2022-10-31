import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div>
        <div>
          <p>Shopping Cart</p>
          <Button 
            icon={<MdOutlineCancel />}
            color='rgb(153, 171, 180'
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div>
                <img className='rounded-lg h-80 w-24' src={item.image} alt=''/>
                <div>
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <div>
                    <p>{item.price}</p>
                    <div>
                      <p><AiOutlineMinus /></p>
                      <p>0</p>
                      <p><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart