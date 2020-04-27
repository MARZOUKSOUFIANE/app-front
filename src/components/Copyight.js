import React from 'react'
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  copyright: {
    color: "grey"
  }
});

function Copyight() {
    const classes=useStyles()

    return (
        <div>
            <Typography
                className={classes.copyright}
                variant="body2"
                color="textSecondary"
                align="center"
            >
                {"Copyright © "}
                <Link color="inherit" href="/">
                    ECOM 
                </Link>{" "}
                {new Date().getFullYear()}
                {". Built with "}
                <Link color="inherit" target="_blank" href="https://www.octo.ma" >
                 Octo
                </Link>{" "}
            </Typography>
        </div>
    )
}

export default Copyight
