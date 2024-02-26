import React from 'react';

const Content: React.FC = () => {
    return (
        <>
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 border rounded-lg'>
            <h1 className='text-4xl md:text-4xl text-red-500 font-bold'>My Projects</h1>
        </div>
        <div>
            //this div will be grid content
        </div>
        </>
    );
};

export default Content;