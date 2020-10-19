import React from 'react';
import Context from './Context';
// component wrapper, which we’ll use to wrap components that use the context data and methods:

const withContext = WrappedComponent => {
  const withHOC = props => {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };

  return withHOC;
}

export default withContext;