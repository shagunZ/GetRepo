import React from 'react'
import Repo from '@/app/components/Repo'
import RepoDrs from '@/app/components/RepoDrs'
import Link from 'next/link'
import { Suspense } from 'react';

const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className='btn btn-back'>All Repositories</Link>
        <Suspense fallback={<div>Loading repo...</div>}>
         <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
         <RepoDrs name={name} />
        </Suspense>

    </div>
  )
}

export default RepoPage