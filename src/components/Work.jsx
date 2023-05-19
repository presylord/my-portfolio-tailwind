import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHardHat, FaLaptopCode } from 'react-icons/fa';
const Work = () => {


    const workData = [
        {
            year: "January 2022 - Present",
            title: "Web Developer",
            company: "Journey Better Business Group Inc.",
            icon: <FaLaptopCode />,

            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        }, {
            year: "August 2020 - January 2022",
            title: "QA/QC Engineer",
            company: "3S Globtek Construction Corp.",
            icon: <FaHardHat />,

            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        }, {
            year: "November 2019 - May 2020",
            title: "Site Engineer",
            company: "C. Lara Construction",
            icon: <FaHardHat />,
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo orci vitae lectus dictum, eu sodales nisl scelerisque."
        },
    ]

    return (
        <div name="work" className=" bg-[#08192f] w-full md:pt-20 ">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300  ">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#19A7CE] ">
                        Work
                    </p>
                </div>
                <div className="py-8 ">

                    <VerticalTimeline>
                        {workData.map(({ year, title, icon, details, company }, index) => {
                            return <VerticalTimelineElement key={index}
                                className="vertical-timeline-element--work 	 "
                                contentStyle={{ background: '', color: '#08192f', borderColor: "#19A7CE", borderTopWidth: "5px", borderRadius: "1rem" }}
                                contentArrowStyle={{ borderRight: '10px solid  #19A7CE' }}
                                iconStyle={{ background: '#19A7CE', color: '#fff' }}
                                icon={icon}
                            >
                                <h3 className="inline-block px-2 py-1 font-bold text-white bg-[#19A7CE] rounded-md ">{title}</h3>
                                <span className="block vertical-timeline-element-title italic font-bold text-[#19A7CE]">{company}</span>
                                <span className="block vertical-timeline-element-title font-bold text-sm">{year}</span>
                                <p>{details}</p>
                            </VerticalTimelineElement>
                        })}


                    </VerticalTimeline>


                </div>

            </div>
        </div >
    )
}
export default Work