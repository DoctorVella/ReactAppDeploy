import React, {useState} from 'react';

const Slice = ({css, text}) => {
  const [open,setOpen] = useState(false)

  const changeOpenState = () => {
    setOpen(!open)
  }

  return <div className={'Slice ' + css + (open ? '' : ' BackgroundBlur')} 
            onMouseEnter={changeOpenState}
            onMouseOut={changeOpenState}>
    {text}
  </div>
};

Slice.propTypes = {};

Slice.defaultProps = {};

export default Slice;
