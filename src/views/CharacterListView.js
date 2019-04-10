import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { actionCreator } from "../actions"
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.actionCreator();
  }

  render() {
    if (this.props.fetching) {
      return <div> Loading the heck out of some characters\nfrom the second best trilogy </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mstp = state => ({
  fetching: state.charsReducer.isFetching,
  characters: state.charsReducer.characters
})
// the characters and the fetching boolean
export default connect(
  mstp,
  {
    actionCreator
  }
)(CharacterListView);
