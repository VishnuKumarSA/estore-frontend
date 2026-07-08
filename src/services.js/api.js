const BASE_URL = "http://127.0.0.1:8000/api/";
const token = localStorage.getItem('token');
console.log(token);

export const fetchAPI = async (params) => {
    const response = await fetch(BASE_URL + params, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return await {
        status: response.status,
        data:data,
    };
};