import React from 'react'
import Header from './Header';

function PageLayout(props) {
    return (
        <div>
            <Header />
            { props.children }
            
        </div>
    )
}

export default PageLayout
