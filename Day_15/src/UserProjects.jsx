import React, { useEffect, useState } from 'react';

function UserProjects({ userData }) {
  const [projectData, setProjectData] = useState([]);
  const [recentCommit, setRecentCommit] = useState(null);
  const [repositoryActivity, setRepositoryActivity] = useState([]);

  const accessToken = '';

  const fetchProjects = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${userData.login}/repos`, {
        headers: {
          Authorization: `token ${accessToken}`
        }
      });

      if (res.ok) {
        const projects = await res.json();
        console.log(projects);
        setProjectData(projects);

        
        fetchRecentCommit(projects[0].owner.login, projects[0].name);

        
        fetchRepositoryActivity(projects[0].owner.login, projects[0].name);
      } else {
        console.error('Failed to fetch user projects:', res.status);
      }
    } catch (error) {
      console.error('Error fetching user projects:', error);
    }
  }

  const fetchRecentCommit = async (owner, repo) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        headers: {
          Authorization: `token ${accessToken}`
        }
      });

      if (res.ok) {
        const commits = await res.json();
        console.log(commits)
        if (commits.length > 0) {
          setRecentCommit(commits[0]);
        }
      } else {
        console.error('Failed to fetch recent commit:', res.status);
      }
    } catch (error) {
      console.error('Error fetching recent commit:', error);
    }
  }

  const fetchRepositoryActivity = async (owner, repo) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/events`, {
        headers: {
          Authorization: `token ${accessToken}`
        }
      });

      if (res.ok) {
        const activity = await res.json();
        setRepositoryActivity(activity);
      } else {
        console.error('Failed to fetch repository activity:', res.status);
      }
    } catch (error) {
      console.error('Error fetching repository activity:', error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <h2 style={{ color: 'green' }}>{project.name}</h2>
          <h3 style={{ fontStyle: 'italic' }}>{project.description}</h3>
          <h3 style={{ color: 'blue' }}>Language: {project.language}</h3>
        </div>
      ))}

{recentCommit && (
        <div>
          <h2>Most Recent Commit</h2>
          <p>Commit message: {recentCommit.commit.message}</p>
          <p>Commit date: {recentCommit.commit.author.date}</p>
          <p>Author: {recentCommit.commit.author.name}</p>
        </div>
      )}
      
      <div>
        <h2>Repository Activity</h2>
        <ul>
          {repositoryActivity.map((event, index) => (
            <li key={index}>{event.type}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserProjects;
