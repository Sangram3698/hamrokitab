import BookSlider from "./component/bookSlider/BookSlider";
import Footer from "./component/footer/Footer.jsx";


import Header from "./component/header/Header";
import HeadingTitle from "./component/heading-title/HeadingTitle";
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

    <HeadingTitle title="Recommended"/>
    {/* book slider */}
    <BookSlider data={books}/>



    <HeadingTitle title="Engineering"/>
    {/* book slider */}
    <BookSlider data={books}/>



    <HeadingTitle title="Medical"/>
    {/* book slider */}
    <BookSlider data={books}/>



    <HeadingTitle title="Entrance"/>
    {/* book slider */}
    <BookSlider data={books}/>



    <HeadingTitle title="Other"/>
    {/* book slider */}
    <BookSlider data={books}/>

 

<Footer/>

    </div>
  );
}

export default App;
