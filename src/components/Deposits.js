import React from 'react'
import Title from './Title'
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CountUp from 'react-countup';




function Deposits(props) {
    const expenses = props.expenses
    const total = expenses.reduce((accumulator, currentValue) => +accumulator + +currentValue.amount, 0)

    return (
        <React.Fragment>
            <Title>Total Expenses</Title>
            <Typography component="p" variant="h4">
                <CountUp end={total} duration={5} suffix={'  DH'} decimals={2}/>
         </Typography>
            <Typography color="textSecondary" style={{ flex: 1 }}>
                on {format(new Date(), 'dd MMM, yyyy')}
            </Typography>
            <div>
                <Link to="/" color="primary">
                    View balance
         </Link>
            </div>
        </React.Fragment>
    )
}


function mapStateToProps(state){
    return {
        expenses: state.expensesList.expenses
    }
}
export default connect(mapStateToProps,null)(Deposits)
