import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page'

class Results extends Component {
   render() { 
      
      const { suggestions, results } = this.props;
      console.log(suggestions);
      console.log(results);

      return ( 
         <Page/>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      suggestions: state.suggestions,
      results: state.results
   }
}

export default connect(mapStateToProps)(Results);