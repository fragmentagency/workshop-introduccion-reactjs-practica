class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modules,
      // -1 asumiendo que la ultima es para dar las gracias
      totalSubmodules: modules.map(module => module.submodules.length).reduce((a, b) => a + b) - 1,
      submodulesFinished: 0,
      activeModuleIndex: 0,
      activeSubmoduleIndex: 0,
      isLast: false,
      isFirst: true,
      activeModule: modules[0],
      activeSubmodule: modules[0].submodules[0],
      progress: 0,
    }
    this.goToNextSubmodule = this.goToNextSubmodule.bind(this)
    this.goToPrevSubmodule = this.goToPrevSubmodule.bind(this)
  }

  goToNextSubmodule() {
    const {
      modules,
      activeModuleIndex,
      activeSubmoduleIndex,
      submodulesFinished,
      totalSubmodules,
    } = this.state
    let nextActiveSubmoduleIndex = 0
    let nextActiveModuleIndex = activeModuleIndex

    if (typeof modules[activeModuleIndex].submodules[activeSubmoduleIndex + 1] !== 'undefined') {
      nextActiveSubmoduleIndex = activeSubmoduleIndex + 1
    } else if (typeof modules[activeModuleIndex + 1] !== 'undefined') {
      nextActiveModuleIndex = activeModuleIndex + 1
    } else {
      nextActiveModuleIndex = 0
    }

    const nextSubmodulesFinished = submodulesFinished + 1
    const activeModule = modules[nextActiveModuleIndex]
    this.setState({
      activeModuleIndex: nextActiveModuleIndex,
      activeSubmoduleIndex: nextActiveSubmoduleIndex,
      submodulesFinished: nextSubmodulesFinished,
      isLast: (typeof modules[nextActiveModuleIndex].submodules[nextActiveSubmoduleIndex + 1] === 'undefined' && typeof modules[nextActiveModuleIndex + 1] === 'undefined'),
      isFirst: (nextActiveModuleIndex === 0 && nextActiveSubmoduleIndex === 0),
      activeModule,
      activeSubmodule: activeModule.submodules[nextActiveSubmoduleIndex],
      progress: nextSubmodulesFinished / totalSubmodules * 100,
    })
  }

  goToPrevSubmodule() {
    const {
      modules,
      activeModuleIndex,
      activeSubmoduleIndex,
      submodulesFinished,
      totalSubmodules,
    } = this.state
    let nextActiveSubmoduleIndex = 0
    let nextActiveModuleIndex = activeModuleIndex

    if (typeof modules[activeModuleIndex].submodules[activeSubmoduleIndex - 1] !== 'undefined') {
      nextActiveSubmoduleIndex = activeSubmoduleIndex - 1
    } else if (typeof modules[activeModuleIndex - 1] !== 'undefined') {
      nextActiveModuleIndex = activeModuleIndex - 1
      nextActiveSubmoduleIndex = modules[nextActiveModuleIndex].submodules.length - 1
    } else {
      nextActiveModuleIndex = 0
    }

    const nextSubmodulesFinished = submodulesFinished - 1
    const activeModule = modules[nextActiveModuleIndex]
    this.setState({
      activeModuleIndex: nextActiveModuleIndex,
      activeSubmoduleIndex: nextActiveSubmoduleIndex,
      submodulesFinished: nextSubmodulesFinished,
      isLast: (typeof modules[nextActiveModuleIndex].submodules[nextActiveSubmoduleIndex + 1] === 'undefined' && typeof modules[nextActiveModuleIndex + 1] === 'undefined'),
      isFirst: (nextActiveModuleIndex === 0 && nextActiveSubmoduleIndex === 0),
      activeModule,
      activeSubmodule: activeModule.submodules[nextActiveSubmoduleIndex],
      progress: nextSubmodulesFinished / totalSubmodules * 100,
    })
  }

  render() {
    const {
      isLast,
      isFirst,
      progress,
      activeModule,
      activeSubmodule,
    } = this.state

    return (
      <div className="app">
        <ProgressIndicator
          progress={progress}
        />
        <ModuleInfo
          isLast={isLast}
          isFirst={isFirst}
          activeModule={activeModule}
          activeSubmodule={activeSubmodule}
          prevCallback={this.goToPrevSubmodule}
          nextCallback={this.goToNextSubmodule}
        />
      </div>
    )
  }
}