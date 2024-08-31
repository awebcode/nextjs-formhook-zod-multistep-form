import { MultiStepForm } from "@/components/multistep/MultiStepForm";
import TabComponent from "@/components/tabs/CustomTab";

export default function Home() {
  return (
    <>
      {/* <ServiceWorker /> */}
      <MultiStepForm />
      <TabComponent />
      {/* <Link href="/blogs">Blogs</Link>
      <Link href="/about">About</Link>
    <Input/> */}
    </>
  );
}
