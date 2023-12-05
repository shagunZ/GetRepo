import React from 'react'
import Link from 'next/link';
async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    const response = await fetch(
      `https://api.github.com/repos/shagunZ/${name}/contents`,
      { next:{
        revalidate: 60
      }
    }
    );
    const contents = await response.json();
    return contents;
  }

const RepoDrs = async ({name}) => {
    const contents = await fetchRepoContents(name);

    const dirs = contents.filter((content)=>content.type==='dir');
    const notdirs = contents.filter((content)=>content.type!=='dir');
  return (
    <>
    <div className=" grid-flow-col col-span-2 flex">
      <div className='col-span-1'>
    <h3>Directories</h3>
    <ul>
        {dirs.map((dir)=>(
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>
                {dir.path}
                </Link>
            </li>
        ))}
    </ul>
    </div>

    <div className='col-span-1'>
    <h3>Files and Folders</h3>
    <ul>
        {notdirs.map((dir)=>(
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>
                {dir.path}
                </Link>
            </li>
        ))}
    </ul>
    </div>

    </div>
    </>
  )
}

export default RepoDrs