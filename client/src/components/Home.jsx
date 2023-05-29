import Header from "./Header";
import "../styles/Home.css";
import Login from "./Login";

const Home = () => {
    const token = localStorage.getItem("libromatic_token");

    if (!token) {
        return <Login />;
    }

    return (
        <div className="home">
            <Header />
        </div>
    );
};

export default Home;
