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
    const brand = {"name":"Vans","brief":"It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door. Located in Brooklyn, New York, Chicago, Illinois and Waterloo, London, as well as pop-ups around the world, the House of Vans is home to the creativity that moves us.","models":["model 01","model 02","model 03"]};

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
            <h4 className="display-3">{brand.name}</h4>
            <hr className="my-4" />  
            <p className="lead">{brand.brief}</p>
                     
          </div>
        </div>
      </div>
    )
  }
}

export default Brand;