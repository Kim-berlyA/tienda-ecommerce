import { Link } from "react-router-dom"

export default function Account() {
  return (
    <div className="flex justify-center items-center h-[90vh] flex-col">
      <p>I'll work on this when I figure out Authentication</p>
      <Link
      to={'/'}
       className="py-3 px-4 text-white bg-primary rounded-full mt-3">
        Go back to Home Page
      </Link>
    </div>
  )
}
