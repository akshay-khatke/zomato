import axios, { AxiosError, AxiosRequestConfig } from 'axios';
// import { getToken, refreshToken } from 'service';



const createAxios = (URL: string) => {


  const instance = axios.create({
    baseURL: `${URL}/api/`,
    headers: {
      'Content-type': 'application/json',
      'access-control-allow-origin': '*',
      // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjYyODMzOTMsImlzcyI6Imh0dHBzOi8vc2FsZXNjdXN0b21lcmRldmFwaS5henVyZXdlYnNpdGVzLm5ldC8iLCJhdWQiOiJodHRwczovL3NhbGVzY3VzdG9tZXJkZXZhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.4oSNSNEQDabV11na_Ut9pwUT5_K2gL6Dntvvey8XwB4`
    },
  });

  instance.interceptors.request.use(
    function (config) {
      // console.log(config, 'request interceptor success');

      return config;
    },
    function (error) {
      console.error(error, 'request interceptor error');

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      // console.log(response, ' => response interceptor success');
      return response;
    },

    async function (error: AxiosError) {
      console.log(error.response, 'error');
      if (error.response?.status === 401) {
        // const result = await refreshToken();
        if (true) {
          // instance({...error.config});
          // debugger;
          // console.info('Token refreshed successfully');

          // console.info('Last API call', error.config);

          // console.info('Last API call', error.config);

          // const lastAPIConfig = {...error.config};

          // lastAPIConfig['headers'].Authorization = getToken();
          // lastAPIConfig.headers.Authorization
          // console.log( lastAPIConfig.headers['Authorization'],"authorization")
          // const response = await instance(lastAPIConfig);

          // return response;
        } else {

        }
      }
      return error.response;

    },
  );

  return {
    get: (config: AxiosRequestConfig) =>
    instance({
      method: 'GET',
      ...config,
      transformResponse: [
        (data) => {
          if (!data) {
            return {};
          }
          const json = JSON.parse(data);
          return json.data;
        },
      ],
    }),
  post: (config: AxiosRequestConfig) =>
    instance({
      method: 'POST',
      ...config,
      transformResponse: [
        (data) => {
          if (!data) {
            return {};
          }

          const json = JSON.parse(data);

          return json.data;
        },
      ],
    }),
    put: (config: AxiosRequestConfig) =>
      instance({
        method: 'PUT',
        ...config,
      }),
    instance,
  };
};

export default createAxios;
