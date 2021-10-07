
//posts.js
//line18-22
/**return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );**/

  //post.js - line61
  //<CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

  //from form file removed the condition yexfield and added a radio button
  //<TextField name="condition" variant="outlined" label="Condition" fullWidth value={postData.condition} onChange={(e) => setPostData({ ...postData, condition: e.target.value })} />

  //<TextField name="paymentMethod" variant="outlined" label="Payment Method" fullWidth value={postData.paymentMethod} onChange={(e) => setPostData({ ...postData, paymentMethod: e.target.value })} />

  //<TextField name="budget" variant="outlined" label="Budget" fullWidth value={postData.budget} onChange={(e) => setPostData({ ...postData, budget: e.target.value })} />

  //<TextField name="contact" variant="outlined" label="Contact" fullWidth value={postData.contact} onChange={(e) => setPostData({ ...postData, contact: e.target.value })} />


  //post folder--> post.js
  /**<div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }}
            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        )}
        
        cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
        
        
        
        **/

  //post file after contact
  //<Typography className={classes.fields} gutterBottom variant="h5" component="h2">{post.brand}</Typography>
  //<Typography className={classes.fields} gutterBottom variant="h5" component="h2">{post.paymentMethod}</Typography>
  //<Typography className={classes.fields} gutterBottom variant="h5" component="h2">{post.contact}</Typography>


/**import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

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
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card} >
        <div className={classes.section} >
          
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h3" component="h2">{post.product}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.qty}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.condition}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.budget}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.brand}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.paymentMethod}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.contact}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.remarks}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))}
          </Typography>
          

          
          <CommentSection post={post} />
          
          <Divider style={{ margin: '20px 0' }} />
        </div>
        
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section} style={{float:'right'}} >
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ product, name, remarks, likes, qty, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{product}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{remarks}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <Typography gutterBottom variant="subtitle1">{qty}</Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post; **/
