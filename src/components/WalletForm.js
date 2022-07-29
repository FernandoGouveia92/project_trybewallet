import React, { Component } from 'react';

export default class WalletForm extends Component {
  componentDidMount() {
    const { dispatch, fetchMonetary } = this.props;
    dispatch(fetchMonetary());
  }

  render() {
    return (
      <div>
        WalletForm
        <p data-testid="value-input">{valueInput}</p>
        <p data-testid="description-input">{descriptionInput}</p>
        <label htmlFor="currencies">
          <select>
            {
              arrayDeCurencies.map((e) => { e; })
            }
          </select>
        </label>
      </div>
    );
  }
}
