
type Account = {

    id: number,
    firstName: string,
    lastName: string,
    birth: string,
    currently_active: 0 | 1,

}

export default (current_account: Account, action: Account): Account => {

    switch (action) {
        default:
            return current_account;

    }

    

}