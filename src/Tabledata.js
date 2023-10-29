import  React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Spinner from './Spinner';

export default function BasicTable() {
    const [dataset, setDataset] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        let { data } = await axios.get(`http://localhost:4500/api/get`);
        // console.log(data.result);
        setDataset(data.result);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
       { loading ? <Spinner /> : 
       <TableContainer component={Paper} sx={{display:'flex'}}>
            <Table sx={{ maxWidth: 'auto', justifyContent:'center', alignItems:"center" }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#6aebf9" }}>
                    <TableRow >
                        {
                            ['S.No', 'Brand', 'Sales(Qty)'].map((head, i)=> (
                                <TableCell align={i == 0 ? "center" : "left"} sx={{ fontWeight: 900 }}>{head}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataset && dataset.map((item, i) => {
                        const { brand, sales, _id } = item;
                        return (
                            <>
                                <TableRow
                                    key={_id}
                                    sx={{ border: 0, ":hover": { backgroundColor: "gray" } }}
                                >
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell align="left">{brand}</TableCell>
                                    <TableCell align="left">{sales}</TableCell>
                                </TableRow>
                                {
                                    loading && <Spinner />
                                }
                            </>
                        )})
                    }
                    <TableRow sx={{ fontWeight:900, backgroundColor:"#5c7a84" }}>
                        <TableCell colSpan={2} align='center' sx={{fontWeight:900}} >Total</TableCell>
                        <TableCell sx={{ fontWeight:900 }}>{
                            dataset.map((item)=>item.sales).reduce((acc, next)=>acc += next, 0)
                            }</TableCell>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>}
        </>
    );
}

