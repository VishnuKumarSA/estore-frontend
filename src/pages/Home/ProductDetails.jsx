import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CommonAPI } from '../../services.js/api';
import Details from './Details';

const ProductDetails = () => {

    const { id, slug } = useParams();
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const getDetails = (async () => {
            try {
                const response = await CommonAPI(`products/${id}/${slug}`);
                setDetails(response.data)
            } catch (e) {
                if (e.status === 404) {
                    navigate("/not-found", { replace: true });
                } else {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        })

        getDetails();

    }, [id, slug, navigate])

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong.</div>;
    }

    return (
        <Details details={details} />
    )
}

export default ProductDetails
