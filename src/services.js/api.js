const BASE_URL = "http://127.0.0.1:8000/api/";
const token = localStorage.getItem('token');
console.log(localStorage.getItem("token"));

export const fetchAPI = async (params) => {
    const response = await fetch(BASE_URL + params, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return await {
        status: response.status,
        data: await response.json(),
    };
};