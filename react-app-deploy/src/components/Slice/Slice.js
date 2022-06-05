import React, {useState} from 'react';

const Slice = ({css, text, description}) => {
  const [open,setOpen] = useState(false)

  const changeOpenState = () => {
    setOpen(!open)
  }

  return <div className={'Slice ' + css + (open ? '' : ' BackgroundBlur')} 
            onMouseEnter={changeOpenState}
            onMouseOut={changeOpenState}>
    {text}<br/>
    <span className='Description'>{description}</span>
  </div>
};

Slice.propTypes = {};

Slice.defaultProps = {};

export default Slice;
