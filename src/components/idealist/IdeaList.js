import React, {Component}  from 'react';
import Idea from './idea/Idea';
import './IdeaList.css';

class IdeaList extends Component {

    constructor(props) {
        super(props);
        this.toIdeaElement = this.toIdeaElement.bind(this);
    }

    toIdeaElement = (idea) => {
        return <Idea
            key={idea.id}
            idea={idea}
            deleteIdea={this.props.onDeleteIdea}
            updateIdea={this.props.onUpdateIdea}/>
    };

    render() {
        const {ideas} = this.props;
        const ideaElements = ideas.map(this.toIdeaElement);

        return (
            <div className="idea-list">
                {ideaElements}
            </div>
        );
    }
}

export default IdeaList;