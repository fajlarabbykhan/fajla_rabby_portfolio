import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const TalentRecruiter = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Talent Recruiter</h2>
                    <h3>React JS / Tailwind / Mongodb </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='mb-1'>Overview</h2>
                    <p>
                        TalentRecruiter is a job hunting platform where users can find the desired jobs. In this web application, we provide different kinds of jobs from multiple companies. Job seekers can post resumes, portfolios, and work-related profiles on many Internet job boards. Employers and recruiters can look through such information when searching for candidates to hire.
                    </p>
                    <p className='mt-2'>Home page:
                        The home page will include the features Navbar, dark and light mode, Banner section, job trading where user can find latest jobs, customer review where user can see our all customer brand name. Feature job section, subscribe section, blog section, footer section</p>

                    <p className='mt-2'>
                        Category:
                        This feature will find all category names ex. Finance, software and IT, UI/UX design so on.
                    </p>
                    <p className='mt-2'>
                        Job Listing:
                        In the section, we will show the Job list. It will be related to the category at the bottom that will show the pagination system.
                    </p>
                    <p className='mt-2'>
                        Job detail page:
                        In this section, users can see job detail with job deadlines, job summaries, employer names so on.
                    </p>
                    <p className='mt-2'>
                        Login and Registration:
                        Users can log in and register using social media and custom email.
                    </p>
                    <p className='mt-2'>
                        About page:
                        This page will show our mission and vision. The team members who are behind the scene working, the founder's information, and what we achieve so far.
                    </p>
                    <p className='mt-2'>
                        Admin Dashboard:
                        Admin can manage all users and jobs. Admin can also review the job post if he approved then it will publish. Admin can customize some of the UI.
                    </p>
                    <p className='mt-2'>
                        Recruiter Dashboard:
                        The recruiter can post their job in detail. He can update his profile if anyone applies for his/her job post he can see the applicant's resume and profile.
                    </p>
                    <p className='mt-2'>
                        Applicant dashboard:
                        Applicant can see their applied job in detail and they can cancel the applied job and also able to update his/her own profile.
                    </p>
                    <a
                        href='https://github.com/alphainfinity-devs/Talent-Recruiter'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://talent-recruiter.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDB
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> DaisyUi
                            </p>
                        </div>
                    </div>
                </div>
                <Link to='/'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default TalentRecruiter;