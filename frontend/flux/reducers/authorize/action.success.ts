export default (token: string): { type: string, token: string } => {
    return {
        type: 'authorize.success',
        token
    };
}
