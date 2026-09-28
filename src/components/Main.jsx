import React from 'react'
import imageone from "../assets/Rectangle10.png"
import imagetwo from "../assets/Rectangle1.jpg" 
import imagethree from "../assets/Rectangle9.jpg" 

function Main() {
  return (
    <div
    style={{
        display:"flex",
    }}
    >
        <section
        style={{
            paddingLeft:"60px",
            width:"35%",
            paddingTop: "200px",
            color:"#fff"
        }} 
        >
            <h3
            style={{
                fontSize:"28px",
                letterSpacing:"8%",
                marginBottom:"10px"
            }}
            >01.</h3>
            <div
            style={{
                marginLeft:"30px",
                marginTop:"20px",
                cursor:"pointer"
            }}
            >
                <h1
            style={{
                fontSize:"54px",
                letterSpacing:"8%",
                maxWidth:"400px",
            }}
            ><span
            style={{
                textWrapMode:"nowrap",
            }}
            >DESIGN AND</span>
            </h1>
            <h1
            style={{
                fontSize:"54px",
                letterSpacing:"8%",
                maxWidth:"400px",
            }}
            >
                ARCHITECTURE
            </h1>
            </div>
            <div
            style={{
                    color:"#8397DD",
                    display:"flex",
                    marginTop:"40px",
                    marginLeft:"40px"
                }}
            >
                <div
                style={{
                    height:"1px",
                    width:"110px",
                    backgroundColor:"#8397DD",
                    marginTop:"15px",
                    marginRight:"9px"
                }}
                >
                </div>
                <h6 
                style={{
                    fontSize:"24px",
                    letterSpacing:"1px"
                }}
                >
                    MORE DESIGN
                </h6>
            </div>
            <div
            style={{
                marginTop:"180px",
                marginRight:"40px",
                display:"flex",
                gap:"10px"
            }}
            >
                <div
                style={{
                    height:"50px",
                    width:"50px",
                    backgroundColor:"#737272",
                    border:"6px solid white"
                }}
                >
                </div>
                <div
                style={{
                    height:"50px",
                    width:"50px",
                    backgroundColor:"#3E3E3E",
                    border:"6px solid #8397DD"
                }}
                >
                </div>
                <div
                style={{
                    height:"50px",
                    width:"50px",
                    backgroundColor:"#737272",
                    border:"6px solid white"
                }}
                >
                </div>
                <div
                style={{
                    height:"50px",
                    width:"50px",
                    backgroundColor:"#737272",
                    border:"6px solid white"
                }}
                >
                </div><div
                style={{
                    height:"50px",
                    width:"50px",
                    backgroundColor:"#737272",
                    border:"6px solid white"
                }}
                >
                </div>
            </div>
        </section>
        <section
        style={{
            width:"60%",
            marginLeft:"50px",
            display:"flex"
        }}
        >
            <img src={imagethree} alt=""
            style={{
                height:"500px",
                  marginTop:"45px"
            }}
            />
             <img src={imagetwo} alt=""
            style={{
                height:"500px",
                marginTop:"130px",
                marginLeft:"20px"
            }}
            />
             <div>
                <img src={imageone} alt=""
            style={{
                height:"500px",
                marginTop:"45px",
                marginLeft:"20px"
            }}
            />
              <div
            style={{
                    color:"#8397DD",
                    display:"flex",
                    marginTop:"80px",
                    marginLeft:"20px"
                }}
            >
                 <h6 
                style={{
                    fontSize:"15px",
                    letterSpacing:"1px"
                }}
                >
                    03/07
                </h6>
                <div
                style={{
                    height:"1px",
                    width:"50px",
                    backgroundColor:"#8397DD",
                    marginTop:"9px",
                    marginRight:"9px"
                }}
                >
                </div>
            </div>
             </div>
        </section>
    </div>
  )
}

export default Main