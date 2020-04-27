import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Line, Label, ResponsiveContainer } from 'recharts'
import { format } from 'date-fns'
import Title from '../components/Title'


function createData(date,amount) {
    return {date,amount}
}

function Chart({expenses}) {

    const data=[]
    expenses.sort(function(b,a){
        return new Date(b.date) - new Date(a.date)
    })

    expenses.forEach(element => {
        const formattedDate = format(element.date,"dd/MM/yyyy")
        const found = data.find(elem => elem.date===formattedDate)
        if(found){
            found.amount+=element.amount
        }else{
            data.push(createData(formattedDate,element.amount))
        }
    });
  

    return (
        <React.Fragment>
            <Title>Today</Title>
                <ResponsiveContainer>
                    <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}>
                        <XAxis dataKey="date"/>
                        <YAxis>
                            <Label position="left"  angle={270} style={{ textAnchor: 'middle' }}> Expenses NB: </Label>
                        </YAxis>
                        <Tooltip />
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
        </React.Fragment>
            
    )
}

export default Chart
