import React from 'react';

export const SettingsContext = React.createContext();

class SettingProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Daily Dose of Code',
      twitter: 'DailyDoseofCode',
      email: 'dailydoseofcode@gmail.com',
      changeTitleTo: this.changeTitleTo, 
      displayMode: 'light',
      toggleDisplayMode: this.toggleDisplayMode
    }
  }

  changetitleTo = (value) => {
    this.setState({ title: value })
  }
  toggleDisplayMode = () => {
    if (this.state.displayMode === 'light') {
      this.setState({ displayMode: 'dark' });
    } else {
      this.setState({ displayMode: 'dark' })
    }
  }

  render () {
    return (
      //bind the value to the state

      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingProvider;