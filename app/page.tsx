import { MultiStepForm } from "@/components/multistep/MultiStepForm";
import TabComponent from "@/components/tabs/CustomTab";
import Link from "next/link";
import GoogleLoginPromp from "./(auth)/_components/GoogleLoginPromp";
import AmazonCategories from "./_components/AmazonCategories";
import MarkDown from "./_components/TiptapEditor";

export default function Home() {
  return (
    <>
      {/* <ServiceWorker /> */}
      {/* <GoogleLoginPromp /> */}
      <MarkDown />
      <AmazonCategories />
      <MultiStepForm />
      <TabComponent />


    </>
  );
}
