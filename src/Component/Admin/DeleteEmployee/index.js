import React, { Component } from 'react';

class DeleteEmployee extends Component {
  state = {
    id: ''
  };

  handleChangeId = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmitDelete = async (event) => {
    event.preventDefault();
    const { id } = this.state;

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(`/employee/api/${id}`, options); // Replace "/employee/api/" with your actual delete endpoint
      if (!response.ok) {
        throw new Error('Delete request failed');
      }
      console.log('Employee deleted successfully');
      this.setState({id: ''})
      // Optionally, you can update the UI to reflect the deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  render() {
    const { id } = this.state;

    return (
      <div className='container mb-5'>
        <h2>Delete Employee</h2>
        <form onSubmit={this.handleSubmitDelete}>
          <div className="form-group">
            <label htmlFor="id">Employee ID:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={id}
              onChange={this.handleChangeId}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">Delete Employee</button>
        </form>
      </div>
    );
  }
}

export default DeleteEmployee;