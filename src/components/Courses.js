import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

// App components
import CourseContainer from './courses/CourseContainer';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    <Route exact path={match.path} render={ () => <Redirect to={`${match.url}/html`} /> } />
    <Route path={`${match.url}/html`} render={ () => <CourseContainer data={HTMLCourses} /> } />
    <Route path={`${match.url}/css`} render={ () => <CourseContainer data={CSSCourses} /> } />
    <Route path={`${match.url}/javascript`} render={ () => <CourseContainer data={JSCourses} /> } />
  </div>
);

export default Courses;
