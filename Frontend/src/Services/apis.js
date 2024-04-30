const BASE_URL="http://localhost:3000";

const BASE_URL_AUTH=BASE_URL+"/api/v1/auth";
const BASE_URL_LISTING=BASE_URL+"/api/v1/listings";
const BASE_URL_REVIEW=BASE_URL+"/api/v1/review";

export const user={
    AUTH_API_LOGIN:BASE_URL_AUTH+"/login",    //done
    AUTH_API_SIGNUP:BASE_URL_AUTH+"/signup",   //done
    AUTH_API_SENDOTP:BASE_URL_AUTH+"/sendotp",    //done
}

export const listing={
    LISTING_API_CREATE:BASE_URL_LISTING+"/listing",
    LISTING_API_DELETE:BASE_URL_LISTING+"/listing", 
    LISTING_API_EDIT:BASE_URL_LISTING+"/listing",
    LISTING_API_GETALL:BASE_URL_LISTING+"/listings",   //done
    LISTING_API_LISTCAT:BASE_URL_LISTING+"/listingcat",    //done
}

export const review={
    REVIEW_API_CREATE:BASE_URL_REVIEW+"/create",
    REVIEW_API_DELETE:BASE_URL_REVIEW+"/delete",
    REVIEW_API_LISTINGREV:BASE_URL_REVIEW+"/getrev",
}