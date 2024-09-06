import { MultiStepForm } from "@/components/multistep/MultiStepForm";
import TabComponent from "@/components/tabs/CustomTab";
import Link from "next/link";
import GoogleLoginPromp from "./(auth)/_components/GoogleLoginPromp";
import AmazonCategories from "./_components/AmazonCategories";

export default function Home() {
  return (
    <>
      {/* <ServiceWorker /> */}
      {/* <GoogleLoginPromp /> */}
      <AmazonCategories />
      <MultiStepForm />
      <TabComponent />


    </>
  );
}
