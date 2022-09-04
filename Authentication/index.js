export class Authentication {
    static login(auth, password) {
        if (this.validate(auth)) {
            return auth.authenticator(password)
        }
        return false
    }

    //  this validation is necessary because a cant use typescript, but with using typescript just use interface and all class need to implements a method authenticator...
    static validate(auth) {
        return 'authenticator' in auth && auth.authenticator instanceof Function
    }
}
