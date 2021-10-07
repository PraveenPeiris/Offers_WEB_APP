import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  section1: {
    flex: 1,
    margin: '10px',
  },
  recommendedPosts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  similarsec: {
    margin: '10px',
    width: '30%',
    display: 'flex',
    justifyContent: 'right',
    float: 'right',
    backgroundImage: 'linear-gradient(to bottom right, lightslategray, white)',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    
  },
  commentsInnerContainer: {
    height: '200px',
    width: '450px',
    overflowY: 'auto',
    marginRight: '30px',
    backgroundColor: 'gainsboro',
    borderRadius: '15px',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '8px', 
    
  },
  postChipOverlay: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '5px',
    marginBottom: '5px',
  },
  fields1: {
    marginTop: '5px',
    marginLeft: '10px',
    fontStyle: 'italic',
  },
  
  recOnePost: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridrec: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
}));