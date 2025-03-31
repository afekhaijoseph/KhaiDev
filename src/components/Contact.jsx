const Contact = () => {
  return (
    <div className="text-center text-gray-100 py-3">
        <h2 className="font-semibold text-2xl py-2">Message me, Let's work together!🚀</h2>
        <form action="" className="flex flex-col gap-2 py-2">
            <label htmlFor="name"></label>
            <input className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="text" name="name" placeholder="Full Name" />
            <label htmlFor="email"></label>
            <input className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="email" name="email" placeholder="Email address" />
            <label htmlFor="subject"></label>
            <input className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="text" name="subject" placeholder="Subject" />
            <label htmlFor="message"></label>
            <textarea className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" placeholder="How can i be of service?" name="message" rows="4" cols="50"></textarea>
            <button className="text-pritext bg-accent w-fit px-2 py-1 rounded-md mx-auto mt-1 ">Submit</button>
        </form>
    </div>
  )
}

export default Contact