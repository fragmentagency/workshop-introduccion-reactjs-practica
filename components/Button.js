class Button extends React.Component {
  render() {
    const {
      callback,
      active,
      title,
      primary,
    } = this.props
    return (
      <button
        className={`${active ? '' : 'disabled'} ${primary ? 'primary' : ''}`}
        onClick={callback}
      >
        {title}
      </button>
    )
  }
}