export class User {
    constructor(public name: string, public avatar: string,
        public following: number, public followers: number, public bio: string,
        public created_at: string, public url: string, public repos: number) { }
}
