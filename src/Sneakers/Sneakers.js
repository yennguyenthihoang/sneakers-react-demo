import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-image';
import axios from 'axios';


class Sneakers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSneakers: [],
      sneakers: []
    };
    this.searchByName = this.searchByName.bind(this);
  }

  async componentDidMount() {
    //Get sneakers from backend
    //const sneakers = (await axios.get('https://bestsneakers.co/API/sneakers/')).data;
    //Hard code to get sneakers
    const sneakers = [{"id":"19","name":"CHAUSSURE SEELEY","color":"red","brand":{"name":"Vans","brief":"It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door. Located in Brooklyn, New York, Chicago, Illinois and Waterloo, London, as well as pop-ups around the world, the House of Vans is home to the creativity that moves us.","models":["model 01","model 02","model 03"]},"price":24.99,"dateOfRelease":"20/07/2019","description":"This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top","gender":["male","female","child","unisex"],"dateOfCreation":"","editOfTheResource":"","photo":"./images/sneaker_red.png"},{"id":"20","name":"CHAUSSURE STAN SMITH","color":"red","brand":{"name":"Vans","brief":"It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door. Located in Brooklyn, New York, Chicago, Illinois and Waterloo, London, as well as pop-ups around the world, the House of Vans is home to the creativity that moves us.","models":["model 01","model 02","model 03"]},"price":24.99,"dateOfRelease":"20/07/2019","description":"This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top","gender":["male","female","child","unisex"],"dateOfCreation":"","editOfTheResource":"","photo":"./images/sneaker_red.png"},{"id":"21","name":"Vans Men's Suede Sk-8 Hi Shoe","color":"red","brand":{"name":"Vans","brief":"It’s a place where imagination lets loose over concrete bowls, art installations, workshops and concert stages, inspiring every person who runs, rolls, or stomps through its door. Located in Brooklyn, New York, Chicago, Illinois and Waterloo, London, as well as pop-ups around the world, the House of Vans is home to the creativity that moves us.","models":["model 01","model 02","model 03"]},"price":24.99,"dateOfRelease":"20/07/2019","description":"This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top","gender":["male","female","child","unisex"],"dateOfCreation":"","editOfTheResource":"","photo":"./images/sneaker_red.png"}];
    const filteredSneakers = sneakers;
    this.setState({
      sneakers, 
      filteredSneakers
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredSneakers: nextProps.items
    });
  }

  searchSneakersByName(e){
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.sneakers;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.name.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.sneakers;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filteredSneakers: newList
    });
  }

  render() {
    return (
      <div className="container">
        <div className="topnav">
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" onChange={this.searchSneakersByName} placeholder="Search by name..." name="search"/>
              <button type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>
          </div>
        </div>

        <div className="row">
          {this.state.filteredSneakers === null && <p>Loading sneakers...</p>}
          {
            this.state.filteredSneakers && this.state.filteredSneakers.map(sneaker => (
              <div key={sneaker.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/sneaker/${sneaker.id}`}>
                  <div className="card text-info text-white bg-white mb-3">
                    <div className="card-body">
                      <Image src={sneaker.photo} className="image"/>
                      <p className="card-text">{sneaker.brand.name}</p>
                      <h5 className="card-title">{sneaker.name}</h5>
                      <p className="card-text">{sneaker.price} $</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Sneakers;