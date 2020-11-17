import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      imagePath: '',
      loading: false,
    }

    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.updateDogImage = this.updateDogImage.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  fetchDogImage() {
    this.setState(
      ({ loading: true }),
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const { message: imagePath } = await response.json();
        localStorage.setItem('imagePath', imagePath);
        alert(imagePath.split('/')[4]);
        this.setState({ imagePath, loading: false })
      }
    );
  }

  updateDogImage() {
    if (!this.state.imagePath.includes('terrier')) {
      this.fetchDogImage();
    }
  }

  render() {
    const { imagePath, loading } = this.state;
    return (
      <div className="App">
        {loading ? <p>Loading...</p> : (
          <>
            <img alt="Dog from dog-api" src={imagePath} />
            <button onClick={this.updateDogImage}>Nova foto</button>
          </>)}
      </div>
    );
  }
}

export default App;
