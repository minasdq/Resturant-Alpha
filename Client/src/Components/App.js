import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import Navbar from "./Layout/Navbar/Navbar"
import HomePage from "./Pages/HomePage/HomePage"
import Footer from "./Layout/Footer/Footer"
import ListFoods from "./Pages/Foods/ListFoods/ListFoods"
import  FoodRecipes from "./Pages/Foods/FoodRecipes/FoodRecipes"
import  Error404 from "./Pages/Error404/Error404"
const App = () => {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ListFoods/" exact component={ListFoods} />
          <Route path="/ListFoods/:id" exact component={FoodRecipes} />
          <Route path="/" component={Error404} />
        </Switch>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
export default App
