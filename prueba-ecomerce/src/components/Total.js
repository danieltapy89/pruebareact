import React from "react";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
root: {
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    height: "20vh",
},
button:{
    marginTop:"2rem",
}
}))

const Total = ()=>{
    const classes = useStyles()
    return (
<div className={classes.root}>
    <h5>total items:  3</h5>
    <h5>{accounting.formatMoney(56000)}</h5>
    <Button className={classes.button} variant= "contained" color = "secondary">Checkout</Button>
</div>
    )
}
export default Total;