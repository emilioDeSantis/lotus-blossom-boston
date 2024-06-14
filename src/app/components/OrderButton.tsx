import React from "react";

const OrderButton: React.FC = () => {
    return (
        <button
            style={{
                paddingInline: "3rem",
                paddingBlock: "0.8rem",
                fontSize: "1.3rem",
                color: "#fff",
                backgroundColor: "#0070f3",
                border: "none",
                cursor: "pointer",
                borderRadius: "1000px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                fontWeight: 500,
            }}
        >
            Order online
        </button>
    );
};

export default OrderButton;
