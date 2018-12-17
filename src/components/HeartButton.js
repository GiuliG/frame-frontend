import React, {Component} from 'react';

import { PropTypes } from 'prop-types';

class HeartButton extends Component {

    state = {
        addedToFavorite: false,
    }

    addToFavorite = (e) => {
        console.log(e)
        
        //get current user   
        this.setState({
          addedToFavorite: true,
        })

      }
    
    render () {
        const {addedToFavorite} = this.state;
        console.log(addedToFavorite)
        return (
          
            <div>
                <button onClick={this.addToFavorite} id={this.props.id} style={[
              { display: addedToFavorite ? 'block' : 'none' },{color : addedToFavorite ? 'pink' : 'none' }
            ]}>Favourites</button>
            </div>
        )
    }
}

export default HeartButton;

