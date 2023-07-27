import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
  console.log(data)
  return (
    <Fragment>
      {/*The cursor will pick up value that is greater than defaultValue|min*/}
      {/*Let's say if the min value is greater than defaultValue than cursor will always starts from min*/}
      <SliderComponent
        label='Home value'
        min={50000}
        max={1000000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={5000}
        onChange={(e, value) => setData({
          // using  spread-operator, if basically copies all the properties of in a data object 
          // (except homeValue - for homevalue it will get the new value from setData) via useState
          // we can use console.log(data) after line 4 to see the difference in output within the browser console.
          // To see difference add the console.log(data) as mentioned above and test the react app on browser.
          ...data,
          downPayment: value * 0.2,
          loanAmount: value * 0.8,
          homeValue: value
        })}
        unit="$"
        amount={data.homeValue}
      />

      <SliderComponent
        label='Down payment'
        min={2000}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={5000}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: (data.homeValue - value),
          downPayment: value
        })}
        unit='$'
        amount={data.downPayment}
      />

      <SliderComponent
        label='Loan amount'
        min={5000}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={7000}
        onChange={(e, value) => setData({
          ...data,
          downPayment: (data.homeValue - value),
          loanAmount: value
        })}
        unit='$'
        amount={data.loanAmount}
      />

      <SliderComponent
        label='Interest rate'
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.23}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
        unit='%'
        amount={data.interestRate}
      />

      <SliderComponent
        label='Hoa amount'
        min={0}
        max={2000}
        defaultValue={data.hoaAmount}
        value={data.hoaAmount}
        step={50}
        onChange={(e, value) => setData({
          ...data,
          hoaAmount: value
        })}
        unit='$'
        amount={data.hoaAmount}
      />

      <SliderComponent
        label='Utilities'
        min={0}
        max={4000}
        defaultValue={data.utilities}
        value={data.utilities}
        step={50}
        onChange={(e, value) => setData({
          ...data,
          utilities: value
        })}
        unit='$'
        amount={data.utilities}
      />
    </Fragment>

  )
}

export default SliderSelect