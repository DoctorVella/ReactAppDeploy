import React, {useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';
import './CustomLoader.css';
import { DominoSpinner } from "react-spinners-kit";

const CustomLoader = () => {
    const {loading} = useContext(AppContext)
    return loading? (
        <div className='Loader'>
        <DominoSpinner
                size={200}
                color="green"
                loading={true} 
            />
        </div>
    ) : null
}

CustomLoader.propTypes = {};

CustomLoader.defaultProps = {};

export default CustomLoader;

