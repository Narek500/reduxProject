import React from 'react';
import {connect} from 'react-redux';

function Index(props) {

    const p1 = props.testStore.map((item, index) => {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td> <button className="btn btn-warning"> Not Done </button> </td>
                <td> <button className="btn btn-danger" onClick={()=>props.deleteRow(item.name)}> Delete </button> </td>
            </tr>
        )
    })

    return (
        <>
888
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
})

const mapDispatchToProps=dispatch=>({
    deleteRow:(name)=>dispatch({type:'delete row',payload:name})
})

export default connect(mapStateToProps,mapDispatchToProps)(Index);
