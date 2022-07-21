export const getHomeBanner = (actionType: string) => {

    return {

        type: actionType

    }


}

type Account = {

    id: number,
    firstName: string,
    lastName: string,
    birth: string,
    currently_active: 0 | 1,

}

export const setCurrentAccount = (actionType: string, passedAccount: Account) => {


    return {

        type: actionType,
        payload: passedAccount

    }

}