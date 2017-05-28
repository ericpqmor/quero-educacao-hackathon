import React from '../../node_modules/react';

import getProjects from './../requests/requestProjects.jsx';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    transformProjectsIntoHTML(projects) {
        let data = [];
        if(projects !== undefined) {
            const v = projects;
            for (let i in v) {
                if (v.hasOwnProperty(i)) {
                    data.push(
                        <tr key={v[i].name + Math.random().toString()}
                            className='btn'>
                            <td>
                                <span>{v[i].name}</span>
                            </td>
                        </tr>
                    );
                }
            }
        }

        return data;
    }

    render() {
        const tableData = this.transformProjectsIntoHTML(getProjects());
        return (
            <div>
                <table className="table table-striped table-bordered table-hover taskTable">
                    <thead>
                    <tr>
                        <th>Tarefas</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Projects;