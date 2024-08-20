"use client";

import Screen from "./components/Screen";
import Subheading from "./components/Subheading";
import Heading from "./components/Heading";
import OrderButtonSection from "./components/OrderButtonSection";
import MainSection from "./components/MainSection";
import Info from "./components/Info";
import Subsection from "./components/Subsection";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";

export default function Home() {
  // const imageFolder = "https://ryuheiryan.github.io/mpc-picks-site/";
  const imageFolder = window.location.href;

  const [time, setTime] = useState<number>(7);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col h-dvh justify-between">
        <Header />
        <MainSection>
          <div className="flex flex-col flex-auto justify-center items-center xl:basis-2/3 gap-32">
            <div className="flex flex-col gap-8">
              <p className="font-sans text-2xl xl:text-3xl text-center">
                SECURE YOUR FUTURE!
              </p>
              <div>
                <Heading>MPC</Heading>
                <Heading>Picks</Heading>
              </div>
            </div>
            <div className="flex flex-row gap-16 md:gap-32 xl:gap-64">
              <a className="font-sans text-xl xl:text-2xl">VIEW PRODUCTS</a>
              <a className="font-sans text-xl xl:text-2xl underline">
                ORDER NOW!
              </a>
            </div>
          </div>
          <ImageSection
            src={`${imageFolder}/delivery_icon.webp`}
            alt="Delivery"
            className="hidden 2xl:flex basis-1/3"
          />
        </MainSection>
        <Footer />
      </div>
      <Screen>
        <MainSection className="gap-16">
          <ImageSection
            src={`${imageFolder}/climbs.png`}
            alt="Climbs"
            className="basis-1/4"
          />
          <Subsection className="basis-3/4">
            <Subheading>
              Protect What Matters Most with Our Insurance Plans
            </Subheading>
            <Info>
              At MPC Picks, we understand that life is unpredictable.
              That&apos;s why we offer a range of insurance plans tailored to
              meet your needs. From comprehensive coverage to essential
              protection, our plans provide you with peace of mind. Plus, when
              you purchase any insurance plan, you&apos;ll receive a free
              digital book to enrich your life further.
            </Info>
          </Subsection>
        </MainSection>
        <OrderButtonSection />
      </Screen>
      <Screen>
        <MainSection className="gap-16">
          <Subsection className="basis-3/4">
            <Timer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
            <Subheading>Explore Our Free Digital Books</Subheading>
            <Info>
              When you purchase any of our insurance plans, you&apos;ll gain
              access to our exclusive library of digital books. These eBooks
              cover a range of topics, from personal finance to wellness,
              helping you live a richer, more informed life.
            </Info>
          </Subsection>
          <ImageSection
            src={`${imageFolder}/digital_books.png`}
            alt="Digital Books"
            className="basis-1/4"
          />
        </MainSection>
        <OrderButtonSection />
      </Screen>
      <Screen>
        <MainSection>
          <Subheading>Household and Health Essentials</Subheading>
        </MainSection>
        <MainSection className="gap-4">
          <ImageSection
            src={`${imageFolder}/fiber_health.png`}
            alt="Fiber Health Food Supplement"
            className="basis-1/4"
          />
          <Info className="basis-1/4">
            Support your digestive health with our Fiber Health Food Supplement.
            Made from natural ingredients, it helps promote regularity and
            overall gut health, keeping you feeling light and energetic.
          </Info>
          <ImageSection
            src={`${imageFolder}/cleaning_powder.png`}
            alt="Ultra-Clean Detergent
            Soap"
            className="basis-1/4"
          />
          <Info className="basis-1/4">
            Experience the power of deep cleaning with our Ultra-Clean Detergent
            Soap. Formulated to remove tough stains and leave your clothes
            smelling fresh, it&apos;s gentle on fabric yet tough on dirt.
          </Info>
        </MainSection>
        <OrderButtonSection />
      </Screen>
    </main>
  );
}
