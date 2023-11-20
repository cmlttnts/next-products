import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <div className="flex gap-4 flex-col w-4/5">
        <h1 className="text-6xl">İşinizi Güçlendirecek Videolar</h1>
        <h2 className="text-4xl text-violet-700">Artık İnteraktif</h2>
        <p>
          Acme ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın.
          Videolarınızı interaktif hale getirerek izleyicilerinizin
          videolarınızla etkileşimini arttırın. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque fugiat vitae tenetur delectus at
          ullam consectetur asperiores nesciunt pariatur ex nulla hic, maxime
          eius obcaecati rerum quos blanditiis repudiandae!
        </p>
        <Button className="bg-violet-700 w-max pl-5 pr-5">Hemen Deneyin</Button>
      </div>
      <Image
        src="/mobile-image.png"
        alt="Picture of the author"
        width={600}
        height={1200}
      />
    </div>
  );
}
