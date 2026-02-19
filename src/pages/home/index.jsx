import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Content from "../../components/layout/Content";
import SearchBar from "../../components/search/SearchBar"

const Home = () => {
  return (
    <Container>
      <Header />

      <h1 className="text-center text-6xl font-medium my-12">
        How`s the sky looking today?
      </h1>

      <SearchBar />
      <Content />
    </Container>
  );
};

export default Home;
