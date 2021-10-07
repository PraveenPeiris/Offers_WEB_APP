import React from 'react';
import { Grid, CircularProgress, Paper, Table } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

import moment from 'moment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
      <table className={classes.container}  id="post-table" >
        <thead>
          <tr>
            <th>product</th> 
            <th>Condition</th> 
            <th>Quantity</th> 
            <th>Approximate Budget</th> 
            <th>Customer Remarks</th> 
            <th>Tags</th> 
            <th>Created at</th>    
          </tr>
      </thead>
      <tbody>
        {posts?.map((post) => {
            return(
              <tr> 
              <td>{post.product}</td> 
              <td>{post.condition}</td>
              <td>{post.qty}</td> 
              <td>{post.budget}</td> 
              <td>{post.remarks}</td> 
              <td>{post.tags.map((tag) => `#${tag} `)}</td> 
              <td>{moment(post.createdAt).fromNow()}</td>
              </tr>)
              
})}
      </tbody>
        <ReactHTMLTableToExcel 
        className="btn_edit"
        table="post-table"
        filename="Requests Excel file"
        sheet="Sheet"
        buttonText="Export to Excel"/>
      </table>
    )
    
  );
 
};

export default Posts;
