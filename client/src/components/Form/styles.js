
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    backgroundColor: 'black',
    "&:hover": {
      background: "blue"
    },
  },
  btn2: {
    marginBottom: 10,
    opacity: 0.7,
    color: 'white',
    backgroundColor: 'red',
    "&:hover": {
      background: "black"
    },
  },
  newww: {
    justifyContent: 'left',
    color: 'gray',
   
  },
  new1: {
    color: 'gray',
    margin: '0 0 5px 0',
    justifyContent: 'left',
  },

  numberfields: {
    width: '97%',
    height: '40px',
    outlineColor: 'blue',
    borderStyle: 'ridge',
    borderColor: '#DCDCDC',
  },
}));
