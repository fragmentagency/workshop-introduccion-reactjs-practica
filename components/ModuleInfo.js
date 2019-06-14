class ModuleInfo extends React.Component {
  render() {
    const {
      activeModule,
      activeSubmodule,
      nextCallback,
      prevCallback,
      isLast,
      isFirst,
    } = this.props
    return (
      <div className="module-info">
        <div>
          <h2>{activeModule.title}</h2>
          <h1>{activeSubmodule.title}</h1>
          <div className="actions">
            <Button callback={nextCallback} active={!isLast} primary title="Siguiente" />
            <Button callback={prevCallback} active={!isFirst} title="Anterior" />
          </div>
        </div>
      </div>
    )
  }
}