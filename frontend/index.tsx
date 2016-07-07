import * as React from 'react';
import * as dom from 'react-dom';

import { InputContainer, PanelContainer } from 'ui';

dom.render(
    (
        <div style={{ width: '800px', margin : '0 auto' }}>
            <PanelContainer>
                <InputContainer value={'test'} />
            </PanelContainer>
        </div>
    ), document.getElementById('app'));
