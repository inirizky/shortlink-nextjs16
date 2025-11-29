import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <Button variant={'default'} >KLIK AKU</Button>
      <Button variant={'destructive'} >KLIK AKU</Button>
      <Button variant={'ghost'} >KLIK AKU</Button>
      <Button variant={'link'} >KLIK AKU</Button>
      <Button variant={'outline'} >KLIK AKU</Button>
      <Button variant={'secondary'} >KLIK AKU</Button>

    </div>
  );
}
