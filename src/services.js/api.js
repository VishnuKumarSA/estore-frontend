const BASE_URL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token');

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
        data: data,
    };
};


export const CommonAPI = async (params) => {
    const response = await fetch(BASE_URL + params, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(data.message || "Request failed");
        error.status = response.status;
        throw error;
    }

    return await {
        status: response.status,
        data: data,
    };
};