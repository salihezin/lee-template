import React from "react";
import Link from "next/link";

const BannerCard = ({ banner }) => {
    return (
        <>
            <div
                className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style={{
                    borderRadius: '1rem',
                    background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)'
                }}
            >
                <div>
                    <div className="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
                    <div className="text-white font-medium text-5xl">Try PrimeBlocks</div>
                </div>
                <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Link href="https://blocks.primereact.org"
                          className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BannerCard;
