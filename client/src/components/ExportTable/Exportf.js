import React from 'react';
import { Grid, CircularProgress,AppBar, TextField, Button, Paper, Table } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ChipInput from 'material-ui-chip-input';
import Post from '../Posts/Post/Post';
import Posts from '../Posts/Posts';
import useStyles from './styles';

import moment from 'moment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Exportf = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();


  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
    
        
      <table className={classes.exptable}  id="post-table" >
        
        <thead className={classes.bordercls}>
          <tr className={classes.bordercls}>
            <th className={classes.bordercls}>product</th> 
            <th className={classes.bordercls}>Condition</th> 
            <th className={classes.bordercls}>Quantity</th> 
            <th className={classes.bordercls}>Approximate Budget</th> 
            <th className={classes.bordercls}>Customer Remarks</th> 
            <th className={classes.bordercls}>Tags</th> 
            <th className={classes.bordercls}>Created at</th>    
          </tr>
      </thead>
      <tbody>
        {posts?.map((post) => {
            return(
              <tr className={classes.bordercls}> 
              <td className={classes.bordercls}>{post.product}</td> 
              <td className={classes.bordercls}>{post.condition}</td>
              <td className={classes.bordercls}>{post.qty}</td> 
              <td className={classes.bordercls}>{post.budget}</td> 
              <td className={classes.bordercls}>{post.remarks}</td> 
              <td className={classes.bordercls}>{post.tags.map((tag) => `#${tag} `)}</td> 
              <td className={classes.bordercls}>{moment(post.createdAt).fromNow()}</td>
              </tr>)
              
})}
      </tbody>
      <ReactHTMLTableToExcel 
        className={classes.expbtn}
        table="post-table"
        filename="Requests Excel file"
        sheet="Sheet"
        buttonText="Export to Excel"/>
        
      </table>
    )
    
  );
 
};

export default Exportf;
