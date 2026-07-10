import { useNavigate } from "react-router-dom";

const AuthModal = ({ open, onClose }) => {
    const navigate = useNavigate();

    if (!open) return null;

    const handleLogin = () => {
        onClose();
        navigate("/login");
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                >
                    ✕
                </button>

                {/* Icon */}
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-3xl">🔒</span>
                    </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-center mt-5">
                    Login Required
                </h2>

                <p className="text-gray-600 text-center mt-3">
                    Please login to add this product to your cart and continue shopping.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                    <button
                        onClick={onClose}
                        className="w-1/2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleLogin}
                        className="w-1/2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;