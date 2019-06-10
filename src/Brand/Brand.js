import React, {Component} from 'react';
import axios from 'axios';

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    //const brand = (await axios.get(`http://localhost:8081/${params.brandId}`)).data;
    //Hard code to set information of sneaker
    const brand = {"name":"Vans","brief":"Vans brief","models":["model 01","model 02","model 03"]};

    this.setState({
        brand,
    });
  }

  render() {
    const {brand} = this.state;
    if (brand === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{brand.name}</h1>
            <p className="lead">{brand.brief}</p>
            <hr className="my-4" />           
          </div>
        </div>
      </div>
    )
  }
}

export default Brand;