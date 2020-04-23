import React, { useState } from 'react';
import { Button, Heading } from 'react-bulma-components';

const Popup = ({submit, closePopup}) => {
  const [name, setName] = useState('');
  const [isBand, setIsBand] = useState(false);

  return (
    <div className="popup">
      <div className="popup__body">
        <Button className="popup__closeBtn" color="info" onClick={closePopup}> X </Button>
        <br/>
        <div>
          <Heading size={4}> Add new artist </Heading>
          <form>
            <label htmlFor="#name"> Name: </label>
            <input type="text" value={name} id="name" onChange={e => setName(e.target.value)}/>
            <br/>
            <label htmlFor="#isBand">Is band?</label>
            <input type="checkbox" checked={isBand} onChange={e => setIsBand(!isBand)} id="isBand"/>
          </form>
          <Button color="success" onClick={() => submit({name, isBand})}> Add </Button>
        </div>
      </div>
      <div className="popup__layer"></div>
    </div>
  )
}

export default Popup
