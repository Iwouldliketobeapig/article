import React from 'react';

export default Button = (props) => {
  delete props.children;
  return <button {...props}>{props.children}</button>
}