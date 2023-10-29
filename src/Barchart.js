import React, { useEffect, useState } from 'react'
import { BarChart, BarPlot, ChartContainer } from '@mui/x-charts'
import Spinner from './Spinner';
import axios from 'axios';
import { Container } from '@mui/material';

function Barchart() {
    const [dataset, setDataset] = useState([]);
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState([]);
    const [sales, setSales] = useState([]);
    const dataArr = [...sales]
    async function getData() {
        try {
            setLoading(true);
        let { data } = await axios.get(`http://localhost:4500/api/get`);
        console.log(data.result);
        setDataset(data.result);
        setLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    function chartData(){
        const labels = dataset.map(item=>item.brand)
        const saleNumbers = dataset.map(item=>item.sales)
        console.log(saleNumbers[0]+saleNumbers[1]);
        setBrands(labels);
        setSales(saleNumbers);
    }
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        chartData();
    }, [dataset])

  return (
    <>
    {
        loading ? <Spinner />
        :
        <Container
        sx={{backgroundColor:"lightyellow", display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', height:"80vh", width:"auto"}}
        >
    <BarChart 
    sx={{}}
    xAxis={[
      {
      id: 'barCategories',
      data: brands,
      scaleType: 'band',
    },
  ]}
  series={[
        {
            // data: [3,4,5,6,7,7,8,45], // uncomment this line if the  line below does not work, and after saving the changes again comment this line and uncomment the line below
            data: dataArr
        }
    ]}
    width={600}
    height={300}
/>
</Container>

}
</>
  )
}

export default Barchart