import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name}) => (
    <div>
        <h3>{name}</h3>
        <section>
            {tasks.map(task => (<div key={task.id}>{task.name}</div>))}
        </section>
    </div>
)


const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);