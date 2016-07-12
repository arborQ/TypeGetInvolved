declare module UserInterface {
    namespace MainMenu {
        interface IProps {
            menuItems: Array<string>;
            isOpen: boolean;
            children?: any;
        }
        interface IState {
            menuItems: Array<string>;
            isOpen: boolean;
        }
    }
}
