import React, { useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import { useHistory } from 'react-router-dom';

function IdleTimerCOntainer() {
     const history = useHistory();
  const idleTimerRef =  useRef(null)
  const onIdle = () => {
      history.push('/login')
      console.log('user is idle')
  }
  return ( 
    <div>
        <IdleTimer ref={idleTimerRef} timeout={60 * 1000} onIdle={onIdle}>

        </IdleTimer>
    </div>
  )
}

export default IdleTimerCOntainer