import React from 'react';
import './editor.scss';

import EditorWithStaticContext from './static-context';

class Content extends React.Component {
  render() {
    return (
      <>
      <h2>Static Conent</h2>
      <EditorWithStaticContext />
      </>
    )
  }
}

export default Content;
