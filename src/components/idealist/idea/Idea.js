import React, {Component} from 'react';
import './Idea.css';

class Idea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: props.idea
        }
    }

    titleChange(evt) {
        const {idea, updateIdea} = this.props;
        idea.title = evt.target.value;
        updateIdea(idea.id, idea);
    }

    bodyChange(evt) {
        const {idea, updateIdea} = this.props;
        idea.body = evt.target.value;
        updateIdea(idea.id, idea);
    }

    deleteIdea(id) {
        this.props.deleteIdea(id);
    }

    dragStart = (evt) => {
        let startX = evt.clientX;
        let startY = evt.clientY;
        this.setState({startX, startY});
    };

    dragEnd = (evt) => {
        const {clientX, clientY} = evt;

        const {idea, updateIdea} = this.props;

        idea.x = idea.x + (clientX - this.state.startX);
        idea.y = idea.y + (clientY - this.state.startY);

        updateIdea(idea.id, idea);
    };

    render() {
        const {idea} = this.props;
        return (
            <div className="idea" draggable="true" style={
                {
                    left: idea.x,
                    top: idea.y
                }}
                 onDragStart={this.dragStart}
                 onDragEnd={this.dragEnd}>
                <div className="idea-title">
                    <input className="idea-title-main"
                           value={idea.title}
                           onChange={this.titleChange.bind(this)}/>
                    <button className="delete-idea btn"
                            onClick={() => this.deleteIdea(idea.id)}>
                        Del
                    </button>
                </div>
                <div className="idea-body">
                    <textarea className="idea-body-display"
                              rows='10'
                              value={idea.body}
                              onChange={this.bodyChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Idea;