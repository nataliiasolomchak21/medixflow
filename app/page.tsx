import PatientForm from "@/components/forms/PatientForm"
import PasskeyModal from "@/components/PasskeyModal"
import Link from "next/link";
import Image from "next/image"

export default function Home({ searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true'
 return (
  <div className="flex h-screen max-h-screen">
    {isAdmin && <PasskeyModal />}
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image 
        src="/assets/icons/logo-full.png"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"/>
        <PatientForm />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-itimes-end text-dark-500 xl:text-left">© 2024 MedixFlow</p>
          <Link href="/?admin=true" className="text-blue-600">Admin</Link>
        </div>
      </div>
    </section>
    <Image 
      src="/assets/images/main-page.svg"
      height={900}
      width={900}
      alt="patient"
      className="side-img max-w-[50%]"/>
  </div>
 )
}
