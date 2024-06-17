import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordation = () => {
    return (
        <section class=" body-font my-6 bg-slate-100">
            <div class="container px-20 py-10 mx-auto">
                <div class="text-center mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-pink-600 mb-4">Popular Questions</h1>
                </div>
                <div class="flex flex-col w-full mb-2" >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                        >
                            <h2 className='text-lg text-slate-800'>Are there any charges for applying on jobs?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>No there are no charges applicable for applying a job. We do not support any recruiter who asks for money from Job seekers. Kindly share the details and proof of chat or call recording with the recruiter who asks for money on support@jobhai.com.</p>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div class="flex flex-col w-full mb-2">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                        >
                            <h2 className='text-lg text-slate-800'>Are you linked with Naukri.com?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>We are a business initiated by Infoedge Ind. Ltd. which is also the parent company of Naukri.com.</p>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div class="flex flex-col w-full mb-2">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <h2 className='text-lg text-slate-800'>How can we contact the recruiters?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>You can directly call the recruiters by clicking on the ‘Call’ button in the Job Description which is active between 10 a.m. to 7 p.m. post which you can apply on the job and the recruiter can call you if they find your application relevant.</p>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div class="flex flex-col w-full mb-2">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        >
                            <h2 className='text-lg text-slate-700'>What can I do if the recruiters don't pick my calls?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>Recruiters usually take actions based on the candidate profile. We always recommend to apply on multiple jobs regularly to increase the chances of getting shortlisted.</p>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div class="flex flex-col w-full mb-2">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        >
                            <h2 className='text-lg text-slate-700'>How can I contact you?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>You can send us an email on support@jobhai.com and we will answer your query.</p>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div class="flex flex-col w-full mb-2">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        >
                            <h2 className='text-lg text-slate-700'>What type of jobs do you have?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-md text-slate-500'>
                                1. Part-Time Jobs/Full-time Jobs <br />
                                2. Contractual Jobs/Permanent Jobs <br />
                                3. Work From Home Jobs
                            </p>
                        </AccordionDetails>
                    </Accordion>

                </div>

            </div>
        </section>
    )
}

export default Accordation