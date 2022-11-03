import React from 'react'
import { NavLink, useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom } from "swiper";


function OpenJob({ job }) {

  const params = useParams();
  const jobId = params.id;
  job = job.find(j => j.id == jobId);

  if (job === undefined)
    return <h2>Job not found</h2>;
  else
    return (
      <div className="center">
        <div className='open-job'>
          <div className='_container open-job__container'>
            <div className='open-job__left-block'>
              <div className='open-job__header'>
                <h2 className='open-job__header-title'>Job Details</h2>
                <div className='open-job__border'></div>
                <div className='open-job__header-right'>
                  <p className='open-job__header-save'><img src="img/Save.svg" alt="save" />Save to my list</p>
                  <p className='open-job__header-share'><img src="img/Shape.svg" alt="shape" />Share</p>
                </div>

              </div>
              <div className='open-job__main'>
                <button className='open-job__main-button button_1'>Apply now</button>
                <div className='open-job__main-upper'>
                  <h2 className='open-job__main-title'>{job.title}</h2>
                  <div className='open-job__block-brutto'>
                    <p className='open-job__main-brutto'>€ {job.salary}</p>
                    <p className='open-job__main-text'>Brutto, per year</p>
                  </div>
                  <div className='open-job__main-post'>Posted 2 days ago</div>
                </div>

                <div className='open-job__main-description'>{job.description}</div>

                <div className='open-job__main-respons'>Responsopilities</div>
                <div className='open-job__main-text'>{job.description}</div>
                <div className='open-job__main-benefits'>Compensation & Benefits:</div>

                {
                  job.benefits.map(b => {
                    return (<div className='open-job__main-text'><img src="img/Bullet.png" alt="b" />{b}</div>);
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
                      return (<div className='benefits'>  {b}</div>);
                    })
                  }
                </div>

                <div className='open-job__info-title'>Attached images</div>

                <div className='open-job__info-images'>

                  {
                    job.pictures.map((p, i) => {
                      return (
                        <img src={p} key={i} className='images'></img>

                      );
                    })
                  }

                </div>

              </div>

            </div>
            <div className='open-job__map'>
              <div className='open-job__map-up'>
                <div className='open-job__map-name'>Department name: {job.name}</div>
                <div className='open-job__map-addres'><img src="img/Location.svg" alt="location" />{job.address}</div>
                <div className='open-job__map-phone'><b>Number: </b> {job.phone}</div>
                <div className='open-job__map-email'> <b>Email: </b> {job.email}</div>
              </div>
              <div className='map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.7258274207!2d30.392608691079264!3d50.40217023840415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2suk!4v1667485268012!5m2!1sru!2suk" allowfullscreen></iframe>
              </div>
            </div>

          </div>
          <NavLink to={"/"}> <button className='exit-button'><img src="img/Arrow.svg" alt="arrow" /> RETURN TO JOB BOARD</button></NavLink>
        </div>
      </div>
    );

}

export default OpenJob