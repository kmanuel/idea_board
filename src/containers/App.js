import React, {Component} from 'react';
import Header from '../components/header/Header';
import ToolBar from '../components/toolbar/ToolBar';
import IdeaList from '../components/idealist/IdeaList';
import './App.css';
import {connect} from 'react-redux';
import {createIdea, deleteIdea, updateIdea} from '../actions/actions';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <ToolBar createIdea={this.props.onCreateIdea} />
                <IdeaList
                    ideas={this.props.ideas}
                    onDeleteIdea={this.props.onDeleteIdea}
                    onUpdateIdea={this.props.onUpdateIdea}/>
            </div>
        );
    }
}

const mapStateToProps = ({ideas}) => {
    return {
        ideas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateIdea: () => createIdea(dispatch),
        onDeleteIdea: (id) => deleteIdea(dispatch, id),
        onUpdateIdea: (id, idea) => dispatch(updateIdea(id, idea))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
