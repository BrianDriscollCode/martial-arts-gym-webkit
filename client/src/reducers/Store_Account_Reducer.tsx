type Account = {

    id: number,
    firstName: string,
    lastName: string,
    birth: string,
    currently_active: number,
    username: string,

}

type action = {

    payload: object,
    type: string

}

export default (current_account:Account = firstAccount, action: action): any => {

    switch (action.type) {
        case "CHANGE_ACCOUNT":
            return action.payload;
            break;
        default:
            return current_account;
    }

}

let firstAccount = {

    id: 1,
    firstName: 'test',
    lastName: 'test',
    birth: 'test',
    currently_active: 1,
    username: 'test'

}