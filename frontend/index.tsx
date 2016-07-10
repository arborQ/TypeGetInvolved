import * as React from 'react';
import * as dom from 'react-dom';

import { InputContainer, PanelContainer, MainMenuContainer } from 'ui';

dom.render(
    (
        <div style={{ margin: '0 auto', width: '800px' }}>
            <MainMenuContainer menuItems={['dsadas', 'dsa3', 'dsa4', 'dsa5', 'dsa6', 'dsa7', 'dsa8', 'dsa9', 'dsa66', 'dsa45', 'dsa66', 'dsa654']} />
            <PanelContainer>
                <InputContainer value={'test'} />
            </PanelContainer>
        </div>
    ), document.getElementById('app'));
