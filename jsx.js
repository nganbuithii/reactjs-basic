import React from 'react';

const jsx = () => {
    const element = <div id="root"> Hello world</div>
    const elementR = React.createElement("div",{id:"root"}, "hello world");
    const element2 = (
        <div>
            <span>Hello</span>
            <span>world</span>
        </div>
    )
    return (
        // Phải có 1 phần tử cha bao gồm lại
        <div className='heading' id='heading'>
            This is heading
        </div>
    );
};

export default jsx;