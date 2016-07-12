import { ComponentClass } from 'react';
import inputContainer from './input';
import panelContainer from './panel';
import mainMenu from './mainMenu';

export var InputContainer: ComponentClass<UserInterface.Input.IProps> = inputContainer;
export var PanelContainer: ComponentClass<UserInterface.Panel.IProps> = panelContainer;
export var MainMenuContainer: ComponentClass<UserInterface.MainMenu.IProps> = mainMenu; 
