class ModuleInfo extends React.Component {
  render() {
    const {
      activeModule,
      activeSubmodule,
      callback,
      isLast,
    } = this.props
    return (
      <div className="module-info">
        <div>
          <h2>{activeModule.title}</h2>
          <h1>{activeSubmodule.title}</h1>
          <Button callback={callback} active={!isLast} />
        </div>
      </div>
    )
  }
}