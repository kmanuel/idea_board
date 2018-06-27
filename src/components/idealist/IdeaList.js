import React, {Component}  from 'react';
import Idea from './idea/Idea';
import './IdeaList.css';

class IdeaList extends Component {
    render() {
        const {ideas} = this.props;

        const ideaElements = ideas.map((idea) => {
            return <Idea
                key={idea.id}
                idea={idea}
                deleteIdea={this.props.onDeleteIdea}
                updateIdea={this.props.onUpdateIdea} />
        });

        return (
            <div className="idea-list">
                {ideaElements}
            </div>
        );
    }
}

export default IdeaList;