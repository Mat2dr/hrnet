import React, { useState } from 'react'
import { Modal } from '../components/Modal/Modal'

const Home = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <p>Click the button to open modal</p>
        <button onClick={ ()=> setShow(true) }>Show</button>
        <Modal onClose={ ()=> setShow(false) } show={ show } />
    </div>
  )
}

export default Home