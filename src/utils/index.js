export const getHeaderWithToken = (token) =>{
    return {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
}

export const checkIfUserLoggedIn = ()=>{
  if(localStorage.getItem("loginDet"))
  {
    return true;
  }
  else return false;
}

export const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
);