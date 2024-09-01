import { MultiStepForm } from "@/components/multistep/MultiStepForm";
import TabComponent from "@/components/tabs/CustomTab";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <ServiceWorker /> */}
      <MultiStepForm />
      <TabComponent />
     
    </>
  );
}
