import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, interestRate, hoaAmount, utilities, loanTerm } = data

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const interestRatePerMonth = interestRate / 100 / 12 // 100 @ 12% for 1 year

  const monthlyPaymentWithoutExtraCosts =
  (loanAmount * interestRatePerMonth * 
    (1 + interestRatePerMonth) ** totalLoanMonths) /
    ((1 + interestRatePerMonth) ** totalLoanMonths - 1);

const totalInterestGenerated = monthlyPaymentWithoutExtraCosts * totalLoanMonths - loanAmount;

const monthlyPayment = monthlyPaymentWithoutExtraCosts + hoaAmount + utilities;


  const pieChartData = {
    labels: ['Principal Amount', 'Total Interest', 'Monthly Payment', 'HOA and Utilities per Month'],
    datasets: [
      {
        label: 'Monthly Installment',
        data: [homeValue, loanAmount, totalInterestGenerated, monthlyPaymentWithoutExtraCosts, hoaAmount + utilities],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderWidth: 1,
      },
    ],
  };


  return <Stack>
    <Typography textAlign='center' variant='h5'>
    Monthly Payment (including HOA and utilities): ${monthlyPayment.toFixed(2)}
    </Typography>
    <stack direction="row" justifyContent="center">
    <div>
    <Pie data={pieChartData}/>
    </div>
    </stack>
  </Stack>
}

export default Result