import React, { useState, Component } from 'react';
import { Card, CardActions, Table, CardContent, CardMedia, Button, Typography, ButtonBase, Divider, Chip, Box } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    //dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <Table className={classes.card} raised elevation={6}>
        
        <tbody >
          <tr>
            <td><Typography className={classes.product} gutterBottom variant="h5" component="h2">{post.product} request</Typography></td>
            <td><Typography className={classes.fields} gutterBottom variant="h6" component="h2"> &nbsp; {post.condition}</Typography></td>
            <td><Typography className={classes.fields} gutterBottom variant="h6" component="h2">&nbsp; &nbsp;{post.qty}</Typography></td>
            <td><Typography className={classes.fields} gutterBottom variant="h5" component="h2">&nbsp; {post.budget}</Typography></td>
            <td><Typography variant="body2" color="textSecondary" component="p">{post.remarks.split(' ').splice(0, 20).join(' ')}...</Typography></td>
            <td> <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography></td>
            <td><Typography style={{ marginRight: '0' }} >&nbsp;&nbsp;Created at :&nbsp;{moment(post.createdAt).fromNow()}</Typography></td>
          </tr>
        </tbody>
       
    </Table>
  );
};

export default Post;
