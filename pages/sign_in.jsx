import dynamic from 'next/dynamic'

const SignInPresentation = dynamic(() => import('../src/presentation/sign_in/form'), {
  ssr: false
})
const SignInPage = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <section className="w-4/12 shadow bg-base-300 py-12 px-12 rounded">
        <h1 className="justify-center text-center text-6xl mb-12 font-bold">
          Rifas Tomi
        </h1>
        <SignInPresentation/>
      </section>
    </div>
  )
}

export default SignInPage
