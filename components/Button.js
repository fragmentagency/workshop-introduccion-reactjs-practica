class Button extends React.Component {
  render() {
    const {
      callback,
      active,
    } = this.props
    return (
      <button className={`${active ? '' : 'disabled'}`} onClick={callback}>Siguiente</button>
    )
  }
}