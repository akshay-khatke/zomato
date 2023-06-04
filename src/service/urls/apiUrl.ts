

const authUrls = () => { 

    const getAuthUrl = (url: string) => `v1/auth/${url}`;

    const authUrl = {
            login: getAuthUrl('login'),
            register: getAuthUrl('register')
    };

    const getCommonUrlData = (url: string) => `/api/v1/common/${url}`;

        const commonUrl= {
            products:getCommonUrlData("products") 
    }
    return { 
        authUrl ,commonUrl
    }
}
export default authUrls;