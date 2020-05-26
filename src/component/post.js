import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
        job_company: '',
        job_title: '',
        job_salary: '',
        job_description: '',
        job_location: '',
        job_completed: false
    }
    this.onChangeJobCompany = this.onChangeJobCompany.bind(this)
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this)
    this.onChangeJobSalary = this.onChangeJobSalary.bind(this)
    this.onChangeJobDescription = this.onChangeJobDescription.bind(this)
    this.onChangeJobLocation = this.onChangeJobLocation.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }
  onChangeJobCompany(e){
    this.setState({
        job_company: e.target.value
    });
  }
  onChangeJobTitle(e){
    this.setState({
        job_title: e.target.value
    });
  }
  onChangeJobSalary(e){
    this.setState({
        job_salary: e.target.value
    })
  }
  onChangeJobDescription(e){
    this.setState({
        job_description: e.target.value
    });
  }
  onChangeJobLocation(e){
    this.setState({
        job_location: e.target.value
    });
  }
  onChangeJobCompleted(e){
    this.setState({
        job_completed: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    console.log(`Form Submitted:`)
    console.log(`Job Company: ${this.state.job_company}`)
    console.log(`Job Title: ${this.state.job_title}`)
    console.log(`Job Salary: ${this.state.job_salary}`)
    console.log(`Job Description: ${this.state.job_description}`)
    console.log(`Job Location: ${this.state.job_location}`)
    console.log(`Job Completed: ${this.state.job_completed}`);




    const newJob = {
      job_company: this.state.job_company,
      job_title: this.state.job_title,
      job_salary: this.state.job_salary,
      job_description: this.state.job_description,
      job_location: this.state.job_location,
      job_complete: this.state.job_complete
    }
     
    axios.post('http://localhost:4000/somjob/add', newJob)
         .then(res => console.log(res.data));


    this.setState({
      job_company: '',
      job_title: '',
      job_salary: '',
      job_description: '',
      job_location: '',
      job_completed: false
    });
  }



  render() {
    return(
      <div style={{marginTop: 10}}>
        <h2>Post Your Job Here</h2>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Company: </label>
          <input type="text"
            className="form-control"
            value={this.state.job_company} 
            onChange={this.onChangeJobCompany}
          />
        </div>
        <div className="form-group">
          <label>Job Title: </label>
          <input type="text"
            className="form-control"
            value={this.state.job_title} 
            onChange={this.onChangeJobTitle}
          />
        </div>
        <div className="form-group">
          <label>Job Salary: </label>
          <input type="text"
            className="form-control"
            value={this.state.job_salary} 
            onChange={this.onChangeJobSalary}
          />
        </div>
        <div className="form-group">
          <label>Job Location: </label>
          <input type="text"
            className="form-control"
            value={this.state.job_location} 
            onChange={this.onChangeJobLocation}
          />
        </div>
        <div className="form-group">
          <label>Job Description: </label>
          <input type="text"
            className="form-control"
            value={this.state.job_description} 
            onChange={this.onChangeJobDescription}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Post Job" className="btn btn-primary" />

        </div>
      </form>  
       

      </div>

    );
  }
}



export default Post;