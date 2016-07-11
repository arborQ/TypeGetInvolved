import * as React from 'react';
import { PanelContainer, MainMenuContainer } from 'ui';

export default class MasterPageComponent extends React.Component<{ children: any }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        return (
          <PanelContainer>
          <MainMenuContainer menuItems={['login']} />
          <div>
            {this.props.children}
          </div>
          </PanelContainer>
        );
    }
}
