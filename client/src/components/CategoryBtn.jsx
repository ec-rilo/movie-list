import React from 'react';

const CategoryBtn = (props) => {
  let classname = 'category-btn';
  if (props.isActive) {
    classname += ' active';
  }

  return (
    <button className={classname} onClick={() => props.showHandler()}>
      {props.text}
    </button>
  );
}



export default CategoryBtn;