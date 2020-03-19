import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <li class={this.props.headerClass}>
          <a href={this.props.href} class="text-gray-dark">
            {this.props.headerTitle}
          </a>
        </li>
      </>
    )
  }
}

export default Header
