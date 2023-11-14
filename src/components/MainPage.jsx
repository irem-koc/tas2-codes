import React from "react";
import "./../style/MainPage.css"
const MainPage = () => {
    const handleSubmit = () => {
        console.log("Hello");
    };
    return (
        <div className="main-page">
            <form onSubmit={handleSubmit} className="main-container">
                <div>
                    <h2>Email/Message Spam Classifier</h2>
                </div>
                <textarea cols={30} rows={3}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default MainPage;
