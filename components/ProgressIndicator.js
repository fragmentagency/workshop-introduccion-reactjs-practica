class ProgressIndicator extends React.Component {
  render() {
    const {
      progress,
    } = this.props
    return (
      <div className="progress-indicator" style={{ width: `${progress}%` }} />
    )
  }
}