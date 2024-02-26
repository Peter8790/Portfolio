export default function NavBar() {
    return (
        <>
        <div className="flex items-center justify-between py-4 px-8 bg-gray-800">
            <div className="flex items-center space-x-4">
                <a href="https://linkedin.com/in/peterbrohnst" className="text-white font-semibold">LinkedIn</a>
                <a href="mailto:peter@brohnst.tech" className="text-white font-semibold">Email</a>
                <a href="https://github.com/Peter8790" className="text-white font-semibold">GitHub</a>
            </div>
        </div>
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 border rounded-lg">
            <h1 className="text-4xl md:text-7xl text-blue-500 font-bold">Brohnst</h1>
            <p className="text-2xl font-semibold">Interested in machine learning, cyber and development</p>
        </div>
        </>
    )
}
