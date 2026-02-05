import Link from "next/link";
import { Button } from "@/components/ui/warcraftcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/warcraftcn/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-4 pt-10">
      <Card>
        <CardHeader className="text-white">
          <CardTitle className="text-center font-bold text-2xl">
            warcraftcn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white">
            A set of components inspired by classic Warcraft III RTS UI
            aesthetics. Open source, copy paste ready. Works with your favorite
            frameworks. Fan made. No affiliation.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Link href="/docs">
            <Button className="text-xl" size="sm">
              Get Started
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
