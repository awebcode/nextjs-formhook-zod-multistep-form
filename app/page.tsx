import Input from "@/components/Input";
import { MultiStepForm } from "@/components/multistep/MultiStepForm";
import ServiceWorker from "@/components/worker/ServiceWorker";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <ServiceWorker /> */}
      <MultiStepForm/>
      <Link href="/blogs">Blogs</Link>
      <Link href="/about">About</Link>
    <Input/>
    </>
  );
}
