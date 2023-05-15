const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>Hi. I&apos;m Presy Lord, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>
                            I'm a passionate web developer with expertise in React, JavaScript, jQuery, Odoo Development, Magento, Shopify, BigCommerce, WordPress, Python, NodeJS, DevOps, and SEO. I thrive on challenges and love expanding my skills. Let's collaborate and bring your ideas to life!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About