import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Header1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <header className="header1-container">
        <header data-thq="thq-navbar" className="header1-navbar-interactive">
          <img
            alt="/untitled%20design1-200h.png"
            src="/untitled%20design1-200h.png"
            className="header1-image1"
          />
          <div data-thq="thq-navbar-nav" className="header1-desktop-menu">
            <nav className="header1-links1">
              <a
                href="#About"
                className="header1-link21 thq-body-small thq-link"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="header1-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_LQthu8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-body-small thq-link">
                {props.link3 ?? (
                  <Fragment>
                    <span className="header1-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vWsIPK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-body-small thq-link">
                {props.link4 ?? (
                  <Fragment>
                    <span className="header1-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jJ0i4T'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-body-small thq-link">
                {props.link5 ?? (
                  <Fragment>
                    <span className="header1-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FtSows'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className="header1-buttons1">
              <Link href="/acasa">
                <a className="header1-link thq-button-animated thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="header1-text5">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9y4HNL'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header1-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header1-mobile-menu">
            <div className="header1-nav">
              <div className="header1-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="header1-logo"
                />
                <div data-thq="thq-close-menu" className="header1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header1-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="header1-links2">
                <a href={props.link2Url} className="thq-body-small thq-link">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="header1-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_LQthu8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="thq-body-small thq-link">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="header1-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vWsIPK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url} className="thq-body-small thq-link">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="header1-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jJ0i4T'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link5Url} className="thq-body-small thq-link">
                  {props.link5 ?? (
                    <Fragment>
                      <span className="header1-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_FtSows'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
            <div className="header1-buttons2">
              <button>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('action1_p_ziQ-'),
                  }}
                ></span>
              </button>
              <button>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('action2_przfc_'),
                  }}
                ></span>
              </button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header1-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .header1-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
            background-color: #ffffff;
          }
          .header1-image1 {
            width: 178px;
            height: 79px;
          }
          .header1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .header1-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .header1-link21 {
            text-decoration: none;
          }
          .header1-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .header1-link {
            display: flex;
            border-color: #326f32;
            flex-direction: row;
            text-decoration: none;
            background-color: #326f32;
          }
          .header1-burger-menu {
            display: none;
          }
          .header1-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .header1-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header1-logo {
            height: 3rem;
          }
          .header1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header1-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header1-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .header1-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          .header1-text2 {
            display: inline-block;
          }
          .header1-text3 {
            display: inline-block;
          }
          .header1-text4 {
            display: inline-block;
          }
          .header1-text5 {
            display: inline-block;
          }
          .header1-text6 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .header1-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .header1-desktop-menu {
              display: none;
            }
            .header1-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header1-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .header1-image1 {
              width: var(--dl-layout-size-medium);
              height: var(--dl-layout-size-small);
            }
            .header1-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  link3Url: 'https://www.teleporthq.io',
  link3: undefined,
  link4Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: undefined,
  logoAlt: 'Your Company Name',
  link2: undefined,
  action1: undefined,
  link5Url: 'https://www.teleporthq.io',
  link2Url: 'https://www.teleporthq.io',
  link5: undefined,
}

Header1.propTypes = {
  link3Url: PropTypes.string,
  link3: PropTypes.element,
  link4Url: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  link2: PropTypes.element,
  action1: PropTypes.element,
  link5Url: PropTypes.string,
  link2Url: PropTypes.string,
  link5: PropTypes.element,
}

export default Header1
