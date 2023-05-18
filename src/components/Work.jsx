const Work = () => {

    const workData = [
        {
            year: "January 2022 - Present",
            title: "Web Developer",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        }, {
            year: "August 2020 - January 2022",
            title: "QA/QC Engineer",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        }, {
            year: "November 2019 - May 2020",
            title: "Site Engineer",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        },
    ]

    return (
        <div name="work" className=" bg-[#08192f] w-full h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 ">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#19A7CE] ">
                        Work
                    </p>
                </div>
                <div className="w-80%  py-8 mx-auto">
                    {workData.map(({ year, title, details }, index) => {
                        return <ol key={index} className="flex flex-col md:flex-row relative border-l border-stone-200">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                                    <span className="inline-block px-2 py-1 font-semibold text-white bg-[#19A7CE] rounded-md">{year}</span>
                                    <span className="text-lg font-semibold text-[#19A7CE] ">{title}</span>
                                </p>
                                <p className="my-2 text-base font-niormal text-gray-300">{details}</p>

                            </li>
                        </ol>
                    })}


                </div>

            </div>
        </div>
    )
}
export default Work