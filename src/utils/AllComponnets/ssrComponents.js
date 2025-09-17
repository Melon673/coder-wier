// SSR-safe component imports
import AboutBanner from "@/Components/about-us/AboutBanner/AboutBanner";
import CEOSays from "@/Components/about-us/CEOSays/CEOSays";
import MarqueeClients from "@/Components/about-us/CoderWireByNumbers/CoderWireByNumbers";
import CultureValues from "@/Components/about-us/culture&values/culture&values";
import Journey from "@/Components/about-us/Journey/ourJourney";
import PricingModal from "@/Components/about-us/PricingModal/pricingModal";
import Solution from "@/Components/about-us/SolutionWeOffer/solutionWeOffer";
import WhomWeServe from "@/Components/about-us/WhomWeService/whomWeServe";
import AboutAuthor from "@/Components/author/AboutAuthor/AboutAuthor";
import AuthorBanner from "@/Components/author/Banner/AuthorBanner";
import BankingKeyAdv from "@/Components/banking/BankingKeyAdvantages/BankingKeyAdv";
import CustomBanking from "@/Components/banking/CustomeBankingSoftware/CustomBanking";
import IntrestedService from "@/Components/banking/IndustriesService/Intrested";
import SoftDevProcess from "@/Components/banking/SoftDevProcess/SoftDevProcess";
import SolutionProvide from "@/Components/banking/SolutionWeProvide/SolutionProvide";
import BenefitsDev from "@/Components/Benefits/BenefitDev";
import Allarticles from "@/Components/Blogs&articles/Articles/Allarticles";
import ContactForm from "@/Components/Contact-us/contactUsForm/form";
import Discuss from "@/Components/Contact-us/Discuss/discusion";
import HiringProcess from "@/Components/DotNet/HiringProcess/hiringProcess";
import FindExpert from "@/Components/Hiring/FindExpert/FindExperts";
import HiringTime from "@/Components/Hiring/HiringTime/HiringTime";
import HowWeHireDeveloper from "@/Components/Hiring/HowWeHireDeveloper/howWeHireDeveloper";
import TailorSolution from "@/Components/Hiring/TailerSolution/TailorSolution";
import TopTalent from "@/Components/Hiring/TopTalent/TopTalent";
import aboutHome from "@/Components/home/aboutHome/aboutHome";
import ClientHome from "@/Components/home/clientHome/clientHome";
import EngagementHome from "@/Components/home/engagement/engagementHome";
import FAQHome from "@/Components/home/FAQ/FAQ";
import HomeTeam from "@/Components/home/HomeTeam/HomeTeam";
import Newsletter from "@/Components/home/newsletter/newsletter";
import ReviewHome from "@/Components/home/reviewHome/reviewHome";
import AnimatedHeroSection from "@/Components/NewComponents/AnimatedHeroSection/AnimatedHeroSection";
import ChooseUs from "@/Components/NewComponents/ChooseUs/ChooseUs";
import DevLifeCycle from "@/Components/NewComponents/DevLifeCycle/DevLifeCycle";
import EmergingInnovation from "@/Components/NewComponents/emergingInnovation/emergingInnovation";
import EmpoweringBusiness from "@/Components/NewComponents/EmpoweringBusiness/EmpowerBusiness";
import HeroWelcomeSection from "@/Components/NewComponents/HeroWelcomeSection/HeroWelcomeSection";
import HireDevOpsDeveloper from "@/Components/NewComponents/HireDevOpsDeveloper/HireDevOpsDeveloper";
import BroadIndustry from "@/Components/NewComponents/HiringTopDevelopers/BroadIndustry";
import HiringTopDevelopers from "@/Components/NewComponents/HiringTopDevelopers/HiringTopDevelopers";
import IndustriesWeWorkWith from "@/Components/NewComponents/industriesWeWorkWith/industriesWeWorkWith";
import OurOutSourceBlackish from "@/Components/NewComponents/OutsourceServiceOverview/OurOutSourceBlackish";
import OutsourceServiceOverview from "@/Components/NewComponents/OutsourceServiceOverview/OutsourceServiceOverview";
import ExpertQAServicesTestingHover from "@/Components/NewComponents/QATesting/ExpertQAServicesTestingHover";
import ExpertQAServicesTestingSimple from "@/Components/NewComponents/QATesting/ExpertQAServicesTestingSimple";
import CoreServiceOverview from "@/Components/NewComponents/service/CoreServiceOverview";
import SolutionsWeDeliver from "@/Components/NewComponents/SoftwareSolutionDeliver/SolutionsWeDeliver";
import TechLibraries from "@/Components/NewComponents/Technologies/TechLibraries";
import YourVision from "@/Components/NewComponents/YourVision/YourVision";
import MeetDevelopers from "@/Components/Services/MeetOurDevelopers/MeetDevelopers";
import RecentWork from "@/Components/Services/OurRecentWork/RecentWorkSlider";
import WhoWeWork from "@/Components/Services/WhoWeWork/WhoWeWork";
import ServicesBanner from "@/Components/software-development-service/bennerServices/servicesBanner";
import SoftwareDevelopmentContact from "@/Components/software-development-service/softwareDevelopmentContact/softwareDevelopmentContact";
import TechWeWorkWith from "@/Components/software-development-service/tecnologies/tecnologies";
import ServeHiring from "./WhomWeServeHiring/ServeHiring";
import AboutCoderWire from "@/Components/about-us/AboutCoderWire/AboutCoderWire";
import Testimonials from "@/Components/NewComponents/hometestamonials/Testimonials";

export const SSR_COMPONENTS = {
    "Service-Banner": ServicesBanner,
    "ExpertQAServicesTestingHover": SolutionsWeDeliver,
    "Core-Service": WhomWeServe,
    "Hiring-Process": HiringProcess,
    "Skilled-Experienced-Development": ExpertQAServicesTestingHover,
    "SolutionsWeDeliver": SolutionsWeDeliver,
    "SoftwareCapabilities": OurOutSourceBlackish,
    "YourVision": YourVision,
    "FlexibleModal": WhomWeServe,
    "hire_dedicated_developers": WhomWeServe,
    "HireDevOpsDeveloper": HireDevOpsDeveloper,
    "HireDevOpsDeveloperLight": HireDevOpsDeveloper,
    "WhomWeServe": ServeHiring,
    "ChooseUs": ChooseUs,
    "Map-Loactions": Journey,
    "ChooseUsLight": ChooseUs,
    "FAQ": FAQHome,
    "EmpoweringBusiness": EmpoweringBusiness,
    "EmpoweringBusinessLight": EmpoweringBusiness,
    "OutsourceServiceOverview-1": OutsourceServiceOverview,
    "OutsourceServiceOverview-2": OurOutSourceBlackish,
    "DevLifeCycleThree": DevLifeCycle,
    "DevLifeCycle": DevLifeCycle,
    "DevLifeCycleThreeLight": DevLifeCycle,
    "DevLifeCycleLight": DevLifeCycle,
    "BankingKeyAdv": BankingKeyAdv,
    // "Map-Loactions": OurLocation,
    "Testimonials-2": Testimonials,
    "OurTrustedPatners": MarqueeClients,
    "Banking-Key-Advantages": BankingKeyAdv,
    "EngagementHome": EngagementHome,
    "ContactUs": YourVision,
    "Tailor Solution": TailorSolution,
    "enterprise-resource-planning": BenefitsDev,
    "EmergingInnovation": EmergingInnovation,
    "TechWeWorkWith": TechWeWorkWith,
    "IndustriesWeWorkWith": IndustriesWeWorkWith,
    "Intrested-Services": IntrestedService,
    "SoftwareDevelopmentContact": SoftwareDevelopmentContact,
    "HomeTeam": HomeTeam,
    "Newsletter": Newsletter,
    "Review Site Rating": ReviewHome,
    "Meet-Developers": MeetDevelopers,
    "TailorSolution": TailorSolution,
    "Who-we-work-with": WhoWeWork,
    "RecentWork": RecentWork,
    "HeroWelcomeSection": HeroWelcomeSection,
    "ClientHome": ClientHome,
    "ExpertQAServicesTestingSimple": ExpertQAServicesTestingSimple,
    "DevLifeCycle - 1": CoreServiceOverview,
    "TechLibraries": TechLibraries,
    "BroadIndustry": BroadIndustry,
    "HiringTopDevelopers": HiringTopDevelopers,
    "AboutHome": aboutHome,
    "DevServicesInquiryBanner": ServicesBanner,
    "SoftDevProcess": SoftDevProcess,
    "Hiring-Time": HiringTime,
    "TopTalent": TopTalent,
    "HowWeHireDeveloper": HowWeHireDeveloper,
    "Find-Expert": FindExpert,
    "casestudy_technologies": FindExpert,
    "CEOSays": CEOSays,
    "Custom-Banking-Card": CustomBanking,
    "ReviewHome": ReviewHome,
    "Banner": AboutBanner,
    "Our-Journey": Journey,
    "Our-Culture-Values": CultureValues,
    "Solution-We-Offer": Solution,
    "Our-Pricning-Modal": PricingModal,
    "AuthorBlog": AboutAuthor,
    "AboutUs": AboutCoderWire,

    "Hiring-Banner": ServicesBanner,
    "All-Articles": Allarticles,
    "Client-Home": ClientHome,
    "Solution-Provide": SolutionProvide,
    "Banking-info": SolutionsWeDeliver,
    "Discussion": Discuss,
    "AuthorBanner": AuthorBanner,
    "AnimatedHeroSection": AnimatedHeroSection,
    "ContactForm": ContactForm,
    "OurTrustedPatners": MarqueeClients,

};
