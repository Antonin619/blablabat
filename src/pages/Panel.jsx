import { useEffect } from 'react';
import '../App.scss';
import '../style/panel.scss'

function Panel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="panel">
      
        
    </div>
  );
}

export default Panel;