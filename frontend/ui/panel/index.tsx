import * as React from 'react';
export default class PanelComponent extends React.Component<ui.panel.IProps, any> {
    public render(): any {
        return (
          <div className='mdl-card mdl-shadow--2dp' style={{'margin' : '0 auto'}}>
                <div className='mdl-card__title'>
                    <h2 className='mdl-card__title-text'>{this.props.Title}</h2>
                </div>
                <div className='mdl-card__supporting-text'>
                    {this.props.children}
                </div>
                <div className='mdl-card__actions mdl-card--border'>
                    {this.props.Actions}
                </div>
            </div>

        );
    }
}
