import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header11 from '../components/header11'
import HomeS1 from '../components/home-s1'
import HomeG1 from '../components/home-g1'
import About1 from '../components/about1'
import Review1 from '../components/review1'
import Services1 from '../components/services1'
import Facilities1 from '../components/facilities1'
import Awards1 from '../components/awards1'
import Accommodation1 from '../components/accommodation1'
import Reviews1 from '../components/reviews1'
import Booking1 from '../components/booking1'
import Location1 from '../components/location1'
import AppComponent from '../components/component'
import Contact1 from '../components/contact1'
import Footer1 from '../components/footer1'

const Acasa = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="acasa-container">
        <Head>
          <title>Acasa - Casa Moldovan</title>
          <meta property="og:title" content="Acasa - Casa Moldovan" />
        </Head>
        <Header11
          link1={
            <Fragment>
              <span className="acasa-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a0Bk4n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="acasa-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ICBPGO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="acasa-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_24Fb-M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="acasa-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q0IpqX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="acasa-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EnAwwA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="acasa-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3Y_RIQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2Url="#About1"
          link3Url="#Accommodation1"
          link4Url="#Location1"
          link5Url="#Contact1"
          locale={props?.locale ?? ''}
        ></Header11>
        <HomeS1
          action1={
            <Fragment>
              <span className="acasa-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mRkdUU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2daqMg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FyNA-a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="home-s1root-class-name"
          locale={props?.locale ?? ''}
        ></HomeS1>
        <HomeG1
          content1={
            <Fragment>
              <span className="acasa-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rUFFWg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z1jeZl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="home-g1root-class-name"
          locale={props?.locale ?? ''}
        ></HomeG1>
        <About1
          about1Id="About1"
          feature1Title={
            <Fragment>
              <span className="acasa-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tRLSQh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="about1root-class-name"
          aboutSection1Id="About1"
          feature1Description={
            <Fragment>
              <span className="acasa-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PHvNib'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></About1>
        <Review1
          content1={
            <Fragment>
              <span className="acasa-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XhGznl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ULPfHu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="acasa-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0UIqOu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="acasa-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q2qHFw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name1={
            <Fragment>
              <span className="acasa-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nXOtsi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="review1root-class-name"
          locale={props?.locale ?? ''}
        ></Review1>
        <Services1
          plan1={
            <Fragment>
              <span className="acasa-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b8yQIz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_crC4g7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dlgKVy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Detail={
            <Fragment>
              <span className="acasa-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__y5Las'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="acasa-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u7NQgF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="acasa-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JtpI6-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="acasa-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_779Q2U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature4={
            <Fragment>
              <span className="acasa-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2CuNLh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature5={
            <Fragment>
              <span className="acasa-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__6TvJR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature6={
            <Fragment>
              <span className="acasa-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UuNF09'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature7={
            <Fragment>
              <span className="acasa-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9wcJoU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature8={
            <Fragment>
              <span className="acasa-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NZQkdx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature9={
            <Fragment>
              <span className="acasa-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NZkf9I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Includes={
            <Fragment>
              <span className="acasa-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eM6vzU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="services1root-class-name"
          plan1Feature10={
            <Fragment>
              <span className="acasa-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ktmhgw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Services1>
        <Facilities1
          heading1={
            <Fragment>
              <span className="acasa-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xG52Vt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="facilities1root-class-name"
          locale={props?.locale ?? ''}
        ></Facilities1>
        <Awards1
          plan1={
            <Fragment>
              <span className="acasa-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WTSnvh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="acasa-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NAxX_7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="acasa-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ne0dhK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nRj358'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i6ysMt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="acasa-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ICpQmX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="acasa-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M_R_xH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="acasa-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OC2xx1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="acasa-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_27qGPa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="acasa-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vjtHxi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="acasa-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pQcNIf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="acasa-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AXxjoo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="acasa-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8qUNC-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="acasa-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0zfTBX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="acasa-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cuRBsO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="acasa-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NRYU3V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="acasa-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ok8xHU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="acasa-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q3KjT6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="acasa-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5BuuLW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="acasa-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yMwYzK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="acasa-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j5p1lB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="acasa-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KK4IDj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="acasa-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cf8004'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="acasa-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ms9Pz6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="acasa-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UWX4f0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="acasa-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T00sU8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="acasa-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__FZFc5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="acasa-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8mDxJS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="acasa-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kxs8A6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="acasa-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SVo5x_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="acasa-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_taPuCT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="awards1root-class-name"
          plan1Feature11={
            <Fragment>
              <span className="acasa-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4QOW1v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="acasa-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xna3gK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="acasa-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R-yD5C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Awards1>
        <Accommodation1
          heading1={
            <Fragment>
              <span className="acasa-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bczuea'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="accommodation1root-class-name"
          accommodationSection1Id="Accommodation1"
          locale={props?.locale ?? ''}
        ></Accommodation1>
        <Reviews1
          review1={
            <Fragment>
              <span className="acasa-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WUEM9K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="acasa-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LhmdU1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="acasa-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CPnQtM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="acasa-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lhYk9I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B9YUg5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A9ZiZm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="acasa-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Mkv_Ak'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="acasa-text86">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Wp_629'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="acasa-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c0hmLZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="acasa-text88">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_49W7qp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="reviews1root-class-name"
          locale={props?.locale ?? ''}
        ></Reviews1>
        <Booking1
          plan1={
            <Fragment>
              <span className="acasa-text89">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rE_vYs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="acasa-text90">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NNEs96'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="booking1root-class-name"
          locale={props?.locale ?? ''}
        ></Booking1>
        <Location1
          content1={
            <Fragment>
              <span className="acasa-text91">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5xzuOy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text92">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_m-_ueJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="acasa-text93">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JOXYr3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text94">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uS98DK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="location1root-class-name"
          locationSection1Id="Location1"
          locale={props?.locale ?? ''}
        ></Location1>
        <AppComponent
          rootClassName="app-componentroot-class-name"
          locale={props?.locale ?? ''}
        ></AppComponent>
        <Contact1
          email={
            <Fragment>
              <span className="acasa-text95">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kLnZo8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="acasa-text96">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o1GdDn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="acasa-text97">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K-a-K6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="acasa-text98">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JYbSH8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text99">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ayy7ck'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lYMCOR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="contact1root-class-name"
          contactSection1Id="Contact1"
          locale={props?.locale ?? ''}
        ></Contact1>
        <Footer1
          text1={
            <Fragment>
              <span className="acasa-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5snMBJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="acasa-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HwR0I9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="acasa-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9lUgSl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="acasa-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jVuyx8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="acasa-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gfS582'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl1="/acasa"
          textUrl2="#About1"
          textUrl3="#Accommodation1"
          textUrl4="#Location1"
          textUrl5="#Contact1"
          rootClassName="footer1root-class-name"
          locale={props?.locale ?? ''}
        ></Footer1>
      </div>
      <style jsx>
        {`
          .acasa-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .acasa-text10 {
            display: inline-block;
          }
          .acasa-text11 {
            display: inline-block;
          }
          .acasa-text12 {
            display: inline-block;
          }
          .acasa-text13 {
            display: inline-block;
          }
          .acasa-text14 {
            display: inline-block;
          }
          .acasa-text15 {
            display: inline-block;
          }
          .acasa-text16 {
            display: inline-block;
          }
          .acasa-text17 {
            display: inline-block;
          }
          .acasa-text18 {
            display: inline-block;
          }
          .acasa-text19 {
            display: inline-block;
          }
          .acasa-text20 {
            display: inline-block;
          }
          .acasa-text21 {
            display: inline-block;
          }
          .acasa-text22 {
            display: inline-block;
          }
          .acasa-text23 {
            display: inline-block;
          }
          .acasa-text24 {
            display: inline-block;
          }
          .acasa-text25 {
            display: inline-block;
          }
          .acasa-text26 {
            display: inline-block;
          }
          .acasa-text27 {
            display: inline-block;
          }
          .acasa-text28 {
            display: inline-block;
          }
          .acasa-text29 {
            display: inline-block;
          }
          .acasa-text30 {
            display: inline-block;
          }
          .acasa-text31 {
            display: inline-block;
          }
          .acasa-text32 {
            display: inline-block;
          }
          .acasa-text33 {
            display: inline-block;
          }
          .acasa-text34 {
            display: inline-block;
          }
          .acasa-text35 {
            display: inline-block;
          }
          .acasa-text36 {
            display: inline-block;
          }
          .acasa-text37 {
            display: inline-block;
          }
          .acasa-text38 {
            display: inline-block;
          }
          .acasa-text39 {
            display: inline-block;
          }
          .acasa-text40 {
            display: inline-block;
          }
          .acasa-text41 {
            display: inline-block;
          }
          .acasa-text42 {
            display: inline-block;
          }
          .acasa-text43 {
            display: inline-block;
          }
          .acasa-text44 {
            display: inline-block;
          }
          .acasa-text45 {
            display: inline-block;
          }
          .acasa-text46 {
            display: inline-block;
          }
          .acasa-text47 {
            display: inline-block;
          }
          .acasa-text48 {
            display: inline-block;
          }
          .acasa-text49 {
            display: inline-block;
          }
          .acasa-text50 {
            display: inline-block;
          }
          .acasa-text51 {
            display: inline-block;
          }
          .acasa-text52 {
            display: inline-block;
          }
          .acasa-text53 {
            display: inline-block;
          }
          .acasa-text54 {
            display: inline-block;
          }
          .acasa-text55 {
            display: inline-block;
          }
          .acasa-text56 {
            display: inline-block;
          }
          .acasa-text57 {
            display: inline-block;
          }
          .acasa-text58 {
            display: inline-block;
          }
          .acasa-text59 {
            display: inline-block;
          }
          .acasa-text60 {
            display: inline-block;
          }
          .acasa-text61 {
            display: inline-block;
          }
          .acasa-text62 {
            display: inline-block;
          }
          .acasa-text63 {
            display: inline-block;
          }
          .acasa-text64 {
            display: inline-block;
          }
          .acasa-text65 {
            display: inline-block;
          }
          .acasa-text66 {
            display: inline-block;
          }
          .acasa-text67 {
            display: inline-block;
          }
          .acasa-text68 {
            display: inline-block;
          }
          .acasa-text69 {
            display: inline-block;
          }
          .acasa-text70 {
            display: inline-block;
          }
          .acasa-text71 {
            display: inline-block;
          }
          .acasa-text72 {
            display: inline-block;
          }
          .acasa-text73 {
            display: inline-block;
          }
          .acasa-text74 {
            display: inline-block;
          }
          .acasa-text75 {
            display: inline-block;
          }
          .acasa-text76 {
            display: inline-block;
          }
          .acasa-text77 {
            display: inline-block;
          }
          .acasa-text78 {
            display: inline-block;
          }
          .acasa-text79 {
            display: inline-block;
          }
          .acasa-text80 {
            display: inline-block;
          }
          .acasa-text81 {
            display: inline-block;
          }
          .acasa-text82 {
            display: inline-block;
          }
          .acasa-text83 {
            display: inline-block;
          }
          .acasa-text84 {
            display: inline-block;
          }
          .acasa-text85 {
            display: inline-block;
          }
          .acasa-text86 {
            display: inline-block;
          }
          .acasa-text87 {
            display: inline-block;
          }
          .acasa-text88 {
            display: inline-block;
          }
          .acasa-text89 {
            display: inline-block;
          }
          .acasa-text90 {
            display: inline-block;
          }
          .acasa-text91 {
            display: inline-block;
          }
          .acasa-text92 {
            display: inline-block;
          }
          .acasa-text93 {
            display: inline-block;
          }
          .acasa-text94 {
            display: inline-block;
          }
          .acasa-text95 {
            display: inline-block;
          }
          .acasa-text96 {
            display: inline-block;
          }
          .acasa-text97 {
            display: inline-block;
          }
          .acasa-text98 {
            display: inline-block;
          }
          .acasa-text99 {
            display: inline-block;
          }
          .acasa-text100 {
            display: inline-block;
          }
          .acasa-text101 {
            display: inline-block;
          }
          .acasa-text102 {
            display: inline-block;
          }
          .acasa-text103 {
            display: inline-block;
          }
          .acasa-text104 {
            display: inline-block;
          }
          .acasa-text105 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Acasa

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
