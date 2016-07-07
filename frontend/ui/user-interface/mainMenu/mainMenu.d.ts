declare module UserInterface {
    namespace MainMenu {
        interface IState {
            activeItem?: string;
            menuItems: Array<string>;
        }
        interface IProps extends IState {

        }
    }
}
