const BASE_URL = "http://127.0.0.1:8000/api/";

export const authAPI = async (FormData, params) => {
    const response = await fetch(BASE_URL + params, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
    });

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return await {
        status: response.status,
        data: await response.json(),
    };
};