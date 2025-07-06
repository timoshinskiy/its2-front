import React from 'react';
import { useNavigate } from 'react-router';

const HeaderListItems = (props) => {
    const navigate = useNavigate();
    return (
        <div className='header-list-items' style={{left: props.x}}>
            {
                props.arr.map(item=>(
                    <div onClick={()=>navigate(item.link)} className='header-list-item'>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
};

export default HeaderListItems;