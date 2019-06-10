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
    const sneaker = {"id":"19","name":"CHAUSSURE SEELEY","color":"red","brand":{"name":"Vans","brief":"It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door. Located in Brooklyn, New York, Chicago, Illinois and Waterloo, London, as well as pop-ups around the world, the House of Vans is home to the creativity that moves us.","models":["model 01","model 02","model 03"]},"price":24.99,"dateOfRelease":"20/07/2019","description":"This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top","gender":["male","female","child","unisex"],"dateOfCreation":"","editOfTheResource":"","photo":"./images/sneaker_red.png"};

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
          <div className="col-sm-12 col-md-8 col-lg-8">
            <Image src={sneaker.photo} className=""/>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h5 className="font-weight-bold">{sneaker.name}</h5>
            <Link to={`/brand/${sneaker.brand.name}`}>
              <h4 className="font-weight-normal">{sneaker.brand.name}</h4>
            </Link>
            <p className="card-text"><b>Price: </b>{sneaker.price} $</p>
            <p className="card-text"><b>Available color: </b> {sneaker.color}</p>
            <p className="card-text"><b>Gender: </b> 
            {
              sneaker.gender.length ? sneaker.gender.map((item) =>
              (<span > {item} </span>)) : ', '
            }</p>
          </div>
        </div>
        <div className="row col-sm-12 col-md-12 col-lg-12">
          <h4 className="font-weight-bold">Product details:</h4>
          <p className="card-text">{sneaker.description}</p>
          <div className="row col-sm-12 col-md-4 col-lg-4">
            <p className="card-text"><b>Other informations: </b></p><br></br>
            <p className="card-text"><b>Date of release: </b>{sneaker.dateOfRelease} $</p><br></br>
            <p className="card-text"><b>Date of creation: </b>{sneaker.dateOfCreation}</p><br></br>
            <p className="card-text"><b>Date of editing of the resource:  </b>{sneaker.editOfTheResource}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sneaker;