import React from 'react'
import Image from 'next/image'
import { getUser } from '@/lib/actions/patient.actions'
import RegisterForm from '@/components/forms/RegisterForm'

const Register = async ({params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image 
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"/>
        <RegisterForm user={user} />
          <p className="copyright py-12">Copyright 2024 MedixFlow</p>
      </div>
    </section>
  </div>
  )
}

export default Register
