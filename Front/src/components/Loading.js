import React from 'react';

function Loading() {
    return (
        <div
            style={{ position: "absolute", width: "100vw", height: "100vh", top: "0", left: "0", background: "white",
                    zIndex: "999", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
            }}
        >
            <h3 style={{ textAlign: "center" }}>Loading...</h3>
            <img src="img/spinner.gif" alt="loading..." width="60px" />
        </div>
    );
}

export default Loading;