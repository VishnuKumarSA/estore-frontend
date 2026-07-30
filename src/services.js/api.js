const BASE_URL = process.env.REACT_APP_API_URL;


export const fetchAPI = async (params) => {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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


export const CartAPI = async (params, details,method = 'POST') => {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL + params, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(
            details
        ),
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

export const RemoveCartItemAPI = async (params, cart_item_id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL + params + '/' + cart_item_id, {
        method: 'Delete',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
