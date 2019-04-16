import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red' }}>Error! {this.state.message}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
