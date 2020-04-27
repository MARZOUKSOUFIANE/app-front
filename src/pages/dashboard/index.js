import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../../components/chart';
import Deposits from '../../components/Deposits';
import classes from './style.module.css'
import ExpenseList from './expenseList';
import { connect } from 'react-redux';



function DashboardPage(props) {

  const expenses = props.expenses

    return (
        <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper  className={[classes.paper,classes.fixedHeight].join(' ')}>
                <Chart expenses={expenses} />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={[classes.paper,classes.fixedHeight].join(' ')} >
                <Deposits expenses={expenses} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <ExpenseList expenses={expenses}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
}


function mapStateToProps(state) {
  console.log(state)
  return {
    expenses: state.expensesList.expenses
  }
}

export default connect(mapStateToProps, null)(DashboardPage)
