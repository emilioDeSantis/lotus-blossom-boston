import React from "react";
import Link from "next/link";
import PhoneCallButton from "./PhoneCallButton";

const Info: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                    paddingInline: "4vw",
                    paddingTop: "1.6rem",
                    paddingBottom: "1.6rem",
                    maxWidth: "50rem",
                }}
            >
                <h2
                    style={{
                        fontSize: "1.8rem",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        paddingBlock: "1rem",
                        opacity: 0.8,
                    }}
                >{`Lotus Blossom is an Asian fusion restaurant blending flavors from Thai, Japanese, and Chinese cuisines.`}</h2>
                <div
                    style={{
                        borderTop: "1px solid #0002",
                        width: "100%",
                        marginTop: "1.6rem",
                    }}
                />
                <h2
                    style={{
                        marginTop: "1.2rem",
                    }}
                >
                    Location
                </h2>
                <p
                    style={{
                        marginTop: "0.5rem",
                    }}
                >
                    {`123 Beacon Street, Boston, MA 02116`}
                </p>
                <div
                    style={{
                        borderTop: "1px solid #0002",
                        width: "100%",
                        marginTop: "1.6rem",
                    }}
                />
                <h2
                    style={{
                        marginTop: "1.2rem",
                    }}
                >
                    Hours
                </h2>
                <p
                    style={{
                        marginTop: "0.5rem",
                    }}
                >
                    Weekdays: Mon-Fri 11:00 AM - 10:00 PM
                </p>
                <p
                    style={{
                        marginTop: "0.5rem",
                    }}
                >
                    Weekends: Sat-Sun 11:00 AM - 11:00 PM
                </p>

                <div
                    style={{
                        borderTop: "1px solid #0002",
                        width: "100%",
                        marginTop: "1.6rem",
                    }}
                />
                <h2
                    style={{
                        marginTop: "1.2rem",
                    }}
                >
                    Contact
                </h2>
                <PhoneCallButton />
                <p
                    style={{
                        marginTop: "0.8rem",
                        fontSize: "1.2rem",
                    }}
                >
                    {`service@lotusblossom.com`}
                </p>

                <div
                    style={{
                        borderTop: "1px solid #0002",
                        width: "100%",
                        marginTop: "1.6rem",
                    }}
                />
                <Link
                    href="/menu"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        paddingBlock: "0.8rem",
                        fontSize: "1.2rem",
                        color: "#fff",
                        backgroundColor: "#0070f3",
                        borderRadius: "5px",
                        textDecoration: "none",
                        marginTop: "2rem",
                        boxShadow: "0 0.2rem 0.4rem rgba(0, 0, 0, 0.1)",
                    }}
                >
                    Our menu
                </Link>
            </div>
        </div>
    );
};

export default Info;
