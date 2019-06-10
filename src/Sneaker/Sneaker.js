import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-image';
import axios from 'axios';

class Sneaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneaker: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    //const sneaker = (await axios.get(`http://localhost:8081/${params.sneakerId}`)).data;
    //Hard code to set information of sneaker
    const sneaker = {"id":"01","name":"Vans Men's Suede Sk-8 Hi Shoe","color":"red","brand":{"name":"Vans","brief":"Vans brief","models":["model 01","model 02","model 03"]},"price":24.99,"dateOfRelease":"20/06/2018","description":"This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top","gender":["male","female","child","unisex"],"dateOfCreation":"20/06/2018","editOfTheResource":"","photo":""};

    this.setState({
      sneaker,
    });
  }

  render() {
    const {sneaker} = this.state;
    if (sneaker === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{sneaker.name}</h1>
            <p className="lead">{sneaker.description}</p>
            <hr className="my-4" />
            <p>Brand:</p>
            <Link to={`/brand/${sneaker.brand.name}`}>
                <h4 className="">{sneaker.brand.name}</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Sneaker;