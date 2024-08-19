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

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col h-screen justify-between mt-16 xl:mt-0">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col flex-auto justify-center items-center xl:basis-1/2 gap-48">
            <div className="flex flex-col gap-8">
              <p className="text-2xl xl:text-3xl">SECURE YOUR FUTURE!</p>
              <div>
                <Heading>MPC</Heading>
                <Heading>Picks</Heading>
              </div>
            </div>
            <div className="flex flex-row gap-64">
              <a className="text-xl xl:text-2xl">VIEW PRODUCTS</a>
              <a className="text-xl xl:text-2xl">ORDER NOW</a>
            </div>
          </div>
          <ImageSection
            src="/delivery_icon_temp.png"
            alt="Delivery"
            className="collapse xl:visible h-screen flex-row-reverse basis-1/2"
          />
        </div>
      </div>
      <Screen>
        <MainSection className="gap-16 xl:gap-32">
          <ImageSection src="/climbs.png" alt="Climbs" />
          <Subsection>
            <Subheading>
              Protect What Matters Most with Our Insurance Plans
            </Subheading>
            <Info>
              At MPC Picks, we understand that life is unpredictable. That's why
              we offer a range of insurance plans tailored to meet your needs.
              From comprehensive coverage to essential protection, our plans
              provide you with peace of mind. Plus, when you purchase any
              insurance plan, you'll receive a free digital book to enrich your
              life further.
            </Info>
          </Subsection>
        </MainSection>
        <OrderButtonSection />
      </Screen>
      <Screen>
        <MainSection className="gap-16 xl:gap-32">
          <Subsection>
            <Subheading>Explore Our Free Digital Books</Subheading>
            <Info>
              When you purchase any of our insurance plans, you'll gain access
              to our exclusive library of digital books. These eBooks cover a
              range of topics, from personal finance to wellness, helping you
              live a richer, more informed life.
            </Info>
          </Subsection>
          <ImageSection src="/digital_books.png" alt="Digital Books" />
        </MainSection>
        <OrderButtonSection />
      </Screen>
      <Screen>
        <Subheading>Household and Health Essentials</Subheading>
        <MainSection className="gap-4">
          <ImageSection
            src="/fiber_health.png"
            alt="Fiber Health Food Supplement"
            className="basis-1/2"
          />
          <Info className="basis-1/2">
            Support your digestive health with our Fiber Health Food Supplement.
            Made from natural ingredients, it helps promote regularity and
            overall gut health, keeping you feeling light and energetic.
          </Info>
          <ImageSection
            src="/cleaning_powder.png"
            alt="Ultra-Clean Detergent
            Soap"
            className="basis-1/3"
          />
          <Info className="basis-1/2">
            Experience the power of deep cleaning with our Ultra-Clean Detergent
            Soap. Formulated to remove tough stains and leave your clothes
            smelling fresh, it's gentle on fabric yet tough on dirt.
          </Info>
        </MainSection>
        <OrderButtonSection />
      </Screen>
      <Footer />
    </main>
  );
}
