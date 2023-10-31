import React, { useContext } from "react";
import avatar from '../avatar.jpg'
import "./cardstyle.css"
import Timestamp from 'react-timestamp'
import { Contextpage } from "..";

const Cards = (props) => {
  const {view,page} = useContext(Contextpage);
  const {blog,blogdelete} = {props}
  return (<>
  <div className="blog">
    <div className="card-body">
      {console.log(props)}
      <img src={avatar}></img>
      <div className="text-body">
      <p className="heading">{props.props.title}</p>
      <p className="body">{props.props.body}</p>
      </div>
    </div>
    {console.log(props)}
    <button className="remove" onClick={() => {props.blogdelete(props.blog.filter((item) => item.id != props.props.id))}}>X</button>
    </div>
    </>
  );
};

export default Cards;
