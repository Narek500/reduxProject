import React from 'react';
import {connect} from 'react-redux';

function Index(props) {

    const statusFunc = (e) => {

        if (props.testStore[e.target.id].status === true) {
            props.testStore[e.target.id].status = false;
        } else {
            props.testStore[e.target.id].status = true;
        }

        props.poxelStatus(props.testStore);
        
    }

    const p1 = props.testStore.map((item, index) => {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td> 
                    <button 
                    className="btn btn-warning" id={index} onClick={statusFunc}> 
                    {item.status === false ? "Narek" : "Narek true"} 
                    </button> 
                </td>
                <td> <button className="btn btn-danger"> Delete </button> </td>
            </tr>
        )
    })

    return (
        <>

            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Add New Todo" />

                <div className="input-group-append">
                    <button className="btn btn-primary"> Add Todo </button>
                </div>

            </div>

            <div className="mb-3">
                <input type="search" className="form-control" placeholder="Search Todo" />
            </div>

            <table className="table table-bordered">
                
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {p1}
                </tbody>

            </table>
        </>
    );
}

const mapStateToProps = (state) => ({
  testStore: state 
});

const mapDispatchToProps = (dispatch) => ({
    poxelStatus: (data) => {
        dispatch({type: 'CHANGE_STATUS', payload: data})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
