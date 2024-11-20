import React from "react";
import "./Card.css";

const Card = () => {
    const hairStyles = [
        {
            type : "Modern Mullet Hair",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img1.jpg"
        },
        {
            type : "Korean Mullet, Semi-Leaf Cut",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img2.jpg"
        },
        {
            type : "Spiky Mullet",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img3.jpg"
        },
        {
            type : "Center Part Mullet, Curtain Mullet",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img4.jpg"
        },
        {
            type : "Very Short Barber Look",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img6.jpg"
        },
        {
            type : "Ivy League Cut",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img7.jpg"
        },
        {
            type : "Buzz Cut",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img9.jpg"
        },
        {
            type : "Perm, Curly Hair",
            src : "https://www.gatsbyglobal.com/en/technique/best-haircuts-men-top-mens-hairstyles-today/images/img10.jpg"
        }
    ];
    const beardStyles = [
        {
            type : "VAN DYKE BEARD",
            src : "https://i.shgcdn.com/6ae02f78-61ce-4712-99f0-a10ce93a13ab/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "SHORT BOXED BEARD",
            src : "https://i.shgcdn.com/c22974a9-2869-4ea3-b0e3-e2afedae3c77/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "BALBO BEARD",
            src : "https://i.shgcdn.com/9fadaa37-122f-4ab3-b701-ddc17e24128b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "ANCHOR BEARD",
            src : "https://i.shgcdn.com/75f474b1-74b5-485e-9d88-1e1e1526fd2e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "CHEVRON",
            src : "https://i.shgcdn.com/026b9686-a89a-4e31-9da4-c7ecb49c374a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "3-DAY STUBBLE BEARD",
            src : "https://i.shgcdn.com/f23fe471-426b-4da6-b54e-554c9f88e17f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "HORSESHOE MUSTACHE",
            src : "https://i.shgcdn.com/f71a6506-20f1-4b44-9035-af8d403d8aca/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            type : "ORIGINAL STACHE",
            src : "https://i.shgcdn.com/c164b1a8-119a-4028-b15e-2825e6884b2c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        }
    ];

    

    return (
        <>
        <div className="container">
            <h1 className="styleTitle">Hair Styles</h1>
            <div className="scroll">
                <div>
                    {hairStyles.map((hair, index) => (
                        <img src={hair.src} alt={`hair ${index}`} key={index} />
                    ))}
                </div>
            </div>
        </div>
        <div className="container2">
            <h1 className="styleTitle">Beard Styles</h1>
            <div className="scroll">
                <div>
                    {beardStyles.map((beard, index) => (
                        <img src={beard.src} alt={`beard ${index}`} key={index} />
                    ))}


                </div>
            </div>
        </div>
        <div>
        </div>
        </>
    );
};

export default Card;
