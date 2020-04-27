import React from 'react'
import { format } from 'date-fns'
import Title from '../../components/Title'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpensesForm from './expenseForm'
import shortid from 'shortid';


  export function createData(date, name, description, paymentMethod, amount) {
    return { date, name, description, paymentMethod, amount };
}

function ExpenseList({expenses}) {

    const data=[]
    expenses.sort(function(b,a){
        return new Date(b.date) - new Date(a.date)
    })

    expenses.forEach(element => {
        const formattedDate = format(element.date,"dd/MM/yyyy")
        data.push(createData(formattedDate,element.name,element.description,element.paymentMethod,element.amount))
    });


    return (
        <React.Fragment>
            <Title>Recent Expenses</Title>
            <TableContainer component={Paper} >
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">paymentMethod</TableCell>
                        <TableCell align="center">Amount</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={shortid.generate()}>
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center">{row.paymentMethod}</TableCell>
                        <TableCell align="center">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ExpensesForm/>
        </React.Fragment>
    )
}

export default ExpenseList
