const BASE_URL="http://localhost:3000";

const BASE_URL_AUTH=BASE_URL+"/api/v1/auth";
const BASE_URL_LISTING=BASE_URL+"/api/v1/listings";
const BASE_URL_REVIEW=BASE_URL+"/api/v1/review";
const BASE_URL_PROFILE = BASE_URL + "/api/v1/profile";

export const user={
    AUTH_API_LOGIN:BASE_URL_AUTH+"/login",    //done
    AUTH_API_SIGNUP:BASE_URL_AUTH+"/signup",   //done
    AUTH_API_SENDOTP:BASE_URL_AUTH+"/sendotp",    //done
    AUTH_API_CHANGEPASSWORD: BASE_URL_AUTH + "/changepassword", //done
}

export const listing={
    LISTING_API_CREATE:BASE_URL_LISTING+"/listing",    //done
    LISTING_API_VIEW:BASE_URL_LISTING+"/listings/view",  //done
    LISTING_API_DELETE:BASE_URL_LISTING+"/listing",    //done
    LISTING_API_EDIT:BASE_URL_LISTING+"/listing",
    LISTING_API_GETALL:BASE_URL_LISTING+"/listings",   //done
    LISTING_API_LISTCAT:BASE_URL_LISTING+"/listingcat",    //done
    LISTING_API_SEARCH:BASE_URL_LISTING+"/listing/search",
}

export const reviewapi={
    REVIEW_API_CREATE:BASE_URL_REVIEW+"/create",   //done
    REVIEW_API_DELETE:BASE_URL_REVIEW+"/delete",    //done
    REVIEW_API_LISTINGREV:BASE_URL_REVIEW+"/getrev",  //done
}


export const profileapi = {
    PROFILE_API_UPDATEDP: BASE_URL_PROFILE + "/updatedp", //done
    PROFILE_API_UPDATEPROFILE: BASE_URL_PROFILE + "/updateProfile", 
    PROFILE_API_DELETEPROFILE: BASE_URL_PROFILE + "/deleteProfile",  
    PROFILE_API_GETUSERDETAILS: BASE_URL_PROFILE + "/getuserdetails", 
  };
  