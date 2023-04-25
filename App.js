import BookSlider from "./component/bookSlider/BookSlider";
import Header from "./component/header/Header";
import Service from "./component/sevices/Service";
import Slider from "./component/slider/Slider";
import {books} from "./data/book"




function App() {
  return (
    <div className="App">
      {/* header field */}
    <Header/>

    {/* slider component */}

    <Slider/>

    {/* services component */}
    <Service/>

    {/* book slider */}
    <BookSlider data={books}/>
    </div>
  );
}

export default App;
