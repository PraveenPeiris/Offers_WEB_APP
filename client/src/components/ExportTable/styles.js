import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
    exptable: {
    width: '100%',
    height: '40px',
    outlineColor: 'blue',
    borderStyle: 'ridge',
    border: '1px solid black',
    
    borderColor: '#DCDCDC',
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 1, 0, 0.5))',
    padding: '15px',
    boxSizing: 'border-box',
  },
  bordercls:{
    border: '1px solid black',
    boxSizing: 'border-box',
  },
  expbtn: {
    width: '100%',
    height: '40px',
    outlineColor: 'blue',
    borderStyle: 'ridge',
    borderColor: '#DCDCDC',
    color: 'white',
    backgroundColor: 'green',
    marginLeft: '0px',
  },
}));