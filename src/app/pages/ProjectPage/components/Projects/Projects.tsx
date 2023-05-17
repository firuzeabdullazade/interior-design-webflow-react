import { useState } from 'react';
import './Projects.scss';

export const Projects = () => {
  const [isActive, setisActive] = useState(false);

  const buttonIsActive = () => {
    setisActive(!isActive);
  };

  return (
    <>
      <div className="projects">
        <div className="categories">
          <button onClick={() => buttonIsActive}>Bathroom</button> 
          <button onClick={() => buttonIsActive}>Bed room</button>
          <button onClick={() => buttonIsActive}>Kitchan</button>
          <button onClick={() => buttonIsActive}>Living Area</button>
        </div>
        <div className="projects-part"></div>
        <div className="pagination"></div>
      </div>
    </>
  );
};
