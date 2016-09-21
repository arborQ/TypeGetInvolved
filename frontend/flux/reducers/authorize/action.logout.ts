export default (): { type: string, token: string } => {
    return {
        type: 'authorize.logout', token : null
    };
}
