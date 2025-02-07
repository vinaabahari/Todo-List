import React from 'react';
import Child from './child';
function Parent () {
    return (
        <div className='parent'>
            <Child nama="Joshua" usia="17" />
            <Child nama="Dinar" usia="18" />
            <Child nama="Fardan" usia="19" />
        </div>
    );
}

export default Parent;
