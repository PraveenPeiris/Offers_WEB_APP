import React, { useState, useEffect, Component } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
//import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NumberFormat from 'react-number-format';
import ChipInput from 'material-ui-chip-input';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form1 = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ product: '', remarks: '', tags: [], qty: '', condition: '', budget: '', contact: '', brand: '', paymentMethod: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((remarks) => remarks._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ product: '', remarks: '', tags: [], qty: '', condition: '', budget: '', contact: '', brand: '', paymentMethod: '' });
  };

  useEffect(() => {
    if (!post?.product) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create a request.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post?.product}"` : 'Creating a request'}</Typography>
        <TextField name="product" variant="outlined" label="Product" fullWidth value={postData.product} onChange={(e) => setPostData({ ...postData, product: e.target.value })} />
        <TextField name="brand" variant="outlined" label="Brand" fullWidth value={postData.brand} onChange={(e) => setPostData({ ...postData, brand: e.target.value })} />
        <TextField name="qty" variant="outlined" label="Qty" fullWidth value={postData.qty} onChange={(e) => setPostData({ ...postData, qty: e.target.value })} />
        <TextField name="remarks" variant="outlined" label="Remarks" fullWidth multiline rows={4} value={postData.remarks} onChange={(e) => setPostData({ ...postData, remarks: e.target.value })} />
        
        <Form.Label as="legend" column sm={2}>
        &nbsp;&nbsp; Condition
        </Form.Label>
        {['radio'].map((condition) => (
          <div key={`inline-${condition}`} className="mb-3" value={postData.condition} onChange={(e) => setPostData({ ...postData, condition: e.target.value })}>
            <Form.Check
              inline
              label="brand new"
              value="brand new"
              name="group1"
              type={condition}
              id={`inline-${condition}-1`}
            />
            <Form.Check
              inline
              label="Used"
              value="Used"
              name="group1"
              type={condition}
              id={`inline-${condition}-2`}
            />
            <Form.Check
              inline
              label="brand new or used"
              value="brand new or used"
              name="group1"
              type={condition}
              id={`inline-${condition}-3`}
            />
          </div>
        ))}
        
        
          <div className={classes.newww}>
            <Form.Label column sm={2}>
            &nbsp;&nbsp;&nbsp;Est. Budget 
            </Form.Label>
            <NumberFormat name="budget" className={classes.numberfields}
              thousandsGroupStyle="thousand"
              prefix="Rs."
              decimalSeparator="."
              displayType="input"
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              decimalScale={2} 
              value={postData.budget}
              onChange={(e) => setPostData({ ...postData, budget: e.target.value })} />
          </div>
        

        <div className={classes.newww}>
          <Form.Label  column sm={2}>
          <br/>Contact No &nbsp;&nbsp;
          </Form.Label>
          <NumberFormat name="contact" className={classes.numberfields} variant="outlined"  format=" (###) #######" mask="*" fullwidth value={postData.contact} onChange={(e) => setPostData({ ...postData, contact: e.target.value })} />
        </div>
        
        
          <Form.Label  className={classes.new1}> <br/>
            Preferred Payment Method
          </Form.Label>
          <div  >
            <select name="paymentMethod" label="Payment Method" fullWidth value={postData.paymentMethod} onChange={(e) => setPostData({ ...postData, paymentMethod: e.target.value })}>
              <option>Select Payment methods</option>
              <option value="Card">Credit/debit card</option>
              <option value="Cash">Cash</option>
              <option value="Both Card & Cash">card & cash</option>
            </select><br/><br/>
          </div>
        
        
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          /> 
        </div>
       
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.btn2} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form1;
