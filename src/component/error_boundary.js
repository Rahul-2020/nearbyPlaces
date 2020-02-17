import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: ''
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorInfo: info
    })
  }

  render () {
    if (this.state.errorInfo) {
      return <p data-test="error-boundary"> Something went wrong...</p>
    } 

    return this.props.children;
  }

}

export default ErrorBoundary;