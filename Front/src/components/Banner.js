import { Container } from "react-bootstrap";

function Banner({ title }) {
    return (
        <Container fluid style={{ position: "relative" }}>
            <h1 
                style={{ 
                    fontWeight: 600, position: "absolute", color: "white", textShadow: "2px 2px 2px black",
                    bottom: '20%', right:'10%', zIndex: 1 
                }}
            >
                { title }
            </h1>
            <img style={{ width: '100%' }} src="img/banner.png" alt="page banner" />
        </Container>
    );
}

export default Banner;