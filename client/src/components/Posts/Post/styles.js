import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    padding: '5px 16px',
    backgroundImage: 'linear-gradient(to bottom right, darkgray, white)',
  },
  overlay: {
    bottom: '100px',
    left: '200px',
    color: 'blueviolet',
    fontSize: '2px',
    marginLeft: '190px',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '0',
    color: 'black',
  },
  grid: {
    display: 'flex',
  },
  product: {
    fontSize: '25px',
    color: 'black',
    fontWeight: 'bold' ,
    margin: '20px 0',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  postChip: {
    
  },
  fields: {
    fontSize: '20px',
    
  },
  postChipOverlay: {
    display: 'flex',
    justifyContent: 'flex-start',
    
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});
