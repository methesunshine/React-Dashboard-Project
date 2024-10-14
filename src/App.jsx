import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Container/Main";
import Header from "./Components/Header/Header";
import Content from "./Components/Container/Content";
import CardList from "./Components/Card/CardList";
import ChartContainer from "./Components/Container/ChartContainer";
import ActivityChart from "./Components/Charts/ActivityChart";
import SalesChart from "./Components/Charts/SalesChart";


const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main>
       <Header />
       <Content>
       <CardList />   
       <ChartContainer>
        <ActivityChart />
        <SalesChart />
        </ChartContainer> 
        </Content> 
       </Main>
    </div>
  ); 
};

export default App;
