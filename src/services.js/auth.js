const BASE_URL = process.env.REACT_APP_API_URL;

export const authAPI = async (FormData, params) => {
    const response = await fetch(BASE_URL + params, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
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