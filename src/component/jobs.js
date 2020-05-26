import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


const Job = props => (
  <tr>
    <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_company}</td>
    <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_title}</td>
    <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_salary}</td>
    <td className={props.job.job_completed ? 'completed' : ''}>{props.job.job_location}</td>

    <td>
      <Link to={"/apply/"+props.job._id}>Apply</Link>
    </td>
  </tr>
)

class Jobs extends Component {
  constructor(props){
    super(props);
    this.state ={somjob: []};
  }

  componentDidMount(){
    axios.get('http://localhost:4000/somjob')
    .then(response => {
      this.setState({somjob: response.data});
    })
    .catch(function(error){
      console.log(error);
    });
  }  
      

  

  jobList(){
    return this.state.somjob.map(function(currentJob, i){
      return <Job job={currentJob} key={i} />
    });
  }
  render() {
    return (
      <div>
        <h3>Open Jobs</h3>
        <table className="table table-striped" style={{marginTop: 20}}> 
         <thead>
           <tr>
             <th>Job Company</th>
             <th>Job Title</th>
             <th>Job Salary</th>
             <th>Job Location</th>
             <th>Actions</th>
           </tr>

         </thead>
         <tbody>
           {this.jobList()}
         </tbody>
        </table>
      </div>

    )
  }
}



export default Jobs;