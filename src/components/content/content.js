import React from 'react';
import { ContentWrap } from './contentStyles';

function Content() {

    return (
        <ContentWrap>
            <h3>Some heading</h3>
            <div className='boxWrap'>
                <div className='img'></div>
                <div className='cont'></div>
            </div>
        </ContentWrap>
    );
}

export default Content;