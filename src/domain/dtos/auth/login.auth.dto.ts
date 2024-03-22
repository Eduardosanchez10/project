export class LoginAuthDto{
    constructor(
        public readonly email:string,
        public readonly password:string,
    ){}

    static login( object: { [key:string]:any } ): [string?, LoginAuthDto?] {
        const { email, password } = object;

        if( !password ) return ["Missing password", undefined];
        if( !email ) return ["Missing email", undefined];

        return [undefined, new LoginAuthDto(email, password)];
        
    }
}