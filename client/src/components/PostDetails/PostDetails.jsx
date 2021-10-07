import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Card, Chip, Grid } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import Background from '../../images/csrequest.png';
import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneLike, AiFillLike } from "react-icons/ai";

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px', backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 1, 0, 0.5)), url(${Background })`, backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat' }} elevation={6}>
      <div className={classes.card} >
        <div className={classes.section} >
          <div style={{float:'left'}}>
          <Typography variant="h6">
            Created by:&nbsp; <FaUserAlt/>
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          
          <Typography variant="h3" component="h2">{post.product}</Typography>

          <div className={classes.postChipOverlay} >
            <Chip label="Quantity" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.qty}</Typography>
          </div>

          <div className={classes.postChipOverlay} >
            <Chip label="Required Condition" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.condition}</Typography>
          </div>
          <div className={classes.postChipOverlay} >
            <Chip label="Approximate Budget" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.budget}</Typography>
          </div>
          <div className={classes.postChipOverlay} >
            <Chip label="Preffered brand" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.brand}</Typography>
          </div>
          <div className={classes.postChipOverlay} >
            <Chip label="Preffered payment method" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.paymentMethod}</Typography>
          </div>
          <div className={classes.postChipOverlay} >
            <Chip label="Contact no" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.contact}</Typography>
          </div>
          <div className={classes.postChipOverlay} >
            <Chip label="Remarks/Notes" color="success" className={classes.postChip}/>
            <Typography className={classes.fields1} gutterBottom variant="body1" component="p">{post.remarks}</Typography>
          </div>

          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"> <br/>{post.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))} 
          </Typography>
          </div>

        <Card className={classes.similarsec} elevation={6}> 
          {!!recommendedPosts.length && (
            <div className={classes.section1}  >
              <Typography gutterBottom variant="h5">Similar requests by users :</Typography>
              <Divider />
              <br></br>
              <div className={classes.recommendedPosts}>
                {recommendedPosts.map(({ product, name, budget, likes, qty, _id }) => (
                  <Grid className={classes.gridrec} container alignItems="stretch" key={post._id} item xs={6} sm={3} md={6} lg={6}>
                  <div className={classes.recOnePost} style={{ width:'330px', marginRight: '0px',marginLeft: '20px', cursor: 'pointer'}}  onClick={() => openPost(_id)} key={_id}>
                  
                  <div className={classes.postChipOverlay} >
                    <Chip label="Product" color="success" className={classes.postChip}/>
                    <Typography className={classes.fields1}  gutterBottom variant="h6">{product}</Typography>
                  </div>
                  <div className={classes.postChipOverlay} >
                    <Chip label="Requestor" color="success" className={classes.postChip}/>
                    <Typography className={classes.fields1}  gutterBottom variant="h6">{name}</Typography>
                    </div>
                    <div className={classes.postChipOverlay} >
                    <Chip label="Budget" color="success" className={classes.postChip}/>
                    <Typography className={classes.fields1}  gutterBottom variant="h6">{budget}</Typography>
                    </div>
                    <div className={classes.postChipOverlay} >
                    <Chip label="Qty" color="success" className={classes.postChip}/>
                    <Typography className={classes.fields1}  gutterBottom variant="h6">{qty}</Typography>
                    </div>
                    <Typography gutterBottom variant="subtitle1"> Likes: <AiFillLike/>{likes.length}</Typography>
                    
                    <Divider />
                    <br></br>
                  </div>
                  </Grid>
                ))}
              </div>
            
            </div>
          )}
          </Card>

</div>
        
        </div>

          
          <CommentSection post={post} />
          
          <Divider style={{ margin: '20px 0' }} />
       
      




    </Paper>
  );
};

export default Post;
