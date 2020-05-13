import React, {useState} from 'react';
import Header from "./components/Ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/Ui/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footor from "./components/Ui/Footor";
import LandingPage from "./components/Ui/LandingPage";
function App() {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);
  


  return (  
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex}  />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footor value={value} setValue={setValue} selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
