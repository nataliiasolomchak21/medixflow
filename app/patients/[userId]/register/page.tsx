import React from 'react'
import Image from 'next/image'
import { getUser } from '@/lib/actions/patient.actions'
import RegisterForm from '@/components/forms/RegisterForm'
import Link from 'next/link'

import * as Sentry from '@sentry/nextjs'

const Register = async ({params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
      <Link href="/" className='cursor-pointer'>
          <Image 
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
      </Link>
        <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 MedixFlow</p>
      </div>
    </section>
  </div>
  )
}

export default Register
