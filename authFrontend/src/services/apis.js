const BASE_URL =`http://localhost:4000/api/v1`;

console.log("BASE_URL", BASE_URL);

export const authEndpoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  VERIFYOTP_API: BASE_URL + "/auth/verify-otp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};