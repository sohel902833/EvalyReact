import React from 'react';

const SorterImage=props=> {
    console.log(props)
        return (
            <div  className="item1">
                <img onClick={() => props.changeMethod(props.img)}  src={props.img} alt="" />
            </div>
        );
    
}

export default SorterImage;