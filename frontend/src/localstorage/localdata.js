export const userdatas = JSON.parse(localStorage.getItem("userData"));

export const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: userdatas && userdatas.Token
  }
};
