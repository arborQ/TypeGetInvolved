declare module UserInterface {
    namespace MainMenu {
        interface IState {
            isOpen: boolean;
            activeItem?: string;
            menuItems: Array<string>;
        }
        interface IProps {
            activeItem?: string;
            menuItems: Array<string>;
        }
    }
}
