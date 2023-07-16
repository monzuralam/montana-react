import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 lg:p-8">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
