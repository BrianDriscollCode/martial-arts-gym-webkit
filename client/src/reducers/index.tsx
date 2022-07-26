import { combineReducers } from "redux";
import Home_Banner_Reducer from "./Home_Banner_Reducer";
import Store_Account_Reducer from "./Store_Account_Reducer";

export default combineReducers({

    homeBannerInfo: Home_Banner_Reducer,
    currentAccount: Store_Account_Reducer

})