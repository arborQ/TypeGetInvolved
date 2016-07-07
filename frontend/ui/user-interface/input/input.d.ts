declare module UserInterface {
    namespace Input {
        interface IState {
            placeholder?: string;
            value: string;
        }
        interface IProps extends IState {
            onChange?: (value: string) => void;
        }
    }

}
