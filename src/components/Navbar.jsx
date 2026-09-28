import React from 'react'
import cart from "../assets/cart.svg";
import navlogo from "../assets/navlogo.svg";

function Navbar() {
    return (
        <>
         <div
            style={{
                padding: "2rem 2rem",
                color: "#FFF",

            }}
        >
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    letterSpacing: "1px"
                }}
            >
                <h2
                 style={{
                    letterSpacing:"2px",
                    cursor:"pointer"
                }}
                >DESIGN</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                        letterSpacing: "2px"
                    }}
                >
                    <h2
                    style={{
                        cursor:"pointer"
                    }}
                    >HOME</h2>
                    <h2
                    style={{
                        cursor:"pointer"
                    }}
                    >COLLECTION</h2>
                    <h2
                    style={{
                        cursor:"pointer"
                    }}
                    >ABOUT</h2>
                    <h2
                    style={{
                        cursor:"pointer"
                    }}
                    >CONTACT</h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                    }}
                >
                    <img
                        src={cart}
                        alt="Cart"
                        style={{
                            height:"30px",
                            cursor:"pointer"

                        }}
                    />
                    <img src={navlogo} alt="" 
                    style={{
                        cursor:"pointer"
                    }}
                    />
                </div>
            </nav>
        </div>
        <div
            style={{  
                border: '1px solid #ffffff13',
            }}
            ></div>
        </>
       
    )
}

export default Navbar
