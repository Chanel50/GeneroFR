import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import "../styles/AddButton.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  btn: {justifyContent:"center",
  alignItems:"center",

    margin: '20px 45px 20px 20px',
    color: "white",
    border: "3px solid white",
    backgroundColor:"#f5b921",
    outline: "none",
    borderRadius: '10px',
    padding: '20px 20px 20px 20px',
    fontWeight: "bold",
    fontSize: "18px",
      '&:hover': {
        background: '#f5b921',
        color: "white",
        outline: 'none',
        border: 'none',
        borderRadius: '0px',
        border: "#f5b921",
        padding: '20px 20px 20px 20px',
        fontWeight: "bold",
        fontSize: "18px",
      }
  }
}));

export function AddButton({handleOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={handleOpen} className={classes.btn} >Ajoter un objet</Button>
    </div>
  );
}