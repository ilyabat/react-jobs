import React from 'react'
import { NavLink, useParams } from 'react-router-dom';

function OpenJob({ job }) {

  const params = useParams();
  const jobId = params.id;
  job = job.find(j => j.id == jobId);

  if (job === undefined)
    return <h2>Job not found</h2>;
  else
    return (
      <div className='open-job'>
        <div className='_container open-job__container'>
          <div className='open-job__left-block'>
            <div className='open-job__header'>
              <h2 className='open-job__header-title'>Job Details</h2>

              <div className='open-job__header-right'>
                <p className='open-job__header-save'><img src="img/Save.svg" alt="save" />Save to my list</p>
                <p className='open-job__header-share'><img src="img/Shape.svg" alt="shape" />Share</p>
              </div>

            </div>
            <div className='open-job__main'>
              <button className='open-job__main-button'>Apply now</button>
              <div className='open-job__main-upper'>
                <h2 className='open-job__main-title'>{job.title}</h2>
                <div>
                  <p className='open-job__main-brutto'>€ {job.salary}</p>
                  <p className='open-job__main-text'>Brutto, per year</p>
                </div>
              </div>
              <div className='open-job__main-post'>Posted 2 days ago</div>
              <div className='open-job__main-description'>{job.description}</div>

              <div className='open-job__main-respons'>Responsopilities</div>
              <div className='open-job__main-text'>{job.description}</div>
              <div className='open-job__main-benefits'>Compensation & Benefits:</div>

              {
                job.benefits.map(b => {
                  return (<div className=''>{b}</div>);
                })
              }
              <button className='open-job__main-button'>Apply now</button>
            </div>
            <div className='open-job__info'>
              <div className='open-job__info-title'>Additional info</div>
              <p className='open-job__info-text'> Employment type</p>
              <div className='open-job__info-type'>
                {
                  job.employment_type.map(t => {
                    return (<div className='type'>{t}</div>);
                  })
                }
              </div>

              <p className='open-job__info-text'> Benefits</p>
              <div className='open-job__info-benefits'>
                {
                  job.benefits.map(b => {
                    return (<div className='benefits'>{b}</div>);
                  })
                }
              </div>

              <div className='open-job__info-title'>Attached images</div>
              <div className='open-job__info-images'>
                {
                  job.pictures.map(p => {
                    return (<img src={p} className='images'></img>);
                  })
                }
              </div>
            </div>
            <NavLink to={"/"}> <button className='exit-button'> RETURN TO JOB BOARD</button></NavLink>
          </div>
          <div className='open-job__map'>

          </div>
        </div>
      </div>
    );

}

export default OpenJob