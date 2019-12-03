import React from 'react';
import { SettingsContext } from '../settings/site-context';

class Content extends React.Component {
  //static contextType gives us this.context
  static contextType = SettingsContext;

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <button onClick={() => this.context.toggleDisplayMode}>change display mode</button>
        <section className={`${this.context.displayMode}`}>
          <h2>{this.context.title}</h2>
            <div>
              <a href={`http://twitter.com/${this.context.twitter}`}>
                @{this.context.twitter}
              </a>
            </div>
            <div>
              <a href={`mailto:${this.context.email}`}>
                {this.context.email}
              </a>
            </div>

          <form onSubmit={this.handleSubmit}>
            <h2>Site Settings</h2>
              <label>
                <span>Site Title</span>
                <input
                placeholder="Site Title"
                name="title"
                onChange={(e) => this.context.changeTitleTo(e.target.value)}
                />
              </label>
          </form>
        </section>
      </>
    )
  }
}

export default Content;