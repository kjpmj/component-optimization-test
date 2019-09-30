import React from 'react';

class Input extends React.Component {
  renderCount = 0;
  state = {
    value: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    const { type, placeholder, onChange } = this.props;
    const { value } = this.state;
    console.log(placeholder, 'Rendered', ++this.renderCount);

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
