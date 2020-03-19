import React from 'react'

class Cat extends React.Component {
  render() {
    return (
      <>
        <li>
          <img class="big" src={this.props.imageUrl} alt="adventure-cat" />
          <section>
            <p class="number">#1:</p>
            <p class="name">{this.props.catName}</p>
            <p class="minipic">
              <img src={this.props.imageUrl} alt="adventure-cat" />
            </p>
          </section>
        </li>
      </>
    )
  }
}

export default Cat
