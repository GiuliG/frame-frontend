import React, {Component} from 'react';

import { PropTypes } from 'prop-types';

class HeartButton extends Component {

    state = {
        addedToFavorite: false,
    }

    addToFavorite = () => {
        //get current user   
        this.setState({
          addedToFavorite: true,
        })

      }
    
    render () {
        const {addedToFavorite} = this.state;
        const { color, selectedColor} = this.props;
        console.log(addedToFavorite)
        return (
          
            <div>
                <button  name={this.addToFavorite} onClick={this.addToFavorite}  style={[
              { display: addedToFavorite ? 'block' : 'none' },{color : addedToFavorite ? 'pink' : 'none' }
            ]}>Favourites</button>
            </div>
        )
    }
}

export default HeartButton;

