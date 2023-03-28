import React, {useState, useEffect} from 'react'
import Timer from './component/Timer';

const App = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      { showTimer && <Timer /> }
      <button onCLick={() => setShowTimer(!showTimer)}>toggle Timer</button>
    </div>
  )
}

export default App