const BASE_URL =import.meta.env.VITE_URL

console.log("BASE_URL", BASE_URL);

export const authEndpoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  VERIFYOTP_API: BASE_URL + "/auth/verify-otp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};