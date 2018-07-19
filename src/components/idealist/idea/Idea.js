import React, {Component} from 'react';
import './Idea.css';

class Idea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: props.idea,
            x: 0,
            y: 0
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
        console.log('dragStart');
        let startX = evt.clientX;
        let startY = evt.clientY;
        this.setState({startX, startY});
        console.log(this.state);
    };

    dragEnd = (evt) => {
        console.log('dragEnd');
        const {clientX, clientY} = evt;
        this.setState((prevState) => {
            return {
                x: prevState.x + (clientX - this.state.startX),
                y: prevState.y + (clientY - this.state.startY)
            }
        });
    };

    render() {
        const {idea} = this.props;
        return (
            <div className="idea" draggable="true" style={
                {
                    left: this.state.x,
                    top: this.state.y
                }}  >
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
                <div className="dragger" draggable="true"
                     onDragStart={this.dragStart}
                     onDrag={this.onDrag}
                     onDragEnd={this.dragEnd}>
                </div>
            </div>
        );
    }
}

export default Idea;