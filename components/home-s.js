import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeS = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-s-container1 thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt="/external/terrace-1500w-1500w.jpg"
          src="/external/terrace-1500w-1500w.jpg"
          className="home-s-image thq-img-ratio-16-9"
        />
        <div className="home-s-max-width thq-section-max-width">
          <div className="home-s-container2">
            <h2 className="home-s-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-s-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_BYLeDb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="home-s-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-s-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_s_bOjs'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <a
            href="https://www.booking.com/hotel/ro/casa-moldovan-coltisorul-meu-de-rai-ocna-sugatag1.en-gb.html?aid=318615&amp;label=New_English_EN_IE_20153704825-FYUwHK1Cx8hIZpAQIPOUJQS640874805295%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=0d037d2d888fb1d68f09e5707b604c9f&amp;dest_id=-1165458&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1756987000&amp;srpvid=170253f99eaa0657&amp;type=total&amp;ucfs=1&amp;"
            id="https://www.booking.com/hotel/ro/casa-moldovan-coltisorul-meu-de-rai-ocna-sugatag1.en-gb.html?aid=318615&amp;label=New_English_EN_IE_20153704825-FYUwHK1Cx8hIZpAQIPOUJQS640874805295%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=0d037d2d888fb1d68f09e5707b604c9f&amp;dest_id=-1165458&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1756987000&amp;srpvid=170253f99eaa0657&amp;type=total&amp;ucfs=1&amp;"
            target="_blank"
            rel="noreferrer noopener"
            className="home-s-link thq-button-filled"
          >
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="home-s-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_V43iuc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .home-s-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-s-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .home-s-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-s-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-s-title {
            color: #ffffff;
            text-align: center;
          }
          .home-s-text1 {
            color: #fffefe;
            text-align: center;
          }
          .home-s-link {
            border-color: #fffdfd;
            text-decoration: none;
            background-color: #326f32;
          }
          .home-s-text3 {
            display: inline-block;
          }
          .home-s-text4 {
            display: inline-block;
          }
          .home-s-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

HomeS.defaultProps = {
  content1: undefined,
  rootClassName: '',
  action1: undefined,
  heading1: undefined,
}

HomeS.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default HomeS
