import React from 'react'
import Link from 'next/link';
import { FaStar,FaCodeBranch,FaEye } from "react-icons/fa"

async function fetchRepos(){
  const response = await fetch('https://api.github.com/users/shagunZ/repos',{
    next:{  //for caching
      revalidate: 60
    }
  });

  await new Promise((resolve)=>setTimeout(resolve,1000)) //waiting 
  const repos = await response.json();
  return repos;
}
const ReposPage = async() => {
  const repos = await fetchRepos();
  // console.log(repos);
  return (
    <div className='repos-container'>
      <h1>My Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo)=>(
          <li key={repo.id} className=''>
            <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span>
                <FaStar/> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch/> {repo.forks_count}
              </span>
              <span>
                <FaEye/> {repo.watchers_count}
              </span>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage