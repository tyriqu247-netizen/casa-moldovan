import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header1 from '../components/header1'
import HomeS from '../components/home-s'
import HomeG from '../components/home-g'
import About from '../components/about'
import Review from '../components/review'
import Services from '../components/services'
import Facilities from '../components/facilities'
import Awards from '../components/awards'
import Accommodation from '../components/accommodation'
import Reviews from '../components/reviews'
import Booking from '../components/booking'
import Location from '../components/location'
import AppComponent from '../components/component'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Casa Moldovan</title>
          <meta property="og:title" content="Casa Moldovan" />
        </Head>
        <Header1
          link2={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z7QHrF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p9u_g5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ysq9DO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Tpuji3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j4Ws21'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3Url="#Accommodation"
          link4Url="#Location"
          link5Url="#Contact"
          locale={props?.locale ?? ''}
        ></Header1>
        <HomeS
          action1={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D819cJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bF-28x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KUnwMZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></HomeS>
        <HomeG
          content1={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ry6KKw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KFkw9q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></HomeG>
        <About
          about="about"
          aboutId="About"
          feature1Title={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T7TWUH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          aboutSectionId="About section"
          aboutSectionId1="Aboout"
          feature1ImageSrc="About section"
          feature1Description={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UYF7dw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></About>
        <Review
          content1={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8XJjlf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rTr-tK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YkLdkH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sofz6C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name1={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GJ3T3z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Review>
        <Services
          plan1={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hn6grB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HFh2GQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Xj5VwG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Detail={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_od5g5j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7GyjIj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lDxBoo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GVlY_5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature4={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__3vkx4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature5={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BfrX7I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature6={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AWEve6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature7={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-OHJ42'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature8={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9VH7gl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature9={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_84zw3g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Includes={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t_fehD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature10={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5Lk1c-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Services>
        <Facilities
          heading1={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NmdrN-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Facilities>
        <Awards
          plan1={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h1B2tV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CuwWTC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JNsBGK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DVKMBw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y3HNMn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDv-CK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5scu9c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qT_zJk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7BuQzn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P-wq0q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qYsQ9e'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5iRwS9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lHRO5n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w6gP1D'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_owszQi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_f3BXdY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PmB1vH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iHbk23'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7btNLr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yMWj5N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pznINu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lGYlLR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sb87oI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7x4S-S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hRMrDz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eXRcA4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Psv-gF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LtxCyj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3MgUFr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8NJBpE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6JoGsT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDGT3_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4PfNID'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gJeDXw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Awards>
        <Accommodation
          heading1={
            <Fragment>
              <span className="home-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OPz_Gb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="accommodationroot-class-name"
          accommodationId="Accommodation"
          accommodationSection1Id="Accommodation"
          locale={props?.locale ?? ''}
        ></Accommodation>
        <Reviews
          review1={
            <Fragment>
              <span className="home-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rQ6pZ_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mhhoD8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-BJiI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KOjCFx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6q_xmB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o2k4af'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N4sG0_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cCGnXj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text86">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s3KEis'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-gOKc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Reviews>
        <Booking
          plan1={
            <Fragment>
              <span className="home-text88">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ekb3Mj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text89">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ODlVFp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Booking>
        <Location
          content1={
            <Fragment>
              <span className="home-text90">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_77bnTa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text91">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1LKVlw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text92">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VpjHEK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text93">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2zaWnU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locationSectionId="Location"
          locale={props?.locale ?? ''}
        ></Location>
        <AppComponent locale={props?.locale ?? ''}></AppComponent>
        <Contact
          email={
            <Fragment>
              <span className="home-text94">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UUY1_m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="home-text95">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t-8Z3y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="home-text96">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o28sWC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="home-text97">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gw_eXY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text98">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HpA-W9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text99">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A6qsg_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          contactSectionId="Contact"
          locale={props?.locale ?? ''}
        ></Contact>
        <Footer
          text1={
            <Fragment>
              <span className="home-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8FeB6X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-R2hOq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J4jGnF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vzy-Cz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zpc8xj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl1="/"
          textUrl2="#About"
          textUrl3="#Accommodation"
          textUrl4="#Location"
          textUrl5="#Contact"
          rootClassName="footerroot-class-name"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
          .home-text88 {
            display: inline-block;
          }
          .home-text89 {
            display: inline-block;
          }
          .home-text90 {
            display: inline-block;
          }
          .home-text91 {
            display: inline-block;
          }
          .home-text92 {
            display: inline-block;
          }
          .home-text93 {
            display: inline-block;
          }
          .home-text94 {
            display: inline-block;
          }
          .home-text95 {
            display: inline-block;
          }
          .home-text96 {
            display: inline-block;
          }
          .home-text97 {
            display: inline-block;
          }
          .home-text98 {
            display: inline-block;
          }
          .home-text99 {
            display: inline-block;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

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
