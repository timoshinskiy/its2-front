import React from 'react';
import { useNavigate } from 'react-router';

const HeaderListItems = (props) => {
    const navigate = useNavigate();
    const width = window.innerWidth;
    return (
            <div className='header-list-items' onMouseLeave={()=>{props.setOpen(false);props.setSelect(null)}} style={{ left: props.x-0.06*width }}>
                {
                    props.arr.map(item => (
                        <div onClick={() => navigate(item.link)} className='header-list-item'>
                            {item.name}
                        </div>
                    ))
                }
            </div>
    );
};

export default HeaderListItems;