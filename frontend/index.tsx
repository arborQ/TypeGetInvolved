import * as React from 'react';
import * as dom from 'react-dom';

import { InputContainer, PanelContainer, MainMenuContainer } from 'ui';

dom.render(
    (
        <div style={{ margin: '0 auto', width: '800px' }}>
            <MainMenuContainer menuItems={['dsadas', 'dsa']} />
            <PanelContainer>
                <InputContainer value={'test'} />
            </PanelContainer>
        </div>
    ), document.getElementById('app'));
