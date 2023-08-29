import React from "react";
import { Grid, Typography, Icon, Paper } from "@material-ui/core";
import CustomTimeline, {CustomTimelineSeparator} from "../../components/Timeline/Timeline";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School';
import './Resume.css';

import resumeData from "../../utils/resumeData";

const Resume = () => {
    return (
        <>
           <Grid container className='section pb_45'>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">About Me</h6>
              </Grid>
              <Grid item xs={12}>
                 <Typography variant="body2" className="aboume_text">{resumeData.about}</Typography>
              </Grid>
           </Grid>
           <Grid container className=''>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Resume</h6>
               </Grid>
               <Grid item xs={12}>
                   <Grid container className="resume_timeline">
                      <Grid item sm={12} md={6}>
                        <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                            {resumeData.experiences.map(experience => (
                                <TimelineItem>
                                    <CustomTimelineSeparator />
                                    <TimelineContent className="timeline_content">
                                        <Typography className="timeline_title">{experience.title}</Typography>
                                        <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                        <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                      </Grid>
                      <Grid item sm={12} md={6}>
                           <CustomTimeline title="Education" icon={<SchoolIcon />}>
                               {resumeData.education.map(education => (
                                   <TimelineItem>
                                       <CustomTimelineSeparator />
                                       <TimelineContent className="timeline_content">
                                           <Typography className="timeline_title">{education.title}</Typography>
                                           <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                           <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                                       </TimelineContent>
                                   </TimelineItem>
                               ))}
                           </CustomTimeline>
                         </Grid>
                    </Grid> 
                </Grid>
           </Grid>
           <Grid container className='section pb_45'>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">My Services</h6>
            </Grid>
             <Grid item xs={12}>
                <Grid container spacing={3} justify-content='space-around'>
                    {resumeData.services.map(service => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="service">
                                <Icon className="service_icon">{service.icon}</Icon>
                                <Typography variant="h6" className="service_title">{service.title}</Typography>
                                <Typography variant="body2" className="service_description">{service.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
             </Grid>
           </Grid>
           <Grid container className='section pb_45'>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">My Skills</h6>
            </Grid>
             <Grid item xs={12}>
             <Grid container spacing={3} justifyContent="space-between" className='section graybg pb_45 p_50'>
             
             {resumeData.skills.map(skill => (
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className="skill">
                        <Typography variant="h6" className="skill_title">
                            {skill.title}
                        </Typography>  
                        {skill.description.map(element => (
                            <Typography variant="body2" className="skill_description">
                                <TimelineDot variant={'outlined'} className="timeline_dot"/>
                                {element}
                            </Typography>
                        ))}      
                    </Paper>
                </Grid>
             ))}
           </Grid>
             </Grid>
           </Grid>
       
        </>
    )
}

export default Resume