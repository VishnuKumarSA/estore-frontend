import { useNavigate } from "react-router-dom";

const CartSuccessModal = ({ open, onClose }) => {
    const navigate = useNavigate();

    if (!open) return null;

    const handleViewCart = () => {
        onClose();
        navigate("/cart");
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                >
                    ✕
                </button>

                {/* Success Icon */}
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center mt-5">
                    Added to Cart
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-center mt-3">
                    Your product has been added to the cart successfully.
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">
                    <button
                        onClick={onClose}
                        className="w-1/2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-100"
                    >
                        Continue Shopping
                    </button>

                    <button
                        onClick={handleViewCart}
                        className="w-1/2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
                    >
                        View Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSuccessModal;