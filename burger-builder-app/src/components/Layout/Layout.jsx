import React from 'react';

const layout = (props) => (
    <>
        <div>
            Toolbar, SideBar, BackDrop
        </div>
        <main>
            { props.children }
        </main>
    </>
);

export default layout;