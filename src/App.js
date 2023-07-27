import Navbar from "./components/Navbar"
import SliderSelect from "./components/SliderSelect"
import TenureSelect from "./components/TenureSelect"
import Result from "./components/Result"
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {

  const [data, setData] = useState({
    homeValue: 50000,
    downPayment: 2000 * 2,
    loanAmount: 5000 * 0.8,
    interestRate: 2,
    hoaAmount: 0,
    utilities: 0,
    loanTerm: 5
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxwidth="xl" sx={{ marginTop: 4 }}>

        <Grid container spacing={5}>

          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
