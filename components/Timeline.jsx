import React, { Component } from 'react';
import tData from "./data/timeline-data.json";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>{tData.employment[0].institution} <span>[May 2017-Present] </span></h2>
                        <p> {tData.employment[0].jobduties}</p> </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[1].institution} <span>[June 2016-April 2017] </span></h2>
                        <p> {tData.employment[1].jobduties}</p> </div>
                    </div>
                    <div className="timeline-label">
                        <h2>{tData.employment[2].institution} <span>[Oct 2015-June 2016] </span></h2>
                        <p> {tData.employment[2].jobduties}</p> </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[3].institution} <span>[Sep 2014-Sep 2015] </span></h2>
                        <p> {tData.employment[3].jobduties}</p> </div>
                    </div>
                  </article>
                  <div className="timeline-label">
                        <h2>{tData.employment[4].institution} <span>[May 2014-Aug 2014] </span></h2>
                        <p> {tData.employment[4].jobduties}</p> </div>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[5].institution} <span>[Feb 2014-April 2014] </span></h2>
                        <p> {tData.employment[5].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[6].institution} <span>[Mar 2013-Feb 2014] </span></h2>
                        <p> {tData.employment[6].jobduties}</p> </div>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[7].institution} <span>[Oct 2011-March 2013] </span></h2>
                        <p> {tData.employment[7].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[8].institution} <span>[Jan 2011-Sep 2011] </span></h2>
                        <p> {tData.employment[8].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[9].institution} <span>[Dec 2009-July 2010] </span></h2>
                        <p> {tData.employment[9].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[10].institution} <span>[May 2009-Nov 2009] </span></h2>
                        <p> {tData.employment[10].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[11].institution} <span>[July 2008-April 2009] </span></h2>
                        <p> {tData.employment[11].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[12].institution} <span>[Oct 2006-June 2008] </span></h2>
                        <p> {tData.employment[12].jobduties}</p> </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>{tData.employment[2].institution} <span>[1997-2002] </span></h2>
                       <p></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}