import React, {Component} from 'react';
import './ToolBar.css';

class ToolBar extends Component {
    render() {
        const {createIdea} = this.props;
        return (
            <div className="toolbar">
                <button className="new-idea-btn btn" onClick={createIdea}>New Idea</button>
            </div>
        );
    }
}

export default ToolBar;