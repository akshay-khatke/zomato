import { Request } from "../../model";
import url from "../urls";



const getAuthApi = ({get, post, put}: Request) => {
  console.log(url.auth.authUrl.login,"api url")

  const authentication = {
    login: (params: any) => post({url: url.auth.authUrl.login, params}),
    register: (params: any) => post({url: url.auth.authUrl.register, params}),  
  };

  return {
    authentication,
  };
};

export default getAuthApi;
