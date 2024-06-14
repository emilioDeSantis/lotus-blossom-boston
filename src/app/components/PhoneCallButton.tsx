import React from "react";

const PhoneCallButton: React.FC = () => {
    return (
        <a
            href="tel:+1234567890"
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.2rem",
                fontSize: "1.2rem",
                color: "#0070f3",
                textDecoration: "none",
                cursor: "pointer",
                background: "#0070f311",
                paddingInline: "0.5rem",
                paddingBlock: "0.2rem",
                borderRadius: "5px",
                border: "1px solid #0070f3",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    marginRight: "0.5rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
            </svg>
            (123) 456-7890
        </a>
    );
};

export default PhoneCallButton;
